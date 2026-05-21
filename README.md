# Carpintería Los Artesanos

Proyecto de clase para practicar Next.js 15 con App Router. He construido un sitio web para una carpintería ficticia de Almería intentando aplicar todo lo que hemos visto: Server Components, ISR, rutas dinámicas, Server Actions y Middleware.

## Qué he usado

- Next.js 15 con App Router y TypeScript
- Tailwind CSS v4
- Shadcn UI para los componentes
- Vercel para el despliegue

## Páginas que tiene

- **Inicio** — hero section, servicios y proyectos recientes
- **Nosotros** — historia del taller con línea de tiempo
- **Galería** — listado de proyectos con ISR (se regenera cada hora)
- **Detalle de proyecto** — ruta dinámica `/proyectos/[slug]` con metadata SEO
- **Contacto** — formulario con validación usando Server Actions

## Cómo ejecutarlo

```bash
npm install
npm run dev
```
