import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  suffix?: string;
  index: number;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  suffix = '',
  index
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [displayValue, setDisplayValue] = useState('0');
  
  useEffect(() => {
    if (!isInView) return;
    
    // Parse numeric parts (e.g. "30" -> 30, "1.2M" -> 1.2)
    const match = value.match(/^([0-9.]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }
    
    const numericPart = parseFloat(match[1]);
    const textPart = match[2]; // e.g. "M" from "1.2M"
    
    const controls = animate(0, numericPart, {
      duration: 1.5,
      delay: index * 0.15,
      ease: 'easeOut',
      onUpdate(latest) {
        // If it has decimals (like 1.2), format with decimal places
        const formatted = numericPart % 1 === 0
          ? Math.round(latest).toString()
          : latest.toFixed(1);
        setDisplayValue(`${formatted}${textPart}`);
      }
    });
    
    return () => controls.stop();
  }, [value, isInView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glassmorphism p-6 rounded-xl flex flex-col items-center justify-center text-center shadow-lg border border-white/5 hover:border-brand-red/30 transition-all duration-300 group hover:-translate-y-1"
    >
      <span className="text-4xl md:text-5xl font-black text-white group-hover:text-brand-red transition-colors duration-300">
        {displayValue}
        {suffix && <span className="text-brand-red ml-0.5">{suffix}</span>}
      </span>
      <span className="text-xs md:text-sm font-medium text-brand-footer-text mt-2 uppercase tracking-wider">
        {label}
      </span>
    </motion.div>
  );
};
