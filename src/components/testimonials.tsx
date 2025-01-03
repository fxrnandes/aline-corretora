'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Testimonial {
  id: number
  name: string
  image: string
  text: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Vanessa Neitske Steffens',
    image: '/placeholder.svg?height=50&width=50',
    text: 'Excelente profissional, me surpreendeu e me deu todo o suporte desde início até eu receber a chave do imóvel para ir morar, obrigada por me auxiliar a conquistar mais um sonho meu, de ter um ap bem do jeito que sonhei, super indico!'
  },
  {
    id: 2,
    name: 'Ivenete Muzzo',
    image: '/placeholder.svg?height=50&width=50',
    text: 'Eu tive muita sorte em conhecer Aline como corretora, pessoa maravilhosa comprei minha casa com essa pessoa muito honesta certinha em tudo, minha conquista consegui graças a ela grata por tudo o que ela fez.'
  },
  {
    id: 3,
    name: 'Maravik Becker',
    image: '/placeholder.svg?height=50&width=50',
    text: 'Super indico!'
  }
]

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-semibold">Depoimentos</h2>
        <div className="relative mx-auto max-w-4xl">
          <div className="relative min-h-[200px]">
            <div className="text-center">
              <p className="mb-6 text-lg text-gray-600">&ldquo;{testimonials[currentSlide].text}&rdquo;</p>
              <div className="flex items-center justify-center gap-4">
                <Image
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <span className="font-medium">{testimonials[currentSlide].name}</span>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full ${
                  currentSlide === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute -left-12 top-1/2 -translate-y-1/2 transform"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-12 top-1/2 -translate-y-1/2 transform"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}

