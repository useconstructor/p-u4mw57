import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Banner */}
      <section className="relative overflow-hidden" style={{ paddingTop: '132px' }}>
        <div className="relative h-[280px] md:h-[340px]">
          <img
            src="https://lavasecoprestigio.com/wp-content/uploads/2025/05/cobertura.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#192868]/60" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <nav className="text-white/70 text-sm mb-3">
              <Link href="/" className="hover:text-white">Inicio</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Cobertura</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Estamos <span className="text-[#4fa8e8]">Cerca de Ti</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Coverage Info Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#32373c] mb-6 font-['Outfit']">
              Servicio en la Sabana de Bogotá y Más
            </h2>
            <p className="text-lg md:text-xl text-[#3b3d42] max-w-4xl mx-auto leading-relaxed font-['Roboto']">
              Nuestra cobertura está diseñada para brindarte la mayor comodidad y eficiencia. Contamos con <strong>sucursales estratégicamente ubicadas en Chía y Cota,</strong>ofrecemos <strong>servicio a domicilio</strong> y <strong>seis rutas de recorrido diario</strong> para que disfrutes de la mejor lavandería sin salir de casa.
            </p>
          </div>
        </div>
      </section>

      {/* Map Routes Section */}
      <section className="py-16 md:py-24 px-4 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#32373c] mb-6 font-['Outfit']">
              Consulta Nuestras Rutas de Cobertura
            </h2>
            <p className="text-lg md:text-xl text-[#3b3d42] max-w-4xl mx-auto leading-relaxed font-['Roboto']">
              Aquí podrás ver el mapa completo con todas las rutas activas de servicio. Identifica fácilmente cuál cubre tu ubicación y solicita la recolección desde casa o tu lugar de trabajo. <strong>Haz clic sobre tu ruta</strong> más cercana para obtener detalles de contacto.
            </p>
          </div>

          {/* Map Container */}
          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 mb-12">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
              {/* Embedded Google Map iframe for the coverage area */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63614.94851788789!2d-74.08!3d4.86!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85cb77f1bf17%3A0xb67dc8e6b90d9ac5!2zQ2jDrWEsIEN1bmRpbmFtYXJjYSwgQ29sb21iaWE!5e0!3m2!1ses!2sus!4v1699900000000!5m2!1ses!2sus"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Cobertura"
              />
            </div>
          </div>

          {/* Route Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Ruta 1", color: "#398ffc" },
              { name: "Ruta 2", color: "#398ffc" },
              { name: "Ruta 3", color: "#398ffc" },
              { name: "Ruta 4", color: "#398ffc" },
              { name: "Ruta 5", color: "#398ffc" },
              { name: "Ruta 6", color: "#398ffc" },
            ].map((route, index) => (
              <button
                key={index}
                className="bg-white hover:bg-[#398ffc] hover:text-white border-2 border-[#398ffc] text-[#398ffc] font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg font-['Outfit']"
              >
                {route.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo Funciona el Servicio a Domicilio */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" stroke="#192868" strokeWidth="1.5"/><path d="M10 6v4l2.5 2.5" stroke="#192868" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <span className="text-[#192868] font-semibold text-sm uppercase tracking-wider">¿Quieres recibir tu ropa limpia sin salir de casa?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#192868] mb-1">Cómo Funciona el</h2>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#4fa8e8]">Servicio a Domicilio</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
            {[
              { num: '01', title: 'Solicita el Servicio', desc: 'Contáctanos por WhatsApp o teléfono y programa la recogida.' },
              { num: '02', title: 'Recolección en tu Ubicación', desc: 'Nuestro equipo recoge tus prendas en la fecha y hora programadas.' },
              { num: '03', title: 'Limpieza Profesional', desc: 'Aplicamos los mejores procesos para garantizar resultados impecables.' },
              { num: '04', title: 'Entrega a Domicilio', desc: 'Recibe tus prendas frescas y listas para usar en la comodidad de tu hogar.' },
            ].map((step, i) => (
              <div key={step.num} className="relative" style={{ marginTop: i % 2 === 1 ? '2rem' : '0' }}>
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-10 w-14 h-14 rounded-full bg-[#4fa8e8] flex items-center justify-center shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="white" strokeWidth="2"/></svg>
                </div>
                <div className="bg-white border border-gray-100 shadow-md rounded-2xl pt-12 pb-14 px-6 relative overflow-hidden text-center">
                  <div className="absolute bottom-2 right-3 font-extrabold text-[#4fa8e8] select-none" style={{ fontSize: '4rem', opacity: 0.1, lineHeight: 1 }}>{step.num}</div>
                  <h4 className="font-bold text-[#192868] text-sm mb-2">{step.title}</h4>
                  <p className="text-gray-500 text-xs">{step.desc}</p>
                  <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-8">
                    <svg viewBox="0 0 300 32" preserveAspectRatio="none" className="w-full h-full" fill="#4fa8e8" fillOpacity="0.3">
                      <path d="M0 16 Q75 0 150 16 Q225 32 300 16 L300 32 L0 32 Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-[#32373c]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Outfit']">
            ¿No encuentras tu zona?
          </h2>
          <p className="text-lg text-gray-300 mb-8 font-['Roboto']">
            Contáctanos y te informaremos si podemos llegar hasta tu ubicación.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=573504520414&text=%C2%A1Hola!.+Necesito+m%C3%A1s+informaci%C3%B3n+sobre+...&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block bg-[#398ffc] hover:bg-[#2a7de6] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl font-['Outfit']"
          >
            Solicita Información
          </a>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-1.webp"
                alt="Servicios Prestigio"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#32373c] font-['Outfit']">
                Servicio a Domicilio
              </h2>
              <p className="text-lg text-[#3b3d42] leading-relaxed font-['Roboto']">
                Recogemos y entregamos tus prendas en la comodidad de tu hogar u oficina. Nuestras rutas cubren las principales zonas de la Sabana de Bogotá.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/servicios-familiares/"
                  className="inline-block bg-[#398ffc] hover:bg-[#2a7de6] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg font-['Outfit']"
                >
                  Servicios Familiares
                </Link>
                <Link
                  href="/servicios-corporativos/"
                  className="inline-block border-2 border-[#398ffc] text-[#398ffc] hover:bg-[#398ffc] hover:text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 font-['Outfit']"
                >
                  Servicios Corporativos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 md:py-24 px-4 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#32373c] mb-4 font-['Outfit']">
              Nuestras Sucursales
            </h2>
            <p className="text-lg text-[#3b3d42] font-['Roboto']">
              Visítanos en cualquiera de nuestras ubicaciones
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Chía Location */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#398ffc] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#32373c] font-['Outfit']">Chía</h3>
              </div>
              <p className="text-[#3b3d42] font-['Roboto']">
                Sucursal estratégicamente ubicada para atender la zona norte de la Sabana.
              </p>
            </div>

            {/* Cota Location */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#398ffc] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#32373c] font-['Outfit']">Cota</h3>
              </div>
              <p className="text-[#3b3d42] font-['Roboto']">
                Sucursal con cobertura para la zona occidental de la Sabana de Bogotá.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}