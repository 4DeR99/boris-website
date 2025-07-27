import { Hero } from '@/components/sections/Hero'
import { ItemsSection } from '@/components/shared/ItemsSecion'
import { Container } from '@/components/system/Container'

export default function Home() {
  return (
    <main className="w-full grow">
      <Hero />
      <Container>
        <ItemsSection title="New Arrivals" />
        <div className="h-px w-full bg-black/20" />
        <ItemsSection title="Top Selling" />
        <div className="h-px w-full bg-black/20" />
      </Container>
    </main>
  )
}
