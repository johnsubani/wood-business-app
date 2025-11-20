import React, { useState } from 'react';
import BottomNav from './components/BottomNav';
import { COMPANY_INFO, PRODUCTS } from './constants';
import ProductCard from './components/ProductCard';
import { Product, WoodCategory, OrderStatus } from './types';
import { getWoodRecommendation } from './services/geminiService';
import { Phone, MapPin, Clock, Search, Package, ChevronRight, Upload, Send, Sparkles, Truck, CheckCircle, XCircle, Menu } from 'lucide-react';

// --- Sub-Components/Pages defined within App to ensure single-file cohesion where appropriate for this format, 
// but conceptually separated ---

const Header = () => (
  <div className="sticky top-0 bg-wood-dark text-wood-beige p-4 shadow-md z-40 flex justify-between items-center">
    <div>
      <h1 className="font-serif text-xl font-bold tracking-wide">Maddirala Trades</h1>
      <p className="text-[10px] text-wood-gold uppercase tracking-wider">Premium Wood & Timber</p>
    </div>
    <button className="p-2 text-wood-light hover:bg-wood-medium rounded-full">
      <Menu size={24} />
    </button>
  </div>
);

const HomePage = ({ onChangeTab }: { onChangeTab: (t: string) => void }) => (
  <div className="pb-24 bg-wood-texture min-h-screen">
    {/* Hero */}
    <div className="relative h-64 bg-wood-dark overflow-hidden">
      <img 
        src="https://picsum.photos/800/400?grayscale&blur=2" 
        alt="Wood Texture" 
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-wood-dark via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <h2 className="font-serif text-3xl text-wood-beige font-bold mb-2 leading-tight">
          Crafting Excellence <br /> <span className="text-wood-gold">In Every Grain.</span>
        </h2>
        <button 
          onClick={() => onChangeTab('products')}
          className="bg-wood-gold text-wood-dark font-semibold px-6 py-2 rounded-full text-sm shadow-lg hover:bg-white transition-colors"
        >
          Explore Collection
        </button>
      </div>
    </div>

    {/* Quick Stats/Info */}
    <div className="grid grid-cols-3 gap-2 p-4 -mt-6 relative z-10">
      <div className="bg-white p-3 rounded-xl shadow-md text-center border-b-4 border-wood-green">
        <div className="text-wood-green mb-1 flex justify-center"><CheckCircle size={20} /></div>
        <p className="text-[10px] font-bold text-gray-500 uppercase">Quality</p>
        <p className="text-xs font-bold text-wood-dark">Premium</p>
      </div>
      <div className="bg-white p-3 rounded-xl shadow-md text-center border-b-4 border-wood-gold">
        <div className="text-wood-gold mb-1 flex justify-center"><Truck size={20} /></div>
        <p className="text-[10px] font-bold text-gray-500 uppercase">Delivery</p>
        <p className="text-xs font-bold text-wood-dark">Fast</p>
      </div>
      <div className="bg-white p-3 rounded-xl shadow-md text-center border-b-4 border-wood-dark">
        <div className="text-wood-dark mb-1 flex justify-center"><Clock size={20} /></div>
        <p className="text-[10px] font-bold text-gray-500 uppercase">Service</p>
        <p className="text-xs font-bold text-wood-dark">24/7</p>
      </div>
    </div>

    {/* Featured Categories */}
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-serif text-xl font-bold text-wood-dark">Categories</h3>
        <button onClick={() => onChangeTab('products')} className="text-wood-green text-xs font-semibold flex items-center">
          View All <ChevronRight size={14} />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[
          { name: 'Hardwood', img: 'https://picsum.photos/300/300?random=101' },
          { name: 'Tools', img: 'https://picsum.photos/300/300?random=201' },
          { name: 'Furniture', img: 'https://picsum.photos/300/300?random=401' },
          { name: 'Finishes', img: 'https://picsum.photos/300/300?random=301' },
        ].map((cat, idx) => (
          <div key={idx} onClick={() => onChangeTab('products')} className="relative h-28 rounded-lg overflow-hidden group cursor-pointer">
            <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <span className="text-white font-serif font-bold tracking-wider border border-white/50 px-3 py-1 rounded backdrop-blur-sm">
                {cat.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Owner CTA */}
    <div className="mx-4 mb-8 bg-wood-dark text-wood-beige p-6 rounded-2xl relative overflow-hidden">
       <div className="relative z-10">
         <h4 className="font-serif text-lg font-bold mb-2">Visit Maddirala Trades</h4>
         <p className="text-xs text-wood-light mb-4 max-w-[80%]">
           Located at Krishna Mahal Road, Chilakaluripet. Experience the finest wood collection in person.
         </p>
         <button onClick={() => onChangeTab('profile')} className="bg-wood-green text-white px-4 py-2 rounded-lg text-sm font-medium">
           Get Directions
         </button>
       </div>
       <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-wood-gold rounded-full opacity-20"></div>
    </div>
  </div>
);

const ProductsPage = ({ onProductSelect }: { onProductSelect: (p: Product) => void }) => {
  const [filter, setFilter] = useState<string>('All');
  
  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="pb-24 px-4 pt-4 bg-wood-texture min-h-screen">
      <h2 className="font-serif text-2xl font-bold text-wood-dark mb-4">Our Collection</h2>
      
      {/* Filter Tabs */}
      <div className="flex overflow-x-auto gap-2 pb-4 no-scrollbar">
        {['All', ...Object.values(WoodCategory)].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
              filter === cat 
                ? 'bg-wood-dark text-wood-gold shadow-md' 
                : 'bg-white text-gray-600 border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} onClick={onProductSelect} />
        ))}
      </div>
    </div>
  );
};

