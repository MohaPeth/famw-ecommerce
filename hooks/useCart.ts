"use client"

import { useState, useEffect } from "react"

interface CartItem {
  productId: number
  quantity: number
  size: string
  color: string
}

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isInitialized, setIsInitialized] = useState(false)

  // Charger les données du panier depuis localStorage au démarrage
  useEffect(() => {
    const storedCart = localStorage.getItem("famw_cart")
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart))
      } catch (error) {
        console.error("Erreur lors du chargement du panier:", error)
      }
    }
    setIsInitialized(true)
  }, [])

  // Sauvegarder les données du panier dans localStorage à chaque modification
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("famw_cart", JSON.stringify(cartItems))
    }
  }, [cartItems, isInitialized])

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (cartItem) =>
          cartItem.productId === item.productId && cartItem.size === item.size && cartItem.color === item.color,
      )

      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem === existingItem ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem,
        )
      }

      return [...prev, item]
    })
  }

  const removeFromCart = (productId: number, size: string, color: string) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.productId === productId && item.size === size && item.color === color)),
    )
  }

  const updateQuantity = (productId: number, size: string, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size, color)
      return
    }

    setCartItems((prev) =>
      prev.map((item) =>
        item.productId === productId && item.size === size && item.color === color ? { ...item, quantity } : item,
      ),
    )
  }

  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const clearCart = () => {
    setCartItems([])
  }

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartItemsCount,
    clearCart,
  }
}
