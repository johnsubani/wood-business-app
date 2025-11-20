import React from 'react';
import { Product } from '../types';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden border border-wood-light/30 flex flex-col h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={() => onClick(product)}
    >
      <div className="h-40 overflow-hidden relative">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 bg-wood-gold/90 text-wood-dark text-xs font-bold px-2 py-1 rounded-tr-lg">
          {product.category}
        </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-serif text-lg font-semibold text-wood-dark mb-1 leading-tight">
          {product.name}
        </h3>
        <p className="text-xs text-wood-green font-medium mb-2">{product.priceRange}</p>
        <p className="text-gray-600 text-xs line-clamp-2 mb-3 flex-1">
          {product.description}
        </p>
        
        <button className="mt-auto w-full flex items-center justify-center gap-1 text-sm text-wood-dark border border-wood-dark/20 py-2 rounded-lg hover:bg-wood-dark hover:text-wood-beige transition-colors">
          View Details <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;