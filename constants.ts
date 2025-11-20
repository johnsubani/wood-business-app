import { Product, WoodCategory } from './types';

export const COMPANY_INFO = {
  name: "Maddirala Trades",
  owner: "Nagur Vali Pathan",
  phone: "9949125305",
  address: "35QC+W58 పాత పోలీస్ స్టేషన్ సెంటర్, కృష్ణమహల్ రోడ్, Chilakaluripet, Andhra Pradesh 522616, India",
  hours: "Mon - Sun: 9:00 AM - 8:00 PM",
  email: "contact@maddiralatrades.com"
};

export const PRODUCTS: Product[] = [
  // --- Hardwoods & Softwoods ---
  {
    id: 'wood-1',
    name: 'Burma Teak (Sagwan)',
    category: WoodCategory.HARDWOOD,
    priceRange: '₹3,500 - ₹5,000 / cft',
    description: 'Premium authentic Burma Teak. Famous for its golden-brown luster, immense durability, and natural water resistance. The #1 choice for main doors and luxury furniture.',
    imageUrl: 'https://picsum.photos/800/600?random=101',
    features: ['Water Resistant', 'Termite Proof', 'High Oil Content']
  },
  {
    id: 'wood-2',
    name: 'Indian Rosewood (Sheesham)',
    category: WoodCategory.HARDWOOD,
    priceRange: '₹2,200 - ₹3,500 / cft',
    description: 'A rich, dark-grained hardwood known for its strength and ability to hold fine carvings. Ideally suited for heavy, decorative furniture and structural support.',
    imageUrl: 'https://picsum.photos/800/600?random=102',
    features: ['Deep Grain', 'Very Hard', 'Excellent Polish']
  },
  {
    id: 'wood-3',
    name: 'Pine Wood',
    category: WoodCategory.SOFTWOOD,
    priceRange: '₹600 - ₹900 / cft',
    description: 'Lightweight, light-colored softwood with a distinct grain. Easy to work with, perfect for interior furniture, paneling, shelving, and crates.',
    imageUrl: 'https://picsum.photos/800/600?random=103',
    features: ['Lightweight', 'Easy to Cut', 'Economical']
  },
  {
    id: 'wood-4',
    name: 'Mango Wood',
    category: WoodCategory.HARDWOOD,
    priceRange: '₹800 - ₹1,200 / cft',
    description: 'A sustainable, eco-friendly hardwood known for its unique kaleidoscope-like grain patterns. Popular for modern, rustic tables and chairs.',
    imageUrl: 'https://picsum.photos/800/600?random=104',
    features: ['Eco-friendly', 'Unique Patterns', 'Sustainable']
  },
  {
    id: 'wood-5',
    name: 'White Oak',
    category: WoodCategory.HARDWOOD,
    priceRange: '₹2,500 - ₹3,200 / cft',
    description: 'Strong, hard, and heavy with an attractive light color. Widely used for high-traffic flooring, durable cabinetry, and furniture.',
    imageUrl: 'https://picsum.photos/800/600?random=105',
    features: ['Wear Resistant', 'Distinct Rays', 'Great Flooring']
  },
  {
    id: 'wood-6',
    name: 'African Mahogany',
    category: WoodCategory.HARDWOOD,
    priceRange: '₹2,800 - ₹3,800 / cft',
    description: 'Classic reddish-brown timber that darkens over time. Easy to work with and polishes to a high gloss. The standard for fine cabinetry and panels.',
    imageUrl: 'https://picsum.photos/800/600?random=106',
    features: ['Reddish Hue', 'Fine Texture', 'Luxury Finish']
  },
  {
    id: 'wood-7',
    name: 'Sal Wood',
    category: WoodCategory.HARDWOOD,
    priceRange: '₹1,200 - ₹1,800 / cft',
    description: 'One of the toughest timbers available in India. Ideal for door frames, window frames, and heavy structural beams.',
    imageUrl: 'https://picsum.photos/800/600?random=107',
    features: ['Structural Grade', 'Very Dense', 'Rot Resistant']
  },
  {
    id: 'wood-8',
    name: 'Gurjan Plywood',
    category: WoodCategory.PLYWOOD,
    priceRange: '₹90 - ₹150 / sqft',
    description: 'Marine grade (BWP) plywood made from Gurjan timber. Excellent for kitchen cabinets and areas prone to moisture.',
    imageUrl: 'https://picsum.photos/800/600?random=108',
    features: ['BWP Grade', 'Warp Resistant', 'Smooth Core']
  },

  // --- Tools ---
  {
    id: 'tool-1',
    name: 'Carpenter Hand Tool Set',
    category: WoodCategory.TOOLS,
    priceRange: '₹2,500 / set',
    description: 'Essential kit containing a claw hammer, chisels, measuring tape, hand saw, and screwdrivers. Perfect for professionals and DIY.',
    imageUrl: 'https://picsum.photos/800/600?random=201',
    features: ['High Carbon Steel', 'Ergonomic', 'Durable Case']
  },
  {
    id: 'tool-2',
    name: 'Heavy Duty Circular Saw',
    category: WoodCategory.TOOLS,
    priceRange: '₹4,500 - ₹6,000',
    description: 'Powerful electric circular saw for precise straight cuts in plywood and timber logs. Features safety guards and depth adjustment.',
    imageUrl: 'https://picsum.photos/800/600?random=202',
    features: ['1200W Motor', 'Laser Guide', 'Safety Lock']
  },
  {
    id: 'tool-3',
    name: 'Electric Power Drill',
    category: WoodCategory.TOOLS,
    priceRange: '₹2,800 - ₹4,000',
    description: 'Variable speed drill for boring holes and driving screws. Comes with a comprehensive set of drill bits for wood.',
    imageUrl: 'https://picsum.photos/800/600?random=203',
    features: ['Reversible', 'Keyless Chuck', 'Variable Speed']
  },
  {
    id: 'tool-4',
    name: 'Wood Router & Sander Kit',
    category: WoodCategory.TOOLS,
    priceRange: '₹5,500 - ₹7,000',
    description: 'Combo kit featuring a palm router for edging/grooving and an orbital sander for a smooth finish.',
    imageUrl: 'https://picsum.photos/800/600?random=204',
    features: ['Precision Detail', 'Dust Collection', 'Smooth Finish']
  },

  // --- Finishes ---
  {
    id: 'finish-1',
    name: 'Premium Wood Varnish',
    category: WoodCategory.FINISHES,
    priceRange: '₹450 / liter',
    description: 'High-gloss clear varnish that protects wood from moisture, scratches, and UV rays while enhancing natural grain.',
    imageUrl: 'https://picsum.photos/800/600?random=301',
    features: ['High Gloss', 'Quick Drying', 'Protective']
  },
  {
    id: 'finish-2',
    name: 'Wood Stains (Walnut/Oak)',
    category: WoodCategory.FINISHES,
    priceRange: '₹350 / 500ml',
    description: 'Deep penetrating stains to change the color of your wood while keeping the texture visible. Available in Dark Walnut, Golden Oak, and Mahogany.',
    imageUrl: 'https://picsum.photos/800/600?random=302',
    features: ['Deep Penetration', 'Rich Color', 'Fade Resistant']
  },

  // --- Furniture & Structures ---
  {
    id: 'furn-1',
    name: 'Solid Teak Main Door',
    category: WoodCategory.FURNITURE,
    priceRange: '₹25,000 - ₹45,000',
    description: 'Exquisitely carved main door made from seasoned Burma Teak. Adds royalty and security to your home entrance.',
    imageUrl: 'https://picsum.photos/800/600?random=401',
    features: ['Hand Carved', 'Weather Proof', 'Custom Sizes']
  },
  {
    id: 'furn-2',
    name: 'Oak Flooring Panels',
    category: WoodCategory.FURNITURE,
    priceRange: '₹250 - ₹400 / sqft',
    description: 'Interlocking oak wood panels for elegant flooring. Pre-finished with scratch-resistant coating for longevity.',
    imageUrl: 'https://picsum.photos/800/600?random=402',
    features: ['Easy Install', 'Durable', 'Modern Look']
  },
  {
    id: 'furn-3',
    name: 'Mango Wood Bookshelf',
    category: WoodCategory.FURNITURE,
    priceRange: '₹8,000 - ₹12,000',
    description: 'Open-design standing shelf made from sustainable mango wood. Perfect for organizing books and displaying decor.',
    imageUrl: 'https://picsum.photos/800/600?random=403',
    features: ['Solid Wood', 'Rustic Finish', 'Heavy Duty']
  }
];