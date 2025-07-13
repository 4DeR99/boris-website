import { cn } from '@/lib/utils'
import { CrossIcon } from '@/components/icons/CrossIcon'
import { SearchIcon } from '@/components/icons/SearchIcon'

export const MobileSearch = ({
  isOpen,
  onClose,
  className,
}: {
  isOpen: boolean
  onClose: () => void
  className?: string
}) => {
  return (
    <div
      className={cn(
        'absolute bottom-0 left-0 flex w-full items-center justify-center bg-white px-3 py-3 transition-transform duration-300 ease-in-out md:hidden',
        { 'translate-y-full': isOpen },
        className,
      )}
    >
      <div className="bg-light-gray flex h-fit w-[85%] gap-3 rounded-full px-4 py-3">
        {/* //? TODO: use search component when created */}
        <SearchIcon />
        <input
          type="text"
          className="grow bg-transparent outline-none"
          placeholder="Search for products..."
        />
        <button onClick={onClose}>
          <CrossIcon />
        </button>
      </div>
    </div>
  )
}
