import Link from 'next/link'

const posts = [
  {
    slug: 'errores-comunes-lavar-ropa',
    title: 'Errores Comunes al Lavar Ropa en Casa (Y Cómo Evitarlos)',
    date: 'Mayo 6, 2025',
    img: 'https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-blog-1.webp',
  },
  {
    slug: 'cada-cuanto-llevar-ropa-lavanderia',
    title: '¿Cada Cuánto Deberías Llevar Tu Ropa a la Lavandería Profesional?',
    date: 'Marzo 21, 2025',
    img: 'https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-blog-2.webp',
  },
  {
    slug: '5-consejos-mantener-prendas-impecables',
    title: '5 Consejos para Mantener Tus Prendas Impecables',
    date: 'Febrero 12, 2025',
    img: 'https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-blog-3.webp',
  },
  {
    slug: 'por-que-elegir-lavanderia-ecologica',
    title: '¿Por Qué Elegir un Servicio de Lavandería Ecológica?',
    date: 'Febrero 1, 2025',
    img: 'https://lavasecoprestigio.com/wp-content/uploads/2025/05/nosotros-lp-6-640x640.webp',
  },
  {
    slug: 'conoce-nuestros-beneficios-exclusivos',
    title: 'Conoce Nuestros Beneficios Exclusivos para Clientes',
    date: 'Enero 20, 2025',
    img: 'https://lavasecoprestigio.com/wp-content/uploads/2025/05/servicios-empresariales-tabs.webp',
  },
]

export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Banner */}
      <section className="relative overflow-hidden" style={{ paddingTop: '132px' }}>
        <div className="relative h-[280px] md:h-[340px]">
          <img
            src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-2.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#192868]/60" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <nav className="text-white/70 text-sm mb-3">
              <Link href="/" className="hover:text-white">Inicio</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Blog</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Nuestro <span className="text-[#4fa8e8]">Blog</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="4" width="14" height="12" rx="2" stroke="#192868" strokeWidth="1.5"/><path d="M7 8h6M7 11h4" stroke="#192868" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <span className="text-[#192868] font-semibold text-sm uppercase tracking-wider">Cuidado de Tus Prendas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#192868] mb-1">Consejos, Tendencias</h2>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#4fa8e8] mb-6">y Recomendaciones</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Descubre ideas prácticas, noticias útiles y recomendaciones sobre lavandería, sostenibilidad y mucho más.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {posts.slice(0, 3).map((post) => (
              <article key={post.slug} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#192868]/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-sm leading-tight">{post.title}</h3>
                    <div className="flex items-center gap-3 mt-2 text-white/70 text-xs">
                      <span>Comentarios 0</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {posts.slice(3).map((post) => (
              <article key={post.slug} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#192868]/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-sm leading-tight">{post.title}</h3>
                    <div className="flex items-center gap-3 mt-2 text-white/70 text-xs">
                      <span>Comentarios 0</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
