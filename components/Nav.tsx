import Link from 'next/link'

export default function Nav() {
  return (
    <header className="bg-white border-b border-neutral-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-0 sm:justify-between">
        <Link href="/" className="font-cormorant text-blue-950 text-2xl font-semibold tracking-wide">
          Los Artesanos
        </Link>
        <nav className="flex gap-6">
          {[
            { href: '/', label: 'Inicio' },
            { href: '/nosotros', label: 'Nosotros' },
            { href: '/proyectos', label: 'Galería' },
            { href: '/contacto', label: 'Contacto' },
          ].map((link) => (
            <Link key={link.href} href={link.href}
              className="text-neutral-500 text-xs uppercase tracking-widest hover:text-blue-950 transition-colors whitespace-nowrap">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}