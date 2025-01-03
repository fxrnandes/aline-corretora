import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Facebook, Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Image
              src="/placeholder.svg?height=60&width=200"
              alt="Aline Perfeito Logo"
              width={200}
              height={60}
              className="invert"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Aline Perfeito - Consultora Imobiliária</h3>
            <div className="space-y-2">
              <Link href="tel:+5547991890800" className="flex items-center gap-2 hover:text-gray-300">
                <Phone size={16} />
                (47) 99189-0800
              </Link>
              <Link
                href="mailto:aline.fernandespf@gmail.com"
                className="flex items-center gap-2 hover:text-gray-300"
              >
                <Mail size={16} />
                aline.fernandespf@gmail.com
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="mb-4 font-semibold">Menu</h4>
              <nav className="space-y-2">
                <Link href="/" className="block hover:text-gray-300">
                  Início
                </Link>
                <Link href="/sobre" className="block hover:text-gray-300">
                  Sobre
                </Link>
                <Link href="/contato" className="block hover:text-gray-300">
                  Contato
                </Link>
                <Link href="/financie" className="block hover:text-gray-300">
                  Financie
                </Link>
                <Link href="/negocie" className="block hover:text-gray-300">
                  Negocie seu Imóvel
                </Link>
              </nav>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Social</h4>
              <div className="space-y-2">
                <Link
                  href="https://instagram.com"
                  className="flex items-center gap-2 hover:text-gray-300"
                >
                  <Instagram size={16} />
                  Instagram
                </Link>
                <Link
                  href="https://facebook.com"
                  className="flex items-center gap-2 hover:text-gray-300"
                >
                  <Facebook size={16} />
                  Facebook
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 text-sm">
          <p>© Copyright 2024 - Aline Perfeito - Consultora Imobiliária - Todos os direitos reservados</p>
          <p>
            Desenvolvido por{' '}
            <Link href="" className="hover:text-gray-300">
              VG tech
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

