import Image from 'next/image'
import { Heart } from 'lucide-react'

interface PropertyCardProps {
  ref: string
  type: string
  status: string
  location: string
  title: string
  bedrooms: number
  bathrooms: number
  garages: number
  area?: number
  price: number
  image: string
}

export function PropertyCard({
  ref,
  status,
  location,
  title,
  bedrooms,
  bathrooms,
  garages,
  area,
  price,
  image
}: PropertyCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-md">
      <div className="absolute right-2 top-2 z-10">
        <button className="rounded-full bg-white p-2 shadow-sm hover:text-red-500">
          <Heart size={20} />
        </button>
      </div>
      <div className="relative h-64">
        <div className="absolute left-2 top-2 z-10 rounded bg-blue-600 px-2 py-1 text-sm text-white">
          {status}
        </div>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 text-sm text-gray-500">Ref.: {ref}</div>
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="mb-4 text-sm text-gray-600">{location}</p>
        <div className="mb-4 flex gap-4 text-sm text-gray-600">
          <div>Dormitórios: {bedrooms}</div>
          <div>Suítes: {bathrooms}</div>
          <div>Garagens: {garages}</div>
          {area && <div>Área: {area}m²</div>}
        </div>
        <div className="text-xl font-bold">
          R$ {price.toLocaleString('pt-BR')}
        </div>
      </div>
    </div>
  )
}

