/**
 * SRI ILAKKIYA (ஸ்ரீ இலக்கியா) — ADMIN MANAGEMENT ENGINE
 * 1. Product Price & Amount Control
 * 2. Add New Product with Direct Camera Capture & Gallery Upload
 * 3. Custom Inventory Management
 * 4. Cross-tab Real-time Sync with Website (html.html & index.html)
 */

const ADMIN_PASS = '1234';

// 3 Departments (matching physical showroom)
const DEPTS = {
  vessels: {
    en: "Vessels & Kitchenware",
    ta: "பாத்திரங்கள்",
    color: "#006B2D",
    subs: {
      "Stainless steel": ["Plates", "Tumblers", "Bowls", "Pots", "Vessels", "Water pots", "Milk vessels", "Idli pots", "Carriers", "Steel containers"],
      "Traditional cookware": ["Clay pots", "Earthen pots", "Soapstone vessels", "Iron kadai", "Dosa stones", "Copper vessels", "Brass vessels", "Bronze vessels", "Traditional cooking pots"],
      "Cookware": ["Pressure cookers", "Non-stick tawas", "Dosa tawas", "Frying pans", "Kadai", "Saucepans", "Biryani pots", "Appam pans", "Paniyaram pans", "Steamers", "Rice cookers"],
      "Dining & serving": ["Dinner sets", "Meal plates", "Compartment plates", "Serving trays", "Serving bowls", "Spoons", "Water jugs", "Fruit plates", "Serving sets"],
      "Tea & coffee": ["Coffee filters", "Davara sets", "Kettles", "Milk boilers", "Tea strainers", "Flasks", "Vacuum bottles", "Milk cans"],
      "Baking & special cooking": ["Cake moulds", "Baking trays", "Idiyappam makers", "Murukku presses", "Puttu makers", "Sevai makers", "Appam cookware"],
      "Storage": ["Rice drums", "Dal containers", "Spice boxes", "Airtight containers", "Lunch boxes", "Bottles", "Oil dispensers", "Pickle jars", "Hot boxes", "Casseroles", "Storage jars"],
      "Hotel & catering": ["Commercial cookers", "Large biryani vessels", "Bulk cooking pots", "Large ladles", "Buffet warmers", "Catering trays", "Catering water jugs"],
      "Pooja & festival": ["Brass lamps", "Kuthu vilakku", "Pooja plates", "Bells", "Kalasam", "Panchapatram", "Incense holders", "Traditional lamps"],
      "Kitchen accessories": ["Ladles", "Knives", "Spatulas", "Peelers", "Strainers", "Tongs", "Cutting boards", "Racks", "Dish drainers", "Sink accessories"],
      "Cleaning & utility": ["Scrubbers", "Brushes", "Buckets", "Mugs", "Dustbins", "Baskets", "Soap dispensers", "Cleaning tools"],
      "Kids & travel": ["School lunch boxes", "Cartoon bottles", "Insulated lunch bags", "Travel flasks", "Food jars"],
      "Wedding & gifts": ["Seervarisai vessel sets", "Wedding dinner sets", "Wedding gifts", "Housewarming gifts", "Pooja gift sets", "Seasonal gift combos"]
    }
  },
  furniture: {
    en: "Solid Teak Furniture",
    ta: "மரச்சாமான்கள்",
    color: "#542A20",
    subs: {
      "Bedroom": ["Cots", "Wardrobes (Wooden Bureau)", "Dressing tables", "Mattresses"],
      "Living & dining": ["Sofas", "Dining tables", "Dining chairs", "Tea tables", "TV stands"],
      "Storage & office": ["Steel Almirahs (Iron Bureau)", "Shoe racks", "Study tables", "Office chairs"],
      "Seating & others": ["Plastic chairs", "Folding cots", "Pooja stands", "Kids furniture"]
    }
  },
  appliances: {
    en: "Home Appliances & Electronics",
    ta: "வீட்டு உபயோக சாதனங்கள்",
    color: "#8B1E24",
    subs: {
      "Kitchen appliances": ["Mixer grinders", "Wet grinders", "Induction stoves", "Electric kettles", "Juicers", "Blenders", "Choppers", "Toasters", "Gas stoves"],
      "Home appliances": ["Refrigerators", "Washing machines", "Microwave ovens", "Water heaters", "Irons"],
      "Cooling & air": ["Ceiling fans", "Table fans", "Pedestal fans", "Air coolers"],
      "Electronics": ["Televisions", "Home theatre & soundbars", "Mobile accessories", "Lighting"]
    }
  }
};

const slug = s => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// Generate Base Products List
const BASE_PRODUCTS = [];
for (const [dk, d] of Object.entries(DEPTS)) {
  for (const [sub, items] of Object.entries(d.subs)) {
    items.forEach(n => {
      BASE_PRODUCTS.push({
        id: `${dk}-${slug(sub)}-${slug(n)}`,
        name: n,
        dept: dk,
        category: sub
      });
    });
  }
}

