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
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #192868 0%, #0d1a4a 100%)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-[#4fa8e8] font-medium uppercase tracking-wider text-sm mb-4 font-['Roboto']">
              Desde 1998
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Outfit']">
              Innovación y Cuidado del Planeta en Cada Lavado
            </h2>
            <p className="text-white/75 text-lg leading-relaxed font-['Roboto']">
              Cada prenda cuenta una historia y creemos que su limpieza no debería comprometer el medio ambiente. Nuestra tecnología avanzada y prácticas sostenibles garantizan un lavado impecable mientras reducimos nuestro impacto ecológico.
            </p>
          </div>

          {/* Feature Cards — staggered with circular icons + wave, matching home page style */}
          <div className="grid md:grid-cols-3 gap-6 items-start mt-4">
            {[
              { num: '01', offset: false, title: 'Tecnología Wet Clean', desc: 'Usamos maquinaria de última generación con ciclos suaves y químicos biodegradables para cuidar cada prenda.', icon: <path d="M14 3C9.58 3 6 6.58 6 11c0 6.75 8 14 8 14s8-7.25 8-14c0-4.42-3.58-8-8-8zM14 2v0" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> },
              { num: '02', offset: true, title: 'Productos Biodegradables', desc: 'Nos preocupamos por el planeta con materiales biodegradables y prácticas ecológicas que protegen el medio ambiente.', icon: <><path d="M14 22C14 22 6 18 6 11a8 8 0 0116 0c0 7-8 11-8 11z" stroke="white" strokeWidth="2" strokeLinejoin="round"/><path d="M14 15l3-3M14 15l-2-2" stroke="white" strokeWidth="2" strokeLinecap="round"/></> },
              { num: '03', offset: false, title: 'Secado Rápido de Tapetes', desc: 'Hemos incorporado maquinaria especializada para el lavado de tapetes con sistema de secado rápido.', icon: <><rect x="6" y="8" width="16" height="12" rx="2" stroke="white" strokeWidth="2"/><path d="M4 12h2M4 16h2M10 6V4M14 6V4" stroke="white" strokeWidth="2" strokeLinecap="round"/></> },
            ].map((card) => (
              <div key={card.num} className="relative" style={{ marginTop: card.offset ? '3rem' : '0' }}>
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-10 w-14 h-14 rounded-full bg-[#4fa8e8] flex items-center justify-center shadow-lg">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">{card.icon}</svg>
                </div>
                <div className="bg-white rounded-2xl pt-12 pb-16 px-6 relative overflow-hidden shadow-lg border border-gray-100">
                  <div className="absolute bottom-2 right-3 font-extrabold text-[#4fa8e8] select-none pointer-events-none" style={{ fontSize: '5rem', opacity: 0.12, lineHeight: 1 }}>{card.num}</div>
                  <h4 className="font-bold text-[#192868] text-lg mb-2">{card.title}</h4>
                  <p className="text-gray-600 text-sm">{card.desc}</p>
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