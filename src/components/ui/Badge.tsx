import React from 'react';
import { cn } from '../../lib/cn';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'subtle';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: 'bg-accent-primary/10 text-accent-primary border border-accent-primary/20',
  secondary: 'bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/20',
  success: 'bg-accent-success/10 text-accent-success border border-accent-success/20',
  warning: 'bg-accent-warning/10 text-accent-warning border border-accent-warning/20',
  subtle: 'bg-bg-elevated text-text-secondary border border-border-subtle',
};

const base = 'inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium tracking-wide';

export function Badge({ variant = 'subtle', className, children, ...props }: BadgeProps) {
  return (
    <span className={cn(base, variantClasses[variant], className)} {...props}>
      {children}
    </span>
  );
}
