import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface GlowOrbProps {
  color?: 'violet' | 'cyan' | 'pink';
  size?: number;
  className?: string;
}

const colorMap: Record<'violet' | 'cyan' | 'pink', string> = {
  violet: '#7C5CFF',
  cyan: '#22D3EE',
  pink: '#F472B6',
};

export function GlowOrb({ color = 'violet', size = 400, className }: GlowOrbProps) {
  const reduced = useReducedMotion();

  const style: CSSProperties = {
    backgroundColor: colorMap[color],
    width: size,
    height: size,
    filter: 'blur(100px)',
    willChange: 'transform',
  };

  const baseClass = cn('absolute rounded-full opacity-30 pointer-events-none', className);

  if (reduced) {
    return <div className={baseClass} style={style} />;
  }

  return (
    <motion.div
      className={baseClass}
      style={style}
      animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, -15, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}
