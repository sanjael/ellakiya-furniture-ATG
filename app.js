/**
 * SRI ILAKKIYA (ஸ்ரீ இலக்கியா) — MAIN JAVASCRIPT ENGINE
 * Mobile-first, lightweight catalog discovery, dynamic offer engine, and WhatsApp enquiry script.
 * Language: English (with bilingual Tamil & English shop name on Home page)
 */

// 1. STORE CONSTANTS FROM PHYSICAL SIGNBOARD & LOCATION
const SHOWROOM_PHONE_RAW = '919486159262'; // From Signboard Cell: +91 94861 59262
const SHOWROOM_LANDLINE = '04371-220172';
const SHOWROOM_NAME = 'Sri Ilakkiya (ஸ்ரீ இலக்கியா)';
const SHOWROOM_LANDMARK = 'Near Sri Pachai Kaliamman Temple, Aranthangi - 614 616';

// 2. CORE SHOWROOM DEPARTMENTS (English)
const CATEGORIES = [
  {
    name: 'Solid Teak Furniture',
    filterTag: 'Furniture',
    icon: '🛋️',
    count: '35+ Models',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    desc: 'Mastercrafted Nilambur teak beds, 6-seater dining sets, sofas, wardrobes & bureau.'
  },
  {
    name: 'Kitchen Appliances',
    filterTag: 'Kitchen Appliances',
    icon: '🍳',
    count: '42+ Models',
    img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    desc: 'Preethi Zodiac mixers, Butterfly wet grinders, Prestige chimneys & gas stoves.'
  },
  {
    name: 'Cookers & Non-Stick',
    filterTag: 'Cooker',
    icon: '🍲',
    count: '38+ Models',
    img: 'https://images.unsplash.com/photo-1584990347449-39745582f6f7?auto=format&fit=crop&w=800&q=80',
    desc: 'Prestige, Hawkins, Butterfly tri-ply stainless steel & hard anodised pressure cookers.'
  },
  {
    name: 'Vessels & Brass Pooja',
    filterTag: 'Vessels',
    icon: '🥘',
    count: '68+ Sets',
    img: 'https://images.unsplash.com/photo-1584990347449-39745582f6f7?auto=format&fit=crop&w=800&q=80',
    desc: 'Kumbakonam pure brass kuthu vilakku, traditional urulis, bronze cookware & stainless steel sets.'
  },
  {
    name: 'Smart TVs & Electronics',
    filterTag: 'Home Appliances',
    icon: '📺',
    count: '30+ Models',
    img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
    desc: 'Smart 4K LED TVs, LG inverter refrigerators, front-load washers & double-door fridges.'
  },
  {
    name: 'Wedding Gift Combos (Seervarisai)',
    filterTag: 'Wedding Seervarisai',
    icon: '🎁',
    count: '15+ Packages',
    img: 'assets/banner_seervarisai.jpg',
    desc: 'Curated auspicious marriage packages: 21, 51 & 101 item complete household bundles.'
  },
  {
    name: 'Cycles & Kids Bicycles',
    filterTag: 'Cycle',
    icon: '🚲',
    count: '20+ Models',
    img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80',
    desc: 'Hero Sprint 21-speed MTBs, Hercules Roadeo, BSA Ladybird & kids tricycles.'
  }
];

