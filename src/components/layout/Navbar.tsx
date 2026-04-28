import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/cn';
import { Button } from '../ui/Button';
import { GradientText } from '../ui/GradientText';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Cómo funciona', href: '#how' },
  { label: 'Precios', href: '#pricing' },
  { label: 'Materias', href: '#subjects' },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const drawerInitial = reducedMotion ? { opacity: 0 } : { x: '100%' };
  const drawerAnimate = reducedMotion ? { opacity: 1 } : { x: 0 };
  const drawerExit = reducedMotion ? { opacity: 0 } : { x: '100%' };
  const drawerTransition = reducedMotion
    ? { duration: 0.15 }
    : { type: 'spring' as const, damping: 25, stiffness: 200 };

  return (
    <>
      <nav
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-bg-base/80 backdrop-blur-md border-b border-border-subtle'
            : 'bg-transparent',
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="text-xl font-display font-semibold tracking-tight">
              <GradientText>CursorPrep</GradientText>
            </a>

            <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden md:block">
              <Button variant="primary" size="sm">
                Empezar
              </Button>
            </div>

            <button
              className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={open}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-50 bg-bg-base/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="drawer"
              className="fixed top-0 right-0 z-[51] h-full w-72 bg-bg-elevated border-l border-border-subtle flex flex-col p-6"
              initial={drawerInitial}
              animate={drawerAnimate}
              exit={drawerExit}
              transition={drawerTransition}
            >
              <div className="flex items-center justify-between mb-8">
                <a href="#" className="text-lg font-display font-semibold">
                  <GradientText>CursorPrep</GradientText>
                </a>
                <button
                  className="p-1 text-text-secondary hover:text-text-primary transition-colors"
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar menú"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="flex flex-col gap-1 flex-1">
                {NAV_LINKS.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    className="px-3 py-2.5 text-text-secondary hover:text-text-primary hover:bg-bg-surface rounded-md transition-colors text-sm"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </a>
                ))}
              </nav>

              <Button variant="primary" size="md" className="w-full mt-6">
                Empezar
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
