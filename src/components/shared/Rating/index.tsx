import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { Star } from 'lucide-react'
import React from 'react'

const ratingStyles = cva('flex items-center gap-1', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

interface RatingProps extends VariantProps<typeof ratingStyles> {
  value: number
  className?: string
}

export const Rating = ({ value, size, className }: RatingProps) => {
  return (
    <div className={cn(ratingStyles({ size, className }))}>
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1
        const isFilled = value >= starValue
        const isPartial = value > index && value < starValue

        return (
          <div
            key={index}
            className="relative"
          >
            <Star className="text-yellow-400 transition-colors" />

            <Star
              className={cn(
                'absolute inset-0 fill-yellow-400 text-yellow-400 transition-colors',
                !isFilled && !isPartial && 'opacity-0',
              )}
              style={{
                clipPath: isPartial
                  ? `inset(0 ${100 - (value - index) * 100}% 0 0)`
                  : undefined,
              }}
            />
          </div>
        )
      })}
      <span className="text-sm font-medium">{value}</span>
    </div>
  )
}
