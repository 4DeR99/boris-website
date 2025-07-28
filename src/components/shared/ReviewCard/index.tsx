import { cn } from '@/lib/utils'
import { ShadowlessCard } from '@/components/ui/card'
import React from 'react'
import { Rating } from '@/components/shared/Rating'

interface ReviewCardProps {
  rating: number
  name: string
  comment: string
  className?: string
}

export const ReviewCard = ({
  rating,
  name,
  comment,
  className,
}: ReviewCardProps) => {
  return (
    <ShadowlessCard
      className={cn('flex flex-col gap-[15px] px-8 py-7', className)}
    >
      <Rating
        value={rating}
        showValue={false}
      />
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="line-clamp-4 font-satoshi text-base leading-[1.3] text-muted-foreground">
          "{comment}"
        </p>
      </div>
    </ShadowlessCard>
  )
}
