import { cn } from '@/lib/utils'
import React from 'react'

export const MobileDrawer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) => {
  return (
    <div
      className={cn(
        'fixed left-0 top-[84px] flex h-[calc(100%-84px)] w-full bg-black/15 transition-transform duration-150 ease-in-out md:hidden',
        { '-translate-x-full': !isOpen },
      )}
    >
      <div className="flex h-full w-fit flex-col gap-2 bg-white px-6 py-3">
        <ul className="flex flex-col gap-2">
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
        <span>Shop</span>
      </div>
      <div
        className="grow"
        onClick={onClose}
      />
    </div>
  )
}
