import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[600px] flex flex-col items-center justify-center bg-stone-50">
      <p className="text-amber-600 text-xs uppercase tracking-[3px] mb-4">Error 404</p>
      <h1 className="font-playfair text-5xl text-stone-900 mb-4">
        Página no encontrada
      </h1>
      <p className="text-stone-400 font-light mb-8">
        La página que buscas no existe o ha sido movida.
      </p>
      <Link
        href="/"
        className="bg-amber-700 hover:bg-amber-800 text-white text-sm uppercase tracking-widest px-8 py-3 transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  )
}