import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = 'center',
  light = false
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as any }
    }
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: 60,
      transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' as any }
    }
  };

  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className={`flex flex-col mb-12 w-full ${alignmentClasses[align]}`}
    >
      <h2 className={`text-3xl md:text-4xl font-extrabold mb-3 leading-tight ${
        light ? 'text-white' : 'text-brand-heading-2'
      }`}>
        {title}
      </h2>
      
      {/* Red accent line */}
      <motion.div
        variants={lineVariants}
        className="h-1 bg-brand-red mb-4 rounded-full"
      />
      
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl font-normal leading-relaxed ${
          light ? 'text-brand-footer-text' : 'text-brand-muted'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
