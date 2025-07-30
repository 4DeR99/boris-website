import { cn } from '@/lib/utils'
import { forwardRef, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  inputClassName?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ inputClassName, error, className, ...props }, ref) => {
    return (
      <div className={cn('relative flex w-full flex-col gap-2', className)}>
        <input
          ref={ref}
          className={cn(
            'w-full border-b border-black/20 bg-transparent px-0.5 py-2.5 text-black transition-colors duration-300 ease-out focus:border-black focus:outline-none',
            inputClassName,
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    )
  },
)
