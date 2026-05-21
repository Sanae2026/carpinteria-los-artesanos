![Next](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

# 🪵 Carpintería Los Artesanos

Sitio web corporativo para una carpintería artesanal de Almería.

Aplicación web desarrollada con Next.js 15 y App Router que demuestra arquitectura híbrida con Server Components, ISR, rutas dinámicas y Server Actions sin necesidad de backend separado.

| Despliegue | URL |
|-----------|-----|
| Frontend | [carpinteria-los-artesanos-orcin.vercel.app](https://carpinteria-los-artesanos-orcin.vercel.app) |

## Características

1. Galería de proyectos con Incremental Static Regeneration (ISR) que se actualiza cada hora sin redeploy
2. Formulario de contacto con validación mediante Server Actions, sin API routes ni backend externo
3. Rutas dinámicas `/proyectos/[slug]` con `generateStaticParams` y metadata SEO dinámica por proyecto

## Tecnologías

| Frontend | Uso |
|----------|-----|
| Next.js 15 | Framework principal, App Router, SSG e ISR |
| TypeScript | Tipado estático en todos los archivos |
| Tailwind CSS v4 | Sistema de diseño y estilos |
| Shadcn UI | Componentes accesibles basados en Radix UI |

| Auxiliares | Uso |
|-----------|-----|
| Vercel | Despliegue y hosting |
| next/font | Carga optimizada de fuentes sin layout shift |

## Estructura del proyecto

```
carpinteria-los-artesanos/
├── app/
│   ├── layout.tsx                  # Layout raíz con Nav y Footer
│   ├── page.tsx                    # Inicio (SSG)
│   ├── error.tsx                   # Error boundary global
│   ├── not-found.tsx               # Página 404 personalizada
│   ├── nosotros/
│   │   └── page.tsx                # Historia del taller (SSG)
│   ├── proyectos/
│   │   ├── page.tsx                # Galería (ISR)
│   │   ├── loading.tsx             # Skeleton de carga
│   │   └── [slug]/
│   │       ├── page.tsx            # Detalle de proyecto (rutas dinámicas)
│   │       └── loading.tsx         # Skeleton de carga
│   └── contacto/
│       └── page.tsx                # Formulario de contacto
├── components/
│   ├── Nav.tsx                     # Navegación (Server Component)
│   ├── Footer.tsx                  # Pie de página (Server Component)
│   ├── ContactForm.tsx             # Formulario (Client Component)
│   └── ui/                         # Componentes Shadcn UI
├── lib/
│   ├── data.ts                     # Datos locales
│   ├── actions.ts                  # Server Actions
│   └── utils.ts                    # Utilidades
├── middleware.ts                   # Cabeceras de seguridad HTTP
└── README.md
```

## Descargar y ejecutar

```bash
git clone https://github.com/Sanae2026/carpinteria-los-artesanos.git
cd carpinteria-los-artesanos
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Desplegar en Vercel

1. Importa el repositorio en [vercel.com](https://vercel.com)
2. Vercel detecta Next.js automáticamente, no hace falta configurar nada
3. Haz clic en **Deploy**

---

Desarrollado durante las prácticas en Corner Estudios — Sanae — 2026