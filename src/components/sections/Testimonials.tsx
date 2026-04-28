import { motion } from 'framer-motion';
import { testimonials } from '../../data/testimonials';
import { GradientText } from '../ui/GradientText';
import { Badge } from '../ui/Badge';
import { cn } from '../../lib/cn';
import { useReducedMotion } from '../../hooks/useReducedMotion';

function TestimonialCard({
  testimonial,
  index,
  reduced,
}: {
  testimonial: (typeof testimonials)[number];
  index: number;
  reduced: boolean;
}) {
  const cardAnim = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-50px' },
        transition: {
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1] as const,
          delay: index * 0.1,
        },
      };

  return (
    <motion.article
      className={cn(
        'flex flex-col gap-4 rounded-xl border border-border-subtle bg-bg-surface p-6',
        'hover:border-border-strong transition-colors duration-300',
      )}
      {...cardAnim}
    >
      <div className="flex items-center gap-3">
        <div className="shrink-0 rounded-full p-[2px] bg-gradient-to-br from-accent-primary to-accent-secondary">
          <img
            src={testimonial.avatarUrl}
            alt={testimonial.name}
            width={44}
            height={44}
            className="rounded-full bg-bg-elevated"
            loading="lazy"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-medium text-text-primary truncate">{testimonial.name}</p>
          <Badge variant="primary" className="mt-1">
            {testimonial.schoolTarget}
          </Badge>
        </div>
      </div>

      <blockquote className="text-text-secondary italic leading-relaxed text-sm">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
    </motion.article>
  );
}

export function Testimonials() {
  const reduced = useReducedMotion();

  const headingAnim = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-50px' },
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
      };

  const displayed = testimonials.slice(0, 4);

  return (
    <section className="relative bg-bg-base py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <motion.div className="mb-14 text-center" {...headingAnim}>
          <h2 className="font-display font-bold text-text-primary text-h3 sm:text-h2">
            Lo que dicen nuestros{' '}
            <GradientText as="span">estudiantes</GradientText>
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-xl mx-auto">
            Jóvenes de todo el país que llegaron a su primera opción con CursorPrep.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {displayed.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} reduced={reduced} />
          ))}
        </div>
      </div>
    </section>
  );
}
