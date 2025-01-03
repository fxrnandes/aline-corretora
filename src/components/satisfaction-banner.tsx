import Image from 'next/image'

export function SatisfactionBanner() {
  return (
    <section className="relative h-[400px] w-full overflow-hidden">
      <Image
        src="/placeholder.svg?height=400&width=1920"
        alt="Luxury house with pool"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-transparent">
        <div className="container mx-auto flex h-full items-center px-4">
          <div className="max-w-xl text-white">
            <h2 className="text-4xl font-light">
              Sua felicidade
              <br />é nossa
              <br />maior
              <br />
              <span className="font-serif italic">satisfação.</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

