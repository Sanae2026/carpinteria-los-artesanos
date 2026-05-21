export default function Footer() {
  return (
    <footer className="bg-blue-950 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="font-cormorant text-white text-2xl font-semibold">Los Artesanos</p>
          <p className="text-blue-300 text-xs mt-1">Almería · Desde 1996</p>
        </div>
        <div className="text-center">
          <p className="text-blue-300 text-xs">Calle de los Artesanos 14, Almería</p>
          <p className="text-blue-300 text-xs mt-1">contacto@losartesanos.es</p>
        </div>
        <p className="text-blue-400 text-xs text-center md:text-right">
          Next.js 15 · App Router<br />TypeScript · Shadcn UI
        </p>
      </div>
    </footer>
  )
}