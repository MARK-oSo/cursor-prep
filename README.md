# CursorPrep

**Domina tu examen. Conquista tu futuro.**

Plataforma mexicana de preparación para exámenes de nivel medio superior: COMIPEMS, IPN y UNAM.

[![CI](https://github.com/MARK-oSo/cursor-prep/actions/workflows/ci.yml/badge.svg)](https://github.com/MARK-oSo/cursor-prep/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-brightgreen)](https://mark-oso.github.io/cursor-prep/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)](https://vitejs.dev)

---

## Descripción

CursorPrep es una plataforma de simulacros en línea diseñada para estudiantes mexicanos que se preparan para los exámenes de admisión más competitivos del país: COMIPEMS, IPN y UNAM. Con un banco de más de 10,000 preguntas organizadas por materia y nivel de dificultad, los usuarios pueden practicar en condiciones que replican el examen real.

El simulador adaptativo ajusta la dificultad de las preguntas según el desempeño del estudiante, maximizando el tiempo de estudio y reforzando las áreas de oportunidad. La analítica en tiempo real muestra el avance por materia, porcentaje de aciertos y proyección estimada de puntaje.

CursorPrep fue construido íntegramente en México, pensado para el ritmo, el calendario y los contenidos del sistema educativo nacional.

---

## Screenshots

<!-- TODO: screenshot -->
Vista live del sitio: [https://mark-oso.github.io/cursor-prep/](https://mark-oso.github.io/cursor-prep/)

---

## Stack tecnológico

| Tecnología | Versión |
|---|---|
| React | 19 |
| TypeScript | 5 |
| Vite | 6 |
| Tailwind CSS | v3 |
| Framer Motion | latest |
| Lucide React | latest |
| Vitest | latest |
| ESLint | latest |
| Prettier | latest |
| pnpm | 9+ |

**Prerequisito:** Node 20+

---

## Setup

```bash
# Clonar el repo
git clone https://github.com/MARK-oSo/cursor-prep.git
cd cursor-prep

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo (localhost:5173)
pnpm dev

# Compilar para producción
pnpm build

# Vista previa del build
pnpm preview

# Ejecutar pruebas
pnpm test

# Lint
pnpm lint

# Verificación de tipos
pnpm typecheck

# Formatear código
pnpm format
```

### Estructura del proyecto

```
cursor-prep/
├── src/
│   ├── components/
│   │   ├── ui/          # Componentes base reutilizables
│   │   ├── layout/      # Navbar, Footer, contenedores
│   │   ├── sections/    # Secciones de la landing page
│   │   └── effects/     # Efectos visuales y decorativos
│   ├── lib/             # Utilidades y helpers
│   ├── data/            # Banco de preguntas y configuración
│   └── hooks/           # Custom React hooks
├── tests/               # Pruebas con Vitest
└── public/              # Assets estáticos
```

---

## Deployment

El proyecto se despliega automáticamente a GitHub Pages en cada push a `main` mediante el workflow `.github/workflows/ci.yml`.

El pipeline ejecuta primero el job `test` (lint, typecheck y vitest); el job `deploy` corre solo en la rama `main` después de que `test` pasa en verde.

**URL live:** [https://mark-oso.github.io/cursor-prep/](https://mark-oso.github.io/cursor-prep/)

---

## Licencia

MIT — ver [LICENSE](LICENSE) para detalles.
