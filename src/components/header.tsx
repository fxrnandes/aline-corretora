import Link from 'next/link'
import { Heart, Instagram, Facebook, PhoneIcon as WhatsApp } from 'lucide-react'

export function Header() {
  return (
    <header className="w-full bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 text-sm text-gray-600">
          <Link 
            href="tel:+5547991890800" 
            className="flex items-center gap-2 hover:text-gray-900"
          >
            <WhatsApp size={16} />
            (47) 99189-0800
          </Link>
          <div className="flex items-center gap-4">
            <Link href="https://instagram.com" className="hover:text-gray-900">
              <Instagram size={16} />
            </Link>
            <Link href="https://facebook.com" className="hover:text-gray-900">
              <Facebook size={16} />
            </Link>
          </div>
        </div>
        <nav className="flex items-center justify-end gap-6 py-4 text-sm">
          <Link href="/" className="hover:text-gray-900">Início</Link>
          <Link href="/sobre" className="hover:text-gray-900">Sobre</Link>
          <Link href="/contato" className="hover:text-gray-900">Contato</Link>
          <Link href="/financie" className="hover:text-gray-900">Financie</Link>
          <Link href="/negocie" className="hover:text-gray-900">Negocie seu Imóvel</Link>
          <Link href="/favoritos" className="flex items-center gap-1 hover:text-gray-900">
            <Heart size={16} className="text-red-500" />
            Imóveis Favoritos
          </Link>
        </nav>
      </div>
    </header>
  )
}

