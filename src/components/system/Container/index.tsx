import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { forwardRef, HTMLAttributes } from 'react'

const containerStyles = cva('w-full h-full px-4', {
  variants: {
    type: {
      fluid: 'w-full',
      fixed: 'max-w-[1360px] mx-auto',
    },
  },
  defaultVariants: {
    type: 'fixed',
  },
})

type DivProps = HTMLAttributes<HTMLDivElement>

export type ContainerProps = DivProps & VariantProps<typeof containerStyles>
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ type, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(containerStyles({ type, className }))}
      {...props}
    />
  ),
)