// Product Image Resolver
function getProductImage(name, category, dept, customImg) {
  if (customImg) return customImg;
  const n = (name || '').toLowerCase();
  const c = (category || '').toLowerCase();

  // 1. Specific Traditional Cookware (Authentic local assets)
  if (n.includes('brass vessel') || (c.includes('traditional') && n.includes('brass')) || n === 'brass vessels') return 'assets/brass_vessels.jpg';
  if (n.includes('bronze vessel') || (c.includes('traditional') && n.includes('bronze')) || n === 'bronze vessels' || n.includes('vengala')) return 'assets/bronze_vessels.jpg';
  if (n.includes('soapstone') || n.includes('kalchatti')) return 'assets/soapstone_vessels.jpg';
  if (n.includes('clay pot') || n.includes('manpaanai')) return 'assets/clay_pots.jpg';
  if (n.includes('earthen pot') || n.includes('earthen')) return 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80';
  if (n.includes('copper')) return 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80';
  if (n.includes('iron kadai')) return 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=600&q=80';
  if (n.includes('dosa stone')) return 'assets/dosa_tawa.jpg';
  if (n.includes('traditional cooking pot')) return 'assets/traditional_cookware.jpg';

  // 2. Cleaning & Utility (Dedicated distinct local assets & items)
  if (n.includes('brush')) return 'assets/cleaning_brushes.jpg';
  if (n.includes('bucket')) return 'assets/utility_buckets.jpg';
  if (n.includes('dustbin')) return 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80';
  if (n.includes('scrubber')) return 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=600&q=80';
  if (n.includes('soap dispenser')) return 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80';
  if (n.includes('cleaning tool')) return 'assets/cleaning_brushes.jpg';
  if (n.includes('basket')) return 'assets/cleaning_utility.jpg';
  if (n.includes('mug') && c.includes('clean')) return 'assets/utility_buckets.jpg';

  // 3. Cookware & Steaming
  if (n.includes('cooker') && !n.includes('rice') && !n.includes('commercial')) return 'assets/cooker.jpg';
  if (n.includes('idli')) return 'assets/idli_pot.jpg';
  if (n.includes('dosa tawa') || n.includes('non-stick tawa') || n.includes('tawa')) return 'assets/dosa_tawa.jpg';
  if (n.includes('frying pan')) return 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=600&q=80';
  if (n.includes('saucepan')) return 'https://images.unsplash.com/photo-1585837575652-267c041d77d4?auto=format&fit=crop&w=600&q=80';
  if (n.includes('biryani pot') || n.includes('biryani vessel')) return 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80';
  if (n.includes('appam pan')) return 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80';
  if (n.includes('paniyaram')) return 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=600&q=80';
  if (n.includes('kadai')) return 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=600&q=80';
  if (n.includes('steamer')) return 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80';
  if (n.includes('rice cooker')) return 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80';

  // 4. Plates, Thalis & Dining Sets (Each plate type has distinct authentic image)
  if (n.includes('pooja plate') || (c.includes('pooja') && n.includes('plate'))) return 'assets/pooja_plate.jpg';
  if (n.includes('compartment plate')) return 'assets/compartment_plate.jpg';
  if (n.includes('fruit plate')) return 'assets/fruit_plate.jpg';
  if (n.includes('meal plate')) return 'assets/meal_plate.jpg';
  if (n.includes('dinner set')) return 'assets/dinner_set.jpg';
  if (n.includes('plate')) return 'assets/stainless_steel_plate.jpg';
  if (n.includes('baking tray')) return 'assets/baking_special.jpg';
  if (n.includes('serving tray') || n.includes('serving set') || n.includes('catering tray')) return 'assets/serving_tray.jpg';
  if (n.includes('serving bowl')) return 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=600&q=80';
  if (n.includes('spoon')) return 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80';
  if (n.includes('water jug') || n.includes('catering water jug')) return 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80';

  // 5. Stainless Steel Dining & Kitchenware
  if (n.includes('tumbler') || n.includes('cup') || n.includes('glass')) return 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=600&q=80';
  if (n.includes('bowl')) return 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=600&q=80';
  if (n.includes('water pot')) return 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80';
  if (n.includes('milk vessel')) return 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80';
  if (n.includes('carrier') || n.includes('tiffin')) return 'https://images.unsplash.com/photo-1594998893017-36147cbcae05?auto=format&fit=crop&w=600&q=80';
  if (n.includes('steel container') || (c.includes('steel') && n.includes('container'))) return 'assets/storage_organization.jpg';
  if (n === 'pots' || n === 'pot') return 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80';
  if (n === 'vessels' || n === 'vessel') return 'assets/stainless_steel.jpg';

  // 6. Tea & Coffee
  if (n.includes('coffee filter') || n.includes('filter coffee')) return 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80';
  if (n.includes('davara')) return 'assets/tea_coffee.jpg';
  if (n.includes('milk boiler')) return 'assets/tea_coffee.jpg';
  if (n.includes('kettle')) return 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=600&q=80';
  if (n.includes('tea strainer')) return 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80';
  if (n.includes('flask') || n.includes('vacuum bottle')) return 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80';
  if (n.includes('milk can')) return 'assets/tea_coffee.jpg';

  // 7. Baking & Special Cooking
  if (n.includes('cake mould')) return 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=600&q=80';
  if (n.includes('murukku press') || n.includes('idiyappam maker') || n.includes('sevai maker')) return 'assets/baking_special.jpg';
  if (n.includes('puttu maker')) return 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80';
  if (n.includes('appam cookware')) return 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=600&q=80';

  // 8. Storage
  if (n.includes('rice drum')) return 'assets/storage_organization.jpg';
  if (n.includes('dal container') || n.includes('airtight container') || n.includes('storage jar')) return 'https://images.unsplash.com/photo-1594998893017-36147cbcae05?auto=format&fit=crop&w=600&q=80';
  if (n.includes('spice box')) return 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80';
  if (n.includes('lunch box')) return 'https://images.unsplash.com/photo-1594998893017-36147cbcae05?auto=format&fit=crop&w=600&q=80';
  if (n.includes('bottle')) return 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80';
  if (n.includes('oil dispenser')) return 'assets/storage_organization.jpg';
  if (n.includes('pickle jar')) return 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80';
  if (n.includes('hot box') || n.includes('casserole')) return 'assets/storage_organization.jpg';

  // 9. Hotel & Catering
  if (n.includes('commercial cooker') || n.includes('bulk cooking') || n.includes('large biryani')) return 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80';
  if (n.includes('large ladle')) return 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80';
  if (n.includes('buffet warmer')) return 'assets/hotel_catering.jpg';

  // 10. Pooja & Festival
  if (n.includes('kuthu vilakku') || n.includes('traditional lamp')) return 'assets/kuthu_vilakku.jpg';
  if (n.includes('brass lamp')) return 'assets/kuthu_vilakku.jpg';
  if (n.includes('bell')) return 'assets/pooja_festival.jpg';
  if (n.includes('kalasam')) return 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80';
  if (n.includes('panchapatram')) return 'assets/pooja_plate.jpg';
  if (n.includes('incense holder')) return 'assets/pooja_festival.jpg';

  // 11. Kitchen Accessories
  if (n.includes('knife') || n.includes('knives')) return 'https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=600&q=80';
  if (n.includes('cutting board')) return 'https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?auto=format&fit=crop&w=600&q=80';
  if (n.includes('ladle') || n.includes('spatula')) return 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80';
  if (n.includes('peeler') || n.includes('tong')) return 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80';
  if (n.includes('strainer')) return 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80';
  if (n.includes('rack') || n.includes('dish drainer')) return 'assets/cleaning_utility.jpg';
  if (n.includes('sink accessory')) return 'assets/cleaning_brushes.jpg';

  // 12. Kids & Travel
  if (n.includes('school lunch box')) return 'https://images.unsplash.com/photo-1594998893017-36147cbcae05?auto=format&fit=crop&w=600&q=80';
  if (n.includes('cartoon bottle') || n.includes('travel flask')) return 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80';
  if (n.includes('lunch bag') || n.includes('food jar')) return 'assets/kids_travel.jpg';

  // 13. Wedding & Gifts
  if (n.includes('seervarisai') || n.includes('wedding gift')) return 'assets/banner_seervarisai.jpg';
  if (n.includes('wedding dinner set') || n.includes('housewarming') || n.includes('gift')) return 'assets/dinner_set.jpg';

  // 14. Furniture (Authentic Iron Bureau & Wooden Bureau local assets)
  if (n.includes('iron bureau') || n.includes('steel almirah') || n.includes('iron biro') || n.includes('steel bureau') || n.includes('almirah') || n.includes('irom broll') || n.includes('iron broll') || n.includes('steel almirahs')) return 'assets/iron_bureau.jpg';
  if (n.includes('wooden bureau') || n.includes('wooden wardrobe') || n.includes('wooden biro') || n.includes('wardrobe') || n.includes('wooden broll') || n.includes('woonden') || n.includes('bureau') || n.includes('biro') || n.includes('broll')) return 'assets/wooden_bureau.jpg';
  if (n.includes('cot') || n.includes('bed') || n.includes('folding cot')) return 'assets/teak_cot.jpg';
  if (n.includes('sofa')) return 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80';
  if (n.includes('dining table')) return 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80';
  if (n.includes('dining chair') || n.includes('office chair') || n.includes('plastic chair')) return 'https://images.unsplash.com/photo-1580481077195-c3a821a58875?auto=format&fit=crop&w=600&q=80';
  if (n.includes('tea table')) return 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=600&q=80';
  if (n.includes('tv stand')) return 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80';
  if (n.includes('dressing table')) return 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80';
  if (n.includes('study table')) return 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80';
  if (n.includes('mattress')) return 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80';
  if (n.includes('shoe rack')) return 'assets/iron_bureau.jpg';
  if (n.includes('pooja stand')) return 'assets/pooja_festival.jpg';
  if (n.includes('kids furniture')) return 'https://images.unsplash.com/photo-1580481077195-c3a821a58875?auto=format&fit=crop&w=600&q=80';

  // 15. Appliances & Electronics (Fixed: wet grinder, toaster, water heater, irons, table fan)
  if (n.includes('mixer grinder') || n.includes('mixie') || n.includes('blender') || n.includes('chopper')) return 'assets/mixer_grinder.jpg';
  if (n.includes('wet grinder') || n.includes('grinder')) return 'assets/wet_grinder.jpg';
  if (n.includes('toaster')) return 'assets/toaster.jpg';
  if (n.includes('water heater') || n.includes('geyser')) return 'assets/water_heater.jpg';
  if ((n === 'irons' || n.includes('iron box') || n === 'iron') && !n.includes('iron kadai') && !n.includes('iron bureau') && !n.includes('iron biro') && !n.includes('cast iron')) return 'assets/iron_box.jpg';
  if (n.includes('table fan') || n.includes('desk fan') || n.includes('pedestal fan')) return 'assets/table_fan.jpg';
  if (n.includes('ceiling fan')) return 'https://images.unsplash.com/photo-1618941716939-553df3c6c278?auto=format&fit=crop&w=600&q=80';
  if (n.includes('cooler') || n.includes('fan')) return 'assets/table_fan.jpg';
  if (n.includes('refrigerator') || n.includes('fridge')) return 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80';
  if (n.includes('washing machine')) return 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80';
  if (n.includes('microwave') || n.includes('oven')) return 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=600&q=80';
  if (n.includes('induction') || n.includes('gas stove') || n.includes('cooktop') || n.includes('stove')) return 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80';
  if (n.includes('television') || n.includes('tv')) return 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80';
  if (n.includes('juicer')) return 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=600&q=80';
  if (n.includes('home theatre') || n.includes('soundbar')) return 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80';
  if (n.includes('mobile accessory') || n.includes('mobile')) return 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=600&q=80';
  if (n.includes('lighting')) return 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80';

  // Category Level Fallbacks
  if (c.includes('traditional')) return 'assets/traditional_cookware.jpg';
  if (c.includes('dining')) return 'assets/dining_serving.jpg';
  if (c.includes('tea') || c.includes('coffee')) return 'assets/tea_coffee.jpg';
  if (c.includes('baking') || c.includes('special')) return 'assets/baking_special.jpg';
  if (c.includes('storage')) return 'assets/storage_organization.jpg';
  if (c.includes('hotel') || c.includes('catering')) return 'assets/hotel_catering.jpg';
  if (c.includes('pooja')) return 'assets/pooja_festival.jpg';
  if (c.includes('clean') || c.includes('utility')) return 'assets/cleaning_utility.jpg';
  if (c.includes('kid') || c.includes('travel')) return 'assets/kids_travel.jpg';
  if (c.includes('steel')) return 'assets/stainless_steel.jpg';

  if (dept === 'furniture') return 'assets/teak_cot.jpg';
  if (dept === 'appliances') return 'assets/mixer_grinder.jpg';

  return 'assets/cooker.jpg';
}

