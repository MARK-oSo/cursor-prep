import { motion } from 'framer-motion';
import { GradientText } from '../ui/GradientText';
import { Button } from '../ui/Button';
import { MeshBackground } from '../effects/MeshBackground';
import { GlowOrb } from '../effects/GlowOrb';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function Hero() {
  const reduced = useReducedMotion();

  const headlineAnim = reduced
    ? {}
    : {
        initial: { opacity: 0, filter: 'blur(12px)', y: 24 },
        animate: { opacity: 1, filter: 'blur(0px)', y: 0 },
        transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
      };

  const subtitleAnim = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 },
      };

  const ctaAnim = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay: 0.4 },
      };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-base">
      <MeshBackground />
      <GlowOrb color="violet" size={560} className="top-1/4 right-1/4 opacity-20" />
      <GlowOrb color="cyan" size={320} className="bottom-1/3 left-1/2 opacity-20" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
        <motion.h1
          className="font-display font-bold text-text-primary text-h3 sm:text-h2 lg:text-h1"
          {...headlineAnim}
        >
          Prepárate para tu certificación{' '}
          <GradientText as="span">con práctica que aprende contigo</GradientText>
        </motion.h1>

        <motion.p
          className="mt-6 text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
          {...subtitleAnim}
        >
          Simulacros adaptativos, banco de preguntas curado y análisis de progreso
          en tiempo real para que llegues al examen con confianza.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          {...ctaAnim}
        >
          <Button variant="primary" size="lg">Empieza gratis</Button>
          <Button variant="ghost" size="lg">Ver cómo funciona</Button>
        </motion.div>
      </div>
    </section>
  );
}
