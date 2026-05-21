export default function Footer() {
  return (
    <footer className="bg-blue-950 py-10 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div>
          <p className="font-cormorant text-white text-xl font-semibold">Los Artesanos</p>
          <p className="text-blue-300 text-xs mt-1">Almería · Desde 1996</p>
        </div>
        <p className="text-blue-400 text-xs">Next.js 15 · App Router · TypeScript · Shadcn UI</p>
      </div>
    </footer>
  )
}