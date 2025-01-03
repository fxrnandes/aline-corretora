'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { PhoneIcon as WhatsApp, Mail, Copy } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ContactPage() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mb-8 text-3xl font-semibold">Entre em contato</h1>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm">
                  Nome
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm">
                  E-mail
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Seu email"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm">
                  Telefone
                </label>
                <div className="flex">
                  <div className="flex items-center gap-2 rounded-l-md border border-r-0 bg-muted px-3">
                  <Image
                    src="https://flagcdn.com/w20/br.png"
                    alt="Brazil flag"
                    width={20} // Provide the actual width
                    height={12} // Provide the actual height
                    className="h-4 w-6"
                    />
                  </div>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Seu telefone"
                    className="rounded-l-none"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Sua mensagem"
                  className="min-h-[150px]"
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="privacy" required />
                <label htmlFor="privacy" className="text-sm">
                  Concordo com a{' '}
                  <Link href="/privacidade" className="text-primary hover:underline">
                    Política de Privacidade
                  </Link>
                </label>
              </div>
              <Button type="submit" className="w-full">
                Enviar
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Este site é protegido por reCAPTCHA e a{' '}
                <Link
                  href="https://policies.google.com/privacy"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Política de Privacidade
                </Link>{' '}
                do Google e os{' '}
                <Link
                  href="https://policies.google.com/terms"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Termos de Serviço
                </Link>{' '}
                são aplicáveis.
              </p>
            </form>
          </div>
          <div className="space-y-6 lg:pl-8">
            <h2 className="text-2xl font-semibold">
              Aline Perfeito - Consultora Imobiliária
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <WhatsApp className="h-5 w-5 text-green-500" />
                <Link
                  href="tel:+5547991890800"
                  className="hover:text-primary"
                >
                  (47) 99189-0800
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5" />
                <button
                  onClick={() => copyToClipboard('aline.fernandespf@gmail.com')}
                  className="flex items-center gap-2 hover:text-primary"
                >
                  aline.fernandespf@gmail.com
                  <Copy className="h-4 w-4" />
                </button>
                {copied && (
                  <span className="text-sm text-green-500">Copiado!</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

