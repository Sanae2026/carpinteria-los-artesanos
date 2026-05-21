import { getProjectBySlug, projects } from '@/lib/data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}
  return {
    title: `${project.title} | Carpintería Los Artesanos`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  }
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  return (
    <>
      <Link
        href="/proyectos"
        className="block bg-stone-900 text-amber-200 text-sm px-6 py-3 hover:text-amber-400 transition-colors w-fit"
      >
        ← Volver a la galería
      </Link>

      <div className="h-80 bg-amber-50 flex items-center justify-center text-8xl border-b border-stone-200">
        🪵
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-3 gap-12">
        <div className="col-span-2">
          <p className="text-amber-600 text-xs uppercase tracking-[3px] mb-2">
            /proyectos/{project.slug}
          </p>
          <h1 className="font-playfair text-4xl text-stone-900 mb-2">
            {project.title}
          </h1>
          <p className="text-stone-400 text-sm mb-6">
            {project.category} · {project.year}
          </p>
          <p className="text-stone-600 font-light leading-relaxed text-base">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              { label: 'generateStaticParams', color: 'bg-amber-50 text-amber-700' },
              { label: 'Metadata dinámica', color: 'bg-stone-100 text-stone-600' },
              { label: 'Ruta dinámica', color: 'bg-stone-100 text-stone-600' },
            ].map((badge) => (
              <span key={badge.label} className={`text-xs px-3 py-1 uppercase tracking-wider ${badge.color}`}>
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-stone-50 border border-stone-200 p-6">
          <p className="text-xs uppercase tracking-[3px] text-amber-600 mb-4">
            Materiales
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.materials.map((m) => (
              <span key={m} className="text-xs px-3 py-1 bg-white border border-stone-200 text-stone-600">
                {m}
              </span>
            ))}
          </div>

          <div className="border-t border-stone-200 pt-6">
            <p className="text-xs uppercase tracking-[3px] text-amber-600 mb-4">
              SEO dinámico
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex gap-2">
                <span className="text-stone-400 w-16 shrink-0">title</span>
                <span className="text-stone-600">{project.title} | Los Artesanos</span>
              </div>
              <div className="flex gap-2">
                <span className="text-stone-400 w-16 shrink-0">og:image</span>
                <span className="text-stone-600">/images/{project.slug}.jpg</span>
              </div>
              <div className="flex gap-2">
                <span className="text-stone-400 w-16 shrink-0">canonical</span>
                <span className="text-stone-600">/proyectos/{project.slug}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}