import Link from 'next/link'
import SiteFooter from '../components/SiteFooter'

export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Banner */}
      <section className="relative overflow-hidden" style={{ paddingTop: '132px' }}>
        <div className="relative h-[280px] md:h-[340px]">
          <img
            src="https://lavasecoprestigio.com/wp-content/uploads/2025/05/nosotros-lp-7.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#192868]/60" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <nav className="text-white/70 text-sm mb-3">
              <Link href="/" className="hover:text-white">Inicio</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Nosotros</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Nuestra <span className="text-[#4fa8e8]">Razón de ser</span>
            </h1>
          </div>
        </div>
      </section>

      {/* "Desde 1998" intro section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" stroke="#192868" strokeWidth="1.5"/><path d="M10 6v4l2.5 2.5" stroke="#192868" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <span className="text-[#192868] font-semibold text-sm uppercase tracking-wider">Desde 1998</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#192868] mb-2">Ofreciendo Calidad, Confianza y</h2>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#4fa8e8] mb-6">Excelencia en cada Servicio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Más que una lavandería, somos un equipo apasionado por el cuidado de cada prenda. A lo largo de los años, hemos perfeccionado nuestra técnica y servicio para ofrecerte lo mejor en lavandería, tintorería y sastrería.
          </p>
        </div>

        {/* 3 staggered feature cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {[
            { num: '01', title: 'Presencia en la Sabana de Bogotá', offset: true, icon: (
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 3C9.58 3 6 6.58 6 11c0 6.75 8 14 8 14s8-7.25 8-14c0-4.42-3.58-8-8-8z" stroke="white" strokeWidth="2"/><circle cx="14" cy="11" r="2.5" stroke="white" strokeWidth="2"/></svg>
            )},
            { num: '02', title: 'Tecnología Wet Clean', offset: false, icon: (
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="5" stroke="white" strokeWidth="2"/><path d="M14 3v3M14 22v3M3 14h3M22 14h3M6.22 6.22l2.12 2.12M19.66 19.66l2.12 2.12M6.22 21.78l2.12-2.12M19.66 8.34l2.12-2.12" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
            )},
            { num: '03', title: 'Compromiso con la sostenibilidad', offset: true, icon: (
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 22C14 22 6 18 6 11a8 8 0 0116 0c0 7-8 11-8 11z" stroke="white" strokeWidth="2" strokeLinejoin="round"/><path d="M14 15l3-3M14 15l-2-2" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
            )},
          ].map((card) => (
            <div key={card.num} className="relative" style={{ marginTop: card.offset ? '2rem' : '0' }}>
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-10 w-14 h-14 rounded-full bg-[#4fa8e8] flex items-center justify-center shadow-lg">
                {card.icon}
              </div>
              <div className="bg-white border border-gray-100 shadow-md rounded-2xl pt-12 pb-14 px-6 relative overflow-hidden text-center">
                <div className="absolute bottom-2 right-3 font-extrabold text-[#4fa8e8] select-none pointer-events-none" style={{ fontSize: '4rem', opacity: 0.1, lineHeight: 1 }}>{card.num}</div>
                <h4 className="font-bold text-[#192868] text-base">{card.title}</h4>
                <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-8">
                  <svg viewBox="0 0 300 32" preserveAspectRatio="none" className="w-full h-full" fill="#4fa8e8" fillOpacity="0.3">
                    <path d="M0 16 Q75 0 150 16 Q225 32 300 16 L300 32 L0 32 Z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://lavasecoprestigio.com/wp-content/uploads/2025/05/nosotros-lp-6-640x640.webp"
              alt="Historia de Lavaseco Prestigio"
              className="w-full max-w-md mx-auto rounded-3xl shadow-lg object-cover h-80"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#192868] mb-1">Nuestra</h2>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#4fa8e8] mb-6">Historia</h2>
            <p className="text-gray-600 mb-4">
              Desde hace más de 25 años, nos dedicamos a ofrecer un servicio de lavandería y tintorería con un enfoque en calidad, responsabilidad y satisfacción del cliente. Iniciamos con un pequeño establecimiento, y con el tiempo, gracias a la confianza de nuestros clientes, nos hemos consolidado como un referente en la Sabana de Bogotá.
            </p>
            <p className="text-gray-600 mb-6">
              Nuestro crecimiento ha estado impulsado por la constante innovación en nuestros procesos, la incorporación de tecnologías sostenibles y un equipo humano altamente capacitado, permitiéndonos brindar un servicio que va más allá de la limpieza: cuidamos tus prendas como si fueran nuestras.
            </p>
            <div className="bg-[#e8f0fe] border-l-4 border-[#192868] rounded-md p-4">
              <p className="text-[#192868] italic text-sm font-medium">
                Cada prenda que tratamos es un compromiso con la calidad, la excelencia y la confianza que nuestros clientes depositan en nosotros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Filosofía */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3l2 6h6l-5 3.6 1.9 5.9L10 15l-4.9 3.5L7 12.6 2 9h6z" stroke="#192868" strokeWidth="1.5" strokeLinejoin="round"/></svg>
            <span className="text-[#192868] font-semibold text-sm uppercase tracking-wider">Nuestra Filosofía</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { title: 'Cuidado y Confianza', desc: 'Cada prenda que recibimos es tratada con el máximo cuidado y dedicación, asegurando resultados impecables y prolongando su vida útil.' },
              { title: 'Sostenibilidad y Responsabilidad', desc: 'Nos comprometemos con el medio ambiente, implementando procesos que minimizan el impacto ecológico sin comprometer la calidad del servicio.' },
              { title: 'Calidez y Cercanía', desc: 'Nos esforzamos por brindar un servicio cercano y personalizado, en el que cada cliente se sienta escuchado y valorado.' },
            ].map((item) => (
              <div key={item.title} className="bg-[#192868] rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 22s-8-5.5-8-11a8 8 0 0116 0c0 5.5-8 11-8 11z" fill="white" stroke="white" strokeWidth="1.5"/></svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #0d1f5c 0%, #192868 100%)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#4fa8e8] uppercase tracking-wider text-sm font-semibold">Nuestro Equipo</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4 mb-2">¿Qué hace especial a</h2>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#4fa8e8] mb-6">Nuestro equipo?</h2>
            <p className="text-white/80 mb-4">
              Detrás de cada prenda impecable, hay un equipo humano apasionado y comprometido con la excelencia. Nuestros colaboradores son el alma de nuestro servicio: personas capacitadas y dedicadas a ofrecer una experiencia única para cada cliente.
            </p>
            <p className="text-white/80 mb-6">
              Cada lavado, cada planchado y cada detalle reflejan la experticia de nuestro equipo, cuyo compromiso con la calidad nos diferencia. No somos solo una lavandería; somos artesanos del cuidado textil.
            </p>
            <ul className="space-y-3">
              {[
                'Formación constante en técnicas de limpieza y tratamientos especializados.',
                'Pasión por el detalle y el servicio al cliente.',
                'Un enfoque en la innovación y la mejora continua.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/90 text-sm">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5"><circle cx="10" cy="10" r="9" fill="#4fa8e8"/><path d="M6 10l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://lavasecoprestigio.com/wp-content/uploads/2025/05/nosotros-lp-6-640x640.webp" alt="" className="w-full h-48 object-cover rounded-2xl" />
            <img src="https://lavasecoprestigio.com/wp-content/uploads/2025/05/cobertura-640x640.webp" alt="" className="w-full h-48 object-cover rounded-2xl mt-8" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-white text-center">
        <div className="max-w-xl mx-auto">
          <span className="text-[#4fa8e8] uppercase tracking-wider text-sm font-semibold">Contáctanos Hoy Mismo</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#192868] mt-4 mb-2">Déjanos cuidar de tus prendas</h2>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#4fa8e8] mb-6">como si fueran nuestras</h2>
          <p className="text-gray-600 mb-8">
            Más que una lavandería, somos un equipo apasionado por el cuidado de cada prenda. A lo largo de los años, hemos perfeccionado nuestra técnica y servicio para ofrecerte lo mejor en lavandería, tintorería y sastrería.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=573504520414&text=%C2%A1Hola!.+Necesito+m%C3%A1s+informaci%C3%B3n+sobre+...&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center px-8 py-4 bg-[#192868] text-white font-semibold rounded-md hover:bg-[#0d1a4a] transition-colors"
          >
            WhatsApp
            <span className="ml-2 text-sm opacity-80">(+ 57) 350 4520414</span>
          </a>
        </div>
      </section>
    </main>
  )
}
