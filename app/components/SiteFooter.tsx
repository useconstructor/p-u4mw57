import { Instagram, Mail, Phone, MapPin, Facebook } from 'lucide-react'
import Link from 'next/link'

export default function SiteFooter() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Nosotros', href: '/nosotros/' },
    { name: 'Servicios Familiares', href: '/servicios-familiares/' },
    { name: 'Servicios Corporativos', href: '/servicios-corporativos/' },
    { name: 'Cobertura', href: '/cobertura/' },
    { name: 'Tecnología', href: '/tecnologia-y-sostenibilidad/' },
    { name: 'Blog', href: '/blog/' },
    { name: 'Contacto', href: '/contacto/' },
  ]

  const legalLinks = [
    { name: 'Política de privacidad', href: '/politicas-del-servicio/' },
    { name: 'Términos y condiciones', href: '/politicas-del-servicio/' },
    { name: 'PQRS y evaluaciones', href: '/pqrs-y-evaluaciones/' },
    { name: 'Políticas de servicio', href: '/politicas-del-servicio/' },
  ]

  return (
    <footer className="bg-[#32373c] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/">
              <img
                src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/logo-prestigio.png"
                alt="Lavandería Ecológica con Domicilio en Chía y Cota"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Lavaseco Prestigio transforma el cuidado de tus prendas con tecnología avanzada y compromiso sostenible. Descubre la calidad y confianza que mereces.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/PrestigioLavaseco/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/lavasecoprestigio/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Legales</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://ul.waze.com/ul?place=ChIJXUFE-vSHP44R0FHGtEsLyhU&ll=4.86292770%2C-74.05153420&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Planta Principal - Av Pradilla No 3-57 Chía</span>
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=573504520414&text=%C2%A1Hola!.+Necesito+m%C3%A1s+informaci%C3%B3n+sobre+...&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span>350 4520 414</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@lavasecoprestigio.com"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span>info@lavasecoprestigio.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#3b3d42]">
          <p className="text-center text-sm text-gray-300">
            <span className="font-semibold">LAVASECO PRESTIGIO ©</span> – Todos Los Derechos Reservados | Otro Sitio Hecho Con ❤️ Por{' '}
            <a
              href="https://www.sainet.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-white transition-colors"
            >
              Sainet
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}