// 3. PRODUCT CATALOG (English)
const PRODUCTS = [
  // --- WEDDING SEERVARISAI PACKAGES ---
  {
    id: 'seer-01',
    name: '51-Item Deluxe Wedding Gift Package (Seervarisai)',
    category: 'Wedding Seervarisai',
    department: 'Wedding Seervarisai',
    material: 'Complete Teak Furniture + Appliances + Brass & Eversilver',
    finish: 'Auspicious Wedding Special',
    dimensions: 'Full 51 Household Essentials',
    price: '₹84,999',
    tag: 'Bestseller',
    rating: 5.0,
    reviewsCount: 88,
    image: 'assets/banner_seervarisai.jpg',
    gallery: ['assets/banner_seervarisai.jpg', 'assets/banner_showroom.jpg'],
    description: 'Aranthangi’s most trusted comprehensive wedding gift package: 1 Solid Teak King Bed, Eversilver/Wooden Bureau with mirror, 43" Smart LED TV, Double Door Refrigerator, Preethi Mixer Grinder, Tabletop Wet Grinder, Pressure Cooker and Kumbakonam Pure Brass Kuthu Vilakku pair!',
    features: ['51 Essential Wedding Items', '100% Solid Teak Wood Bed', 'Official Brand Warranties on All Electronics', 'Free Doorstep Wedding Delivery'],
    inStock: true,
    leadTime: 'Showroom Stock Ready'
  },
  {
    id: 'seer-02',
    name: '101-Item Maha Royal Wedding Seervarisai Mega Pack',
    category: 'Wedding Seervarisai',
    department: 'Wedding Seervarisai',
    material: 'Grand Teak Bedroom Suite + Complete Electronics + 51 Vessels',
    finish: 'Royal Heritage Golden Pack',
    dimensions: 'Complete Home Setup (101 Items)',
    price: '₹1,45,000',
    tag: 'Royal Package',
    rating: 5.0,
    reviewsCount: 64,
    image: 'assets/banner_showroom.jpg',
    gallery: ['assets/banner_showroom.jpg', 'assets/banner_seervarisai.jpg'],
    description: 'The ultimate royal marriage suite: Solid Teak King Bed + Spring Mattress, 3-Door Teak Bureau, Dressing Table, 6-Seater Teak Dining Table, 55" Smart 4K TV, Fully Automatic Washing Machine, Double Door Refrigerator, and complete 51 stainless steel & brassware cookware set!',
    features: ['101 Premium Items', 'Full Bedroom & Dining Furniture', 'Top Brand Electronics with Warranties', 'Complete Cookware & Pooja Set'],
    inStock: true,
    leadTime: 'Ready for Wedding Delivery'
  },

  // --- FURNITURE CATEGORY ---
  {
    id: 'prod-01',
    name: 'Kaveri Grand Solid Teak Wood Bed',
    category: 'Furniture',
    department: 'Furniture',
    material: 'Grade-A Nilambur Teak Wood',
    finish: 'Natural Honey Walnut & Brass Accents',
    dimensions: '78"L x 72"W x 48"H (King Size)',
    price: '₹48,500',
    tag: 'Solid Teak',
    rating: 4.9,
    reviewsCount: 42,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Mastercrafted from 100% solid aged Nilambur Teak timber using traditional mortise-and-tenon joints. Designed for multi-generational endurance with natural termite-resistant organic oil polish.',
    features: ['100% Solid Heartwood Teak', 'Zero Synthetic Veneer', '15-Year Structural Teak Warranty', 'Termite & Borer Resistant'],
    inStock: true,
    leadTime: 'Ready Stock at Aranthangi Showroom'
  },
  {
    id: 'prod-02',
    name: 'Chettinad Heritage 6-Seater Teak Dining Set',
    category: 'Furniture',
    department: 'Furniture',
    material: 'Natural Solid Teak with Cane-Back Chairs',
    finish: 'Rich Walnut Matte',
    dimensions: '72"L x 36"W x 30"H',
    price: '₹56,000',
    tag: 'Family Dining',
    rating: 5.0,
    reviewsCount: 38,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Celebrating southern architectural geometry, featuring solid teak wood planks with rounded ergonomic dining chairs upholstered in stain-resistant linen weave.',
    features: ['Solid Teak Wood Planks', 'Includes 6 Ergonomic Chairs', 'Heat & Stain Resistant Coating', 'Lifetime Joinery Strength'],
    inStock: true,
    leadTime: 'Showroom Stock Available'
  },
  {
    id: 'prod-03',
    name: 'Solid Teak & Steel 3-Door Wardrobe Bureau',
    category: 'Furniture',
    department: 'Furniture',
    material: 'Aged Solid Teak & Heavy Gauge Cold-Rolled Steel',
    finish: 'Mirror Polish with Safety Locker',
    dimensions: '78"H x 48"W x 22"D',
    price: '₹34,500',
    tag: 'Wedding Essential',
    rating: 4.8,
    reviewsCount: 56,
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Sturdy 3-door wardrobe bureau engineered with heavy-duty safety locker, full-length beveled dressing mirror, organizing shelves, and clothes hanging section.',
    features: ['Built-in Heavy Safety Locker', 'Full-Length Beveled Mirror', 'Multiple Organizing Shelves', 'Sturdy Double Lock System'],
    inStock: true,
    leadTime: 'Showroom Stock Ready'
  },

  // --- KITCHEN APPLIANCES CATEGORY ---
  {
    id: 'prod-04',
    name: 'Preethi Zodiac 2.0 750W Mixer Grinder',
    category: 'Kitchen Appliances',
    department: 'Kitchen Appliances',
    material: 'Pure Copper Vega W5 Motor & Stainless Steel Jars',
    finish: 'Midnight Black & Rose Gold Trim',
    dimensions: 'Includes 5 Multipurpose Jars',
    price: '₹8,990',
    tag: 'Authorized Dealer',
    rating: 4.9,
    reviewsCount: 120,
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'India’s #1 trusted kitchen mixer grinder equipped with high-torque Vega W5 motor, 5 versatile stainless steel jars, 3D blades, and MasterChef food processor jar for dough kneading and slicing.',
    features: ['Lifelong Free Service Support', 'Vega W5 High-Torque Motor', '5 Stainless Steel Jars with 3D Blades', 'Overload Protection'],
    inStock: true,
    leadTime: 'Direct Showroom Stock'
  },
  {
    id: 'prod-05',
    name: 'Butterfly Rhino 2-Litre Tabletop Wet Grinder',
    category: 'Kitchen Appliances',
    department: 'Kitchen Appliances',
    material: 'Shock-Proof ABS Body & Conical Granite Stones',
    finish: 'Cherry Red Gloss',
    dimensions: '2.0 Litres Capacity (150W Motor)',
    price: '₹5,490',
    tag: 'Festive Deal',
    rating: 4.8,
    reviewsCount: 78,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Engineered for smooth, fluffy idli and dosa batter with dual conical granite roller stones, high-tensile 150W single-phase motor, and unbreakable food-grade polycarbonate lid.',
    features: ['High Torque 150W Motor', '2 Cylindrical Granite Stones', 'Durable Food Grade Body', '5-Year Brand Motor Warranty'],
    inStock: true,
    leadTime: 'Showroom Stock Ready'
  },

  // --- VESSELS & COOKWARE CATEGORY ---
  {
    id: 'prod-06',
    name: 'Kumbakonam Pure Brass Kuthu Vilakku (Pair)',
    category: 'Vessels',
    department: 'Vessels',
    material: 'Pure Handcast Kumbakonam Brass',
    finish: 'Mirror Gold Traditional Finish',
    dimensions: '3.5 Feet Height (Set of 2 Pieces)',
    price: '₹14,800',
    tag: 'Auspicious Brass',
    rating: 5.0,
    reviewsCount: 55,
    image: 'https://images.unsplash.com/photo-1584990347449-39745582f6f7?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584990347449-39745582f6f7?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Authentic hand-cast heavy brass Annapakshi temple lamps crafted by generational artisans of Kumbakonam. An indispensable sacred heirloom for South Indian weddings and housewarmings.',
    features: ['100% Solid Heavy Brass Casting', 'Traditional Annapakshi Finial', '5-Wick Auspicious Deepam Tray', 'Generational Heirloom Quality'],
    inStock: true,
    leadTime: 'In Stock for Direct Inspection'
  },
  {
    id: 'prod-07',
    name: 'Prestige Svachh Tri-Ply Stainless Steel Cooker & Pan Set',
    category: 'Cooker',
    department: 'Vessels',
    material: 'Food-Grade 304 Tri-Ply Stainless Steel',
    finish: 'Mirror Exterior & Induction Base',
    dimensions: '3L & 5L Cooker + Kadai + Fry Pan',
    price: '₹6,750',
    tag: 'Special Offer',
    rating: 4.8,
    reviewsCount: 92,
    image: 'https://images.unsplash.com/photo-1584990347449-39745582f6f7?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584990347449-39745582f6f7?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Heavy gauge 3-layer steel construction prevents burning and ensures even heat distribution across gas and induction hobs with spillage-control deep lid.',
    features: ['Deep Lid for Spillage Control', 'Tri-Ply Thermal Base', '5-Year Prestige Replacement Warranty', 'Dishwasher Safe'],
    inStock: true,
    leadTime: 'Showroom Stock Ready'
  },

  // --- ELECTRONICS & HOME APPLIANCES ---
  {
    id: 'prod-08',
    name: 'LG 55" 4K Ultra HD Smart LED TV',
    category: 'Home Appliances',
    department: 'Home Appliances',
    material: 'IPS 4K Display with HDR10 Pro',
    finish: 'Ultra Slim Bezel Dark Iron Gray',
    dimensions: '55 Inch Cinema Screen',
    price: '₹42,990',
    tag: 'Authorized LG Dealer',
    rating: 4.9,
    reviewsCount: 84,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Powered by α5 Gen6 AI Processor 4K with Magic Remote, built-in OTT apps, Apple AirPlay 2, and AI Sound. Includes free wall bracket installation and comprehensive manufacturer warranty.',
    features: ['α5 Gen6 AI Processor 4K', 'Magic Remote with Voice Assistant', 'Official 3-Year Panel Warranty', 'Free Wall Bracket & Doorstep Setup'],
    inStock: true,
    leadTime: 'Free Doorstep Setup'
  },
  {
    id: 'prod-09',
    name: 'Whirlpool 265L Double Door Frost-Free Refrigerator',
    category: 'Home Appliances',
    department: 'Home Appliances',
    material: 'IntelliSense Inverter Compressor',
    finish: 'Steel Titanium Finish',
    dimensions: '265 Litres (3-Star Energy Rating)',
    price: '₹26,490',
    tag: 'Top Rated',
    rating: 4.8,
    reviewsCount: 66,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Equipped with Microblock Technology to keep fruits and vegetables fresh for up to 15 days, auto frost-free cooling, and quiet inverter compressor with low power consumption.',
    features: ['10-Year Compressor Warranty', 'IntelliFresh Technology', 'Toughened Glass Shelves', 'Auto Frost-Free Cooling'],
    inStock: true,
    leadTime: 'Showroom Stock Ready'
  },
  {
    id: 'prod-10',
    name: 'Bosch 7.5 Kg Fully Automatic Front Load Washer',
    category: 'Home Appliances',
    department: 'Home Appliances',
    material: 'EcoSilence Drive Inverter Motor',
    finish: 'Silver Metallic',
    dimensions: '7.5 Kg Capacity (1200 RPM)',
    price: '₹32,900',
    tag: 'German Engineering',
    rating: 4.9,
    reviewsCount: 45,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'EcoSilence drive motor delivers whisper-quiet operation and gentle fabric care. Integrated heater eliminates 99.9% of bacteria and allergens with SpeedPerfect 65% faster cycles.',
    features: ['12-Year Motor Warranty', 'In-built Heater for 99.9% Allergy Care', 'Anti-Vibration Side Panels', 'SpeedPerfect Quick Wash'],
    inStock: true,
    leadTime: 'Free Installation Included'
  },

  // --- CYCLES CATEGORY ---
  {
    id: 'prod-11',
    name: 'Hero Sprint Pro 21-Speed Alloy Geared MTB',
    category: 'Cycle',
    department: 'Cycle',
    material: 'Lightweight Hydroformed Alloy 6061 Frame',
    finish: 'Matte Neon Green & Carbon Black',
    dimensions: '27.5T Wheels with Front Lockout Suspension',
    price: '₹14,500',
    tag: 'Hero Dealership',
    rating: 4.8,
    reviewsCount: 52,
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Equipped with original Shimano 21-speed gears, mechanical dual disc brakes, and front suspension for all-terrain versatility and daily commuting.',
    features: ['Original Shimano Tourney 21-Speed', 'Dual Mechanical Disc Brakes', 'Lifetime Frame Warranty', 'Includes Stand, Lock & Mudguards'],
    inStock: true,
    leadTime: 'Ready to Ride at Aranthangi'
  },
  {
    id: 'prod-12',
    name: 'BSA Ladybird Shine 26T Comfort Cycle',
    category: 'Cycle',
    department: 'Cycle',
    material: 'Low Step-Through Ergonomic Steel Frame',
    finish: 'Pearl Magenta Pink with Front Wire Basket',
    dimensions: '26T Wheel Size with Integrated Dress Guard',
    price: '₹7,800',
    tag: 'Popular Choice',
    rating: 4.9,
    reviewsCount: 74,
    image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'India’s most loved ladies cycle with low step-through frame for easy mounting, front wire basket, cushioned wide saddle, and full saree/dress guard.',
    features: ['Low Step-Through Ergonomic Frame', 'Front Storage Basket & Bell', 'Full Length Saree/Dress Guard', 'Cushioned Wide Spring Saddle'],
    inStock: true,
    leadTime: 'Showroom Stock Ready'
  }
];

