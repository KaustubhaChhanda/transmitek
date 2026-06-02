import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { ArrowRight, ChevronDown, Award } from 'lucide-react';

// Background image import
import heroBg from '../../assets/industrial_hero_bg.png';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  // For word-by-word reveal of the main heading
  const headingText = "30+ Years of Automotive Parts Manufacturing Excellence";
  const words = headingText.split(" ");



  return (
    <section className="relative min-h-[95vh] flex items-center justify-center bg-brand-dark overflow-hidden pt-28 w-full">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Automotive Manufacturing Backdrop"
          className="w-full h-full object-cover opacity-35 object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark/40" />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center pt-12 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Top Badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 px-4 py-1.5 rounded-full text-brand-red text-xs md:text-sm font-bold tracking-wider uppercase backdrop-blur-md"
          >
            <Award size={14} className="animate-pulse" />
            IATF 16949 Certified Manufacturer
          </motion.div>

          {/* Title - Word by word reveal */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl"
          >
            {words.map((word, idx) => (
              <span key={idx} className="inline-block mr-3">
                <motion.span
                  className={word.startsWith("30+") || word.startsWith("Excellence") ? "text-brand-red font-black" : "text-white"}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-brand-footer-text font-light max-w-2xl leading-relaxed mt-2"
          >
            Trusted global supplier of propeller shafts, GDI high-pressure fuel pumps, and premium hydraulic clutch master & slave cylinders.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full sm:w-auto"
          >
            <Link to="/products" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto uppercase tracking-wider text-sm" icon={<ArrowRight size={16} />}>
                Explore Products
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto uppercase tracking-wider text-sm border-white text-white hover:bg-white hover:text-brand-dark">
                Get Technical Quote
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bouncing Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-60">
        <span className="text-[10px] tracking-widest text-brand-footer-text uppercase font-semibold">Scroll to discover</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white bg-white/5 border border-white/10 p-1.5 rounded-full backdrop-blur-sm shadow-md"
        >
          <ChevronDown size={16} className="text-brand-red" />
        </motion.div>
      </div>
    </section>
  );
};
