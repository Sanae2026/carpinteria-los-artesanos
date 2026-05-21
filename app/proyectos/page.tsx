import Link from 'next/link'
import { projects } from '@/lib/data'

export default function HomePage() {
  const recent = projects.slice(0, 3)

  return (
    <>
      {/* HERO */}
      <section className="relative bg-blue-950 min-h-[580px] flex items-center">
        <div className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(251,146,60,0.08) 0%, transparent 60%)' }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <p className="text-orange-400 text-xs uppercase tracking-[4px] mb-6">
            Carpintería artesanal · Almería
          </p>
          <h1 className="font-cormorant text-4xl md:text-6xl text-white font-light leading-tight mb-6 max-w-2xl">
            Madera que<br />
            <span className="text-orange-300 italic">cuenta historias</span>
          </h1>
          <p className="text-blue-200 text-base font-light max-w-md mb-10 leading-relaxed">
            Creamos muebles a medida y restauramos piezas únicas con técnicas transmitidas de generación en generación bajo el sol de Almería.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/proyectos"
              className="bg-orange-500 hover:bg-orange-600 text-white text-xs uppercase tracking-widest px-8 py-4 transition-colors text-center">
              Ver proyectos
            </Link>
            <Link href="/contacto"
              className="border border-blue-400 text-blue-200 hover:border-white hover:text-white text-xs uppercase tracking-widest px-8 py-4 transition-colors text-center">
              Contactar
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-500 text-xs uppercase tracking-[4px] mb-3">Servicios</p>
          <h2 className="font-cormorant text-4xl text-blue-950 mb-12">Lo que hacemos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Muebles a medida', desc: 'Diseño y fabricación personalizada adaptada a cada espacio y necesidad del cliente.', num: '01' },
              { title: 'Restauración', desc: 'Recuperamos el esplendor de piezas antiguas respetando sus técnicas y materiales originales.', num: '02' },
              { title: 'Carpintería estructural', desc: 'Soluciones técnicas para reformas, escaleras y elementos de construcción en madera.', num: '03' },
            ].map((s) => (
              <div key={s.title} className="border-t-2 border-orange-400 pt-6">
                <p className="font-cormorant text-5xl text-neutral-100 font-semibold mb-4">{s.num}</p>
                <h3 className="font-cormorant text-xl text-blue-950 mb-3">{s.title}</h3>
                <p className="text-neutral-500 text-sm font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS RECIENTES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-500 text-xs uppercase tracking-[4px] mb-3">Portfolio</p>
          <h2 className="font-cormorant text-4xl text-blue-950 mb-12">Proyectos recientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recent.map((project) => (
              <Link key={project.slug} href={`/proyectos/${project.slug}`}
                className="group overflow-hidden border border-neutral-100 hover:border-orange-200 transition-colors">
                <div className="h-52 bg-neutral-50 flex items-center justify-center text-5xl group-hover:bg-orange-50 transition-colors">
                  🪵
                </div>
                <div className="p-5">
                  <h3 className="font-cormorant text-xl text-blue-950 mb-1">{project.title}</h3>
                  <p className="text-neutral-400 text-xs mb-3">{project.category} · {project.year}</p>
                  <span className="text-xs text-orange-500 uppercase tracking-wider group-hover:underline">
                    Ver proyecto →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}