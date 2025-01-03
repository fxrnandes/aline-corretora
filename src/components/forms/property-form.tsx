'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function PropertyForm() {
  const [intent, setIntent] = useState<'sell' | 'rent'>('sell')
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial'>('residential')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-lg font-medium">Seus dados:</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm">
              Nome
            </label>
            <Input id="name" placeholder="Seu nome" required />
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
                    width={24}
                    height={16}
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
            <label htmlFor="email" className="mb-2 block text-sm">
              E-mail
            </label>
            <Input id="email" type="email" placeholder="Seu email" required />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium">Você gostaria de:</h2>
        <div className="flex gap-4">
          <Button
            type="button"
            variant={intent === 'sell' ? 'default' : 'outline'}
            onClick={() => setIntent('sell')}
          >
            Vender
          </Button>
          <Button
            type="button"
            variant={intent === 'rent' ? 'default' : 'outline'}
            onClick={() => setIntent('rent')}
          >
            Alugar
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium">Seu imóvel é:</h2>
        <div className="flex gap-4">
          <Button
            type="button"
            variant={propertyType === 'residential' ? 'default' : 'outline'}
            onClick={() => setPropertyType('residential')}
          >
            Residencial
          </Button>
          <Button
            type="button"
            variant={propertyType === 'commercial' ? 'default' : 'outline'}
            onClick={() => setPropertyType('commercial')}
          >
            Comercial
          </Button>
        </div>
        <div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Tipo do imóvel" />
            </SelectTrigger>
            <SelectContent>
              {propertyType === 'residential' ? (
                <>
                  <SelectItem value="house">Casa</SelectItem>
                  <SelectItem value="apartment">Apartamento</SelectItem>
                  <SelectItem value="land">Terreno</SelectItem>
                </>
              ) : (
                <>
                  <SelectItem value="office">Sala Comercial</SelectItem>
                  <SelectItem value="store">Loja</SelectItem>
                  <SelectItem value="warehouse">Galpão</SelectItem>
                </>
              )}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium">Onde fica o imóvel?</h2>
        <div className="grid gap-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="cep" className="mb-2 block text-sm">
                CEP
              </label>
              <Input id="cep" placeholder="00000-000" required />
            </div>
            <div className="flex items-end">
              <Button variant="link" className="h-10">
                Não sei meu CEP
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="state" className="mb-2 block text-sm">
                UF
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="UF" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sc">Santa Catarina</SelectItem>
                  {/* Add other states */}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="city" className="mb-2 block text-sm">
                Cidade
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Cidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="jaragua">Jaraguá do Sul</SelectItem>
                  {/* Add other cities */}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="neighborhood" className="mb-2 block text-sm">
                Bairro
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Bairro" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="centro">Centro</SelectItem>
                  {/* Add other neighborhoods */}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="sm:col-span-2">
              <label htmlFor="address" className="mb-2 block text-sm">
                Endereço
              </label>
              <Input id="address" placeholder="Endereço" required />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="number" className="mb-2 block text-sm">
                  Número
                </label>
                <Input id="number" placeholder="0" required />
              </div>
              <div>
                <label htmlFor="complement" className="mb-2 block text-sm">
                  Complemento
                </label>
                <Input id="complement" placeholder="Complemento" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium">Dados financeiros</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="price" className="mb-2 block text-sm">
              Preço do imóvel
            </label>
            <Input
              id="price"
              type="number"
              min="0"
              step="0.01"
              placeholder="0"
              required
            />
          </div>
          <div>
            <label htmlFor="condo" className="mb-2 block text-sm">
              Condomínio (R$/mês)
            </label>
            <Input
              id="condo"
              type="number"
              min="0"
              step="0.01"
              placeholder="0"
            />
          </div>
          <div>
            <label htmlFor="iptu" className="mb-2 block text-sm">
              IPTU (R$/ano)
            </label>
            <Input
              id="iptu"
              type="number"
              min="0"
              step="0.01"
              placeholder="0"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium">Descreva seu imóvel</h2>
        <p className="text-sm text-muted-foreground">
          Informe dados para ajudar a valorizar o anúncio, como situação do imóvel, pontos fortes do bairro em que se localiza, vizinhança, ventilação, iluminação, etc.
        </p>
        <Textarea
          placeholder="Digite"
          className="min-h-[150px]"
          required
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Checkbox id="authorization" required />
          <label htmlFor="authorization" className="text-sm">
            Autorizo a INTERMEDIAÇÃO deste imóvel de minha propriedade.
          </label>
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
      </div>

      <Button type="submit" className="w-full">
        Enviar
      </Button>
    </form>
  )
}

