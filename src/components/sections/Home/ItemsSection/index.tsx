import { Button } from '@/components/ui/button'
import { ItemCard } from '@/components/shared/ItemCard'
import { Item } from '@/types/item'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { Title } from '@/components/system/Typography/Title'

interface ItemsSectionProps {
  title: string
  // items: Item[]
  hasMore?: boolean
}

const items: Item[] = [
  {
    id: '1',
    name: 'T-shirt with Tape Details',
    price: 100,
    rating: 4.5,
    images: [
      {
        id: '1',
        url: '/images/home/item-placeholder.png',
      },
    ],
  },
  {
    id: '2',
    name: 'Item 2',
    price: 200,
    rating: 4.8,
    images: [
      {
        id: '2',
        url: '/images/home/item-placeholder.png',
      },
    ],
  },
  {
    id: '3',
    name: 'Item 3',
    price: 300,
    rating: 2.5,
    images: [
      {
        id: '3',
        url: '/images/home/item-placeholder.png',
      },
    ],
  },
  {
    id: '4',
    name: 'Item 4',
    price: 400,
    rating: 3.7,
    images: [
      {
        id: '4',
        url: '/images/home/item-placeholder.png',
      },
    ],
  },
]

export const ItemsSection = ({
  title,
  // items,
  hasMore = true,
}: ItemsSectionProps) => {
  return (
    <section className="flex flex-col items-center gap-12 py-3 ~my-6/10">
      <Title>{title}</Title>
      <div className="hidden w-full justify-between md:flex">
        {items.map((item: Item) => (
          <ItemCard
            key={item.id}
            item={item}
            className="w-[24%]"
          />
        ))}
      </div>
      <Carousel className="w-full md:hidden">
        <CarouselContent className="overflow-visible">
          {items.map((item: Item) => (
            <CarouselItem
              key={item.id}
              className="max-w-[200px]"
            >
              <ItemCard item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {hasMore && (
        <Button
          className="w-full text-base sm:w-fit"
          size="xl"
          variant="outline"
        >
          View More
        </Button>
      )}
    </section>
  )
}