// Global Active State
let currentFilter = 'All';
let currentHeroSlideIndex = 0;
let heroSlideTimer = null;

// Helper: Show toast notification
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;
  toast.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 14px; height: 14px; color: var(--color-gold);"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>${message}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Helper: Build WhatsApp URL for specific product
function buildProductWhatsAppUrl(prod, customNote = '') {
  const pName = prod ? prod.name : 'Product Inquiry';
  const pCode = prod ? `(Ref: ${prod.id} - ${prod.price})` : '';
  const message = `Hello Sri Ilakkiya!
I am inquiring about: *${pName}* ${pCode}.
${customNote ? `Note: ${customNote}` : 'Please share the latest offer price, showroom availability, and delivery schedule to my location.'}
Thank you!`;
  return `https://wa.me/${SHOWROOM_PHONE_RAW}?text=${encodeURIComponent(message)}`;
}

// 4. FETCH OFFERS (Stored by Admin)
function getActiveOffers() {
  const defaultOffersSeed = [
    {
      id: 'off-furniture-02',
      titleTamil: 'தேக்கு மர பர்னிச்சர் திருவிழா',
      titleEnglish: 'Solid Teak Furniture Festival',
      title: 'தேக்கு மர பர்னிச்சர் திருவிழா (Solid Teak Furniture Festival)',
      discount: 'Free Luxury Spring Mattress Worth ₹14,500',
      category: 'Furniture',
      expiry: 'First 25 Bookings Only',
      desc: 'Order any Nilambur Solid Teak King Bed or 6-Seater Chettinad Dining Table and receive a premium high-density spring mattress worth ₹14,500 completely free!',
      image: 'assets/banner_showroom.jpg',
      active: true
    },
    {
      id: 'off-seervarisai-01',
      titleTamil: 'திருமண சீர்வரிசை மெகா ஆஃபர்',
      titleEnglish: 'Wedding Seervarisai Mega Combo',
      title: 'திருமண சீர்வரிசை மெகா ஆஃபர் (Wedding Seervarisai Mega Combo)',
      discount: 'Up to 35% Off + Free Gifts',
      category: 'Wedding Seervarisai',
      expiry: 'Marriage Season Special',
      desc: 'Complete 51-item wedding bundle: 1 Solid Teak King Bed, Eversilver/Wooden Bureau, 43" Smart LED TV, Double Door Refrigerator, Preethi Mixer Grinder, Wet Grinder, and Kumbakonam Brass Vilakku Pair with free delivery!',
      image: 'assets/banner_seervarisai.jpg',
      active: true
    },
    {
      id: 'off-kitchen-03',
      titleTamil: 'சமையலறை உபகரணங்கள் காம்போ',
      titleEnglish: 'Kitchen Appliances Duo Combo',
      title: 'சமையலறை உபகரணங்கள் காம்போ (Kitchen Appliances Duo Combo)',
      discount: 'Special Combo Price ₹9,999 Only',
      category: 'Kitchen Appliances',
      expiry: 'Limited Stock Available',
      desc: 'Get the Preethi Zodiac 750W Heavy Mixer Grinder + Butterfly 2L Tabletop Wet Grinder together with a free 3L Prestige Pressure Cooker and Non-Stick Tawa!',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
      active: true
    }
  ];

  const saved = localStorage.getItem('ilakkiya_offers');
  if (saved) {
    try {
      let parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        let needsUpdate = false;
        parsed = parsed.map(o => {
          if (!o.titleTamil || (o.desc && (o.desc.includes('100% தூய') || o.desc.includes('செட்டிநாடு டைனிங் டேபிள் வாங்கும் அனைவருக்கும்')))) {
            needsUpdate = true;
            if (o.id === 'off-furniture-02' || (o.title && (o.title.includes('டேக்') || o.title.includes('Teak')))) {
              return defaultOffersSeed[0];
            } else if (o.id === 'off-seervarisai-01' || (o.title && (o.title.includes('சீர்வரிசை') || o.title.includes('Seervarisai')))) {
              return defaultOffersSeed[1];
            } else if (o.id === 'off-kitchen-03' || (o.title && (o.title.includes('Preethi') || o.title.includes('Kitchen')))) {
              return defaultOffersSeed[2];
            }
          }
          return o;
        });
        if (needsUpdate) {
          localStorage.setItem('ilakkiya_offers', JSON.stringify(parsed));
        }
        return parsed.filter(o => o.active !== false);
      }
    } catch (e) {
      console.error(e);
    }
  }
  return defaultOffersSeed;
}

// 5. RENDER DYNAMIC OFFERS IN DEDICATED SHOWCASE SECTION
function renderDynamicOffers() {
  const container = document.getElementById('dynamicOffersGrid');
  const section = document.getElementById('festiveOffersSection');
  if (!container) return;

  const offers = getActiveOffers();
  if (offers.length === 0) {
    if (section) section.style.display = 'none';
    return;
  }
  if (section) section.style.display = 'block';

  container.innerHTML = offers.map(o => `
    <div class="festive-offer-card">
      <div>
        <div class="offer-card-banner">
          <img src="${o.image}" alt="${o.title}" loading="lazy" />
          <span class="offer-badge-float">${o.discount}</span>
        </div>

        <div class="offer-content-box">
          <span class="offer-category-tag">${o.category || 'Special Offer'}</span>
          <h3 class="offer-headline">${o.title}</h3>
          <p class="offer-summary">${o.desc || 'Special promotional rate available at showroom.'}</p>
          <div>
            <span class="offer-expiry-pill">⏳ ${o.expiry || 'Limited Period'}</span>
          </div>
        </div>
      </div>

      <div class="offer-footer-action">
        <a href="https://wa.me/${SHOWROOM_PHONE_RAW}?text=${encodeURIComponent(`Hello Sri Ilakkiya! I want to claim this offer: *${o.title}* (${o.discount}). Please share package details and delivery schedule.`)}" 
           target="_blank" rel="noopener noreferrer" class="btn-submit-whatsapp" style="margin-top: 0; padding: 0.65rem;">
          <svg viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px;">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span>Claim Offer on WhatsApp</span>
        </a>
      </div>
    </div>
  `).join('');
}

