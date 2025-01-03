import Image from 'next/image'

export function Hero() {
  return (
    <div className="relative h-[400px] w-full">
      <Image
        src="/placeholder.svg?height=400&width=1920"
        alt="Modern luxury house"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-gray-900/30">
        <div className="container mx-auto flex h-full items-center px-4">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl font-bold tracking-tight">
              ALINE PERFEITO
            </h1>
            <p className="mt-2 text-xl">
              CONSULTORA IMOBILIÁRIA
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