const ProductDetailPage = ({ product, onBack }: { product: Product, onBack: () => void }) => (
  <div className="bg-white min-h-screen pb-24 flex flex-col">
    <div className="relative h-72">
      <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
      <button 
        onClick={onBack}
        className="absolute top-4 left-4 bg-black/50 text-white p-2 rounded-full backdrop-blur-md hover:bg-black/70"
      >
        <ChevronRight size={24} className="rotate-180" />
      </button>
    </div>
    
    <div className="p-6 -mt-6 bg-white rounded-t-3xl relative z-10 flex-1">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-xs font-bold text-wood-gold uppercase tracking-wider bg-wood-dark/5 px-2 py-1 rounded">{product.category}</span>
          <h1 className="font-serif text-2xl font-bold text-wood-dark mt-2">{product.name}</h1>
        </div>
        <div className="text-right">
           <p className="text-lg font-bold text-wood-green">{product.priceRange}</p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-bold text-gray-800 mb-2 text-sm">Description</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
      </div>

      <div className="mb-6">
        <h3 className="font-bold text-gray-800 mb-2 text-sm">Key Features</h3>
        <div className="flex flex-wrap gap-2">
          {product.features.map((feature, idx) => (
            <span key={idx} className="text-xs bg-wood-beige text-wood-dark px-3 py-1 rounded-full border border-wood-dark/10">
              {feature}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-4">
        <button className="w-full bg-wood-dark text-wood-gold font-bold py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 hover:bg-wood-medium transition-colors">
          <Phone size={18} /> Request Quote
        </button>
        <p className="text-center text-[10px] text-gray-400 mt-2">Call opens default dialer with shop number</p>
      </div>
    </div>
  </div>
);

const InquiryPage = () => {
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAiConsultation = async () => {
    if (!aiPrompt.trim()) return;
    setLoading(true);
    const response = await getWoodRecommendation(aiPrompt);
    setAiResponse(response);
    setLoading(false);
  };

  return (
    <div className="pb-24 px-4 pt-4 bg-wood-texture min-h-screen">
      <h2 className="font-serif text-2xl font-bold text-wood-dark mb-6">Inquiry & Support</h2>

      {/* AI Consultant Section */}
      <div className="bg-gradient-to-br from-wood-dark to-wood-medium text-wood-beige p-5 rounded-xl shadow-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="text-wood-gold" size={20} />
          <h3 className="font-bold text-lg">AI Wood Consultant</h3>
        </div>
        <p className="text-xs text-wood-light mb-4">Not sure what to buy? Describe your project (e.g., "Main door for a sunny house") and get a suggestion.</p>
        
        <div className="flex gap-2 mb-4">
          <input 
            type="text" 
            value={aiPrompt}
            onChange={(e) => setAiPrompt(e.target.value)}
            placeholder="Describe your needs..."
            className="flex-1 rounded-lg px-3 py-2 text-wood-dark text-sm focus:outline-none focus:ring-2 focus:ring-wood-gold"
          />
          <button 
            onClick={handleAiConsultation}
            disabled={loading}
            className="bg-wood-gold text-wood-dark p-2 rounded-lg font-bold disabled:opacity-50"
          >
            {loading ? '...' : <Search size={20} />}
          </button>
        </div>

        {aiResponse && (
          <div className="bg-white/10 p-3 rounded-lg border border-white/20 animate-in fade-in slide-in-from-bottom-2">
             <p className="text-sm italic leading-relaxed">"{aiResponse}"</p>
          </div>
        )}
      </div>

      {/* Standard Form */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-serif text-lg font-bold text-wood-dark mb-4">Send a Message</h3>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Name</label>
            <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-wood-gold transition-colors text-sm" placeholder="Your Full Name" />
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Phone</label>
                <input type="tel" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-wood-gold transition-colors text-sm" placeholder="99999..." />
             </div>
             <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Wood Type</label>
                <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-wood-gold transition-colors text-sm bg-transparent">
                   <option>Select...</option>
                   {Object.values(WoodCategory).map(c => <option key={c} value={c}>{c}</option>)}
                </select>
             </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Message</label>
            <textarea className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-wood-gold text-sm h-24 resize-none" placeholder="Details about quantity, sizes..."></textarea>
          </div>
          
          <button className="w-full bg-wood-green text-white py-3 rounded-lg font-bold shadow-md flex justify-center items-center gap-2 hover:bg-green-800 transition-colors">
            Submit Inquiry <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};

const OrdersPage = () => {
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState<OrderStatus | null>(null);

  const handleTrack = () => {
    // Mock logic
    if (orderId.length > 3) {
      setStatus({
        orderId: orderId,
        status: 'Out for Delivery',
        date: new Date().toLocaleDateString(),
        items: '20 cft Burma Teak',
        location: 'Chilakaluripet'
      });
    } else {
      setStatus(null);
    }
  };

  return (
    <div className="pb-24 px-4 pt-4 bg-wood-texture min-h-screen">
       <h2 className="font-serif text-2xl font-bold text-wood-dark mb-6">Track Order</h2>
       
       <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
         <p className="text-gray-600 text-sm mb-4">Enter your order ID sent to your mobile number.</p>
         <div className="flex gap-2">
           <input 
             type="text" 
             value={orderId}
             onChange={(e) => setOrderId(e.target.value)}
             className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-wood-dark focus:outline-none focus:border-wood-gold"
             placeholder="#ORD-1234"
           />
           <button 
             onClick={handleTrack}
             className="bg-wood-dark text-wood-gold px-4 py-2 rounded-lg font-bold"
           >
             Track
           </button>
         </div>
       </div>

       {status && (
         <div className="bg-wood-beige border border-wood-gold/30 p-5 rounded-xl animate-in fade-in zoom-in-95">
           <div className="flex justify-between items-center mb-4 border-b border-wood-dark/10 pb-2">
             <span className="font-bold text-wood-dark">Order #{status.orderId}</span>
             <span className="text-xs bg-wood-green text-white px-2 py-1 rounded-full">{status.status}</span>
           </div>
           <div className="space-y-3">
              <div className="flex gap-3 items-start">
                 <Package size={18} className="text-gray-400 mt-0.5" />
                 <div>
                   <p className="text-xs text-gray-500 uppercase font-bold">Items</p>
                   <p className="text-sm text-wood-dark">{status.items}</p>
                 </div>
              </div>
              <div className="flex gap-3 items-start">
                 <MapPin size={18} className="text-gray-400 mt-0.5" />
                 <div>
                   <p className="text-xs text-gray-500 uppercase font-bold">Delivery Location</p>
                   <p className="text-sm text-wood-dark">{status.location}</p>
                 </div>
              </div>
              <div className="flex gap-3 items-start">
                 <Clock size={18} className="text-gray-400 mt-0.5" />
                 <div>
                   <p className="text-xs text-gray-500 uppercase font-bold">Estimated Date</p>
                   <p className="text-sm text-wood-dark">{status.date}</p>
                 </div>
              </div>
           </div>
         </div>
       )}
       
       {!status && orderId.length > 0 && orderId.length <= 3 && (
         <div className="text-center text-gray-400 text-sm mt-4">
           Please enter a valid Order ID (at least 4 chars for demo)
         </div>
       )}
    </div>
  );
};

const ProfilePage = () => (
  <div className="pb-24 bg-wood-texture min-h-screen">
    <div className="bg-wood-dark text-wood-beige pt-10 pb-16 px-6 rounded-b-[3rem] shadow-lg text-center">
      <div className="w-24 h-24 bg-wood-gold rounded-full mx-auto mb-4 flex items-center justify-center text-wood-dark font-serif font-bold text-3xl border-4 border-wood-beige">
        MT
      </div>
      <h2 className="font-serif text-2xl font-bold">{COMPANY_INFO.name}</h2>
      <p className="text-wood-light/80 text-sm">Owner: {COMPANY_INFO.owner}</p>
    </div>

    <div className="px-4 -mt-10 relative z-10">
      <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
        
        <div className="flex items-start gap-4">
           <div className="bg-wood-beige p-3 rounded-full text-wood-dark">
             <Phone size={20} />
           </div>
           <div>
             <p className="text-xs text-gray-500 font-bold uppercase mb-1">Contact Number</p>
             <a href={`tel:${COMPANY_INFO.phone}`} className="text-lg font-serif text-wood-dark hover:text-wood-green">{COMPANY_INFO.phone}</a>
           </div>
        </div>

        <div className="flex items-start gap-4">
           <div className="bg-wood-beige p-3 rounded-full text-wood-dark">
             <MapPin size={20} />
           </div>
           <div>
             <p className="text-xs text-gray-500 font-bold uppercase mb-1">Address</p>
             <p className="text-sm text-gray-700 leading-relaxed">
               35QC+W58 Old Police Station Center,<br/>
               Krishna Mahal Road, Chilakaluripet,<br/>
               Andhra Pradesh 522616
             </p>
           </div>
        </div>

        <div className="flex items-start gap-4">
           <div className="bg-wood-beige p-3 rounded-full text-wood-dark">
             <Clock size={20} />
           </div>
           <div>
             <p className="text-xs text-gray-500 font-bold uppercase mb-1">Opening Hours</p>
             <p className="text-sm text-gray-700">{COMPANY_INFO.hours}</p>
           </div>
        </div>

      </div>
      
      <div className="mt-6 text-center">
        <button className="text-red-500 text-sm font-medium hover:text-red-700 flex items-center justify-center w-full gap-2 py-3 border border-red-100 rounded-lg bg-white">
          <XCircle size={16} /> Sign Out
        </button>
        <p className="text-[10px] text-gray-400 mt-4">App Version 1.0.0 &copy; 2025</p>
      </div>
    </div>
  </div>
);


// --- Main App Controller ---

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };

  const renderContent = () => {
    if (selectedProduct) {
      return <ProductDetailPage product={selectedProduct} onBack={handleBackToProducts} />;
    }

    switch (activeTab) {
      case 'home':
        return <HomePage onChangeTab={setActiveTab} />;
      case 'products':
        return <ProductsPage onProductSelect={handleProductSelect} />;
      case 'inquiry':
        return <InquiryPage />;
      case 'orders':
        return <OrdersPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage onChangeTab={setActiveTab} />;
    }
  };

  return (
    <div className="font-sans antialiased text-wood-charcoal max-w-md mx-auto bg-gray-50 min-h-screen shadow-2xl overflow-hidden relative">
      {!selectedProduct && <Header />}
      
      <main className="min-h-screen">
        {renderContent()}
      </main>

      {/* Only show bottom nav if not in detail view */}
      {!selectedProduct && (
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
    </div>
  );
};

export default App;