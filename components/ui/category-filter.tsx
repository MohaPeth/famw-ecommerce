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
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <Button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`
            relative px-8 py-3 font-bold text-sm uppercase tracking-wider
            transition-all duration-300 ease-out
            border-2 rounded-lg
            transform hover:scale-105 hover:-translate-y-1
            shadow-lg hover:shadow-xl
            ${
              activeCategory === category.id
                ? `
                  bg-gradient-to-r from-yellow-500 to-yellow-400 
                  text-black border-yellow-400
                  shadow-yellow-500/25 hover:shadow-yellow-500/40
                  before:absolute before:inset-0 before:bg-gradient-to-r 
                  before:from-yellow-400 before:to-yellow-300 before:opacity-0 
                  before:transition-opacity before:duration-300 before:rounded-md
                  hover:before:opacity-100
                `
                : `
                  bg-gray-900/80 backdrop-blur-sm text-gray-300 
                  border-gray-700 hover:border-yellow-500/50
                  hover:bg-gray-800/90 hover:text-yellow-400
                  shadow-gray-900/50 hover:shadow-gray-800/60
                  before:absolute before:inset-0 before:bg-gradient-to-r 
                  before:from-yellow-500/10 before:to-yellow-400/10 before:opacity-0 
                  before:transition-opacity before:duration-300 before:rounded-md
                  hover:before:opacity-100
                `
            }
            after:absolute after:inset-0 after:rounded-md
            after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent
            after:translate-x-[-100%] after:transition-transform after:duration-700
            hover:after:translate-x-[100%]
            overflow-hidden
          `}
        >
          <span className="relative z-10">{category.name}</span>
        </Button>
      ))}
    </div>
  )
}