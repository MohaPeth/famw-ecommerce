"use client"

import { CategoryFilter } from "@/components/ui/category-filter"
import { ProductGrid } from "@/components/ui/product-grid"
import { PageHeader } from "@/components/layout/page-header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useProducts } from "@/hooks/useProducts"
import { CATEGORIES } from "@/data/constants"

export default function ProduitsPage() {
  const { filteredProducts, selectedCategory, setSelectedCategory } = useProducts()

  return (
    <div className="min-h-screen bg-black text-famw-cream">
      <Navigation />

      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <PageHeader title="PRODUITS" subtitle="Chaque pièce raconte une histoire" />
          <CategoryFilter
            categories={CATEGORIES}
            activeCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <ProductGrid products={filteredProducts} showActions />
        </div>
      </div>

      <Footer />
    </div>
  )
}
