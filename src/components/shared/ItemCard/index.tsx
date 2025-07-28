import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Item } from '@/types/item'
import { Rating } from '@/components/shared/Rating'
import Image from 'next/image'
import React from 'react'

interface ItemCardProps {
  item: Item
  className?: string
}

export const ItemCard = ({ item, className }: ItemCardProps) => {
  return (
    <div className={cn('flex flex-col gap-2.5', className)}>
      <Card className="w-full overflow-hidden bg-light-gray">
        <Image
          src={item.images[0].url}
          alt={item.name}
          width={295}
          height={298}
          className="h-fit w-full object-contain"
        />
      </Card>
      <div className="flex flex-col gap-1">
        <h1 className="truncate text-base font-bold lg:text-xl">{item.name}</h1>
        <div className="flex items-center gap-2">
          <Rating
            value={item.rating}
            size="sm"
          />
        </div>
        <span className="font-satoshi text-lg font-bold lg:text-2xl">
          ${item.price}
        </span>
      </div>
    </div>
  )
}
