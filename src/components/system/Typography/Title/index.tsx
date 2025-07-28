import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { forwardRef, HTMLAttributes } from 'react'

const titleVariants = cva('font-kanit font-bold uppercase leading-[1.2]', {
  variants: {
    size: {
      xl: 'text-4xl md:text-[42px] lg:text-5xl',
    },
  },
  defaultVariants: {
    size: 'xl',
  },
})

type HeadingProps = HTMLAttributes<HTMLHeadingElement>

export type TitleProps = HeadingProps & VariantProps<typeof titleVariants>
export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(titleVariants({ className }))}
        {...props}
      />
    )
  },
)
