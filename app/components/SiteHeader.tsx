"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X, MapPin, Phone, MessageCircle } from 'lucide-react'

export default function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Nosotros', href: '/nosotros/' },
    {
      label: 'Servicios',
      href: '#',
      children: [
        { label: 'Servicios Familiares', href: '/servicios-familiares/' },
        { label: 'Servicios Corporativos', href: '/servicios-corporativos/' },
      ],
    },
    { label: 'Cobertura', href: '/cobertura/' },
    { label: 'Tecnología y Sostenibilidad', href: '/tecnologia-y-sostenibilidad/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contacto', href: '/contacto/' },
  ]

  const topBarLinks = [
    { label: 'PQRS y evaluaciones', href: '/pqrs-y-evaluaciones/' },
    { label: 'Políticas de servicio', href: '/politicas-del-servicio/' },
  ]

  const handleDropdownClick = (label: string) => {
    setOpenMenu(openMenu === label ? null : label)
  }

  const closeDropdown = () => {
    setOpenMenu(null)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      {/* Top bar */}
      <div className="bg-[#3b3d42] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-2 text-sm">
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="https://ul.waze.com/ul?place=ChIJXUFE-vSHP44R0FHGtEsLyhU&ll=4.86292770%2C-74.05153420&navigate=yes"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex items-center hover:text-gray-300 transition-colors"
              >
                <MapPin className="w-4 h-4 mr-2" />
                <span>Planta Principal - Av Pradilla No 3-57 Chía</span>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=573504520414&text=%C2%A1Hola!.+Necesito+m%C3%A1s+informaci%C3%B3n+sobre+...&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex items-center hover:text-gray-300 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>(+57) 350 4520414</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              {topBarLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-gray-300 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img
                src="https://lavasecoprestigio.com/wp-content/uploads/2025/02/logo-prestigio.png"
                alt="Lavandería Ecológica con Domicilio en Chía y Cota"
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => handleDropdownClick(item.label)}
                        className="flex items-center px-3 py-2 text-[#32373c] hover:text-[#192868] font-medium transition-colors text-sm"
                      >
                        {item.label}
                        <ChevronDown
                          className={`ml-1 w-4 h-4 transition-transform ${
                            openMenu === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openMenu === item.label && (
                        <div className="absolute top-full left-0 mt-1 bg-white shadow-xl border border-gray-100 rounded-md z-50 min-w-52 py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={closeDropdown}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-3 py-2 text-[#32373c] hover:text-[#192868] font-medium transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <a
                href="https://api.whatsapp.com/send/?phone=573504520414&text=%C2%A1Hola!.+Necesito+m%C3%A1s+informaci%C3%B3n+sobre+...&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center px-5 py-3 bg-[#192868] text-white font-medium rounded-md hover:bg-[#0d1a4a] transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Habla con un asesor
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#32373c] hover:text-[#192868] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[132px] bg-white z-40 overflow-y-auto">
          <div className="px-4 py-6 space-y-4">
            <div className="pb-4 border-b border-gray-200 space-y-3">
              <a
                href="https://ul.waze.com/ul?place=ChIJXUFE-vSHP44R0FHGtEsLyhU&ll=4.86292770%2C-74.05153420&navigate=yes"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex items-center text-[#32373c] hover:text-[#192868] transition-colors"
              >
                <MapPin className="w-5 h-5 mr-3" />
                <span className="text-sm">Planta Principal - Av Pradilla No 3-57 Chía</span>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=573504520414&text=%C2%A1Hola!.+Necesito+m%C3%A1s+informaci%C3%B3n+sobre+...&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex items-center text-[#32373c] hover:text-[#192868] transition-colors"
              >
                <Phone className="w-5 h-5 mr-3" />
                <span className="text-sm">(+57) 350 4520414</span>
              </a>
            </div>
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-100 pb-4">
                {item.children ? (
                  <>
                    <button
                      onClick={() => handleDropdownClick(item.label)}
                      className="flex items-center justify-between w-full py-2 text-[#32373c] font-medium"
                    >
                      {item.label}
                      <ChevronDown className={`w-5 h-5 transition-transform ${openMenu === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openMenu === item.label && (
                      <div className="mt-2 ml-4 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => { closeDropdown(); setMobileMenuOpen(false) }}
                            className="block py-2 text-sm text-gray-600 hover:text-[#192868] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-[#32373c] font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-6">
              <a
                href="https://api.whatsapp.com/send/?phone=573504520414&text=%C2%A1Hola!.+Necesito+m%C3%A1s+informaci%C3%B3n+sobre+...&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex items-center justify-center w-full px-6 py-3 bg-[#192868] text-white font-medium rounded-md hover:bg-[#0d1a4a] transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Habla con un asesor
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
