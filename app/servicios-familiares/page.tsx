import Link from 'next/link';

export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* Breadcrumb Section */}
      <section className="bg-[#32373c] py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-4">
            <Link href="/" className="hover:text-[#398ffc] transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-white">Servicios Familiares</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-['Outfit']">Servicios Familiares</h1>
        </div>
      </section>

      {/* Hero Section - La Solución Ideal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#398ffc] uppercase tracking-widest text-sm font-semibold mb-2 font-['Roboto']">Cuidado y Servicio</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#32373c] font-['Outfit'] max-w-4xl mx-auto">
              La Solución Ideal para tu Hogar y tu Estilo de Vida
            </h2>
          </div>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg font-['Roboto']">
            Ya seas parte de una familia grande con múltiples necesidades de lavado o un profesional independiente que valora su tiempo, tenemos un servicio de lavandería pensado para ti. Con tecnología de punta y un enfoque ecológico, cuidamos cada prenda como si fuera nuestra.
          </p>

          {/* Service Features */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#398ffc] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-[#398ffc] font-semibold text-lg">01</span>
              <h4 className="text-xl font-bold text-[#32373c] mt-2 font-['Outfit']">Servicio a Domicilio Eficiente</h4>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#398ffc] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-[#398ffc] font-semibold text-lg">02</span>
              <h4 className="text-xl font-bold text-[#32373c] mt-2 font-['Outfit']">Productos Biodegradables</h4>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#398ffc] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="text-[#398ffc] font-semibold text-lg">03</span>
              <h4 className="text-xl font-bold text-[#32373c] mt-2 font-['Outfit']">Tecnología Wet Clean</h4>
            </div>
          </div>
        </div>
      </section>

      {/* About Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#32373c] mb-6 font-['Outfit']">
                Sobre nuestros Servicios para el hogar
              </h2>
              <p className="text-gray-600 mb-8 text-lg font-['Roboto']">
                En los hogares de hoy, el tiempo es limitado y las necesidades son diversas. Por eso, nuestro servicio de lavandería familiar está diseñado tanto para <strong>familias tradicionales</strong> que lavan grandes volúmenes, como para <strong>hogares modernos</strong> de profesionales, jóvenes y estudiantes que buscan practicidad y resultados impecables.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#398ffc] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-['Roboto']">Lavamos y cuidamos todos tus outfits: formales, casuales, deportivos y de negocios.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#398ffc] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-['Roboto']">Ofrecemos limpieza profunda de ropa de hogar, ropa por peso y artículos especiales.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#398ffc] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-['Roboto']">Incluimos el servicio especializado de tapetes con secado rápido y tecnología avanzada.</p>
                </div>
              </div>

              <a
                href="https://api.whatsapp.com/send/?phone=573504520414&text=%C2%A1Hola!.+Necesito+m%C3%A1s+informaci%C3%B3n+sobre+...&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#398ffc] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2a7de6] transition-colors font-['Roboto']"
              >
                Cotiza tu Servicio
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-1.webp"
                alt="img-home-prestigio-1"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-0.webp"
                alt="img-home-prestigio-0"
                className="w-full h-64 object-cover rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section id="tabs-familiares" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-4 py-2 bg-[#398ffc] text-white rounded-full text-sm font-medium font-['Roboto']">Limpieza de Edredones</span>
            <span className="px-4 py-2 bg-gray-100 text-[#32373c] rounded-full text-sm font-medium hover:bg-[#398ffc] hover:text-white transition-colors cursor-pointer font-['Roboto']">Lavado y Planchado de Cortinas y Velos</span>
            <span className="px-4 py-2 bg-gray-100 text-[#32373c] rounded-full text-sm font-medium hover:bg-[#398ffc] hover:text-white transition-colors cursor-pointer font-['Roboto']">Lavado de Tapetes con Secado Rápido</span>
            <span className="px-4 py-2 bg-gray-100 text-[#32373c] rounded-full text-sm font-medium hover:bg-[#398ffc] hover:text-white transition-colors cursor-pointer font-['Roboto']">Lavado de Ropa por Peso y Todo Tipo de Outfits</span>
            <span className="px-4 py-2 bg-gray-100 text-[#32373c] rounded-full text-sm font-medium hover:bg-[#398ffc] hover:text-white transition-colors cursor-pointer font-['Roboto']">Cuidado Especial de Prendas de Mascotas</span>
            <span className="px-4 py-2 bg-gray-100 text-[#32373c] rounded-full text-sm font-medium hover:bg-[#398ffc] hover:text-white transition-colors cursor-pointer font-['Roboto']">Limpieza de Zapatos y Artículos Delicados</span>
          </div>

          {/* Service Cards */}
          <div className="space-y-16">
            {/* Limpieza de Edredones */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl md:text-3xl font-bold text-[#32373c] mb-4 font-['Outfit']">Limpieza de Edredones</h3>
                <p className="text-gray-600 mb-6 font-['Roboto']">
                  Los textiles grandes como edredones y cobijas requieren un tratamiento profesional para eliminar ácaros, bacterias y olores, conservando su suavidad y estructura.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-gray-700 font-['Roboto']">
                    <span className="w-2 h-2 bg-[#398ffc] rounded-full"></span>
                    Lavado profundo sin deformar rellenos
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 font-['Roboto']">
                    <span className="w-2 h-2 bg-[#398ffc] rounded-full"></span>
                    Secado eficiente que evita humedad residual
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 font-['Roboto']">
                    <span className="w-2 h-2 bg-[#398ffc] rounded-full"></span>
                    Desinfección con tecnología avanzada
                  </li>
                </ul>
                <Link
                  href="/contacto/"
                  className="inline-block border-2 border-[#398ffc] text-[#398ffc] px-6 py-3 rounded-lg font-semibold hover:bg-[#398ffc] hover:text-white transition-colors font-['Roboto']"
                >
                  Contáctanos Ahora
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-1.webp"
                  alt="servicios-familiares-tabs-3"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Lavado y Planchado de Cortinas y Velos */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-0.webp"
                  alt="servicios-familiares-tabs"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#32373c] mb-4 font-['Outfit']">Lavado y Planchado de Cortinas y Velos</h3>
                <p className="text-gray-600 mb-6 font-['Roboto']">
                  Tus cortinas protegen tu hogar del sol y el polvo, pero también absorben contaminantes. Nosotros las tratamos con técnicas que preservan su forma y frescura.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-gray-700 font-['Roboto']">
                    <span className="w-2 h-2 bg-[#398ffc] rounded-full"></span>
                    Limpieza sin deteriorar colores ni texturas
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 font-['Roboto']">
                    <span className="w-2 h-2 bg-[#398ffc] rounded-full"></span>
                    Planchado profesional para un acabado perfecto
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 font-['Roboto']">
                    <span className="w-2 h-2 bg-[#398ffc] rounded-full"></span>
                    Eliminación de olores, polvo y agentes irritantes
                  </li>
                </ul>
                <Link
                  href="/contacto/"
                  className="inline-block border-2 border-[#398ffc] text-[#398ffc] px-6 py-3 rounded-lg font-semibold hover:bg-[#398ffc] hover:text-white transition-colors font-['Roboto']"
                >
                  Contáctanos Ahora
                </Link>
              </div>
            </div>

            {/* Lavado de Tapetes con Secado Rápido */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl md:text-3xl font-bold text-[#32373c] mb-4 font-['Outfit']">Lavado de Tapetes con Secado Rápido</h3>
                <p className="text-gray-600 mb-6 font-['Roboto']">
                  Gracias a nuestra nueva maquinaria, ahora ofrecemos limpieza profunda y secado acelerado de tapetes, perfecta para hogares activos o con mascotas.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-gray-700 font-['Roboto']">
                    <span className="w-2 h-2 bg-[#398ffc] rounded-full"></span>
                    Remoción de suciedad, pelos y ácaros
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 font-['Roboto']">
                    <span className="w-2 h-2 bg-[#398ffc] rounded-full"></span>
                    Secado rápido, ideal para espacios con alta rotación
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 font-['Roboto']">
                    <span className="w-2 h-2 bg-[#398ffc] rounded-full"></span>
                    Cuidado que mantiene textura, color y forma
                  </li>
                </ul>
                <Link
                  href="/contacto/"
                  className="inline-block border-2 border-[#398ffc] text-[#398ffc] px-6 py-3 rounded-lg font-semibold hover:bg-[#398ffc] hover:text-white transition-colors font-['Roboto']"
                >
                  Contáctanos Ahora
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-1.webp"
                  alt="servicios-familiares-tabs-5"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Lavado de Ropa por Peso y Todo Tipo de Outfits */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-0.webp"
                  alt="servicios-familiares-tabs-2"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#32373c] mb-4 font-['Outfit']">Lavado de Ropa por Peso y Todo Tipo de Outfits</h3>
                <p className="text-gray-600 mb-6 font-['Roboto']">
                  Lavamos tu ropa según tus hábitos: desde conjuntos ejecutivos hasta ropa deportiva. Ideal para quienes prefieren una solución completa sin preocuparse por clasificar.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-gray-700 font-['Roboto']">
                    <span className="w-2 h-2 bg-[#398ffc] rounded-full"></span>
                    Ropa formal, casual, de deporte o negocios incluida
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 font-['Roboto']">
                    <span className="w-2 h-2 bg-[#398ffc] rounded-full"></span>
                    Servicio por peso para mayor economía
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 font-['Roboto']">
                    <span className="w-2 h-2 bg-[#398ffc] rounded-full"></span>
                    Entrega ordenada y lista para usar
                  </li>
                </ul>
                <Link
                  href="/contacto/"
                  className="inline-block border-2 border-[#398ffc] text-[#398ffc] px-6 py-3 rounded-lg font-semibold hover:bg-[#398ffc] hover:text-white transition-colors font-['Roboto']"
                >
                  Contáctanos Ahora
                </Link>
              </div>
            </div>

            {/* Cuidado Especial de Prendas de Mascotas */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl md:text-3xl font-bold text-[#32373c] mb-4 font-['Outfit']">Cuidado Especial de Prendas de Mascotas</h3>
                <p className="text-gray-600 mb-6 font-['Roboto']">
                  Sabemos que las mascotas son parte de la familia. Lavamos mantas, forros, camas y prendas de forma <strong>independiente y segura</strong>, con procesos exclusivos y maquinaria separada.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-gray-700 font-['Roboto']">
                    <span className="w-2 h-2 bg-[#398ffc] rounded-full"></span>
                    No se mezcla con ropa de personas
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 font-['Roboto']">
                    <span className="w-2 h-2 bg-[#398ffc] rounded-full"></span>
                    Limpieza con productos amigables con los animales
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 font-['Roboto']">
                    <span className="w-2 h-2 bg-[#398ffc] rounded-full"></span>
                    Higiene profunda que elimina olores y bacterias
                  </li>
                </ul>
                <Link
                  href="/contacto/"
                  className="inline-block border-2 border-[#398ffc] text-[#398ffc] px-6 py-3 rounded-lg font-semibold hover:bg-[#398ffc] hover:text-white transition-colors font-['Roboto']"
                >
                  Contáctanos Ahora
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-1.webp"
                  alt="servicios-familiares-1"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Limpieza de Zapatos y Artículos Delicados */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-0.webp"
                  alt="servicios-familiares-tabs-4"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#32373c] mb-4 font-['Outfit']">Limpieza de Zapatos y Artículos Delicados</h3>
                <p className="text-gray-600 mb-6 font-['Roboto']">
                  Desde calzado deportivo hasta bolsos y accesorios especiales, tratamos cada artículo con el cuidado que merece.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-gray-700 font-['Roboto']">
                    <span className="w-2 h-2 bg-[#398ffc] rounded-full"></span>
                    Limpieza especializada por tipo de material
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 font-['Roboto']">
                    <span className="w-2 h-2 bg-[#398ffc] rounded-full"></span>
                    Restauración de apariencia original
                  </li>
                  <li className="flex items-center gap-2 text-gray-700 font-['Roboto']">
                    <span className="w-2 h-2 bg-[#398ffc] rounded-full"></span>
                    Cuidado de artículos delicados y de valor
                  </li>
                </ul>
                <Link
                  href="/contacto/"
                  className="inline-block border-2 border-[#398ffc] text-[#398ffc] px-6 py-3 rounded-lg font-semibold hover:bg-[#398ffc] hover:text-white transition-colors font-['Roboto']"
                >
                  Contáctanos Ahora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#32373c]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Outfit']">
            ¿Listo para cuidar tus prendas?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto font-['Roboto']">
            Contáctanos ahora y descubre por qué somos la mejor opción en lavandería ecológica en Chía y Cota.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=573504520414&text=%C2%A1Hola!.+Necesito+m%C3%A1s+informaci%C3%B3n+sobre+...&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#398ffc] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2a7de6] transition-colors font-['Roboto']"
          >
            Habla con un asesor
          </a>
        </div>
      </section>
    </main>
  );
}