// 6. RENDER HERO SLIDER (Signboard Identity with Bilingual Shop Name + Dynamic Offers)
function renderHeroCarousel() {
  const sliderWrap = document.getElementById('heroSliderWrap');
  const indicatorWrap = document.getElementById('sliderIndicators');
  if (!sliderWrap) return;

  const offers = getActiveOffers();

  // Slide 1: Grand Bilingual Store Board Slide (Tamil & English)
  const defaultSlide1 = {
    isBrandSign: true,
    titleTamil: 'ஸ்ரீ இலக்கியா ஸ்டோர்ஸ்',
    titleEnglish: 'SRI ILAKKIYA STORES',
    sub: 'Near Sri Pachai Kaliamman Temple, Aranthangi',
    tagline: 'Vessels • Furniture • Electronics • Cycles • Seervarisai Studio',
    temple: 'Showroom Landmark: Near Sri Pachai Kaliamman Temple',
    phone: 'Cell: +91 94861 59262',
    image: 'assets/banner_showroom.jpg'
  };

  const allSlides = [defaultSlide1, ...offers];

  sliderWrap.querySelectorAll('.hero-slide').forEach(s => s.remove());

  allSlides.forEach((slide, idx) => {
    const slideDiv = document.createElement('div');
    slideDiv.className = `hero-slide ${idx === 0 ? 'active' : ''}`;
    slideDiv.id = `heroSlide-${idx}`;

    if (slide.isBrandSign) {
      slideDiv.innerHTML = `
        <img src="${slide.image}" alt="Sri Ilakkiya Showroom" class="hero-slide-bg" />
        <div class="hero-slide-overlay">
          <div class="hero-slide-content">
            <div class="signboard-badge-top">
              <span>🏛️ ${slide.temple}</span>
              <span>• ${slide.phone}</span>
            </div>
            
            <h1 class="hero-tamil-title">
              <span class="tamil-title-sign">${slide.titleTamil}</span>
              <span class="english-title-sign">${slide.titleEnglish}</span>
            </h1>

            <div class="hero-arrow-ribbon">
              <span class="dir-arrow-badge">➤</span>
              <span>${slide.sub}</span>
            </div>

            <div class="hero-seervarisai-pill">
              ⭐ ${slide.tagline}
            </div>

            <div class="hero-slide-actions">
              <a href="#festiveOffersSection" class="btn-hero-offer">
                <span>View Live Offers</span>
                <span style="font-size: 1.1rem; font-weight: 900;">➔</span>
              </a>
              <a href="tel:+919486159262" class="btn-hero-call">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 16px; height: 16px;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>Call +91 94861 59262</span>
              </a>
            </div>
          </div>
        </div>
      `;
    } else {
      const titleTamil = slide.titleTamil || (slide.title && slide.title.includes('(') ? slide.title.split('(')[0].trim() : 'ஸ்ரீ இலக்கியா சிறப்பு ஆஃபர்');
      const titleEnglish = slide.titleEnglish || (slide.title && slide.title.includes('(') ? slide.title.split('(')[1].replace(')', '').trim() : (slide.title || 'Special Showroom Offer'));

      slideDiv.innerHTML = `
        <img src="${slide.image}" alt="${titleEnglish}" class="hero-slide-bg" />
        <div class="hero-slide-overlay">
          <div class="hero-slide-content">
            <span class="hot-badge-pill" style="background: var(--color-maroon); color: var(--color-golden-yellow); border: 1.5px solid var(--color-golden-yellow); font-size: 0.85rem; padding: 0.35rem 0.95rem; margin-bottom: 0.85rem; font-weight: 800; display: inline-flex; align-items: center; gap: 0.4rem;">
              ⚡ ${slide.discount}
            </span>
            
            <h2 class="hero-tamil-title">
              <span class="tamil-title-sign">${titleTamil}</span>
              <span class="english-title-sign">${titleEnglish}</span>
            </h2>

            <p style="font-size: 0.95rem; color: #FFFFFF; margin-bottom: 1.25rem; line-height: 1.5; max-width: 560px; text-shadow: 0 1px 3px rgba(0,0,0,0.85);">
              ${slide.desc}
            </p>

            <div class="hero-slide-actions">
              <a href="https://wa.me/${SHOWROOM_PHONE_RAW}?text=${encodeURIComponent(`Hello Sri Ilakkiya! I want to claim this offer: *${titleEnglish}* (${slide.discount})`)}" 
                 target="_blank" rel="noopener noreferrer" class="btn-hero-offer">
                <span>Claim Offer on WhatsApp</span>
                <svg viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px;"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </a>
              <span style="font-size: 0.85rem; color: var(--color-golden-yellow); font-weight: 700; background: rgba(0,0,0,0.6); padding: 0.4rem 0.75rem; border-radius: 4px; border: 1px solid var(--color-golden-yellow);">
                ⏳ ${slide.expiry || 'Limited Period'}
              </span>
            </div>
          </div>
        </div>
      `;
    }
    const arrows = sliderWrap.querySelector('.slider-nav-arrows');
    if (arrows) {
      sliderWrap.insertBefore(slideDiv, arrows);
    } else {
      sliderWrap.appendChild(slideDiv);
    }
  });

  // Render indicator dots
  if (indicatorWrap) {
    indicatorWrap.innerHTML = allSlides.map((_, i) => `
      <span class="slider-dot ${i === 0 ? 'active' : ''}" onclick="goToHeroSlide(${i})"></span>
    `).join('');
  }

  currentHeroSlideIndex = 0;
  startHeroSlideTimer();
}

// Slider Navigation Controls
window.goToHeroSlide = function(idx) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  if (slides.length === 0) return;

  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  currentHeroSlideIndex = (idx + slides.length) % slides.length;

  const targetSlide = document.getElementById(`heroSlide-${currentHeroSlideIndex}`);
  if (targetSlide) targetSlide.classList.add('active');
  if (dots[currentHeroSlideIndex]) dots[currentHeroSlideIndex].classList.add('active');

  startHeroSlideTimer();
};

window.nextHeroSlide = function() {
  goToHeroSlide(currentHeroSlideIndex + 1);
};

window.prevHeroSlide = function() {
  goToHeroSlide(currentHeroSlideIndex - 1);
};

function startHeroSlideTimer() {
  if (heroSlideTimer) clearInterval(heroSlideTimer);
  heroSlideTimer = setInterval(() => {
    nextHeroSlide();
  }, 6500);
}

// 7. RENDER SIDEBAR HOT OFFER WIDGET (English)
function renderSidebarHotOffer() {
  const widget = document.getElementById('sidebarHotOffer');
  if (!widget) return;

  const offers = getActiveOffers();
  if (offers.length === 0) {
    widget.style.display = 'none';
    return;
  }
  widget.style.display = 'block';

  const topOffer = offers[0];

  widget.innerHTML = `
    <span class="hot-badge-pill">🔥 Active Hot Offer</span>
    <img src="${topOffer.image}" alt="${topOffer.title}" class="hot-offer-thumb" />
    <span style="font-size: 0.75rem; color: #C62828; font-weight: 800; display: block; margin-bottom: 2px;">
      ${topOffer.discount}
    </span>
    <h4 class="hot-offer-title">${topOffer.title}</h4>
    <p class="hot-offer-desc">${topOffer.desc}</p>
    <a href="https://wa.me/${SHOWROOM_PHONE_RAW}?text=${encodeURIComponent(`Hello Sri Ilakkiya! I want to claim this offer: *${topOffer.title}* (${topOffer.discount})`)}" 
       target="_blank" rel="noopener noreferrer" class="hot-offer-btn">
      <svg viewBox="0 0 24 24" fill="currentColor" style="width: 14px; height: 14px;"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      <span>Enquire on WhatsApp</span>
    </a>
  `;
}

// 8. RENDER SIDEBAR CATEGORY LIST (English)
function renderSidebarCategories() {
  const list = document.getElementById('sidebarCategoryList');
  if (!list) return;

  list.innerHTML = CATEGORIES.map(cat => `
    <li class="sidebar-cat-item ${currentFilter === cat.filterTag ? 'active' : ''}" onclick="applyProductFilter('${cat.filterTag}')">
      <div class="sidebar-cat-left">
        <span class="sidebar-cat-icon">${cat.icon}</span>
        <span>${cat.name}</span>
      </div>
      <span class="sidebar-cat-count">${cat.count}</span>
    </li>
  `).join('');
}

