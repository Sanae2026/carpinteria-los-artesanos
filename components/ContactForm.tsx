'use client'

import { useState } from 'react'
import { submitContact } from '@/lib/actions'

export default function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setErrors({})

    const formData = new FormData(e.currentTarget)
    const result = await submitContact(formData)

    if (result.success) {
      setSuccess(true)
      ;(e.target as HTMLFormElement).reset()
    } else {
      setErrors(result.errors ?? {})
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {success && (
        <div className="p-4 bg-green-50 border border-green-200 text-green-800 text-sm">
          ✓ Mensaje enviado correctamente. Te contactaremos en breve.
        </div>
      )}
      <div>
        <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2">Nombre completo</label>
        <input name="name" type="text" placeholder="Manuel García"
          className="w-full border border-stone-200 px-4 py-3 text-sm text-stone-900 bg-white focus:outline-none focus:border-amber-600" />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>
      <div>
        <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2">Email</label>
        <input name="email" type="email" placeholder="manuel@ejemplo.com"
          className="w-full border border-stone-200 px-4 py-3 text-sm text-stone-900 bg-white focus:outline-none focus:border-amber-600" />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      <div>
        <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2">Mensaje</label>
        <textarea name="message" rows={4} placeholder="Necesito una mesa para el comedor de 180cm..."
          className="w-full border border-stone-200 px-4 py-3 text-sm text-stone-900 bg-white focus:outline-none focus:border-amber-600 resize-none" />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>
      <button type="submit" disabled={loading}
        className="w-full bg-amber-700 hover:bg-amber-800 text-white text-sm uppercase tracking-widest py-3 transition-colors disabled:opacity-50">
        {loading ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  )
}