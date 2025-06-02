import type { Product } from "@/types"
import { ProductCard } from "./product-card"

interface ProductGridProps {
  products: Product[]
  showActions?: boolean
}

export function ProductGrid({ products, showActions = false }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} showActions={showActions} />
      ))}
    </div>
  )
}