// Global State
let storedPrices = {};
let customProducts = [];
let activeOffers = [];
let capturedImageData = null;
let currentDeptFilter = 'all';

// Broadcast channel for instantaneous cross-tab synchronization
let broadcastChannel = null;
try {
  if ('BroadcastChannel' in window) {
    broadcastChannel = new BroadcastChannel('ilakkiya_store_channel');
  }
} catch (e) {
  console.log('BroadcastChannel not supported');
}

function broadcastSync(type, data) {
  try {
    window.dispatchEvent(new Event('storage'));
    if (broadcastChannel) {
      broadcastChannel.postMessage({ type, data });
    }
  } catch (e) {
    console.error(e);
  }
}

// Toast Helper
function showToast(msg) {
  const t = document.getElementById('adminToast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// LocalStorage loaders
// Persistent Server API Bridge
async function postApi(url, data) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await res.json();
  } catch (err) {
    console.warn('Backend sync failed, stored in localStorage:', err);
    return null;
  }
}

// LocalStorage & Server DB Sync
async function loadAdminState() {
  try {
    storedPrices = JSON.parse(localStorage.getItem('ilakkiya_product_prices') || '{}');
  } catch (e) {
    storedPrices = {};
  }
  try {
    customProducts = JSON.parse(localStorage.getItem('ilakkiya_custom_products') || '[]');
  } catch (e) {
    customProducts = [];
  }

  // Load from backend server file
  try {
    const res = await fetch('/api/data');
    if (res.ok) {
      const serverData = await res.json();
      if (serverData.prices) {
        storedPrices = { ...storedPrices, ...serverData.prices };
        localStorage.setItem('ilakkiya_product_prices', JSON.stringify(storedPrices));
      }
      if (serverData.customProducts && serverData.customProducts.length > 0) {
        const pMap = new Map();
        [...serverData.customProducts, ...customProducts].forEach(p => pMap.set(p.id, p));
        customProducts = Array.from(pMap.values());
        localStorage.setItem('ilakkiya_custom_products', JSON.stringify(customProducts));
      }
      if (serverData.offers && Array.isArray(serverData.offers) && serverData.offers.length > 0) {
        activeOffers = serverData.offers.map(o => ({
          ...o,
          id: o.id || `off-${Math.random().toString(36).substr(2, 6)}`,
          discount: o.discount || (o.text ? o.text.split('—')[0].trim() : 'Special Offer'),
          desc: o.desc || o.text || ''
        }));
        localStorage.setItem('ilakkiya_offers', JSON.stringify(activeOffers));
        if (typeof renderOffers === 'function') renderOffers();
      }
      updateMetrics();
      if (typeof renderPricingRows === 'function') renderPricingRows();
      if (typeof renderCustomProducts === 'function') renderCustomProducts();
    }
  } catch (err) {
    console.warn('Using local cache, backend unreachable:', err);
  }
}

