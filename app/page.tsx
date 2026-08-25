import Link from 'next/link'

export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Slider Section */}
      <section className="relative overflow-hidden" style={{ paddingTop: '132px' }}>
        <div className="relative h-[480px] md:h-[580px]">
          <img
            src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/bg-banner-ppal-prestigio-2-1920x1080.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20" />

          {/* Slide arrows */}
          <button
            type="button"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border-2 border-white/60 bg-white/10 flex items-center justify-center text-white text-2xl hover:bg-white/25 transition"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border-2 border-white/60 bg-white/10 flex items-center justify-center text-white text-2xl hover:bg-white/25 transition"
            aria-label="Siguiente"
          >
            ›
          </button>

          {/* Slide dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-white" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
          </div>
        </div>

        {/* Teal transition bar */}
        <div className="h-5 bg-[#0892b9]" />
      </section>

      {/* Three hero images */}
      <section className="bg-white pb-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-4 md:gap-6 -mt-32 md:-mt-40 relative z-10">
            <img
              src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-0.webp"
              alt="Servicio de lavandería"
              className="w-full h-64 md:h-[420px] object-cover rounded-[1.5rem]"
            />
            <img
              src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-1.webp"
              alt="Cuidado de prendas"
              className="w-full h-64 md:h-[420px] object-cover rounded-[1.5rem]"
            />
            <img
              src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-2.webp"
              alt="Tecnología de lavado"
              className="w-full h-64 md:h-[420px] object-cover rounded-[1.5rem]"
            />
          </div>
        </div>
      </section>

      {/* Service Lines Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: image collage */}
            <div className="relative h-[480px] hidden lg:block">
              <img
                src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-3.webp"
                alt=""
                className="absolute top-0 left-0 w-56 h-64 object-cover rounded-2xl shadow-md"
              />
              <img
                src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-4.webp"
                alt=""
                className="absolute top-0 right-0 w-56 h-64 object-cover rounded-2xl shadow-md"
              />
              <img
                src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-2.webp"
                alt=""
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-56 object-cover rounded-2xl shadow-md"
              />
            </div>

            {/* Right: content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#192868]">
                  <rect width="32" height="32" rx="6" fill="#e8f0fe"/>
                  <path d="M8 16h16M16 8v16" stroke="#192868" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-[#192868] font-semibold text-sm uppercase tracking-wider">Líneas de Servicio</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#192868] mb-2">
                Servicios que Cuidan
              </h2>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#4fa8e8] mb-6">
                Tus Prendas y tu Tiempo
              </h2>
              <p className="text-gray-600 mb-8">
                Descubre nuestras soluciones personalizadas para hogares y empresas, diseñadas con tecnología avanzada y un enfoque sostenible.
              </p>

              {/* Service cards - dark navy with icon */}
              <div className="space-y-4">
                <div className="flex items-stretch rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-[#192868] w-20 flex items-center justify-center flex-shrink-0">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <path d="M6 10h24M6 18h16M6 26h20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                      <circle cx="28" cy="26" r="4" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="p-5 flex-1">
                    <h3 className="text-lg font-bold text-[#192868] mb-1">Servicios Familiares</h3>
                    <p className="text-gray-600 text-sm mb-3">Lavado y cuidado de edredones, cortinas, ropa de mascotas, y mucho más para tu hogar.</p>
                    <Link href="/servicios-familiares/" className="inline-flex items-center text-[#192868] font-semibold text-sm hover:underline">
                      VER MÁS ↗
                    </Link>
                  </div>
                </div>

                <div className="flex items-stretch rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-[#192868] w-20 flex items-center justify-center flex-shrink-0">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <rect x="6" y="8" width="24" height="20" rx="2" stroke="white" strokeWidth="2"/>
                      <path d="M12 14h12M12 20h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="26" cy="20" r="3" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="p-5 flex-1">
                    <h3 className="text-lg font-bold text-[#192868] mb-1">Servicios Corporativos</h3>
                    <p className="text-gray-600 text-sm mb-3">Soluciones para empresas: uniformes, mantelería, dotaciones y más.</p>
                    <Link href="/servicios-corporativos/" className="inline-flex items-center text-[#192868] font-semibold text-sm hover:underline">
                      VER MÁS ↗
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section — dark navy gradient with staggered white cards */}
      <section
        className="py-20 px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0d1f5c 0%, #192868 50%, #0d2a47 100%)' }}
      >
        {/* Bubble decorations */}
        {[
          { w: 120, h: 120, top: '5%', left: '2%', opacity: 0.12 },
          { w: 200, h: 200, top: '10%', right: '5%', opacity: 0.08 },
          { w: 80, h: 80, bottom: '15%', left: '8%', opacity: 0.1 },
          { w: 160, h: 160, bottom: '5%', right: '10%', opacity: 0.07 },
          { w: 60, h: 60, top: '40%', left: '30%', opacity: 0.06 },
          { w: 90, h: 90, top: '60%', right: '25%', opacity: 0.09 },
        ].map((b, i) => (
          <div
            key={i}
            className="absolute rounded-full border-2 border-white pointer-events-none"
            style={{ width: b.w, height: b.h, top: b.top, left: b.left, right: (b as any).right, bottom: (b as any).bottom, opacity: b.opacity }}
          />
        ))}

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-4">
            <span className="text-[#4fa8e8] uppercase tracking-wider text-sm font-semibold">Beneficios Destacados</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4">
            ¿Por Qué <span className="text-[#4fa8e8]">Elegirnos?</span>
          </h2>
          <p className="text-white/80 text-center max-w-3xl mx-auto mb-16">
            Cuidamos tus prendas con tecnología avanzada, prácticas sostenibles y más de 25 años de experiencia. Garantizamos calidad, puntualidad y el mejor servicio a domicilio en la Sabana de Bogotá.
          </p>

          {/* Staggered cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {[
              {
                num: '01',
                offset: true,
                title: 'Tecnología Avanzada',
                desc: 'Usamos el sistema Wet Clean, que combina eficiencia con cuidado del medio ambiente.',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="5" stroke="white" strokeWidth="2"/>
                    <path d="M14 3v3M14 22v3M3 14h3M22 14h3M6.22 6.22l2.12 2.12M19.66 19.66l2.12 2.12M6.22 21.78l2.12-2.12M19.66 8.34l2.12-2.12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                num: '02',
                offset: false,
                title: 'Sostenibilidad',
                desc: 'Nos preocupamos por el planeta con materiales biodegradables y prácticas ecológicas.',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M14 22C14 22 6 18 6 11a8 8 0 0116 0c0 7-8 11-8 11z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M14 15l3-3M14 15l-2-2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                num: '03',
                offset: true,
                title: 'Cobertura Ampliada',
                desc: 'Atendemos la Sabana de Bogotá con servicio a domicilio puntual y confiable.',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M14 3C9.58 3 6 6.58 6 11c0 6.75 8 14 8 14s8-7.25 8-14c0-4.42-3.58-8-8-8z" stroke="white" strokeWidth="2"/>
                    <circle cx="14" cy="11" r="2.5" stroke="white" strokeWidth="2"/>
                  </svg>
                ),
              },
              {
                num: '04',
                offset: false,
                title: 'Experiencia Garantizada',
                desc: 'Más de 25 años ofreciendo calidad y satisfacción a nuestros clientes.',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M14 3l2.8 8.5H25l-7.1 5.2 2.7 8.3L14 20l-6.6 5 2.7-8.3L3 11.5h8.2z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                  </svg>
                ),
              },
            ].map((card) => (
              <div
                key={card.num}
                className="relative"
                style={{ marginTop: card.offset ? '3rem' : '0' }}
              >
                {/* Circular icon protruding above card */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-10 w-14 h-14 rounded-full bg-[#4fa8e8] flex items-center justify-center shadow-lg">
                  {card.icon}
                </div>
                {/* Card */}
                <div className="bg-white rounded-2xl pt-12 pb-16 px-5 relative overflow-hidden shadow-xl">
                  {/* Ghost number */}
                  <div
                    className="absolute bottom-2 right-3 font-extrabold text-[#4fa8e8] select-none pointer-events-none"
                    style={{ fontSize: '5rem', opacity: 0.12, lineHeight: 1 }}
                  >
                    {card.num}
                  </div>
                  <h4 className="font-bold text-[#192868] text-lg mb-2">{card.title}</h4>
                  <p className="text-gray-600 text-sm">{card.desc}</p>
                  {/* Wave at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-10">
                    <svg viewBox="0 0 300 40" preserveAspectRatio="none" className="w-full h-full" fill="#4fa8e8" fillOpacity="0.35">
                      <path d="M0 20 Q75 0 150 20 Q225 40 300 20 L300 40 L0 40 Z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#4fa8e8] uppercase tracking-wider text-sm font-semibold">
              Satisfacción en Cada Prenda
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#192868] mt-4">
              Nuestros Clientes Hablan por Nosotros
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 italic mb-6">
                "Excelente servicio, mis edredones siempre quedan impecables y como nuevos. ¡Totalmente recomendados!"
              </p>
              <div className="flex items-center gap-4">
                <img src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/testimonio1.jpg" alt="Juan Pérez" className="w-12 h-12 rounded-full object-cover" />
                <span className="font-semibold text-[#192868]">Juan Pérez.</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 italic mb-6">
                "El mejor servicio de lavandería en la Sabana. Atención rápida y amable, siempre con una sonrisa."
              </p>
              <div className="flex items-center gap-4">
                <img src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/testimonio2.jpg" alt="Ana Gómez" className="w-12 h-12 rounded-full object-cover" />
                <span className="font-semibold text-[#192868]">Ana Gómez</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 italic mb-6">
                "Su tecnología de lavado es impresionante, y el cuidado con el medio ambiente marca la diferencia."
              </p>
              <div className="flex items-center gap-4">
                <img src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/testimonio3.jpg" alt="Luisa Martínez" className="w-12 h-12 rounded-full object-cover" />
                <span className="font-semibold text-[#192868]">Luisa Martínez</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#4fa8e8] uppercase tracking-wider text-sm font-semibold">
                Tecnología y Sostenibilidad
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#192868] mt-4 mb-6">
                Liderando con Innovación y Responsabilidad
              </h2>
              <h3 className="text-2xl font-bold text-[#192868] mb-4">Tecnología Wet Clean</h3>
              <p className="text-gray-600 mb-8">
                Nuestra tecnología de lavado combina ciclos suaves y químicos biodegradables para cuidar tus prendas y el medio ambiente.
              </p>
              <Link
                href="/tecnologia-y-sostenibilidad/"
                className="inline-block bg-[#4fa8e8] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#3a90d0] transition-colors"
              >
                Conocer más
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-5-640x640.webp" alt="" className="w-full h-48 object-cover rounded-lg" />
              <img src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-4-1-640x640.webp" alt="" className="w-full h-48 object-cover rounded-lg" />
              <img src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-6-640x640.webp" alt="" className="w-full h-48 object-cover rounded-lg" />
              <img src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-5-1-640x640.webp" alt="" className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-[#4fa8e8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">25+</div>
              <p className="text-white/80">Años de Experiencia</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">1M+</div>
              <p className="text-white/80">Ganchos Reciclados</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10K+</div>
              <p className="text-white/80">Clientes Satisfechos</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">5M+</div>
              <p className="text-white/80">Litros de Agua Ahorrados</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-[#192868] mb-4">
                Déjanos cuidar de <span className="text-[#4fa8e8]">tus prendas</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Contacta a nuestros expertos y descubre cómo podemos ayudarte a cuidar tus textiles con la máxima calidad.
              </p>
              <Link
                href="/contacto/"
                className="inline-block bg-[#192868] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#0d1a4a] transition-colors"
              >
                Contáctanos Ahora
              </Link>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-[#192868] mb-4">
                ¿Quieres saber si llegamos hasta tu zona?
              </h2>
              <p className="text-gray-600 mb-6">
                Consulta nuestra cobertura, identifica la ruta que te corresponde o encuentra el punto más cercano para llevar tus prendas.
              </p>
              <Link
                href="/cobertura/"
                className="inline-block border-2 border-[#192868] text-[#192868] px-8 py-4 rounded-md font-semibold hover:bg-[#192868] hover:text-white transition-colors"
              >
                Conoce Rutas y Puntos de Atención
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#4fa8e8] uppercase tracking-wider text-sm font-semibold">Blog Prestigio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#192868] mt-4">
              Consejos y Noticias para el Cuidado de Tus Prendas
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Errores Comunes al Lavar Ropa en Casa (Y Cómo Evitarlos)', date: 'mayo 6, 2025', img: 'img-home-prestigio-5-640x640.webp' },
              { title: '¿Cada Cuánto Deberías Llevar Tu Ropa a la Lavandería Profesional?', date: 'marzo 21, 2025', img: 'img-home-prestigio-4-1-640x640.webp' },
              { title: '5 Consejos para Mantener Tus Prendas Impecables', date: 'febrero 12, 2025', img: 'img-home-prestigio-6-640x640.webp' },
            ].map((post) => (
              <div key={post.title} className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={`https://lavasecoprestigio.com/wp-content/uploads/2025/02/${post.img}`}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-bold text-[#192868] mb-2">{post.title}</h4>
                  <div className="flex items-center text-sm text-gray-500 gap-4">
                    <span>Comentarios 0</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog/"
              className="inline-block bg-[#192868] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#0d1a4a] transition-colors"
            >
              Visita Nuestro Blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
