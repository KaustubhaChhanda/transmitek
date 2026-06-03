import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';
import { ChevronRight, Filter } from 'lucide-react';

export const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryQuery = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Sync state with URL query parameter
  useEffect(() => {
    if (categoryQuery) {
      setSelectedCategory(categoryQuery);
    } else {
      setSelectedCategory('all');
    }
  }, [categoryQuery]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'propeller-shafts', name: 'Propeller Shafts' },
    { id: 'gdi-pumps', name: 'GDI Fuel Pumps' },
    { id: 'master-cylinders', name: 'Clutch Master Cylinders' },
    { id: 'slave-cylinders', name: 'Clutch Slave Cylinders' }
  ];

  const handleCategoryChange = (id: string) => {
    if (id === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: id });
    }
  };

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-brand-lighter">
      
      {/* Page Hero Banner */}
      <section className="bg-brand-dark text-white pt-36 pb-20 w-full relative overflow-hidden flex justify-center text-center">
        {/* Glow decoration */}
        <div className="absolute right-10 bottom-0 w-80 h-80 bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-brand-footer-text mb-4 uppercase tracking-widest font-semibold">
            <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
            <ChevronRight size={12} className="text-brand-border-dark" />
            <span className="text-white">Products Catalog</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Engineered Components
          </h1>
          <p className="text-sm md:text-base text-brand-footer-text max-w-lg font-light leading-relaxed mt-3">
            Search our comprehensive list of precision drivetrain assemblies, high-pressure gasoline direct injection fuel pumps, and clutch hydraulic actuators.
          </p>
        </div>
      </section>

      {/* Main Content Grid & Tabs */}
      <section className="max-w-7xl mx-auto px-6 py-16 w-full flex flex-col items-center">
        
        {/* Filters/Tabs Container */}
        <div className="w-full mb-10">
          <div className="flex items-center gap-2 text-brand-heading font-bold text-xs uppercase tracking-wider mb-4">
            <Filter size={14} className="text-brand-red" />
            Filter By Category
          </div>
          
          {/* Horizontal scroll tabs for mobile */}
          <div className="flex gap-2.5 overflow-x-auto pb-3 scrollbar-hide w-full max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider border whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-brand-red border-brand-red text-white shadow-md shadow-brand-red/10'
                    : 'bg-white border-brand-border text-brand-muted hover:border-brand-red/30 hover:text-brand-red'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Products Grid */}
        <div className="w-full">
          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProducts.map((product, idx) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <ProductCard product={product} index={idx} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-white border border-brand-border rounded-2xl w-full"
              >
                <p className="text-brand-muted text-sm font-semibold">No products found in this category.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </section>

      {/* Trust Badge Bar */}
      <section className="bg-brand-dark text-white py-12 border-t border-brand-border-dark w-full text-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div className="flex flex-col items-center p-4">
            <span className="text-brand-red font-bold text-lg mb-1">100% Tested</span>
            <span className="text-xs text-brand-footer-text font-light">Every high-pressure pump and cylinder is pre-tested for leaks.</span>
          </div>
          <div className="flex flex-col items-center p-4 border-y sm:border-y-0 sm:border-x border-white/10">
            <span className="text-brand-blue font-bold text-lg mb-1">IATF 16949</span>
            <span className="text-xs text-brand-footer-text font-light">Sustaining standard compliance for international automotive brands.</span>
          </div>
          <div className="flex flex-col items-center p-4">
            <span className="text-brand-red font-bold text-lg mb-1">Fast Inquiry</span>
            <span className="text-xs text-brand-footer-text font-light">Receive technical parameters and quotes within 24 business hours.</span>
          </div>
        </div>
      </section>

    </div>
  );
};
