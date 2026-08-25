import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';

export const metadata: Metadata = {
  title: 'Lavandería Ecológica con Domicilio en Chía y Cota',
  description: 'Servicio de lavandería profesional para hogar y empresa. Recolección a domicilio, tecnología Wet Clean y entrega rápida. Calidad y sostenibilidad garantizadas.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <SiteHeader />
        <main className="pt-16">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
