"use client";

import { PropertyCard } from './property-card'

export function FeaturedProperties() {
  const properties = [
    {
      ref: '138',
      type: 'Casa',
      status: 'VENDA',
      location: 'Vila Lenzi - Jaraguá do Sul/SC',
      title: 'Casa Térrea',
      bedrooms: 3,
      bathrooms: 1,
      garages: 4,
      price: 1100000,
      image: '/placeholder.svg?height=400&width=600'
    },
    {
      ref: '137',
      type: 'Apartamento',
      status: 'VENDA',
      location: 'Vila Lenzi - Jaraguá do Sul/SC',
      title: 'Apartamento Alto Padrão',
      bedrooms: 2,
      bathrooms: 1,
      garages: 1,
      area: 77.64,
      price: 630000,
      image: '/placeholder.svg?height=400&width=600'
    },
    // Add more properties as needed
  ]

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-semibold">
          Imóveis em Destaque
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {properties.map((property) => (
            <PropertyCard key={property.ref} {...property} />
          ))}
        </div>
      </div>
    </section>
  )
}

