import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contacto | Carpintería Los Artesanos',
  description: 'Contacta con el taller Los Artesanos para tu proyecto a medida.',
}

export default function ContactoPage() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 min-h-[600px]">
      <div className="bg-blue-950 p-10 md:p-16">
        <p className="text-orange-400 text-xs uppercase tracking-[3px] mb-6">
          Server Action · validación
        </p>
        <h1 className="font-cormorant text-4xl md:text-5xl text-white mb-4">
          Hablemos de<br />tu proyecto
        </h1>
        <p className="text-blue-200 font-light leading-relaxed mb-10 text-sm md:text-base">
          Cuéntanos qué tienes en mente. Respondemos en menos de 48 horas con un presupuesto sin compromiso.
        </p>
        <div className="space-y-4">
          <div className="flex gap-3 items-start">
            <span className="text-orange-400 mt-1">📍</span>
            <p className="text-blue-200 text-sm font-light leading-relaxed">
              Calle de los Artesanos 14<br />04009 Almería
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-orange-400 mt-1">🕐</span>
            <p className="text-blue-200 text-sm font-light leading-relaxed">
              Lunes a viernes: 9:00 – 18:00<br />Sábados: 10:00 – 14:00
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-orange-400 mt-1">✉️</span>
            <p className="text-blue-200 text-sm font-light">
              contacto@losartesanos.es
            </p>
          </div>
        </div>
      </div>
      <div className="bg-neutral-50 p-10 md:p-16">
        <ContactForm />
      </div>
    </div>
  )
}