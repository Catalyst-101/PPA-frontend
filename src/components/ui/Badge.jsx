import React from 'react';
import { cn } from './Button';

export function Badge({ children, variant = "default", className }) {
  const variants = {
    default: "bg-surface-containerHighest text-text-variant",
    success: "bg-tertiary-fixed text-tertiary-fixed-variant", // Representing Approved
    warning: "bg-secondary-container text-secondary", // Representing Pending
    danger: "bg-error-container text-on-error-container", // Representing Rejected
    primary: "bg-primary-fixed text-on-primary-fixed",
  };

  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-medium uppercase tracking-wider",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}
