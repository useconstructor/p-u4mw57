import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[720px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/bg-banner-ppal-prestigio-1-1920x1080.webp"
            alt="Banner Principal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Floating Circle Decorations */}
        <img
          src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/circulo-flotante.png"
          alt=""
          className="absolute top-10 left-10 w-24 h-24 opacity-30 animate-bounce hidden lg:block"
        />
        <img
          src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/circulo-flotante.png"
          alt=""
          className="absolute bottom-20 right-20 w-32 h-32 opacity-20 animate-pulse hidden lg:block"
        />

        {/* Right Shape */}
        <img
          src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/forma-derecha-banner.png"
          alt=""
          className="absolute right-0 top-0 h-full opacity-30 hidden xl:block"
        />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[600px] lg:min-h-[720px] px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-lg md:text-xl font-medium mb-2 font-['Outfit']">
              Estamos Cerca de Ti
            </h2>
            <h3 className="text-sm md:text-base uppercase tracking-wider text-[#398ffc] mb-4 font-['Archivo']">
              Más cerca de ti
            </h3>
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