import { cn } from '@/lib/utils'
import React from 'react'
import { CoveredIcon } from './Covered'

const RawFacebookIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="8"
      height="13"
      viewBox="0 0 8 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={cn('h-[13px] w-[8px]', props.className)}
    >
      <path
        d="M2.70873 12.3038V6.75026H0.839844V4.58594H2.70873V2.98981C2.70873 1.13752 3.84005 0.128906 5.49242 0.128906C6.28392 0.128906 6.96418 0.187836 7.16243 0.214175V2.14993L6.01642 2.15045C5.11776 2.15045 4.94376 2.57748 4.94376 3.20411V4.58594H7.08696L6.80791 6.75026H4.94376V12.3038H2.70873Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const FacebookIcon = CoveredIcon(RawFacebookIcon)