function savePricesState() {
  localStorage.setItem('ilakkiya_product_prices', JSON.stringify(storedPrices));
  broadcastSync('PRICES_UPDATED', storedPrices);
  updateMetrics();
  postApi('/api/prices', { prices: storedPrices });
}

function saveCustomProductsState() {
  localStorage.setItem('ilakkiya_custom_products', JSON.stringify(customProducts));
  broadcastSync('PRODUCTS_UPDATED', customProducts);
  updateMetrics();
  renderCustomProducts();
  postApi('/api/products', { products: customProducts });
}

// Canvas Image Compressor (Handles raw 5-10MB camera pictures cleanly)
function compressImage(file, maxWidth = 800, maxHeight = 800, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// -------------------------------------------------------------
// 1. AUTHENTICATION & LOGIN
// -------------------------------------------------------------
const loginScreen = document.getElementById('loginScreen');
const adminApp = document.getElementById('adminApp');
const loginForm = document.getElementById('loginForm');
const adminPassInput = document.getElementById('adminPass');
const rememberPassCheck = document.getElementById('rememberPass');
const logoutBtn = document.getElementById('logoutBtn');

function checkAuth() {
  if (localStorage.getItem('ilakkiya_admin_logged_in') === 'true') {
    showAdmin();
  }
}

function showAdmin() {
  loginScreen.style.display = 'none';
  adminApp.style.display = 'block';
  loadAdminState();
  initPricingTable();
  renderCustomProducts();
  updateMetrics();
}

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  if (adminPassInput.value.trim() === ADMIN_PASS) {
    if (rememberPassCheck.checked) {
      localStorage.setItem('ilakkiya_admin_logged_in', 'true');
    }
    showAdmin();
    showToast('✓ Welcome to Sri Ilakkiya Admin Portal');
  } else {
    alert('Incorrect security passcode! (Default: 1234)');
    adminPassInput.select();
  }
});

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('ilakkiya_admin_logged_in');
  adminApp.style.display = 'none';
  loginScreen.style.display = 'flex';
  adminPassInput.value = '';
  showToast('Logged out successfully');
});

