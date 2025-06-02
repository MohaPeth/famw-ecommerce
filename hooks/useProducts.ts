"use client"

import { useState, useMemo } from "react"
import type { Product } from "@/types"
import { products } from "@/data/products"

export function useProducts() {
  const [selectedCategory, setSelectedCategory] = useState("tous")

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "tous") {
      return products
    }
    return products.filter((product) => product.category === selectedCategory)
  }, [selectedCategory])

  const getProductById = (id: number): Product | undefined => {
    return products.find((product) => product.id === id)
  }

  const getFeaturedProducts = (limit = 6): Product[] => {
    return products.slice(0, limit)
  }

  return {
    products,
    filteredProducts,
    selectedCategory,
    setSelectedCategory,
    getProductById,
    getFeaturedProducts,
  }
}
