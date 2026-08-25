import Link from 'next/link'

export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* Breadcrumb Section */}
      <section className="bg-[#3b3d42] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-white text-sm">
            <Link href="/" className="hover:text-[#398ffc] transition-colors">Inicio</Link>
            <span>/</span>
            <span>Servicios Corporativos</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-4 font-['Outfit']">Servicios Corporativos</h1>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-[#398ffc] uppercase tracking-wider text-sm font-semibold mb-4 font-['Roboto']">Soluciones de alto nivel</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#32373c] mb-6 font-['Outfit']">Cuidamos la Imagen de tu Empresa</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-['Archivo']">
              La presentación de tu equipo y de los textiles de tu empresa es clave para transmitir profesionalismo y confianza. Ofrecemos soluciones especializadas en lavandería corporativa, garantizando limpieza impecable, cuidado de las prendas y cumplimiento en los tiempos de entrega.
            </p>
          </div>

          {/* Three Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-[#f8f9fa] rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#398ffc] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">01</span>
              </div>
              <h4 className="text-xl font-semibold text-[#32373c] font-['Outfit']">Servicio con Recolección y Entrega</h4>
            </div>
            <div className="bg-[#f8f9fa] rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#398ffc] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">02</span>
              </div>
              <h4 className="text-xl font-semibold text-[#32373c] font-['Outfit']">Procesos Adaptados a Cada Industria</h4>
            </div>
            <div className="bg-[#f8f9fa] rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#398ffc] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">03</span>
              </div>
              <h4 className="text-xl font-semibold text-[#32373c] font-['Outfit']">Calidad y Eficiencia Garantizadas</h4>
            </div>
          </div>
        </div>
      </section>

      {/* About Services Section */}
      <section className="py-16 md:py-24 bg-[#f8f9fa]" id="tabs-corporativos">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#32373c] mb-6 font-['Outfit']">Sobre nuestros Servicios para empresas</h2>
              <p className="text-gray-600 mb-8 text-lg font-['Archivo']">
                Cada empresa tiene necesidades únicas cuando se trata del cuidado de textiles y uniformes. Nuestro servicio de lavandería corporativa se adapta a distintos sectores, asegurando máxima higiene, conservación de los materiales y cumplimiento estricto en la entrega.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#398ffc] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700 font-['Archivo']">Procesos específicos para distintos tipos de prendas y textiles.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#398ffc] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700 font-['Archivo']">Uso de tecnología Wet Clean para un lavado más seguro y ecológico.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#398ffc] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700 font-['Archivo']">Mantenimiento de la calidad y durabilidad de cada prenda.</span>
                </li>
              </ul>
              <a href="#" className="inline-block bg-[#398ffc] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2a7ae0] transition-colors font-['Roboto']">
                Cotiza tu Servicio
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-1.webp" 
                alt="Servicios empresariales" 
                className="rounded-xl w-full h-64 object-cover"
              />
              <img 
                src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-0.webp" 
                alt="Servicios empresariales" 
                className="rounded-xl w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Service 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <img 
                src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-1.webp" 
                alt="Limpieza de Uniformes Empresariales" 
                className="rounded-xl w-full h-80 object-cover shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl font-bold text-[#32373c] mb-4 font-['Outfit']">Limpieza de Uniformes Empresariales</h3>
              <p className="text-gray-600 mb-6 font-['Archivo']">
                Los uniformes reflejan la identidad de una empresa y deben mantenerse impecables. Ofrecemos lavado profesional para distintos sectores, como hotelería, salud, industrial y corporativo.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#398ffc] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700 font-['Archivo']">Eliminación de manchas difíciles sin desgaste de los tejidos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#398ffc] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700 font-['Archivo']">Cuidado especial para telas sensibles y resistentes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#398ffc] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700 font-['Archivo']">Proceso de desinfección profunda para higiene garantizada.</span>
                </li>
              </ul>
              <Link href="/contacto/" className="inline-block bg-[#398ffc] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2a7ae0] transition-colors font-['Roboto']">
                Contáctanos Ahora
              </Link>
            </div>
          </div>

          {/* Service 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#32373c] mb-4 font-['Outfit']">Mantelería para Restaurantes y Eventos</h3>
              <p className="text-gray-600 mb-6 font-['Archivo']">
                En la industria gastronómica y de eventos, la pulcritud en manteles y servilletas es fundamental. Nuestro servicio garantiza telas sin manchas, sin olores y listas para su uso.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#398ffc] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700 font-['Archivo']">Eliminación de residuos de grasa y manchas persistentes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#398ffc] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700 font-['Archivo']">Planchado y presentación impecable.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#398ffc] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700 font-['Archivo']">Lavado con productos biodegradables para mayor cuidado.</span>
                </li>
              </ul>
              <Link href="/contacto/" className="inline-block bg-[#398ffc] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2a7ae0] transition-colors font-['Roboto']">
                Contáctanos Ahora
              </Link>
            </div>
            <div>
              <img 
                src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-0.webp" 
                alt="Mantelería para Restaurantes y Eventos" 
                className="rounded-xl w-full h-80 object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Service 3 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <img 
                src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-1.webp" 
                alt="Dotaciones Empresariales" 
                className="rounded-xl w-full h-80 object-cover shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl font-bold text-[#32373c] mb-4 font-['Outfit']">Dotaciones Empresariales</h3>
              <p className="text-gray-600 mb-6 font-['Archivo']">
                Las prendas de dotación para empleados deben ser resistentes y mantenerse en óptimas condiciones. Nos encargamos del lavado y mantenimiento de uniformes industriales y ropa de trabajo.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#398ffc] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700 font-['Archivo']">Eliminación de suciedad y residuos industriales.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#398ffc] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700 font-['Archivo']">Lavado con procesos que alargan la vida útil de la prenda.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#398ffc] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700 font-['Archivo']">Desinfección especializada para textiles de alto uso.</span>
                </li>
              </ul>
              <Link href="/contacto/" className="inline-block bg-[#398ffc] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2a7ae0] transition-colors font-['Roboto']">
                Contáctanos Ahora
              </Link>
            </div>
          </div>

          {/* Service 4 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#32373c] mb-4 font-['Outfit']">Cuidado de Uniformes Publicitarios y de Mascotas</h3>
              <p className="text-gray-600 mb-6 font-['Archivo']">
                Los uniformes de promoción y mascotas corporativas requieren un cuidado especial. Nuestra limpieza garantiza colores vibrantes, tejidos suaves y máxima higiene.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#398ffc] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700 font-['Archivo']">Conservación de colores y estampados.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#398ffc] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700 font-['Archivo']">Eliminación de olores y desinfección profunda.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#398ffc] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700 font-['Archivo']">Procesos diseñados para materiales sintéticos y especiales.</span>
                </li>
              </ul>
              <Link href="/contacto/" className="inline-block bg-[#398ffc] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2a7ae0] transition-colors font-['Roboto']">
                Contáctanos Ahora
              </Link>
            </div>
            <div>
              <img 
                src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-0.webp" 
                alt="Cuidado de Uniformes Publicitarios y de Mascotas" 
                className="rounded-xl w-full h-80 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage CTA Section */}
      <section className="py-16 md:py-20 bg-[#398ffc]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 font-['Outfit']">¿Quieres saber si llegamos hasta tu zona?</h2>
          <p className="text-white/90 text-lg mb-8 font-['Archivo']">
            Consulta nuestra cobertura, identifica la ruta que te corresponde o encuentra el punto más cercano para llevar tus prendas.
          </p>
          <Link href="/cobertura/" className="inline-block bg-white text-[#398ffc] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors font-['Roboto']">
            Conoce Rutas y Puntos de Atención
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#398ffc] uppercase tracking-wider text-sm font-semibold mb-4 font-['Roboto']">Satisfacción en Cada Prenda</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#32373c] font-['Outfit']">Nuestros Clientes Hablan por Nosotros</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <p className="text-gray-600 italic mb-6 font-['Archivo']">
                "Nuestro personal siempre luce impecable gracias a este servicio. La puntualidad es clave y nunca han fallado."
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-1.webp" 
                  alt="Gerente de Hotelería" 
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[#32373c] font-['Outfit']">Gerente de Hotelería</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <p className="text-gray-600 italic mb-6 font-['Archivo']">
                "Trabajar con ellos nos ha facilitado la operación diaria. La calidad del lavado y el trato con los uniformes es excelente."
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-0.webp" 
                  alt="Jefe de RRHH" 
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[#32373c] font-['Outfit']">Jefe de RRHH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}