// -------------------------------------------------------------
// 2. TAB SWITCHING
// -------------------------------------------------------------
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    tabPanes.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const target = document.getElementById(btn.dataset.tab);
    if (target) target.classList.add('active');
  });
});

// -------------------------------------------------------------
// 3. PRICING & AMOUNT MANAGER
// -------------------------------------------------------------
const pricingTableBody = document.getElementById('pricingTableBody');
const priceSearchInput = document.getElementById('priceSearchInput');
const priceDeptFilters = document.getElementById('priceDeptFilters');
const btnSaveAllPrices = document.getElementById('btnSaveAllPrices');
const btnFillSamplePrices = document.getElementById('btnFillSamplePrices');
const btnResetPrices = document.getElementById('btnResetPrices');

function getAllProducts() {
  return [...customProducts, ...BASE_PRODUCTS];
}

function updateMetrics() {
  const all = getAllProducts();
  document.getElementById('statTotalProds').textContent = all.length;
  document.getElementById('customProdBadge').textContent = customProducts.length;

  let pricedCount = 0;
  let offerCount = 0;
  all.forEach(p => {
    const sp = storedPrices[p.id] || (p.price ? { price: p.price, offer: p.offer } : null);
    if (sp && sp.price) pricedCount++;
    if (sp && sp.offer) offerCount++;
  });

  document.getElementById('statPricedProds').textContent = pricedCount;
  document.getElementById('statOfferProds').textContent = offerCount;
}

function initPricingTable() {
  renderPricingRows();
}

function renderPricingRows() {
  const q = priceSearchInput.value.trim().toLowerCase();
  const all = getAllProducts();

  const filtered = all.filter(p => {
    const matchDept = currentDeptFilter === 'all' || p.dept === currentDeptFilter;
    const matchQ = !q || (p.name + ' ' + (p.category || '')).toLowerCase().includes(q);
    return matchDept && matchQ;
  });

  if (filtered.length === 0) {
    pricingTableBody.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:2.5rem;color:#888;">No items match your search.</td></tr>`;
    return;
  }

  pricingTableBody.innerHTML = filtered.map(p => {
    const d = DEPTS[p.dept] || { en: p.dept, color: '#542A20' };
    const sp = storedPrices[p.id] || {};
    const regPrice = sp.price !== undefined ? sp.price : (p.price || '');
    const offPrice = sp.offer !== undefined ? sp.offer : (p.offer || '');
    const imgUrl = getProductImage(p.name, p.category, p.dept, p.image);

    return `
      <tr data-id="${p.id}">
        <td>
          <img src="${imgUrl}" alt="${p.name}" class="prod-thumb-mini" onerror="this.src='assets/cooker.jpg'">
        </td>
        <td class="prod-info-cell">
          <h4>${p.name}</h4>
          <span>${p.category || ''} ${p.isCustom ? '• <b style="color:#006B2D;">Custom Added</b>' : ''}</span>
        </td>
        <td>
          <span class="dept-pill" style="background:${d.color}">${d.en.split(' ')[0]}</span>
        </td>
        <td>
          <div class="price-input-group">
            <span class="currency">₹</span>
            <input type="number" class="reg-price-input" value="${regPrice}" placeholder="Amount" min="0" data-id="${p.id}">
          </div>
        </td>
        <td>
          <div class="price-input-group">
            <span class="currency">₹</span>
            <input type="number" class="off-price-input" value="${offPrice}" placeholder="Offer" min="0" data-id="${p.id}">
          </div>
        </td>
        <td style="text-align: center;">
          <button type="button" class="btn-row-save" data-save-id="${p.id}">Save</button>
        </td>
      </tr>
    `;
  }).join('');
}

