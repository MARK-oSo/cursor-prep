import React from 'react';
import { cn } from '../../lib/cn';

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p';
}

export function GradientText({ as: Tag = 'span', className, children, ...props }: GradientTextProps) {
  return (
    <Tag
      className={cn('bg-gradient-hero bg-clip-text text-transparent', className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
