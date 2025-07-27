import { cn } from '@/lib/utils'
import React from 'react'

interface CoveredIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  coverClassName?: string
}

export function CoveredIcon(IconComponent: React.FC) {
  return function CoveredIcon(props: CoveredIconProps) {
    return (
      <div
        className={cn(
          'flex size-7 items-center justify-center rounded-full border border-black/20 bg-white text-black',
          'transition-colors ease-out hover:bg-black hover:text-white',
          props.coverClassName,
        )}
      >
        <IconComponent {...props} />
      </div>
    )
  }
}
