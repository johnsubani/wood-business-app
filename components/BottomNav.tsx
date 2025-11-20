import React from 'react';
import { Home, Grid, MessageSquare, Package, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'products', label: 'Products', icon: <Grid size={20} /> },
    { id: 'inquiry', label: 'Inquiry', icon: <MessageSquare size={20} /> },
    { id: 'orders', label: 'Orders', icon: <Package size={20} /> },
    { id: 'profile', label: 'Profile', icon: <User size={20} /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-wood-dark text-wood-light border-t-4 border-wood-gold pb-safe pt-2 px-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center w-full py-2 transition-all duration-300 ${
                isActive ? 'text-wood-gold -translate-y-1' : 'text-wood-light/60 hover:text-wood-light'
              }`}
            >
              <div className={`${isActive ? 'bg-wood-medium/50 p-1.5 rounded-full mb-1' : 'mb-1'}`}>
                {item.icon}
              </div>
              <span className={`text-[10px] font-medium ${isActive ? 'opacity-100' : 'opacity-80'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;