// 9. RENDER POPULAR PRODUCTS GRID WITH FILTER (English)
function renderProducts() {
  const container = document.getElementById('productGrid');
  if (!container) return;

  const filtered = currentFilter === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => {
        const cat = (p.category || '').toLowerCase();
        const dept = (p.department || '').toLowerCase();
        const target = currentFilter.toLowerCase();
        if (target === 'furniture') {
          return dept === 'furniture' || cat === 'furniture';
        }
        if (target === 'vessels') {
          return dept === 'vessels' || cat === 'vessels' || cat === 'cooker';
        }
        if (target === 'cooker') {
          return cat === 'cooker' || dept === 'vessels';
        }
        if (target === 'wedding seervarisai') {
          return dept === 'wedding seervarisai' || cat === 'wedding seervarisai';
        }
        return cat === target || dept === target;
      });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; background: #FAF8F5; border-radius: 8px; border: 1.5px dashed #DFD3C2;">
        <h4 style="font-size: 1.15rem; color: #2D1E18;">Custom Models Available in Showroom</h4>
        <p style="font-size: 0.82rem; color: #6B6258; margin: 0.5rem 0 1rem;">Over 100+ exclusive models available on physical display at our Aranthangi gallery.</p>
        <a href="https://wa.me/${SHOWROOM_PHONE_RAW}?text=Hello%20Sri%20Ilakkiya!%20I%20am%20looking%20for%20a%20specific%20product%20in%20your%20showroom." target="_blank" rel="noopener noreferrer" class="btn-hero-offer" style="display: inline-flex;">
          Enquire on WhatsApp
        </a>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <div class="product-card">
      <div class="product-img-box">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <span class="product-tag-float">${p.tag}</span>
        <button type="button" class="btn-quick-view" onclick="openProductModal('${p.id}')">Quick View</button>
      </div>

      <div class="product-info-box">
        <div class="product-meta-row">
          <span class="product-category-text">${p.category}</span>
          <div class="product-rating">
            <svg viewBox="0 0 24 24" fill="currentColor" style="width: 13px; height: 13px; color: #FFB300;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <span>${p.rating}</span>
            <small>(${p.reviewsCount})</small>
          </div>
        </div>

        <h3 class="product-card-title">${p.name}</h3>
        <p class="product-card-material">${p.material}</p>

        <div class="product-card-footer">
          <div>
            <span class="product-price-label">Price:</span>
            <div class="product-price">${p.price}</div>
          </div>
          <a href="${buildProductWhatsAppUrl(p)}" target="_blank" rel="noopener noreferrer" class="btn-cart-whatsapp" title="WhatsApp Enquiry">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            <span>Order</span>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

