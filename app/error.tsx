'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="min-h-[600px] flex flex-col items-center justify-center bg-stone-50">
      <p className="text-amber-600 text-xs uppercase tracking-[3px] mb-4">Error</p>
      <h2 className="font-playfair text-4xl text-stone-900 mb-4">
        Algo ha ido mal
      </h2>
      <p className="text-stone-400 font-light mb-8">
        {error.message || 'Se ha producido un error inesperado.'}
      </p>
      <button
        onClick={reset}
        className="bg-amber-700 hover:bg-amber-800 text-white text-sm uppercase tracking-widest px-8 py-3 transition-colors"
      >
        Intentar de nuevo
      </button>
    </div>
  )
}