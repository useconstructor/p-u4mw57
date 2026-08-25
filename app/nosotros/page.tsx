export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Slider Section */}
      <section className="relative h-[600px] md:h-[720px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/bg-banner-ppal-prestigio-1-1920x1080.webp"
            alt="bg-banner-ppal-prestigio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Floating Circle - Left */}
        <div className="absolute top-20 left-10 w-32 h-32 md:w-48 md:h-48 opacity-30 animate-bounce hidden lg:block" style={{ animationDuration: '3s' }}>
          <img
            src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/circulo-flotante.png"
            alt="decorative circle"
            className="w-full h-full"
          />
        </div>

        {/* Floating Circle - Right */}
        <div className="absolute bottom-20 left-1/4 w-24 h-24 md:w-36 md:h-36 opacity-20 animate-bounce hidden lg:block" style={{ animationDuration: '4s' }}>
          <img
            src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/circulo-flotante.png"
            alt="decorative circle"
            className="w-full h-full"
          />
        </div>

        {/* Right Shape */}
        <div className="absolute right-0 top-0 h-full w-auto hidden xl:block">
          <img
            src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/forma-derecha-banner.png"
            alt="decorative shape"
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Estilo, Elegancia y <span className="font-black">Resplandor</span> en Cada <span className="font-black">Prenda</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Confía en nuestra experiencia y tecnología avanzada para el cuidado de tus prendas y textiles. Desde 1998, redefiniendo la calidad en lavandería y tintorería.
            </p>
            <a
              href="/servicios-familiares/"
              className="inline-block px-8 py-4 text-white font-semibold rounded-md transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: '#398ffc', fontFamily: 'Archivo, sans-serif' }}
            >
              Explora Nuestros Servicios
            </a>
          </div>
        </div>

        {/* Slider Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          <button className="w-3 h-3 rounded-full bg-white"></button>
          <button className="w-3 h-3 rounded-full bg-white/50"></button>
          <button className="w-3 h-3 rounded-full bg-white/50"></button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 px-4" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span 
                className="uppercase text-sm font-mono tracking-wider mb-4 block"
                style={{ color: '#398ffc' }}
              >
                NUESTRA HISTORIA
              </span>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                style={{ fontFamily: 'Outfit, sans-serif', color: '#32373c' }}
              >
                Tecnología y Sostenibilidad <span className="font-black">en Armonía</span>
              </h2>
              <p 
                className="text-lg mb-6"
                style={{ fontFamily: 'Roboto, sans-serif', color: '#3b3d42' }}
              >
                Cuidamos tus prendas y el planeta con procesos eficientes y responsables. Innovación y compromiso en cada detalle.
              </p>
              <a
                href="/tecnologia-y-sostenibilidad/"
                className="inline-block px-8 py-4 text-white font-semibold rounded-md transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: '#398ffc', fontFamily: 'Archivo, sans-serif' }}
              >
                Descubre mucho más
              </a>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-1.webp"
                alt="Lavandería Prestigio servicios"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section 
        className="py-16 md:py-24 px-4"
        style={{ backgroundColor: '#3b3d42' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="order-2 lg:order-1">
              <img
                src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/img-home-prestigio-0.webp"
                alt="Calidad en lavandería"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <span 
                className="uppercase text-sm font-mono tracking-wider mb-4 block"
                style={{ color: '#398ffc' }}
              >
                EXCELENCIA
              </span>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Calidad <span className="font-black">que Supera</span> Expectativas
              </h2>
              <p 
                className="text-lg mb-6 text-gray-300"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                Nuestro enfoque combina tradición, modernidad y excelencia, cuidando cada prenda como si fuera única.
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=573504520414&text=%C2%A1Hola!.+Necesito+m%C3%A1s+informaci%C3%B3n+sobre+...&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block px-8 py-4 text-white font-semibold rounded-md transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: '#398ffc', fontFamily: 'Archivo, sans-serif' }}
              >
                Solicita Información
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
            style={{ fontFamily: 'Outfit, sans-serif', color: '#32373c' }}
          >
            ¿Listo para experimentar la diferencia?
          </h2>
          <p 
            className="text-lg mb-8"
            style={{ fontFamily: 'Roboto, sans-serif', color: '#3b3d42' }}
          >
            Descubre por qué somos la lavandería ecológica preferida en Chía y Cota.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/servicios-familiares/"
              className="inline-block px-8 py-4 text-white font-semibold rounded-md transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: '#398ffc', fontFamily: 'Archivo, sans-serif' }}
            >
              Servicios Familiares
            </a>
            <a
              href="/servicios-corporativos/"
              className="inline-block px-8 py-4 font-semibold rounded-md transition-all duration-300 border-2"
              style={{ 
                borderColor: '#398ffc', 
                color: '#398ffc',
                fontFamily: 'Archivo, sans-serif' 
              }}
            >
              Servicios Corporativos
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}