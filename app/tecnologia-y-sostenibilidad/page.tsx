import Link from 'next/link'

export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Banner */}
      <section className="relative overflow-hidden" style={{ paddingTop: '132px' }}>
        <div className="relative h-[280px] md:h-[340px]">
          <img
            src="https://lavasecoprestigio.com/wp-content/uploads/2025/05/tecnologia-1.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#192868]/60" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <nav className="text-white/70 text-sm mb-3">
              <Link href="/" className="hover:text-white">Inicio</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Tecnología y Sostenibilidad</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Tecnología y <span className="text-[#4fa8e8]">Sostenibilidad</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-[#398ffc] font-medium uppercase tracking-wider text-sm mb-4 font-['Roboto']">
              Desde 1998
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#32373c] mb-6 font-['Outfit']">
              Innovación y Cuidado del Planeta en Cada Lavado
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-['Roboto']">
              Cada prenda cuenta una historia y creemos que su limpieza no debería comprometer el medio ambiente. Nuestra tecnología avanzada y prácticas sostenibles garantizan un lavado impecable mientras reducimos nuestro impacto ecológico.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-[#398ffc]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#398ffc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#32373c] mb-2 font-['Outfit']">Tecnología Wet Clean</h3>
              <span className="text-[#398ffc] font-bold text-2xl">01</span>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-[#398ffc]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#398ffc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#32373c] mb-2 font-['Outfit']">Productos Biodegradables</h3>
              <span className="text-[#398ffc] font-bold text-2xl">02</span>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-[#398ffc]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#398ffc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#32373c] mb-2 font-['Outfit']">Secado Rápido de Tapetes</h3>
              <span className="text-[#398ffc] font-bold text-2xl">03</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Commitment Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#32373c] mb-6 font-['Outfit']">
                Compromiso con la Tecnología y la Innovación
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed font-['Roboto']">
                La calidad, la eficiencia y la responsabilidad ambiental son la base de todos nuestros procesos. A lo largo de los años, hemos incorporado tecnologías que no solo mejoran el cuidado de las prendas, sino que también optimizan el uso de recursos y mejoran la experiencia del cliente.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#398ffc] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-['Roboto']">Plataforma en la nube para trazabilidad y seguridad de datos.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#398ffc] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-['Roboto']">Marcación por códigos de barras para control exacto de cada prenda.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#398ffc] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-['Roboto']">Envío de recibos y actualizaciones vía WhatsApp, reduciendo el consumo de papel.</p>
                </div>
              </div>

              <div className="bg-[#398ffc]/10 p-6 rounded-xl border-l-4 border-[#398ffc]">
                <p className="text-gray-700 font-['Roboto']">
                  🧼 Además, hemos incorporado maquinaria especializada para el <strong>lavado de tapetes con sistema de secado rápido</strong>, lo que reduce significativamente el tiempo de entrega sin comprometer la limpieza ni el cuidado textil.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-1.webp" 
                alt="tecnologia-2" 
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <img 
                src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-0.webp" 
                alt="tecnologia" 
                className="rounded-xl shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-3 bg-[#398ffc] text-white rounded-full font-medium font-['Roboto'] hover:bg-[#2a7de6] transition-colors">
              Tecnología Wet Clean
            </button>
            <button className="px-6 py-3 bg-gray-100 text-[#32373c] rounded-full font-medium font-['Roboto'] hover:bg-gray-200 transition-colors">
              Uso de Productos Biodegradables
            </button>
            <button className="px-6 py-3 bg-gray-100 text-[#32373c] rounded-full font-medium font-['Roboto'] hover:bg-gray-200 transition-colors">
              Reciclaje y Reutilización de Materiales
            </button>
            <button className="px-6 py-3 bg-gray-100 text-[#32373c] rounded-full font-medium font-['Roboto'] hover:bg-gray-200 transition-colors">
              Reducción del Consumo de Agua y Energía
            </button>
          </div>

          {/* Tab Content - Wet Clean */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/bg-banner-ppal-prestigio-1-1920x1080.webp" 
                alt="tecnologia-tabs-3" 
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#32373c] mb-6 font-['Outfit']">
                Limpieza con Agua, Respetando Cada Tejido
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-['Roboto']">
                Nuestras máquinas de última generación están diseñadas para lograr resultados superiores con un menor consumo de recursos naturales. Esto incluye sistemas inteligentes de lavado y secado, ajustados al volumen y tipo de prenda.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#398ffc] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-['Roboto']">Reducción del uso de agua en hasta un 40% por carga.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#398ffc] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-['Roboto']">Equipos con bajo consumo energético y alta efectividad.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#398ffc] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-['Roboto']">Tecnología de secado controlado que disminuye la exposición al calor.</span>
                </li>
              </ul>
              <Link 
                href="/contacto/" 
                className="inline-block bg-[#398ffc] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2a7de6] transition-colors font-['Roboto']"
              >
                Contáctanos Ahora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Biodegradable Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-[#32373c] mb-6 font-['Outfit']">
                Menos químicos, más cuidado para ti y para el planeta
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-['Roboto']">
                Nos aseguramos de utilizar productos biodegradables que eliminan la suciedad sin dañar los tejidos ni dejar residuos contaminantes.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#398ffc] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-['Roboto']">No generan residuos tóxicos en el agua.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#398ffc] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-['Roboto']">Son más seguros para pieles sensibles y personas alérgicas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#398ffc] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-['Roboto']">Contribuyen a la reducción de la contaminación del agua.</span>
                </li>
              </ul>
              <Link 
                href="/contacto/" 
                className="inline-block bg-[#398ffc] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2a7de6] transition-colors font-['Roboto']"
              >
                Contáctanos Ahora
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/bg-banner-ppal-prestigio-0-1920x1080.webp" 
                alt="tecnologia-tabs" 
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recycling Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/bg-banner-ppal-prestigio-2-1920x1080.webp" 
                alt="tecnologia-tabs-1" 
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#32373c] mb-6 font-['Outfit']">
                Reducción de residuos para un futuro más limpio
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-['Roboto']">
                Nos comprometemos con la reducción de desechos mediante la reutilización y reciclaje de materiales esenciales en nuestros procesos.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#398ffc] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-['Roboto']">Reciclaje y reutilización de ganchos para evitar desperdicios.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#398ffc] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-['Roboto']">Uso de empaques biodegradables o reutilizables.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#398ffc] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-['Roboto']">Eliminación progresiva de plásticos de un solo uso.</span>
                </li>
              </ul>
              <Link 
                href="/contacto/" 
                className="inline-block bg-[#398ffc] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2a7de6] transition-colors font-['Roboto']"
              >
                Contáctanos Ahora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Water & Energy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-[#32373c] mb-6 font-['Outfit']">
                Lavamos con menos, para cuidar más
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-['Roboto']">
                Nuestros procesos están diseñados para <strong>minimizar el consumo de agua y energía</strong>, sin afectar la calidad del servicio.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#398ffc] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-['Roboto']">Equipos de lavado de última generación con eficiencia energética.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#398ffc] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-['Roboto']">Procesos de lavado optimizados que reducen el uso de agua hasta en un 40%.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#398ffc] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-['Roboto']">Secado con tecnología que disminuye el tiempo de exposición al calor.</span>
                </li>
              </ul>
              <Link 
                href="/contacto/" 
                className="inline-block bg-[#398ffc] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2a7de6] transition-colors font-['Roboto']"
              >
                Contáctanos Ahora
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-1.webp" 
                alt="tecnologia-tabs-2" 
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-[#32373c] relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <img 
            src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/circulo-flotante.png" 
            alt="" 
            className="w-96 h-96"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <p className="text-[#398ffc] font-medium uppercase tracking-wider text-sm mb-4 font-['Roboto']">
            Contáctanos Hoy Mismo
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Outfit']">
            Déjanos cuidar de tus prendas como si fueran nuestras
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8 font-['Roboto']">
            Más que una lavandería, somos un equipo apasionado por el cuidado de cada prenda. A lo largo de los años, hemos perfeccionado nuestra técnica y servicio para ofrecerte lo mejor en lavandería, tintorería y sastrería.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-md mx-auto">
            <h3 className="text-xl font-bold text-white mb-2 font-['Outfit']">WhatsApp</h3>
            <a 
              href="https://api.whatsapp.com/send/?phone=573504520414&text=%C2%A1Hola!.+Necesito+m%C3%A1s+informaci%C3%B3n+sobre+...&type=phone_number&app_absent=0"
              className="text-2xl font-bold text-[#398ffc] hover:text-white transition-colors font-['Outfit']"
            >
              (+ 57) 350 4520414
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}