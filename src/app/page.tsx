import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { SearchForm } from '@/components/search-form'
import { FeaturedProperties } from '@/components/featured-properties'
import { Testimonials } from '@/components/testimonials'
import { SatisfactionBanner } from '@/components/satisfaction-banner'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <SearchForm />
      <FeaturedProperties />
      <Testimonials />
      <SatisfactionBanner />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

