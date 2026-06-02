import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'red' | 'blue' | 'dark' | 'light' | 'green';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'light',
  className = ''
}) => {
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide border';
  
  const variants = {
    red: 'bg-brand-red/10 border-brand-red/20 text-brand-red',
    blue: 'bg-brand-blue/10 border-brand-blue/20 text-brand-blue',
    dark: 'bg-brand-dark-2 border-brand-border-dark text-white',
    light: 'bg-brand-light border-brand-border text-brand-muted',
    green: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600'
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
