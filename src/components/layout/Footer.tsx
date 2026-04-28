import { X, Camera, Music2, Play } from 'lucide-react';
import { GradientText } from '../ui/GradientText';

const COLUMNS = [
  {
    title: 'Producto',
    links: ['Features', 'Cómo funciona', 'Precios', 'Materias'],
  },
  {
    title: 'Empresa',
    links: ['Acerca de', 'Blog', 'Carreras', 'Contacto'],
  },
  {
    title: 'Legal',
    links: ['Términos de uso', 'Privacidad', 'Cookies'],
  },
];

const SOCIALS = [
  { label: 'Twitter / X', Icon: X },
  { label: 'Instagram', Icon: Camera },
  { label: 'TikTok', Icon: Music2 },
  { label: 'YouTube', Icon: Play },
] as const;

export function Footer() {
  return (
    <footer className="bg-bg-surface border-t border-border-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {COLUMNS.map(({ title, links }) => (
            <div key={title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5 list-none m-0 p-0">
                {links.map((label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">
              Redes
            </h3>
            <div className="flex flex-col gap-2.5">
              {SOCIALS.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} CursorPrep. Todos los derechos reservados.
          </p>
          <GradientText as="p" className="text-xs">
            Hecho en México
          </GradientText>
        </div>
      </div>
    </footer>
  );
}
