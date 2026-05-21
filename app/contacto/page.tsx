import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contacto | Carpintería Los Artesanos',
  description: 'Contacta con el taller Los Artesanos para tu proyecto a medida.',
}

export default function ContactoPage() {
  return (
    <div className="grid grid-cols-2 min-h-[600px]">
      <div className="bg-stone-900 p-16">
        <p className="text-amber-600 text-xs uppercase tracking-[3px] mb-6">Server Action · validación</p>
        <h1 className="font-playfair text-4xl text-white mb-4">
          Hablemos de<br />tu proyecto
        </h1>
        <p className="text-stone-300 font-light leading-relaxed mb-10">
          Cuéntanos qué tienes en mente. Respondemos en menos de 48 horas con un presupuesto sin compromiso.
        </p>
        <div className="space-y-4">
          <div className="flex gap-3 items-start">
            <span className="text-amber-600 mt-1">📍</span>
            <p className="text-stone-300 text-sm font-light leading-relaxed">Calle de los Artesanos 14<br />04009 Almería </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-amber-600 mt-1">🕐</span>
            <p className="text-stone-300 text-sm font-light leading-relaxed">Lunes a viernes: 9:00 – 18:00<br />Sábados: 10:00 – 14:00</p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-amber-600 mt-1">✉️</span>
            <p className="text-stone-300 text-sm font-light">contacto@losartesanos.es</p>
          </div>
        </div>
      </div>
      <div className="bg-stone-50 p-16">
        <ContactForm />
      </div>
    </div>
  )
}