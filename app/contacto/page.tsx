import Link from 'next/link'

export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Banner */}
      <section className="relative overflow-hidden" style={{ paddingTop: '132px' }}>
        <div className="relative h-[280px] md:h-[340px]">
          <img
            src="https://lavasecoprestigio.com/wp-content/uploads/2025/05/cobertura-640x640.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#192868]/60" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <nav className="text-white/70 text-sm mb-3">
              <Link href="/" className="hover:text-white">Inicio</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Contacto</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Estamos Aquí para <span className="text-[#4fa8e8]">Ayudarte</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <p className="text-gray-600 mb-6">
              Si tienes alguna pregunta sobre nuestros servicios o quieres solicitar información, estamos disponibles para atenderte. Contáctanos a través de nuestro formulario, WhatsApp o redes sociales.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Nombre completo *" className="border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#4fa8e8] w-full" />
                <input type="email" placeholder="Correo electrónico *" className="border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#4fa8e8] w-full" />
              </div>
              <input type="tel" placeholder="Teléfono de contacto *" className="border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#4fa8e8] w-full" />
              <textarea placeholder="Descripción breve de tu consulta" rows={4} className="border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#4fa8e8] w-full resize-none" />
              <button type="submit" className="inline-flex items-center px-6 py-3 bg-[#192868] text-white font-semibold rounded-md hover:bg-[#0d1a4a] transition-colors text-sm">
                Enviar Mensaje
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="white"/></svg>
                ),
                label: 'WhatsApp',
                value: '(+ 57) 350 4520414',
                href: 'https://api.whatsapp.com/send/?phone=573504520414',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="white"/></svg>
                ),
                label: 'E-mail',
                value: 'serviciocliente@lavasecoprestigio.com',
                href: 'mailto:serviciocliente@lavasecoprestigio.com',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white"/></svg>
                ),
                label: 'Planta Principal',
                value: 'Av Pradilla No 3 – 57, Chía',
                href: 'https://ul.waze.com/ul?place=ChIJXUFE-vSHP44R0FHGtEsLyhU',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/><path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                ),
                label: 'Horario de Atención',
                value: 'Lunes a Viernes 7:30am – 7:00pm\nSábados 8:30am – 6:00pm',
                href: null,
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 bg-white border border-gray-100 shadow-sm rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#192868] flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-[#192868] text-sm">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer nofollow" className="text-gray-600 text-sm hover:text-[#4fa8e8] transition-colors whitespace-pre-line">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-sm whitespace-pre-line">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-extrabold text-[#192868] text-center mb-8">¿Buscas nuestras sucursales o puntos de atención?</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63614.94851788789!2d-74.08!3d4.86!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85cb77f1bf17%3A0xb67dc8e6b90d9ac5!2zQ2jDrWEsIEN1bmRpbmFtYXJjYSwgQ29sb21iaWE!5e0!3m2!1ses!2sus!4v1699900000000!5m2!1ses!2sus"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación"
            />
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" stroke="#192868" strokeWidth="1.5"/><path d="M7 10l2 2 4-4" stroke="#192868" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <span className="text-[#192868] font-semibold text-sm uppercase tracking-wider">Redes Sociales</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#192868] mb-1">Síguenos</h2>
          <h2 className="text-3xl font-extrabold text-[#4fa8e8] mb-8">y mantente al día</h2>
          <div className="flex items-center justify-center gap-6">
            <a href="https://www.instagram.com/lavasecoprestigio/" target="_blank" rel="noopener noreferrer nofollow"
               className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center hover:scale-105 transition-transform">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.facebook.com/lavasecoprestigio/" target="_blank" rel="noopener noreferrer nofollow"
               className="w-16 h-16 bg-[#1877F2] rounded-2xl flex items-center justify-center hover:scale-105 transition-transform">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
