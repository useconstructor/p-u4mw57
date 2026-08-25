import Link from 'next/link'

export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Slider Section */}
      <section className="relative overflow-hidden" style={{ minHeight: '720px' }}>
        {/* Slider - showing first slide as static hero */}
        <div className="relative h-[600px] md:h-[720px]">
          <img
            src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/bg-banner-ppal-prestigio-1-1920x1080.webp"
            alt="bg-banner-ppal-prestigio-1"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Floating circle decorations */}
          <img
            src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/circulo-flotante.png"
            alt=""
            className="absolute top-10 left-10 w-24 h-24 md:w-40 md:h-40 opacity-50 animate-pulse hidden md:block"
          />
          <img
            src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/circulo-flotante.png"
            alt=""
            className="absolute bottom-20 left-1/4 w-16 h-16 md:w-32 md:h-32 opacity-30 animate-pulse hidden md:block"
          />
          
          {/* Right side decorative shape */}
          <img
            src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/forma-derecha-banner.png"
            alt=""
            className="absolute right-0 top-0 h-full w-auto opacity-60 hidden lg:block"
          />
          
          <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
            <div className="max-w-3xl">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Estilo, Elegancia y <b className="text-[#398ffc]">Resplandor</b> en Cada <b className="text-[#398ffc]">Prenda</b>
              </h3>
              <p className="text-white/90 text-lg md:text-xl mb-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Confía en nuestra experiencia y tecnología avanzada para el cuidado de tus prendas y textiles. Desde 1998, redefiniendo la calidad en lavandería y tintorería.
              </p>
              <Link
                href="/servicios-familiares/"
                className="inline-block bg-[#398ffc] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#2a7ae6] transition-colors"
              >
                Explora Nuestros Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <img
              src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-1.webp"
              alt="Prestigio servicios 1"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-0.webp"
              alt="Prestigio servicios 0"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="w-full h-48 bg-[#3b3d42] rounded-lg hidden md:block" />
            <div className="w-full h-48 bg-[#398ffc] rounded-lg hidden lg:block" />
            <div className="w-full h-48 bg-[#32373c] rounded-lg hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Service Lines Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#398ffc] uppercase tracking-wider text-sm font-semibold" style={{ fontFamily: 'Archivo, sans-serif' }}>
              Líneas de Servicio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#32373c] mt-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Servicios que Cuidan Tus Prendas y tu Tiempo
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Descubre nuestras soluciones personalizadas para hogares y empresas, diseñadas con tecnología avanzada y un enfoque sostenible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Servicios Familiares */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-[#32373c] mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Servicios Familiares
              </h2>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Lavado y cuidado de edredones, cortinas, ropa de mascotas, y mucho más para tu hogar.
              </p>
              <Link
                href="/servicios-familiares/"
                className="inline-block text-[#398ffc] font-semibold hover:underline"
              >
                Ver más →
              </Link>
            </div>

            {/* Servicios Corporativos */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-[#32373c] mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Servicios Corporativos
              </h2>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Soluciones para empresas: uniformes, mantelería, dotaciones y más.
              </p>
              <Link
                href="/servicios-corporativos/"
                className="inline-block text-[#398ffc] font-semibold hover:underline"
              >
                Ver más →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-[#32373c]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#398ffc] uppercase tracking-wider text-sm font-semibold" style={{ fontFamily: 'Archivo, sans-serif' }}>
              Beneficios Destacados
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-gray-300 mt-4 max-w-3xl mx-auto" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Cuidamos tus prendas con tecnología avanzada, prácticas sostenibles y más de 25 años de experiencia. Garantizamos calidad, puntualidad y el mejor servicio a domicilio en la Sabana de Bogotá.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Benefit 1 */}
            <div className="bg-[#3b3d42] rounded-xl p-6 text-center">
              <div className="text-[#398ffc] text-4xl font-bold mb-2">01</div>
              <h4 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Tecnología Avanzada
              </h4>
              <p className="text-gray-300 text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Usamos el sistema Wet Clean, que combina eficiencia con cuidado del medio ambiente.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-[#3b3d42] rounded-xl p-6 text-center">
              <div className="text-[#398ffc] text-4xl font-bold mb-2">02</div>
              <h4 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Sostenibilidad
              </h4>
              <p className="text-gray-300 text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Nos preocupamos por el planeta con materiales biodegradables y prácticas ecológicas.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-[#3b3d42] rounded-xl p-6 text-center">
              <div className="text-[#398ffc] text-4xl font-bold mb-2">03</div>
              <h4 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Cobertura Ampliada
              </h4>
              <p className="text-gray-300 text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Atendemos la Sabana de Bogotá con servicio a domicilio puntual y confiable.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-[#3b3d42] rounded-xl p-6 text-center">
              <div className="text-[#398ffc] text-4xl font-bold mb-2">04</div>
              <h4 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Experiencia Garantizada
              </h4>
              <p className="text-gray-300 text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Más de 25 años ofreciendo calidad y satisfacción a nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#398ffc] uppercase tracking-wider text-sm font-semibold" style={{ fontFamily: 'Archivo, sans-serif' }}>
              Satisfacción en Cada Prenda
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#32373c] mt-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Nuestros Clientes Hablan por Nosotros
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 italic mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
                "Excelente servicio, mis edredones siempre quedan impecables y como nuevos. ¡Totalmente recomendados!"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/testimonio1.jpg"
                  alt="Juan Pérez"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="font-semibold text-[#32373c]">Juan Pérez.</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 italic mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
                "El mejor servicio de lavandería en la Sabana. Atención rápida y amable, siempre con una sonrisa."
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/testimonio2.jpg"
                  alt="Ana Gómez"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="font-semibold text-[#32373c]">Ana Gómez</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 italic mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
                "Su tecnología de lavado es impresionante, y el cuidado con el medio ambiente marca la diferencia."
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/testimonio3.jpg"
                  alt="Luisa Martínez"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="font-semibold text-[#32373c]">Luisa Martínez</span>
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
              <span className="text-[#398ffc] uppercase tracking-wider text-sm font-semibold" style={{ fontFamily: 'Archivo, sans-serif' }}>
                Tecnología y Sostenibilidad
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#32373c] mt-4 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Liderando con Innovación y Responsabilidad
              </h2>
              <h2 className="text-2xl font-bold text-[#32373c] mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Tecnología Wet Clean
              </h2>
              <p className="text-gray-600 mb-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Nuestra tecnología de lavado combina ciclos suaves y químicos biodegradables para cuidar tus prendas y el medio ambiente.
              </p>
              <Link
                href="/tecnologia-y-sostenibilidad/"
                className="inline-block bg-[#398ffc] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#2a7ae6] transition-colors"
              >
                Conocer más
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-5-640x640.webp"
                alt="Tecnología Prestigio"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img
                src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-4-1-640x640.webp"
                alt="Sostenibilidad Prestigio"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img
                src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-6-640x640.webp"
                alt="Innovación Prestigio"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img
                src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-5-1-640x640.webp"
                alt="Responsabilidad Prestigio"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-[#398ffc]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">25+</div>
              <p className="text-white/80" style={{ fontFamily: 'Roboto, sans-serif' }}>Años de Experiencia</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">1M+</div>
              <p className="text-white/80" style={{ fontFamily: 'Roboto, sans-serif' }}>Ganchos Reciclados</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10K+</div>
              <p className="text-white/80" style={{ fontFamily: 'Roboto, sans-serif' }}>Clientes Satisfechos</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">5M+</div>
              <p className="text-white/80" style={{ fontFamily: 'Roboto, sans-serif' }}>Litros de Agua Ahorrados</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#32373c]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#3b3d42] rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Déjanos cuidar de tus prendas
              </h2>
              <p className="text-gray-300 mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Contacta a nuestros expertos y descubre cómo podemos ayudarte a cuidar tus textiles con la máxima calidad.
              </p>
              <Link
                href="/contacto/"
                className="inline-block bg-[#398ffc] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#2a7ae6] transition-colors"
              >
                Contáctanos Ahora
              </Link>
            </div>

            <div className="bg-[#3b3d42] rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                ¿Quieres saber si llegamos hasta tu zona?
              </h2>
              <p className="text-gray-300 mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Consulta nuestra cobertura, identifica la ruta que te corresponde o encuentra el punto más cercano para llevar tus prendas.
              </p>
              <Link
                href="/cobertura/"
                className="inline-block border-2 border-[#398ffc] text-[#398ffc] px-8 py-4 rounded-md font-semibold hover:bg-[#398ffc] hover:text-white transition-colors"
              >
                Conoce Rutas y Puntos de Atención
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#398ffc] uppercase tracking-wider text-sm font-semibold" style={{ fontFamily: 'Archivo, sans-serif' }}>
              Blog Prestigio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#32373c] mt-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Consejos y Noticias para el Cuidado de Tus Prendas
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-[#3b3d42]" />
              <div className="p-6">
                <h4 className="text-lg font-bold text-[#32373c] mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Errores Comunes al Lavar Ropa en Casa (Y Cómo Evitarlos)
                </h4>
                <div className="flex items-center text-sm text-gray-500 gap-4">
                  <span>Comentarios 0</span>
                  <span>mayo 6, 2025</span>
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-[#398ffc]" />
              <div className="p-6">
                <h4 className="text-lg font-bold text-[#32373c] mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  ¿Cada Cuánto Deberías Llevar Tu Ropa a la Lavandería Profesional?
                </h4>
                <div className="flex items-center text-sm text-gray-500 gap-4">
                  <span>Comentarios 0</span>
                  <span>marzo 21, 2025</span>
                </div>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-[#32373c]" />
              <div className="p-6">
                <h4 className="text-lg font-bold text-[#32373c] mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  5 Consejos para Mantener Tus Prendas Impecables
                </h4>
                <div className="flex items-center text-sm text-gray-500 gap-4">
                  <span>Comentarios 0</span>
                  <span>febrero 12, 2025</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog/"
              className="inline-block bg-[#398ffc] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#2a7ae6] transition-colors"
            >
              Visita Nuestro Blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}