const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'store_data.json');

// Ensure store_data.json exists
function getStoreData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    }
  } catch (err) {
    console.error('Error reading store_data.json:', err);
  }
  return { prices: {}, customProducts: [], offers: [] };
}

function saveStoreData(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error writing store_data.json:', err);
    return false;
  }
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2'
};

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 50 * 1024 * 1024) { // 50MB limit for camera photo uploads
        req.destroy();
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        resolve({});
      }
    });
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  // CORS & Preflight
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = req.url.split('?')[0];

  // ==========================================
  // BACKEND REST API (Persistent Database Sync)
  // ==========================================
  if (parsedUrl === '/api/data' && req.method === 'GET') {
    const data = getStoreData();
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    });
    res.end(JSON.stringify(data));
    return;
  }

  if (parsedUrl === '/api/prices' && req.method === 'POST') {
    try {
      const payload = await readBody(req);
      const data = getStoreData();
      if (payload.prices) {
        data.prices = { ...data.prices, ...payload.prices };
      }
      saveStoreData(data);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, count: Object.keys(data.prices).length }));
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: e.message }));
    }
    return;
  }

  if (parsedUrl === '/api/prices/reset' && req.method === 'POST') {
    const data = getStoreData();
    data.prices = {};
    saveStoreData(data);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true }));
    return;
  }

  if (parsedUrl === '/api/products' && req.method === 'POST') {
    try {
      const payload = await readBody(req);
      const data = getStoreData();
      if (payload.product) {
        // Remove existing with same ID if update
        data.customProducts = (data.customProducts || []).filter(p => p.id !== payload.product.id);
        data.customProducts.unshift(payload.product);
      } else if (payload.products) {
        data.customProducts = payload.products;
      }
      saveStoreData(data);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, customCount: data.customProducts.length }));
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: e.message }));
    }
    return;
  }

  if (parsedUrl === '/api/products/delete' && req.method === 'POST') {
    try {
      const payload = await readBody(req);
      const data = getStoreData();
      if (payload.id) {
        data.customProducts = (data.customProducts || []).filter(p => p.id !== payload.id);
        delete data.prices[payload.id];
        saveStoreData(data);
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true }));
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: e.message }));
    }
    return;
  }

  if (parsedUrl === '/api/offers' && req.method === 'POST') {
    try {
      const payload = await readBody(req);
      const data = getStoreData();
      if (payload.offers) {
        data.offers = payload.offers;
        saveStoreData(data);
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true }));
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: e.message }));
    }
    return;
  }

  // ==========================================
  // STATIC FILE SERVING WITH CACHE & GZIP OPTIMIZATION
  // ==========================================
  let reqUrl = parsedUrl;
  if (reqUrl === '/' || reqUrl === '') reqUrl = '/index.html';

  let filePath = path.join(__dirname, decodeURIComponent(reqUrl));

  // Automatic Next-Gen Image Format Negotiation (Serve WebP if supported)
  const acceptsWebp = (req.headers['accept'] || '').includes('image/webp');
  if (acceptsWebp && /\.(jpe?g|png)$/i.test(filePath)) {
    const webpCandidate = filePath.replace(/\.(jpe?g|png)$/i, '.webp');
    if (fs.existsSync(webpCandidate)) {
      filePath = webpCandidate;
    }
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Performance Headers: Browser Cache static assets, but do not cache HTML
    const headers = {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'X-Content-Type-Options': 'nosniff',
      'Vary': 'Accept-Encoding, Accept'
    };

    if (ext === '.html') {
      headers['Cache-Control'] = 'no-cache';
    } else if (['.jpg', '.jpeg', '.png', '.webp', '.svg', '.ico', '.woff2'].includes(ext)) {
      headers['Cache-Control'] = 'public, max-age=31536000, immutable';
    } else if (['.css', '.js', '.json'].includes(ext)) {
      headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
    }

    // Text compression (gzip / deflate)
    const isCompressible = ['.html', '.css', '.js', '.json', '.svg'].includes(ext);
    const acceptEncoding = req.headers['accept-encoding'] || '';

    if (isCompressible && acceptEncoding.includes('gzip')) {
      headers['Content-Encoding'] = 'gzip';
      res.writeHead(200, headers);
      fs.createReadStream(filePath).pipe(zlib.createGzip()).pipe(res);
    } else if (isCompressible && acceptEncoding.includes('deflate')) {
      headers['Content-Encoding'] = 'deflate';
      res.writeHead(200, headers);
      fs.createReadStream(filePath).pipe(zlib.createDeflate()).pipe(res);
    } else {
      res.writeHead(200, headers);
      fs.createReadStream(filePath).pipe(res);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Sri Ilakkiya Server running at http://localhost:${PORT}/ (with Backend REST API Sync)`);
});
