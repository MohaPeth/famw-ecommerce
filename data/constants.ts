import type { Category, NavItem, ContactInfo } from "@/types"

export const CATEGORIES: Category[] = [
  { id: "tous", name: "TOUS" },
  { id: "bestsellers", name: "BEST-SELLERS" },
  { id: "nouveautes", name: "NOUVEAUTÉS" },
  { id: "collection", name: "COLLECTION" },
]

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "ACCUEIL" },
  { href: "/produits", label: "PRODUITS" },
  { href: "/a-propos", label: "À PROPOS" },
  { href: "/contact", label: "CONTACT" },
]

export const CONTACT_INFO: ContactInfo = {
  email: "contact@famw.com",
  phone: "+33 1 23 45 67 89",
  address: {
    street: "123 Rue de la Meute",
    city: "75001 Paris",
    country: "France",
  },
}

export const BRAND_PHILOSOPHY = [
  "FAMW ne suit pas les tendances. Elle compose avec le regard, le doute, l'ambiguïté.",
  "Pour ceux qui ne cherchent pas à appartenir.",
  "Pour ceux qui observent, qui traduisent, qui créent sans demander.",
  "Ce n'est pas du simple textile. C'est une présence.",
]

export const SOCIAL_LINKS = [
  { name: "Instagram", href: "#", icon: "Instagram" },
  { name: "Twitter", href: "#", icon: "Twitter" },
  { name: "Email", href: "#", icon: "Mail" },
]