// Live search & filters
priceSearchInput.addEventListener('input', () => renderPricingRows());

priceDeptFilters.addEventListener('click', e => {
  const pill = e.target.closest('.filter-pill');
  if (pill) {
    priceDeptFilters.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    currentDeptFilter = pill.dataset.filter;
    renderPricingRows();
  }
});

// Save Individual Row
pricingTableBody.addEventListener('click', e => {
  const btn = e.target.closest('.btn-row-save');
  if (!btn) return;
  const id = btn.dataset.saveId;
  const tr = btn.closest('tr');
  const regVal = tr.querySelector('.reg-price-input').value.trim();
  const offVal = tr.querySelector('.off-price-input').value.trim();

  storedPrices[id] = {
    price: regVal ? Number(regVal) : null,
    offer: offVal ? Number(offVal) : null
  };

  savePricesState();
  btn.textContent = '✓ Saved';
  btn.classList.add('saved');
  setTimeout(() => {
    btn.textContent = 'Save';
    btn.classList.remove('saved');
  }, 1800);
  showToast(`✓ Updated amount for item`);
});

// Save All Prices at Once
btnSaveAllPrices.addEventListener('click', () => {
  const rows = pricingTableBody.querySelectorAll('tr[data-id]');
  let count = 0;
  rows.forEach(tr => {
    const id = tr.dataset.id;
    const regVal = tr.querySelector('.reg-price-input').value.trim();
    const offVal = tr.querySelector('.off-price-input').value.trim();

    if (regVal || offVal) {
      storedPrices[id] = {
        price: regVal ? Number(regVal) : null,
        offer: offVal ? Number(offVal) : null
      };
      count++;
    }
  });

  savePricesState();
  showToast(`✓ Successfully saved all prices (${count} items updated)`);
});

// Auto-fill Realistic Sample Market Prices
btnFillSamplePrices.addEventListener('click', () => {
  if (!confirm('This will fill realistic market prices for all showroom items. Proceed?')) return;

  const all = getAllProducts();
  all.forEach(p => {
    const n = p.name.toLowerCase();
    let pr = 450;
    let of = null;

    if (n.includes('pressure cooker')) { pr = 2199; of = 1799; }
    else if (n.includes('dosa tawa') || n.includes('tawa')) { pr = 899; of = 749; }
    else if (n.includes('idli pot')) { pr = 1250; of = 999; }
    else if (n.includes('kadai')) { pr = 750; of = 599; }
    else if (n.includes('biryani')) { pr = 1850; of = 1599; }
    else if (n.includes('dinner set')) { pr = 4200; of = 3499; }
    else if (n.includes('plate') || n.includes('thali')) { pr = 320; }
    else if (n.includes('tumbler')) { pr = 140; }
    else if (n.includes('kuthu vilakku')) { pr = 3500; of = 2999; }
    else if (n.includes('brass lamp')) { pr = 1800; of = 1499; }
    else if (n.includes('seervarisai')) { pr = 48000; of = 39999; }
    else if (n.includes('cot') || n.includes('bed')) { pr = 28500; of = 24999; }
    else if (n.includes('sofa')) { pr = 32000; of = 27500; }
    else if (n.includes('dining table')) { pr = 24000; of = 19999; }
    else if (n.includes('wardrobe') || n.includes('almirah')) { pr = 18500; of = 15999; }
    else if (n.includes('mattress')) { pr = 9500; of = 7999; }
    else if (n.includes('mixer grinder')) { pr = 3850; of = 3299; }
    else if (n.includes('wet grinder')) { pr = 4999; of = 4250; }
    else if (n.includes('gas stove')) { pr = 4200; of = 3499; }
    else if (n.includes('refrigerator')) { pr = 21500; of = 18990; }
    else if (n.includes('washing machine')) { pr = 24990; of = 21499; }
    else if (n.includes('television') || n.includes('tv')) { pr = 26990; of = 22499; }
    else if (n.includes('ceiling fan') || n.includes('fan')) { pr = 2100; of = 1750; }
    else if (n.includes('water heater')) { pr = 6800; of = 5699; }

    storedPrices[p.id] = { price: pr, offer: of };
  });

  savePricesState();
  renderPricingRows();
  showToast('✓ Realistic showroom market prices populated!');
});

