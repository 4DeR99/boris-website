'use client'

import { BrowseByStyle } from '@/components/sections/Home/BrowseByStyle'
import { Hero } from '@/components/sections/Home/Hero'
import { ItemsSection } from '@/components/sections/Home/ItemsSection'
import { Reviews } from '@/components/sections/Home/Reviews'
import { Container } from '@/components/system/Container'

export default function Home() {
  return (
    <main className="w-full grow">
      <Hero />
      <Container>
        <ItemsSection title="New Arrivals" />
        <div className="h-px w-full bg-black/20" />
        <ItemsSection title="Top Selling" />
        <BrowseByStyle />
        <Reviews />
      </Container>
    </main>
  )
}
