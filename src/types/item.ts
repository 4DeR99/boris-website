interface ItemImage {
  id: string
  url: string
  createdAt?: Date
  updatedAt?: Date
}

export interface Item {
  id: string
  name: string
  shortDescription?: string
  description?: string
  price: number
  rating: number
  images: ItemImage[]
  reduction?: number
  createdAt?: Date
  updatedAt?: Date
}