// Clear prices
btnResetPrices.addEventListener('click', () => {
  if (confirm('Clear all custom prices and return to "Contact for price"?')) {
    storedPrices = {};
    savePricesState();
    postApi('/api/prices/reset', {});
    renderPricingRows();
    showToast('Prices reset to default');
  }
});

// -------------------------------------------------------------
// 4. ADD NEW PRODUCT WITH CAMERA / FILE UPLOAD
// -------------------------------------------------------------
const newProductForm = document.getElementById('newProductForm');
const cameraInput = document.getElementById('cameraInput');
const fileInput = document.getElementById('fileInput');
const btnTriggerCamera = document.getElementById('btnTriggerCamera');
const btnTriggerFile = document.getElementById('btnTriggerFile');
const presetThumbnails = document.getElementById('presetThumbnails');
const emptyPreviewNotice = document.getElementById('emptyPreviewNotice');
const activePreviewBox = document.getElementById('activePreviewBox');
const previewImgElement = document.getElementById('previewImgElement');
const previewSizeBadge = document.getElementById('previewSizeBadge');
const btnRemovePhoto = document.getElementById('btnRemovePhoto');

// Camera trigger
btnTriggerCamera.addEventListener('click', () => {
  cameraInput.click();
});

// Gallery file trigger
btnTriggerFile.addEventListener('click', () => {
  fileInput.click();
});

// Handle camera capture or file select
async function handleFileSelect(file) {
  if (!file) return;
  try {
    showToast('Compressing image for fast loading...');
    const compressedDataUrl = await compressImage(file, 800, 800, 0.82);
    setCapturedImage(compressedDataUrl, `${Math.round(compressedDataUrl.length * 0.75 / 1024)} KB (Optimized)`);
  } catch (err) {
    console.error(err);
    alert('Error processing image. Please try another file.');
  }
}

cameraInput.addEventListener('change', e => {
  if (e.target.files && e.target.files[0]) {
    handleFileSelect(e.target.files[0]);
  }
});

fileInput.addEventListener('change', e => {
  if (e.target.files && e.target.files[0]) {
    handleFileSelect(e.target.files[0]);
  }
});

// Showroom presets
presetThumbnails.addEventListener('click', e => {
  const btn = e.target.closest('.preset-btn');
  if (btn) {
    setCapturedImage(btn.dataset.src, 'Showroom Preset');
  }
});

function setCapturedImage(src, badgeText = 'Ready') {
  capturedImageData = src;
  previewImgElement.src = src;
  previewSizeBadge.textContent = badgeText;
  emptyPreviewNotice.style.display = 'none';
  activePreviewBox.style.display = 'block';
}

btnRemovePhoto.addEventListener('click', () => {
  capturedImageData = null;
  previewImgElement.src = '';
  cameraInput.value = '';
  fileInput.value = '';
  activePreviewBox.style.display = 'none';
  emptyPreviewNotice.style.display = 'block';
});

// Submit New Product
newProductForm.addEventListener('submit', e => {
  e.preventDefault();

  const name = document.getElementById('newProdName').value.trim();
  const dept = document.getElementById('newProdDept').value;
  const category = document.getElementById('newProdCategory').value.trim();
  const price = document.getElementById('newProdPrice').value.trim();
  const offer = document.getElementById('newProdOffer').value.trim();
  const brand = document.getElementById('newProdBrand').value.trim();
  const status = document.getElementById('newProdStatus').value;
  const desc = document.getElementById('newProdDesc').value.trim();
  const featured = document.getElementById('newProdFeatured').checked;

  if (!name) {
    alert('Please enter product name');
    return;
  }

  // Create unique ID
  const newId = `cust-${Date.now()}`;
  const newProduct = {
    id: newId,
    name,
    dept,
    category,
    price: price ? Number(price) : null,
    offer: offer ? Number(offer) : null,
    brand: brand || null,
    status: status || 'Showroom Stock Available',
    desc: desc || `${name} in the ${category} collection. High quality showroom stock.`,
    featured: featured,
    image: capturedImageData || getProductImage(name, category, dept),
    isCustom: true,
    createdAt: new Date().toISOString()
  };

  // Add to custom products
  customProducts.unshift(newProduct);
  saveCustomProductsState();

  // If price was entered, store in storedPrices as well
  if (price || offer) {
    storedPrices[newId] = {
      price: price ? Number(price) : null,
      offer: offer ? Number(offer) : null
    };
    savePricesState();
  }

  // Reset form
  newProductForm.reset();
  btnRemovePhoto.click();
  showToast(`✓ Added "${name}" to store catalogue!`);

  // Switch to custom products tab to show the result
  document.querySelector('.tab-btn[data-tab="customListTab"]').click();
});

// -------------------------------------------------------------
// 5. CUSTOM PRODUCTS LIST & DELETE
// -------------------------------------------------------------
const customProductsList = document.getElementById('customProductsList');

