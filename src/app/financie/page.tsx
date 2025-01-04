import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const banks = [
  {
    name: 'Banco do Brasil',
    logo: '/placeholder.svg?height=80&width=200',
    simulationUrl: 'https://www42.bb.com.br/portalbb/imobiliario/creditoimobiliario/simular,802,2250,2250.bbx'
  },
  {
    name: 'Bradesco',
    logo: '/placeholder.svg?height=80&width=200',
    simulationUrl: 'https://banco.bradesco/html/classic/produtos-servicos/emprestimo-e-financiamento/encontre-seu-credito/simuladores-imoveis.shtm'
  },
  {
    name: 'Banrisul',
    logo: '/placeholder.svg?height=80&width=200',
    simulationUrl: 'https://www.banrisul.com.br/simuladores/credito_imobiliario/'
  },
  {
    name: 'Itaú',
    logo: '/placeholder.svg?height=80&width=200',
    simulationUrl: 'https://www.itau.com.br/emprestimos-financiamentos/credito-imobiliario/simulador'
  },
  {
    name: 'Santander',
    logo: '/placeholder.svg?height=80&width=200',
    simulationUrl: 'https://www.santander.com.br/credito-financiamento/credito-imobiliario'
  },
  {
    name: 'Caixa',
    logo: '/placeholder.svg?height=80&width=200',
    simulationUrl: 'https://www.caixa.gov.br/voce/habitacao/Paginas/default.aspx'
  }
]

export default function FinancePage() {
  return (
    <main>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-semibold">Financie seu imóvel</h1>
          <p className="text-lg text-muted-foreground">
            Simule o financiamento do imóvel no seu banco de preferência
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {banks.map((bank) => (
            <div
              key={bank.name}
              className="flex flex-col items-center rounded-lg bg-white p-6 shadow-sm"
            >
              <div className="relative mb-6 h-20 w-full">
                <Image
                  src={bank.logo}
                  alt={`Logo ${bank.name}`}
                  fill
                  className="object-contain"
                />
              </div>
              <Button
                asChild
                variant="secondary"
                className="w-full"
              >
                <a
                  href={bank.simulationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Simular
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

