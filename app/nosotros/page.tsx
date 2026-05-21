import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nosotros | Carpintería Los Artesanos',
  description: 'Historia y proceso artesanal del taller Los Artesanos desde 1996.',
}

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-stone-900 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-600 text-xs uppercase tracking-[3px] mb-4">
            Server Component · Contenido estático
          </p>
          <h1 className="font-playfair text-5xl text-white">
            Historia del <em className="text-amber-200">taller</em>
          </h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 gap-16">
        <div>
          <h2 className="font-playfair text-2xl text-stone-900 mb-6">
            Tres décadas de oficio
          </h2>
          <p className="text-stone-500 font-light leading-relaxed mb-4">
            Fundado en 1996 por Manuel Artigas en el barrio de La Latina, Los Artesanos nació con una misión clara: devolver el valor a la madera trabajada a mano en un mundo que apostaba por la producción en serie.
          </p>
          <p className="text-stone-500 font-light leading-relaxed mb-4">
            Hoy, con su hijo Diego al frente del taller, combinamos el respeto por las técnicas tradicionales con herramientas de precisión modernas para ofrecer piezas que duran generaciones.
          </p>
          <p className="text-stone-500 font-light leading-relaxed">
            Cada encargo comienza con una conversación. Entendemos el espacio, la familia, el uso. Solo entonces cogemos la madera.
          </p>
        </div>

        <div>
          <p className="text-amber-600 text-xs uppercase tracking-[3px] mb-6">
            Línea de tiempo
          </p>
          <div className="border-l-2 border-amber-200 pl-6 space-y-6">
            {[
              { year: '1996', text: 'Apertura del primer taller en La Latina. Especialización en restauración de muebles del siglo XIX.' },
              { year: '2004', text: 'Ampliación con nueva nave en Vallecas. Inicio de la línea de muebles a medida.' },
              { year: '2013', text: 'Premio Artesanía Madrileña. Colaboración con estudios de interiorismo de lujo.' },
              { year: '2024', text: 'Diego Artigas asume la dirección. Lanzamiento de web Next.js con ISR y Server Actions.' },
            ].map((item) => (
              <div key={item.year} className="relative">
                <div className="absolute -left-[1.65rem] top-1.5 w-2 h-2 rounded-full bg-amber-600" />
                <p className="text-amber-600 text-xs tracking-widest mb-1">{item.year}</p>
                <p className="text-stone-500 text-sm font-light leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}