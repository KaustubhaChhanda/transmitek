import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'blue';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';
  
  const variants = {
    primary: 'bg-brand-red text-white hover:bg-brand-red-dark shadow-md shadow-brand-red/10',
    blue: 'bg-brand-blue text-white hover:bg-brand-blue-dark shadow-md shadow-brand-blue/10',
    outline: 'border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white',
    ghost: 'text-brand-heading hover:bg-brand-light'
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...(props as any)}
    >
      {icon && iconPosition === 'left' && <span className="flex items-center">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="flex items-center">{icon}</span>}
    </motion.button>
  );
};
