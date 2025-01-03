'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'

export function SearchForm() {
  const [minValue, setMinValue] = useState('')
  const [maxValue, setMaxValue] = useState('')

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center text-2xl font-semibold">
          Encontre o seu imóvel ideal
        </h2>
        <div className="flex flex-wrap items-end gap-4">
          <div className="w-full sm:w-auto">
            <label className="mb-2 block text-sm">Negócio</label>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="venda">Comprar</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full sm:w-auto">
            <label className="mb-2 block text-sm">Tipo do Imóvel</label>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="casa">Casa</SelectItem>
                <SelectItem value="apartamento">Apartamento</SelectItem>
                <SelectItem value="terreno">Sobrado</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full sm:w-auto">
            <label className="mb-2 block text-sm">Valor mínimo</label>
            <Input
              type="text"
              placeholder="R$ 0,00"
              value={minValue}
              onChange={(e) => setMinValue(e.target.value)}
              className="w-[150px]"
            />
          </div>
          <div className="w-full sm:w-auto">
            <label className="mb-2 block text-sm">Valor máximo</label>
            <Input
              type="text"
              placeholder="R$ 0,00"
              value={maxValue}
              onChange={(e) => setMaxValue(e.target.value)}
              className="w-[150px]"
            />
          </div>
          <div className="w-full sm:w-auto">
            <label className="mb-2 block text-sm">Bairros</label>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Pesquisar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="centro">Centro</SelectItem>
                <SelectItem value="jardim">Jardim América</SelectItem>
                <SelectItem value="vila">Vila Nova</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full sm:w-auto">
            Pesquisar
          </Button>
        </div>
      </div>
    </div>
  )
}

