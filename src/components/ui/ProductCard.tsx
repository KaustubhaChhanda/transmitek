import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import type { Product } from '../../types';
import { Badge } from './Badge';
import { ChevronRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const navigate = useNavigate();

  const handleInquiry = () => {
    // Redirect to contact page and pass product name to pre-fill the form
    navigate('/contact', { state: { productInterest: product.id } });
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'propeller-shafts':
        return 'Propeller Shafts';
      case 'gdi-pumps':
        return 'GDI Fuel Pumps';
      case 'master-cylinders':
        return 'Clutch Master Cylinders';
      case 'slave-cylinders':
        return 'Clutch Slave Cylinders';
      default:
        return category;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex flex-col bg-white border border-brand-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group h-full hover:border-brand-red/20"
    >
      {/* Product Image Container */}
      <div className="relative overflow-hidden bg-brand-lighter aspect-[4/3] flex items-center justify-center p-4 border-b border-brand-border">
        <motion.img
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          src={product.image}
          alt={product.name}
          className="object-contain max-h-[85%] max-w-[85%] mix-blend-multiply filter drop-shadow-md select-none"
        />
        <div className="absolute top-4 left-4">
          <Badge variant={product.category === 'gdi-pumps' ? 'blue' : 'red'}>
            {getCategoryLabel(product.category)}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-brand-heading-2 mb-2 line-clamp-1 group-hover:text-brand-red transition-colors duration-300">
          {product.name}
        </h3>
        
        {product.partNumbers && product.partNumbers.length > 0 && (
          <p className="text-xs font-semibold text-brand-blue mb-4">
            OEM: {product.partNumbers.join(' / ')}
          </p>
        )}

        <p className="text-xs text-brand-muted line-clamp-2 mb-4 italic">
          {product.details}
        </p>

        {/* Specs List */}
        <div className="mb-4">
          <h4 className="text-xs font-bold text-brand-heading uppercase tracking-wider mb-2">Technical Specifications</h4>
          <ul className="text-xs text-brand-muted space-y-1">
            {product.specifications.slice(0, 3).map((spec, i) => (
              <li key={i} className="flex items-start">
                <span className="text-brand-red mr-1.5">•</span>
                <span className="line-clamp-1">{spec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Application Chips */}
        <div className="mb-6 mt-auto">
          <h4 className="text-xs font-bold text-brand-heading uppercase tracking-wider mb-2">Applications</h4>
          <div className="flex flex-wrap gap-1.5">
            {product.applications.map((app, i) => (
              <span key={i} className="text-[10px] bg-brand-light text-brand-muted font-semibold px-2 py-0.5 rounded">
                {app}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleInquiry}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-brand-lighter hover:bg-brand-red text-brand-heading hover:text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 border border-brand-border hover:border-brand-red group/btn cursor-pointer"
        >
          Send Inquiry
          <ChevronRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