function renderCustomProducts() {
  if (customProducts.length === 0) {
    customProductsList.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; background: #FFF; border: 1.5px dashed var(--border); border-radius: 12px;">
        <span style="font-size: 2.5rem;">📦</span>
        <h3 style="margin: 0.5rem 0; color: var(--b);">No custom products added yet</h3>
        <p style="color: var(--mu); font-size: 0.88rem;">Use the "Add Product" tab above to take a photo with your camera and add new items.</p>
      </div>
    `;
    return;
  }

  customProductsList.innerHTML = customProducts.map(p => {
    const sp = storedPrices[p.id] || {};
    const pr = sp.price || p.price;
    const of = sp.offer || p.offer;
    const priceText = of ? `₹${of.toLocaleString('en-IN')}` : pr ? `₹${pr.toLocaleString('en-IN')}` : 'Contact for price';

    return `
      <article class="custom-card">
        <img src="${p.image}" alt="${p.name}" class="custom-card-img" onerror="this.src='assets/cooker.jpg'">
        <div class="custom-card-body">
          <small style="color: #006B2D; font-weight: 700; text-transform: uppercase;">${p.category || 'General'}</small>
          <h4>${p.name}</h4>
          <p style="font-size: 0.82rem; color: #666;">${p.desc || ''}</p>
          <div class="custom-card-price">${priceText}</div>
          <div class="custom-card-actions">
            <button type="button" class="btn-delete-prod" data-delete-id="${p.id}">🗑️ Delete Product</button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

customProductsList.addEventListener('click', e => {
  const btn = e.target.closest('.btn-delete-prod');
  if (!btn) return;
  const id = btn.dataset.deleteId;
  const item = customProducts.find(p => p.id === id);
  if (confirm(`Are you sure you want to delete "${item ? item.name : 'this item'}" from the store?`)) {
    customProducts = customProducts.filter(p => p.id !== id);
    delete storedPrices[id];
    saveCustomProductsState();
    savePricesState();
    postApi('/api/products/delete', { id });
    showToast('✓ Product deleted from store');
  }
});

// -------------------------------------------------------------
// 6. OFFERS MANAGEMENT
// -------------------------------------------------------------
const offerForm = document.getElementById('offerForm');
const offersContainer = document.getElementById('offersContainer');

const DEFAULT_OFFERS = [
  {
    id: 'off-1',
    title: 'Wedding Seervarisai Special Mega Package',
    discount: 'Up to 35% Off + Free Gifts',
    desc: '51-item complete marriage bundle: Solid Teak Bed, TV, Refrigerator, Mixer & Kuthu Vilakku pair.'
  },
  {
    id: 'off-2',
    title: 'Kitchen Cookware Festive Bonanza',
    discount: 'Special Combo Offer',
    desc: 'Prestige 3L Pressure Cooker + Dosa Tawa combo at flat discount with brand warranty.'
  }
];

function getStoredOffers() {
  try {
    return JSON.parse(localStorage.getItem('ilakkiya_offers') || JSON.stringify(DEFAULT_OFFERS));
  } catch (e) {
    return DEFAULT_OFFERS;
  }
}

activeOffers = getStoredOffers();

function saveOffersState() {
  localStorage.setItem('ilakkiya_offers', JSON.stringify(activeOffers));
  broadcastSync('OFFERS_UPDATED', activeOffers);
  postApi('/api/offers', { offers: activeOffers });
}

function renderOffers() {
  if (!activeOffers || activeOffers.length === 0) {
    offersContainer.innerHTML = `
      <div style="text-align:center;padding:2rem 1rem;background:#FFF;border:1.5px dashed var(--border);border-radius:10px;color:var(--mu);">
        No active offers published yet. Create one using the form above!
      </div>
    `;
    return;
  }
  offersContainer.innerHTML = activeOffers.map((o, idx) => {
    const discBadge = o.discount ? `<span style="display:inline-block;background:#E8F5E9;color:#1B5E20;font-size:0.75rem;font-weight:700;padding:2px 8px;border-radius:4px;margin:3px 0;">${o.discount}</span>` : '';
    const descText = o.desc || o.text || '';
    return `
      <div class="offer-item-row">
        <div>
          <h4 style="font-size:1.05rem;color:var(--b);font-weight:700;">${o.title}</h4>
          ${discBadge}
          <p style="font-size:0.82rem;color:var(--mu);">${descText}</p>
        </div>
        <button type="button" class="btn-delete-prod" style="max-width:90px;" onclick="deleteOffer(${idx})">Delete</button>
      </div>
    `;
  }).join('');
}

window.deleteOffer = function(idx) {
  activeOffers.splice(idx, 1);
  saveOffersState();
  renderOffers();
  showToast('✓ Offer removed');
};

offerForm.addEventListener('submit', e => {
  e.preventDefault();
  const title = document.getElementById('offTitle').value.trim();
  const discount = document.getElementById('offDiscount').value.trim();
  const desc = document.getElementById('offDesc').value.trim();

  const newOffer = {
    id: `off-${Date.now()}`,
    title,
    discount,
    desc,
    text: discount ? `${discount} — ${desc}` : desc,
    published: true,
    start: new Date().toISOString().slice(0, 10),
    end: '2099-12-31'
  };

  activeOffers.unshift(newOffer);
  saveOffersState();
  offerForm.reset();
  renderOffers();
  showToast('✓ Live offer published to website!');
});

// Initialization
checkAuth();
renderOffers();
