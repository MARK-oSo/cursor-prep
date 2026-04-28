import { motion, type Variants } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article';
  y?: number;
}

const tags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
} as const;

export function ScrollReveal({
  children,
  delay = 0,
  className,
  as = 'div',
  y = 24,
}: ScrollRevealProps) {
  const reduced = useReducedMotion();
  const Tag = tags[as] as typeof motion.div;

  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Tag
      className={className}
      variants={reduced ? undefined : variants}
      initial={reduced ? undefined : 'hidden'}
      whileInView={reduced ? undefined : 'visible'}
      viewport={reduced ? undefined : { once: true, margin: '-50px' }}
      transition={
        reduced
          ? undefined
          : {
              duration: 0.6,
              delay,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }
      }
    >
      {children}
    </Tag>
  );
}
