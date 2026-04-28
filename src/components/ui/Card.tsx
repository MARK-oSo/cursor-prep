import React from 'react';
import { cn } from '../../lib/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverGlow?: boolean;
}

export function Card({ hoverGlow = false, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg bg-bg-surface border border-border-subtle p-6 transition-all duration-300',
        hoverGlow &&
          'hover:border-accent-primary/40 hover:shadow-glow-violet hover:-translate-y-0.5',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
