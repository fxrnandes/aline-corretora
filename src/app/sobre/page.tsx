import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function AboutPage() {
  return (
    <main>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold">Sobre mim</h1>
            <div className="space-y-4 text-gray-600">
              <p>
                Me chamo Aline Perfeito trabalho como consultora imobiliária no município de Jaraguá do Sul e região, minha paixão é ajudar cada família a encontrar o imóvel dos seus sonhos.
              </p>
              <p>
                Trabalho auxiliando você, na compra ou venda do seu imóvel com segurança e total discrição.
              </p>
              <p>
                Se você está em busca de grandes oportunidades no mercado imobiliário eu posso te ajudar. Meu comprometimento é localizar o imóvel certo suprir todas as necessidades solicitadas, garantindo uma experiencia incrível e única.
              </p>
              <p>
                Participo de toda assessoria necessária à realização de uma transação segura e tranquila, com acompanhamento jurídico e a qualidade que você merece. A ética, profissionalismo e transparência no mercado imobiliário fazem com que nossos clientes tenham um atendimento personalizado, resultando em segurança e satisfação nos negócios realizados.
              </p>
              <p>
                Faça agora mesmo seu contato, terei prazer em ajudá-los a realizar o sonho de adquirir a casa própria.
              </p>
            </div>
          </div>
          <div className="relative h-[600px] lg:h-auto">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Aline Perfeito - Consultora Imobiliária"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

