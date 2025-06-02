import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/types"

interface ProductCardProps {
  product: Product
  showActions?: boolean
}

export function ProductCard({ product, showActions = false }: ProductCardProps) {
  return (
    <Link href={`/produit/${product.id}`} className="group cursor-pointer">
      <div className="relative bg-white rounded-lg overflow-hidden mb-6 aspect-square">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-contain p-8 group-hover:scale-105 transition-transform duration-700"
        />
        {product.isNew && (
          <div className="absolute top-4 right-4 bg-black text-famw-cream px-3 py-1 text-xs font-bold">NEW</div>
        )}
        {product.isBestseller && (
          <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 text-xs font-bold">BESTSELLER</div>
        )}
      </div>

      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold tracking-wide">{product.name}</h3>
        <p className="text-yellow-500 text-lg font-bold">{product.price}</p>
        <p className="text-gray-400 text-sm">{product.description}</p>
      </div>
    </Link>
  )
}
