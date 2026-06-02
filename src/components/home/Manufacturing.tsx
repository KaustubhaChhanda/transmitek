import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { companyCapabilities } from '../../data/company';
import * as Icons from 'lucide-react';

export const Manufacturing: React.FC = () => {
  // Dynamic icon helper
  const renderIcon = (name: string, colorClass: string) => {
    const IconComponent = (Icons as any)[name];
    if (!IconComponent) return <Icons.Settings className={colorClass} size={28} />;
    return <IconComponent className={colorClass} size={28} />;
  };

  return (
    <section className="bg-white py-20 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Manufacturing & Quality Capabilities"
          subtitle="Combining CNC machining lines, robotic assembly, and digital management to sustain volume aftermarket demands."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {companyCapabilities.map((cap, idx) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-8 border border-brand-border rounded-2xl hover:border-brand-red/30 hover:shadow-lg transition-all duration-300 flex flex-col items-start bg-brand-lighter group"
            >
              {/* Icon Container */}
              <div className="p-3 bg-white border border-brand-border rounded-xl mb-6 shadow-sm group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300">
                {renderIcon(
                  cap.iconName,
                  idx % 2 === 0
                    ? 'text-brand-red group-hover:text-white transition-colors duration-300'
                    : 'text-brand-blue group-hover:text-white transition-colors duration-300'
                )}
              </div>

              <h3 className="text-lg font-bold text-brand-heading-2 mb-3 group-hover:text-brand-red transition-colors duration-300">
                {cap.title}
              </h3>
              
              <p className="text-xs text-brand-muted font-light leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
