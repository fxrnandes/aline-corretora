'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { PropertyForm } from '@/components/forms/property-form'

export default function NegotiatePage() {
  return (
    <main>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-3xl font-semibold">Negocie seu Imóvel</h1>
          <PropertyForm />
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

