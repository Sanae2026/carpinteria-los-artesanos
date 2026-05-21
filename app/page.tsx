import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/data'

export default function HomePage() {
  const recent = projects.slice(0, 3)

  return (
    <>
      {/* HERO */}
      <section className="relative bg-stone-900 h-[560px] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #d9bc94 0, #d9bc94 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-amber-600 text-xs uppercase tracking-[3px] mb-4">
            Carpintería artesanal · Madrid
          </p>
          <h1 className="font-playfair text-5xl text-white leading-tight mb-4">
            Madera que<br />
            <em className="text-amber-200">cuenta historias</em>
          </h1>
          <p className="text-stone-300 text-base font-light max-w-md mb-8 leading-relaxed">
            Creamos muebles a medida y restauramos piezas únicas con técnicas transmitidas de generación en generación.
          </p>
          <Link
            href="/proyectos"
            className="inline-block bg-amber-700 hover:bg-amber-800 text-white text-sm uppercase tracking-widest px-7 py-3 transition-colors"
          >
            Ver proyectos
          </Link>
        </div>
        <div className="absolute right-16 bottom-10 w-24 h-24 rounded-full border border-white/20 flex flex-col items-center justify-center text-amber-200">
          <span className="font-playfair text-3xl font-semibold">28</span>
          <span className="text-xs tracking-widest text-stone-400">años</span>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="bg-stone-900 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-600 text-xs uppercase tracking-[3px] mb-6">Servicios</p>
          <div className="grid grid-cols-3 gap-px bg-stone-700">
            {[
              { title: 'Muebles a medida', desc: 'Diseño y fabricación personalizada adaptada a cada espacio y necesidad.' },
              { title: 'Restauración', desc: 'Recuperamos el esplendor de piezas antiguas con técnicas originales.' },
              { title: 'Carpintería estructural', desc: 'Soluciones técnicas para reformas, escaleras y elementos de construcción.' },
            ].map((s) => (
              <div key={s.title} className="bg-stone-50 p-8">
                <h3 className="font-playfair text-lg text-stone-900 mb-2">{s.title}</h3>
                <p className="text-stone-500 text-sm font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS RECIENTES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-amber-600 text-xs uppercase tracking-[3px] mb-2">Portfolio</p>
        <h2 className="font-playfair text-3xl text-stone-900 mb-8">
          Proyectos <em className="text-amber-700">recientes</em>
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {recent.map((project) => (
            <Link
              key={project.slug}
              href={`/proyectos/${project.slug}`}
              className="group border border-stone-200 hover:-translate-y-1 transition-transform overflow-hidden"
            >
              <div className="h-48 bg-amber-50 flex items-center justify-center text-4xl">
                🪵
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-playfair text-base text-stone-900 mb-1">{project.title}</h3>
                <p className="text-stone-400 text-xs">{project.category} · {project.year}</p>
                <span className="inline-block mt-2 text-xs px-2 py-1 bg-amber-50 text-amber-700 uppercase tracking-wider">
                  Ver proyecto
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}