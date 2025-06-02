export interface Product {
  id: number
  name: string
  price: string
  description: string
  image: string
  images?: string[]
  category: string
  isNew?: boolean
  isBestseller?: boolean
  sizes?: string[]
  colors?: string[]
  details?: string[]
}

export interface Category {
  id: string
  name: string
}

export interface NavItem {
  href: string
  label: string
}

export interface ContactInfo {
  email: string
  phone: string
  address: {
    street: string
    city: string
    country: string
  }
}

export interface SocialLink {
  name: string
  href: string
  icon: string
}
