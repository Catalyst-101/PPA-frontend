import React from 'react';
import { cn } from './Button';

export function Card({ children, className }) {
  return (
    <div className={cn(
      "bg-surface-lowest ghost-border rounded-sm overflow-hidden transition-all duration-300 hover:shadow-ambient",
      className
    )}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className }) {
  return <div className={cn("px-6 py-4 border-b border-outline-variant/10", className)}>{children}</div>;
}

export function CardTitle({ children, className }) {
  return <h3 className={cn("font-serif font-bold text-lg text-primary", className)}>{children}</h3>;
}

export function CardContent({ children, className }) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

export function CardFooter({ children, className }) {
  return <div className={cn("px-6 py-4 bg-surface-containerLow flex items-center", className)}>{children}</div>;
}