// ==========================================================================
// 9B. COMPREHENSIVE UTENSILS & KITCHENWARE DIRECTORY (பாத்திரக் கடை கேலரி)
// ==========================================================================
const UTENSIL_CATEGORIES = [
  {
    id: 'cat-traditional',
    filterTag: 'Traditional',
    tamilTitle: 'பாரம்பரிய சமையல் பாத்திரங்கள்',
    englishTitle: 'Traditional Heritage Cookware',
    count: '11+ வகைகள்',
    badge: 'Heritage Cookware',
    image: 'assets/category_traditional_cookware.jpg',
    tagline: 'Mastercrafted cast iron, pure copper, brass and bronze vessels for wholesome traditional cooking.',
    chips: [
      'இரும்புச் சட்டி (Cast Iron Kadai)',
      'இரும்புத் தோசைக்கல் (Heavy Tawa)',
      'செம்பு அண்டா (Copper Pots)',
      'பித்தளை அண்டா (Brass Pots)',
      'வெண்கலப் பானை (Bronze Pots)',
      'அம்மிக்கல் & ஆட்டுக்கல்'
    ],
    fullList: [
      'இரும்புச் சட்டி (Cast Iron Kadai - Small, Medium, Heavy-Gauge)',
      'இரும்புத் தோசைக்கல் (Round & Square Traditional Dosa Tawas)',
      'செம்பு அண்டா (Pure Handcrafted Copper Storage & Cooking Pots)',
      'பித்தளை அண்டா (Heavy Brass Cooking Caldrons & Biryani Pots)',
      'வெண்கலப் பானை (Authentic Bronze Pongal & Cooking Pots)',
      'பாரம்பரிய ஆட்டுக்கல் & குழவிக்கல்',
      'அம்மிக்கல் & அரைக்கும் கல்',
      'மர மத்து & கைவினை மரப் பொருட்கள்'
    ]
  },
  {
    id: 'cat-dining',
    filterTag: 'Dining',
    tamilTitle: 'பரிமாறும் பாத்திரங்கள் & தட்டுகள்',
    englishTitle: 'Dining & Serving Collection',
    count: '10+ வகைகள்',
    badge: 'Dining & Serving',
    image: 'assets/category_dining_serving.jpg',
    tagline: 'Food-grade stainless steel plates, compartment thalis, serving bowls and jugs for everyday and royal feasts.',
    chips: [
      'சாப்பாட்டு தட்டு (Plates)',
      'Meals தட்டு & Compartment தட்டு',
      'Serving Tray',
      'பழத் தட்டு (Fruit Tray)',
      'ஸ்வீட் பாக்ஸ்',
      'Ice Cream & Soup Bowl',
      'தண்ணீர் ஜக்',
      'Serving Spoon Set'
    ],
    fullList: [
      'சாப்பாட்டு தட்டு (Stainless Steel & Brass Dinner Plates)',
      'Meals தட்டு (South Indian Traditional Thali)',
      'Compartment தட்டு (3, 4 & 5 Partitioned Meals Plates)',
      'Serving Tray (Decorative & Heavy Stainless Steel Trays)',
      'பழத் தட்டு (Fruit Serving Trays)',
      'ஸ்வீட் பாக்ஸ் (Gift Sweet Boxes)',
      'Ice Cream Bowl & Spoons Set',
      'Soup Bowl & Gravy Bowls Set',
      'தண்ணீர் ஜக் (Water Serving Jugs 1.5L to 2.5L)',
      'Serving Spoon Set (Ladle, Rice Server, Sambar Spoons)'
    ]
  },
  {
    id: 'cat-teacoffee',
    filterTag: 'TeaCoffee',
    tamilTitle: 'டீ & காபி உபகரணங்கள்',
    englishTitle: 'Tea & Coffee Brewing Collection',
    count: '8+ வகைகள்',
    badge: 'Tea & Coffee',
    image: 'assets/category_tea_coffee.jpg',
    tagline: 'Kumbakonam brass coffee filters, traditional dabara sets, tea kettles & 24hr thermal flasks.',
    chips: [
      'டீ கெட்டில் (Tea Kettle)',
      'காபி ஃபில்டர் (Coffee Filter)',
      'டபரா செட் (Dabara Set)',
      'பால் காய்ச்சும் பாத்திரம்',
      'Tea Strainer',
      'Thermal Flask',
      'Vacuum Bottle',
      'Milk Can (பால் கேன்)'
    ],
    fullList: [
      'டீ கெட்டில் (Stainless Steel Tea Kettles 1L to 3L)',
      'காபி ஃபில்டர் (Kumbakonam Brass & Steel Drip Coffee Filters)',
      'டபரா செட் (Heavy Brass & Steel Dabara Sets)',
      'பால் காய்ச்சும் பாத்திரம் (Sandwich Bottom Milk Boiling Pots)',
      'Tea Strainer (Fine Mesh Stainless Steel Strainers)',
      'Thermal Flask (Hot & Cold 24-Hour Stainless Steel Flasks)',
      'Vacuum Bottle (Insulated Travel & Gym Bottles)',
      'Milk Can (பால் கேன் with Secure Locking Lid 1L to 10L)'
    ]
  },
  {
    id: 'cat-baking',
    filterTag: 'Baking',
    tamilTitle: 'பேக்கிங் & விசேஷ பலகார பாத்திரங்கள்',
    englishTitle: 'Baking & Special Cooking Items',
    count: '8+ வகைகள்',
    badge: 'Special Cooking',
    image: 'assets/category_baking_special.jpg',
    tagline: 'Authentic murukku presses, idiyappam makers, puttu makers, appam pans and modern cake moulds.',
    chips: [
      'Cake Mould & Baking Tray',
      'Muffin & Bread Tin',
      'இடியாப்பம் மேக்கர்',
      'முறுக்கு பிழிப்பான் (Murukku Press)',
      'சேவை மேக்கர்',
      'புட்டு மேக்கர்',
      'Modak Mould',
      'Appam சட்டி'
    ],
    fullList: [
      'Cake Mould (Round, Heart & Square Non-Stick Cake Pans)',
      'Baking Tray & Muffin Tray (6 & 12 Cup Muffin Tins)',
      'Bread Tin & Loaf Baking Pans',
      'இடியாப்பம் மேக்கர் (Heavy Brass & Stainless Steel Idiyappam Presses)',
      'முறுக்கு பிழிப்பான் (Murukku Press with 6 Brass Dies)',
      'சேவை மேக்கர் (Traditional Hand-Crank Sevai Maker)',
      'புட்டு மேக்கர் (Stainless Steel Puttu Kudam & Steamer)',
      'Modak Mould (Brass & Aluminum Kozhukkattai Moulds)',
      'Appam சட்டி (Cast Iron & Non-Stick Curved Appam Pans with Lid)'
    ]
  },
  {
    id: 'cat-storage',
    filterTag: 'Storage',
    tamilTitle: 'அடுப்பறை சேமிப்பு டப்பா & டிரம்',
    englishTitle: 'Storage Containers & Rice Drums',
    count: '6+ வகைகள்',
    badge: 'Storage & Drums',
    image: 'assets/category_storage_containers.jpg',
    tagline: 'Heavy steel rice storage drums, traditional anjarai petti spice boxes, grocery dabbas and tiffin carriers.',
    chips: [
      'பெரிய அரிசி டிரம் (Rice Drum)',
      'பருப்பு டப்பா செட்',
      'மசாலா பெட்டி (Anjarai Petti)',
      'மாவு சல்லடை',
      'காய்கறி கூடை',
      'Lunch Carrier',
      'Pickle Jar (ஊறுகாய் ஜாடி)'
    ],
    fullList: [
      'பெரிய அரிசி டிரம் (Heavy Gauge Stainless Steel Rice Storage Drums 10kg to 50kg)',
      'பருப்பு டப்பா (Airtight Pulse & Grocery Dabbas Set)',
      'மசாலா பெட்டி (Traditional 7-Cup Anjarai Petti with Lid)',
      'மாவு சல்லடை (Stainless Steel Flour Sifter Sets with Interchangeable Meshes)',
      'காய்கறி கூடை (Wire Mesh & Tiered Vegetable Racks)',
      'Lunch Carrier (2, 3 & 4 Tier Stainless Steel Tiffin Carriers)',
      'Water Dispenser (Matka & Stainless Steel Water Containers with Tap)',
      'Pickle Jar (Ceramic Bharani & Glass Pickle Jars)',
      'Dry Fruit Box & Air-Tight Modular Containers',
      'Fridge Storage Boxes (Multi-Compartment Food Storage Containers)'
    ]
  },
  {
    id: 'cat-cleaning',
    filterTag: 'Cleaning',
    tamilTitle: 'சுத்தம் & வீட்டு உபயோகப் பொருட்கள்',
    englishTitle: 'Cleaning & Utility Products',
    count: '9+ வகைகள்',
    badge: 'Utility & Cleaning',
    image: 'assets/category_cleaning_utility.jpg',
    tagline: 'Heavy stainless steel dish drying racks, wall plate organizers, scrubbers, sink strainers and mop buckets.',
    chips: [
      'Dish Drainer (பாத்திர வடிப்பான்)',
      'Kitchen Rack (அடுக்குகள்)',
      'Dishwashing Scrubber & Brush',
      'Sink Strainer',
      'Bucket & Mug',
      'Mop Bucket',
      'Pedal Dustbin',
      'Soap Dispenser'
    ],
    fullList: [
      'Dish Drainer (Heavy Stainless Steel Dish Drying Basket with Tray)',
      'Kitchen Rack (Wall-Mounted Stainless Steel 2, 3 & 4 Tier Plate Racks)',
      'Dishwashing Scrubber & Bottle Cleaning Brushes',
      'Sink Strainer (Stainless Steel Anti-Clog Sink Basket)',
      'Bucket & Mug (Heavy Duty Plastic & Stainless Steel Buckets)',
      'Mop Bucket (Spin Mop Buckets with Stainless Steel Wringer)',
      'Dustbin (Stainless Steel Pedal Dustbins & Kitchen Bins)',
      'Tissue Holder & Paper Towel Stands',
      'Soap Dispenser (Automatic & Manual Kitchen Dispensers)'
    ]
  },
  {
    id: 'cat-catering',
    filterTag: 'Catering',
    tamilTitle: 'ஹோட்டல் & கேட்டரிங் பெரிய பாத்திரங்கள்',
    englishTitle: 'Hotel & Catering Heavy Supplies',
    count: '10+ வகைகள்',
    badge: 'Hotel & Catering',
    image: 'assets/category_hotel_catering.jpg',
    tagline: 'Commercial heavy biryani degs, bulk andas, commercial pressure cookers and catering chafing warmers.',
    chips: [
      'பெரிய பிரியாணி அண்டா (Biryani Deg)',
      'பெரிய அண்டா (Bulk Anda)',
      'Commercial Pressure Cooker (12L-20L)',
      'பெரிய சாம்பார் பாத்திரம்',
      'Milk Boiler',
      'Buffet Food Warmer (Chafing Dish)',
      'பெரிய Ladle'
    ],
    fullList: [
      'பெரிய பிரியாணி அண்டா (Heavy Copper Bottom Big Biryani Deg Pots 10kg to 50kg)',
      'பெரிய அண்டா (Massive Stainless Steel & Brass Boiling Caldrons)',
      'Commercial Pressure Cooker (Prestige & Hawkins Heavy Duty 12L, 16L, 20L)',
      'பெரிய சாம்பார் பாத்திரம் (Catering Sambar & Rasam Pots with Heavy Handles)',
      'Commercial Milk Boiler (Double-Jacketed 10L to 30L Milk Boilers)',
      'Bulk Rice Container & Commercial Steamer Sets',
      'Buffet Food Warmer (Stainless Steel Roll-Top Chafing Dishes)',
      'Hotel Water Jug (Heavy 5L Insulated Water Serving Dispensers)',
      'பெரிய Ladle (Extra-Long Handle Catering Spoons, Skimmers & Rice Ladles)'
    ]
  },
  {
    id: 'cat-pooja',
    filterTag: 'Pooja',
    tamilTitle: 'பூஜை & மங்கள விழா பொருட்கள்',
    englishTitle: 'Sacred Brass Pooja & Festival Items',
    count: '10+ வகைகள்',
    badge: 'Pooja & Spiritual',
    image: 'assets/category_pooja_items.jpg',
    tagline: 'Auspicious Kumbakonam brass kuthu vilakku, Kamakshi deepams, pooja bells, kalasams and sacred pooja sets.',
    chips: [
      'குத்துவிளக்கு (Kuthu Vilakku)',
      'கற்பூரத் தட்டு (Aarati Plate)',
      'பூஜை மணி (Brass Bell)',
      'தூபக்கால் (Incense Holder)',
      'தீபம் & அகல் விளக்கு',
      'கலசம் (Sacred Kalasam)',
      'தாம்பூலத் தட்டு',
      'பஞ்சபாத்திரம்'
    ],
    fullList: [
      'குத்துவிளக்கு (Authentic Kumbakonam Pure Brass Annapakshi Kuthu Vilakku 1.5ft to 5ft)',
      'கற்பூரத் தட்டு (Ornate Brass Camphor Aarati Plates with Handle)',
      'பூஜை மணி (Sacred Brass Temple Bells with Nandi & Garuda finials)',
      'தூபக்கால் (Long Handle Brass Incense & Dhoop Holders)',
      'தீபம் & அகல் விளக்கு (Kamakshi Deepam, Ashtalakshmi Vilakku & Brass Diyas)',
      'கலசம் (Traditional Brass & Copper Kalasam Pots for Pooja)',
      'தாம்பூலத் தட்டு (Handcrafted Brass Betel Offering Trays)',
      'பஞ்சபாத்திரம் (Pooja Pancha Pathiram with Uthirani Spoon)',
      'சாம்பிராணி கிண்ணம் (Brass Sambrani Dhoop Charcoal Burners)'
    ]
  },
  {
    id: 'cat-kids',
    filterTag: 'Kids',
    tamilTitle: 'குழந்தைகள் & பயண உபயோகப் பொருட்கள்',
    englishTitle: 'Kids School Essentials & Travel Gear',
    count: '7+ வகைகள்',
    badge: 'Kids & Travel',
    image: 'assets/category_kids_travel.jpg',
    tagline: 'Safe food-grade cartoon lunch boxes, school thermos flasks, insulated bags and durable travel bottles.',
    chips: [
      'Kids Lunch Box (கார்ட்டூன் உணவுப் பெட்டி)',
      'Cartoon Water Bottle',
      'School Water Bottle',
      'Insulated Lunch Bag',
      'Travel Vacuum Flask',
      'Foldable Water Bottle',
      'Compact Food Jar'
    ],
    fullList: [
      'Kids Lunch Box (Compartment Stainless Steel Lunch Boxes with Cartoon Covers)',
      'Cartoon Water Bottle (BPA-Free Kids Sipper Bottles with Straw)',
      'School Water Bottle (Stainless Steel Double-Walled School Bottles)',
      'Insulated Lunch Bag (Thermal Padded Printed Lunch Tiffin Bags)',
      'Travel Flask (Heavy Duty Leakproof Steel Vacuum Flasks 500ml - 1.5L)',
      'Foldable Water Bottle (Food-Grade Silicone Compact Travel Bottles)',
      'Food Jar (Wide-Mouth Hot & Cold Insulated Stainless Steel Food Containers)'
    ]
  },
  {
    id: 'cat-wedding',
    filterTag: 'Wedding',
    tamilTitle: 'விழா & சிறப்புப் பொருட்கள் (Seasonal & Festive)',
    englishTitle: 'Seasonal & Festive Collections',
    count: '8+ வகைகள்',
    badge: 'Seasonal & Festive',
    image: 'assets/category_wedding_festive.jpg',
    tagline: 'Ornate terracotta and brass Pongal pots, festive Pongal sets, Deepavali sweet gift boxes, and festival gift hampers.',
    chips: [
      'பொங்கல் பானை & Pongal Set',
      'தீபாவளி ஸ்வீட் பாக்ஸ்',
      'Dinner Set (51-Piece)',
      'Stainless Steel Gift Set',
      'பித்தளை Gift Items',
      'பூஜை Gift Combo'
    ],
    fullList: [
      'பொங்கல் பானை & Pongal Set (Decorated Terracotta & Pure Brass Pongal Pots)',
      'தீபாவளி ஸ்வீட் பாக்ஸ் (Festive Stainless Steel & Brass Sweet Boxes)',
      'Dinner Set (51-Piece & 68-Piece Royal Stainless Steel Dinner Sets in Velvet Cases)',
      'Stainless Steel Gift Set (Curated Kitchen Utensil Sets for Housewarmings & Festivals)',
      'பித்தளை Gift Items (Decorative Brass Urulis, Diya Pairs & Wall Hangings)',
      'பூஜை Gift Combo (Complete Brass Pooja Room Essentials in Gift Box)',
      'Housewarming & Festival Gift Hampers (Decorated Festival & Grahapravesam Hampers)'
    ]
  },
  {
    id: 'cat-steel',
    filterTag: 'Steel',
    tamilTitle: 'Stainless Steel பாத்திரங்கள்',
    englishTitle: 'Food-Grade Stainless Steel Essentials',
    count: '11+ வகைகள்',
    badge: 'Stainless Steel',
    image: 'assets/category_stainless_steel.jpg',
    tagline: 'Everyday heavy-gauge stainless steel plates, tumblers, andas, idli pots & tiffin carriers with lifelong durability.',
    chips: [
      'தட்டு (Plates)',
      'டம்ளர் (Tumblers)',
      'கிண்ணம் (Bowls)',
      'குடம் (Water Pot)',
      'அண்டா, குண்டா',
      'சட்டி, வாணலி',
      'தூக்குச் சட்டி',
      'இட்லி பாத்திரம்',
      'பால் பாத்திரம்',
      'சாப்பாட்டு கேரியர்'
    ],
    fullList: [
      'தட்டு (Food-Grade Heavy Stainless Steel Dining Plates - All Sizes)',
      'டம்ளர் (Mirror Polish Stainless Steel Tumblers & Glasses)',
      'கிண்ணம் (Curry Bowls, Katori & Dessert Bowls)',
      'குடம் (Heavy Water Storage Pots & Kudams)',
      'அண்டா & குண்டா (Deep Cooking & Boiling Stainless Steel Pots)',
      'சட்டி & வாணலி (Tri-Ply Stainless Steel Fry Pans & Kadais)',
      'தூக்குச் சட்டி (Multi-Purpose Hanging Tiffin & Ghee Pots)',
      'இட்லி பாத்திரம் (4, 5 & 6 Plate Heavy Gauge Idli Steamers)',
      'பால் பாத்திரம் (Sandwich Bottom Milk Boiling Vessels)',
      'சாப்பாட்டு கேரியர் (Multi-Tier Compact & Large Lunch Carriers)'
    ]
  }
];

