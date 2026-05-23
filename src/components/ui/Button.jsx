import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function Button({ children, variant = 'primary', className, ...props }) {
  const baseStyles = "px-6 py-3 rounded-sm font-sans font-medium transition-all duration-300 transform inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-secondary text-white shadow-ambient hover:bg-secondary-fixedDim hover:-translate-y-0.5",
    secondary: "bg-surface-variant text-primary hover:bg-surface-containerHighest hover:-translate-y-0.5",
    outline: "border border-outline text-primary hover:border-secondary hover:text-secondary hover:-translate-y-0.5",
    ghost: "text-primary hover:bg-surface-containerLow",
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
