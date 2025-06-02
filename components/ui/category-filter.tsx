"use client"

import { Button } from "@/components/ui/button"
import type { Category } from "@/types"

interface CategoryFilterProps {
  categories: Category[]
  activeCategory: string
  onCategoryChange: (categoryId: string) => void
}

export function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <Button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          variant={activeCategory === category.id ? "default" : "outline"}
          className={`px-6 py-2 font-bold transition-all duration-300 ${
            activeCategory === category.id
              ? "bg-yellow-500 text-black hover:bg-yellow-600"
              : "border-gray-600 text-gray-300 hover:border-yellow-500 hover:text-yellow-500"
          }`}
        >
          {category.name}
        </Button>
      ))}
    </div>
  )
}