let currentVesselsFilter = 'All';

window.renderVesselsMegaCatalog = function(filter = 'All') {
  currentVesselsFilter = filter;
  const grid = document.getElementById('vesselsGrid');
  if (!grid) return;

  const filtered = filter === 'All'
    ? UTENSIL_CATEGORIES
    : UTENSIL_CATEGORIES.filter(c => c.filterTag === filter || (filter === 'Cookware' && (c.filterTag === 'Traditional' || c.filterTag === 'Steel')));

  grid.innerHTML = filtered.map(c => `
    <div class="vessel-card" id="${c.id}">
      <div class="vessel-card-media">
        <img src="${c.image}" alt="${c.englishTitle}" class="vessel-card-img" loading="lazy" />
        <span class="vessel-badge-count">${c.count}</span>
        <span class="vessel-dept-pill">${c.badge}</span>
      </div>

      <div class="vessel-card-body">
        <div class="vessel-card-titles">
          <h3 class="vessel-card-tamil">${c.tamilTitle}</h3>
          <h4 class="vessel-card-english">${c.englishTitle}</h4>
        </div>

        <p class="vessel-card-tagline">${c.tagline}</p>

        <div class="vessel-items-box">
          <span class="vessel-items-label">முக்கிய பொருட்கள் (Featured Items):</span>
          <div class="vessel-chips-wrap">
            ${c.chips.map(chip => `<span class="vessel-chip">${chip}</span>`).join('')}
          </div>
        </div>

        <div class="vessel-card-actions">
          <a href="https://wa.me/${SHOWROOM_PHONE_RAW}?text=${encodeURIComponent(`Hello Sri Ilakkiya! I am enquiring about items in your *${c.tamilTitle} (${c.englishTitle})* category. Please share price list and showroom availability.`)}" 
             target="_blank" rel="noopener noreferrer" class="btn-vessel-wa">
            <svg viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px; flex-shrink: 0;"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            <span>WhatsApp Enquiry</span>
          </a>
          <button type="button" class="btn-vessel-info" onclick="openVesselCategoryModal('${c.id}')">
            <span>பொருட்கள் விவரம்</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');
};

window.filterVesselsCatalog = function(filterKey) {
  document.querySelectorAll('.vessel-filter-btn').forEach(btn => {
    if (btn.getAttribute('data-vfilter') === filterKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  document.querySelectorAll('.signboard-item-badge').forEach(badge => {
    if (badge.getAttribute('data-vjump') === filterKey) {
      badge.classList.add('active');
    } else {
      badge.classList.remove('active');
    }
  });

  renderVesselsMegaCatalog(filterKey);
};

window.jumpToVesselCategory = function(catId, filterKey) {
  filterVesselsCatalog('All');
  const target = document.getElementById(catId) || document.getElementById('vesselsCatalog');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      const card = document.getElementById(catId);
      if (card) {
        card.style.outline = '3px solid var(--color-golden-yellow)';
        card.style.boxShadow = '0 0 25px rgba(245, 197, 66, 0.6)';
        setTimeout(() => {
          card.style.outline = '';
          card.style.boxShadow = '';
        }, 2500);
      }
    }, 400);
  }
};

window.openVesselCategoryModal = function(catId) {
  const cat = UTENSIL_CATEGORIES.find(c => c.id === catId);
  if (!cat) return;

  const modal = document.getElementById('productModal');
  const content = document.getElementById('modalProductContent');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="modal-product-grid">
      <div class="modal-gallery">
        <img src="${cat.image}" alt="${cat.englishTitle}" class="modal-main-img" />
      </div>

      <div class="modal-details">
        <span class="product-category-text" style="color: var(--color-dark-green); font-weight: 800;">DEPARTMENT: ${cat.badge}</span>
        <h2 style="font-family: 'Mukta Malar', sans-serif; font-size: 1.6rem; color: var(--color-dark-brown); margin: 0.35rem 0 0.15rem;">
          ${cat.tamilTitle}
        </h2>
        <h3 style="font-size: 1rem; color: var(--color-muted); font-weight: 700; margin-bottom: 0.85rem; text-transform: uppercase;">
          ${cat.englishTitle}
        </h3>

        <p style="font-size: 0.86rem; color: #554D47; line-height: 1.55; margin-bottom: 1.25rem;">${cat.tagline}</p>

        <div style="background: var(--color-cream); padding: 1.15rem; border-radius: 8px; border: 1.5px solid var(--color-sand-border); margin-bottom: 1.5rem;">
          <h5 style="font-size: 0.85rem; font-weight: 800; color: var(--color-maroon); margin-bottom: 0.65rem; text-transform: uppercase;">
            📋 கிடைக்கும் அனைத்து பொருட்கள் (Item Checklist):
          </h5>
          <ul style="font-size: 0.82rem; color: var(--color-charcoal); padding-left: 1.25rem; line-height: 1.7;">
            ${(cat.fullList || cat.chips).map(item => `<li><strong>✓ ${item}</strong></li>`).join('')}
          </ul>
        </div>

        <a href="https://wa.me/${SHOWROOM_PHONE_RAW}?text=${encodeURIComponent(`Hello Sri Ilakkiya! I want to check prices & stock for items in *${cat.tamilTitle} (${cat.englishTitle})*. Please help me.`)}" 
           target="_blank" rel="noopener noreferrer" class="btn-submit-whatsapp" style="background-color: var(--color-whatsapp);">
          <svg viewBox="0 0 24 24" fill="currentColor" style="width: 18px; height: 18px; flex-shrink: 0;"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          <span>Enquire on WhatsApp</span>
        </a>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// 10. FILTER CATALOG LOGIC
window.applyProductFilter = function(filterCategory) {
  currentFilter = filterCategory;

  document.querySelectorAll('.ref-tab-btn').forEach(btn => {
    const cat = btn.getAttribute('data-category');
    if (cat === filterCategory) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  document.querySelectorAll('.sidebar-cat-item').forEach(item => {
    if (item.querySelector('span') && item.querySelector('span').textContent.includes(filterCategory)) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  renderProducts();

  const featured = document.getElementById('featured');
  if (featured) {
    featured.scrollIntoView({ behavior: 'smooth' });
  }
};

// 11. PRODUCT QUICK VIEW MODAL
window.openProductModal = function(id) {
  const prod = PRODUCTS.find(p => p.id === id);
  if (!prod) return;

  const modal = document.getElementById('productModal');
  const content = document.getElementById('modalProductContent');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="modal-product-grid">
      <div class="modal-gallery">
        <img src="${prod.image}" alt="${prod.name}" class="modal-main-img" id="modalMainImg" />
      </div>

      <div class="modal-details">
        <span class="product-category-text">${prod.category}</span>
        <h2 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--color-walnut); margin: 0.25rem 0;">${prod.name}</h2>

        <div class="product-price" style="font-size: 1.45rem; margin-bottom: 1rem;">${prod.price}</div>

        <p style="font-size: 0.85rem; color: #554D47; line-height: 1.5; margin-bottom: 1.25rem;">${prod.description}</p>

        <div style="background: #FAF8F5; padding: 1rem; border-radius: 6px; border: 1px solid #DFD3C2; margin-bottom: 1.5rem;">
          <h5 style="font-size: 0.82rem; font-weight: 700; color: var(--color-walnut); margin-bottom: 0.4rem;">Key Highlights:</h5>
          <ul style="font-size: 0.78rem; color: #666; padding-left: 1.2rem; line-height: 1.6;">
            ${(prod.features || []).map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>

        <a href="${buildProductWhatsAppUrl(prod)}" target="_blank" rel="noopener noreferrer" class="btn-submit-whatsapp">
          <svg viewBox="0 0 24 24" fill="currentColor" style="width: 18px; height: 18px;"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          <span>Enquire on WhatsApp</span>
        </a>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// 12. MASTER REFRESH FOR REAL-TIME ADMIN SYNC
function refreshAllOffersDisplay() {
  renderDynamicOffers();
  renderHeroCarousel();
  renderSidebarHotOffer();
}

// 13. INITIALIZE APP ON LOAD
document.addEventListener('DOMContentLoaded', () => {
  renderSidebarCategories();
  renderHeroCarousel();
  renderSidebarHotOffer();
  renderDynamicOffers();
  renderProducts();
  renderVesselsMegaCatalog();

  // Cross-tab storage event listener
  window.addEventListener('storage', (e) => {
    if (e.key === 'ilakkiya_offers' || e.key === 'aura_offers') {
      refreshAllOffersDisplay();
      showToast('Live offer updated from Admin Portal!');
    }
  });

  // BroadcastChannel listener
  if ('BroadcastChannel' in window) {
    try {
      const bc = new BroadcastChannel('ilakkiya_store_channel');
      bc.onmessage = (ev) => {
        if (ev.data && ev.data.type === 'OFFERS_UPDATED') {
          refreshAllOffersDisplay();
          showToast('New offer published live on website!');
        }
      };
    } catch (err) {
      console.log(err);
    }
  }

  // Close modals
  const productModal = document.getElementById('productModal');
  const closeProdBtn = document.getElementById('closeProductModalBtn');
  if (closeProdBtn) {
    closeProdBtn.addEventListener('click', () => {
      if (productModal) productModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) {
        productModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Mobile Menu Drawer
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('active');
      mobileDrawer.classList.toggle('active');
      document.body.style.overflow = mobileDrawer.classList.contains('active') ? 'hidden' : '';
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        mobileDrawer.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // Enquiry Form Submit
  const quickEnquiryForm = document.getElementById('quickEnquiryForm');
  if (quickEnquiryForm) {
    quickEnquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('clientName').value;
      const city = document.getElementById('clientCity').value;
      const need = document.getElementById('furnitureNeed').value;
      const note = document.getElementById('clientNote').value;

      const waMsg = `Hello Sri Ilakkiya!
My Name: ${name} (${city})
Requirement: ${need}
Additional Specifications: ${note || 'Please share product catalog and pricing.'}
Thank you!`;
      window.open(`https://wa.me/${SHOWROOM_PHONE_RAW}?text=${encodeURIComponent(waMsg)}`, '_blank');
    });
  }
});
