export type Project = {
  slug: string
  title: string
  description: string
  image: string
  materials: string[]
  year: number
  category: string
}

export const projects: Project[] = [
  {
    slug: 'mesa-roble-macizo',
    title: 'Mesa de Roble Macizo',
    description: 'Mesa de comedor de 240×100 cm en roble macizo europeo, con acabado en aceite natural. Las patas, torneadas a mano, presentan una sección variable que aligeran visualmente la pieza sin comprometer la solidez estructural.',
    image: '/images/mesa-roble.jpg',
    materials: ['Roble europeo', 'Aceite natural', 'Herrajes bronce', 'Barniz mate'],
    year: 2023,
    category: 'Muebles a medida',
  },
  {
    slug: 'reforma-loft-industrial',
    title: 'Reforma Loft Industrial',
    description: 'Reforma integral de vivienda tipo loft. Combinamos pino envejecido con perfiles de acero corten para respetar la estética industrial del espacio.',
    image: '/images/loft.jpg',
    materials: ['Pino envejecido', 'Acero corten', 'Abeto nórdico', 'Cera virgen'],
    year: 2024,
    category: 'Carpintería estructural',
  },
  {
    slug: 'armario-nogal',
    title: 'Armario de Nogal',
    description: 'Armario empotrado para dormitorio principal en espacio abuhardillado. Construido íntegramente en nogal americano con juntas de cola sin clavos.',
    image: '/images/armario.jpg',
    materials: ['Nogal americano', 'Vidrio esmerilado', 'Guías soft-close', 'Laca al agua'],
    year: 2024,
    category: 'Muebles a medida',
  },
  {
    slug: 'escalera-flotante',
    title: 'Escalera Flotante',
    description: 'Escalera de acceso al altillo con peldaños volados encastrados en muro de hormigón visto. El pasamanos de sección elíptica es la firma artesanal del taller.',
    image: '/images/escalera.jpg',
    materials: ['Fresno europeo', 'Acero inox', 'Resina epoxi', 'Aceite Rubio Monocoat'],
    year: 2023,
    category: 'Carpintería estructural',
  },
  {
    slug: 'cocina-cerezo',
    title: 'Cocina de Cerezo',
    description: 'Cocina completa para casa unifamiliar. Frentes en cerezo macizo con tiras de aluminio anodizado y cajones con juntas dovetail.',
    image: '/images/cocina.jpg',
    materials: ['Cerezo americano', 'Aluminio anodizado', 'Silestone gris', 'Bisagras Blum'],
    year: 2022,
    category: 'Muebles a medida',
  },
  {
    slug: 'biblioteca-medida',
    title: 'Biblioteca a Medida',
    description: 'Librería floor-to-ceiling de 4,2m de altura con escalera deslizante sobre riel de latón. Diseñada para soportar más de 3.000 volúmenes.',
    image: '/images/biblioteca.jpg',
    materials: ['Pino macizo', 'Riel de latón', 'Pintura al agua', 'Balda reforzada'],
    year: 2024,
    category: 'Muebles a medida',
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find(p => p.slug === slug)
}