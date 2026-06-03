import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowRight } from 'lucide-react';

// Category Image Imports
import imgShafts from '../../assets/propeller-cardan-drive-shaft-auto-parts-factory-china-scaled.jpg';
import imgGdiPumps from '../../assets/GDI-fuel-pump-1-scaled.jpg';
import imgMasters from '../../assets/pre-filled-clutch-cylinder-scaled.jpg';
import imgSlaves from '../../assets/CSC-Clutch-1024x1024.webp';

export const ProductCategories: React.FC = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 'propeller-shafts',
      name: 'Propeller Shafts',
      desc: 'High-torque multi-axle driveline shafts, cardan drives, and custom spline fittings engineered for balance.',
      image: imgShafts,
      link: '/products?category=propeller-shafts'
    },
    {
      id: 'gdi-pumps',
      name: 'GDI Fuel Pumps',
      desc: 'High-pressure direct injection pumps offering stable flow, precise solenoid metering, and long wear lives.',
      image: imgGdiPumps,
      link: '/products?category=gdi-pumps'
    },
    {
      id: 'master-cylinders',
      name: 'Clutch Master Cylinders',
      desc: 'Pre-filled, pre-bled, and lightweight engineering plastic cylinder assemblies for rapid installation.',
      image: imgMasters,
      link: '/products?category=master-cylinders'
    },
    {
      id: 'slave-cylinders',
      name: 'Clutch Slave Cylinders',
      desc: 'Concentric slave cylinders (CSC) and classic release bearing assemblies optimized for smooth pedal engagement.',
      image: imgSlaves,
      link: '/products?category=slave-cylinders'
    }
  ];

  const handleCategoryClick = (link: string) => {
    navigate(link);
  };

  return (
    <section className="bg-brand-light py-20 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Engineered Product Offerings"
          subtitle="Explore our specialized ranges of drivetrain and hydraulic clutch components, built to withstand millions of operating cycles."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => handleCategoryClick(cat.link)}
              className="group relative h-[300px] rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-brand-border hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 object-center"
                />
                {/* Visual Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/50 to-brand-dark/20 group-hover:from-brand-dark/95 transition-all duration-300" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-brand-red transition-all duration-300" />
              </div>

              {/* Text Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-[10px] tracking-widest text-brand-red font-bold uppercase mb-2">Automotive Aftermarket</span>
                <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2 group-hover:text-brand-red transition-colors duration-300">
                  {cat.name}
                </h3>
                <p className="text-xs text-brand-footer-text font-light leading-relaxed max-w-md opacity-90 group-hover:opacity-100 transition-opacity">
                  {cat.desc}
                </p>

                {/* Arrow indicator */}
                <div className="flex items-center gap-1.5 mt-4 text-xs font-bold text-white uppercase tracking-wider group-hover:text-brand-red transition-colors">
                  View Catalog
                  <ArrowRight size={14} className="transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
