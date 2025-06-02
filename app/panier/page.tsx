"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { PageHeader } from "@/components/layout/page-header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { useCart } from "@/hooks/useCart"
import { useProducts } from "@/hooks/useProducts"

export default function PanierPage() {
  const { cartItems, updateQuantity, removeFromCart, clearCart, getCartItemsCount } = useCart()
  const { getProductById } = useProducts()
  const [promoCode, setPromoCode] = useState("")

  const cartItemsWithProducts = cartItems.map((item) => ({
    ...item,
    product: getProductById(item.productId),
  }))

  const subtotal = cartItemsWithProducts.reduce((total, item) => {
    if (!item.product) return total
    const price = Number.parseFloat(item.product.price.replace("€", ""))
    return total + price * item.quantity
  }, 0)

  const shipping = subtotal > 100 ? 0 : 9.99
  const total = subtotal + shipping

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-black text-famw-cream">
        <Navigation />
        <div className="pt-24 pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <PageHeader title="PANIER" subtitle="Votre sélection FAMW" />
            <div className="text-center py-20">
              <ShoppingBag size={64} className="mx-auto mb-6 text-gray-600" />
              <h2 className="text-2xl font-bold mb-4">Votre panier est vide</h2>
              <p className="text-gray-400 mb-8">Découvrez notre collection et ajoutez vos pièces préférées</p>
              <Button asChild className="bg-yellow-500 text-black hover:bg-yellow-600 font-bold px-8 py-3">
                <Link href="/produits">DÉCOUVRIR LA COLLECTION</Link>
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-famw-cream">
      <Navigation />
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <PageHeader title="PANIER" subtitle={`${getCartItemsCount()} article${getCartItemsCount() > 1 ? "s" : ""}`} />

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItemsWithProducts.map((item) => {
                if (!item.product) return null
                return (
                  <Card key={`${item.productId}-${item.size}-${item.color}`} className="bg-gray-900 border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="relative w-24 h-24 bg-white rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={item.product.image || "/placeholder.svg"}
                            alt={item.product.name}
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-2">{item.product.name}</h3>
                          <p className="text-gray-400 text-sm mb-2">
                            Taille: {item.size} | Couleur: {item.color}
                          </p>
                          <p className="text-yellow-500 font-bold text-lg">{item.product.price}</p>
                        </div>
                        <div className="flex flex-col items-end gap-4">
                          <button
                            onClick={() => removeFromCart(item.productId, item.size, item.color)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={20} />
                          </button>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity - 1)}
                              className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center hover:border-yellow-500 transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center font-bold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity + 1)}
                              className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center hover:border-yellow-500 transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}

              <div className="flex justify-between items-center pt-6">
                <Button
                  onClick={clearCart}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:border-red-500 hover:text-red-500"
                >
                  Vider le panier
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                >
                  <Link href="/produits">Continuer les achats</Link>
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">RÉSUMÉ DE COMMANDE</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span>Sous-total</span>
                      <span>{subtotal.toFixed(2)}€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Livraison</span>
                      <span>{shipping === 0 ? "Gratuite" : `${shipping.toFixed(2)}€`}</span>
                    </div>
                    {shipping === 0 && <p className="text-green-500 text-sm">🎉 Livraison gratuite dès 100€</p>}
                    <div className="border-t border-gray-700 pt-4">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span className="text-yellow-500">{total.toFixed(2)}€</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <Input
                      placeholder="Code promo"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="bg-black border-gray-700 text-famw-cream"
                    />
                    <Button
                      variant="outline"
                      className="w-full border-gray-600 text-gray-300 hover:border-yellow-500 hover:text-yellow-500"
                    >
                      Appliquer le code
                    </Button>
                  </div>

                  <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-600 font-bold py-3 text-lg">
                    COMMANDER
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-4">AVANTAGES FAMW</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>✓ Livraison gratuite dès 100€</li>
                    <li>✓ Retours gratuits sous 30 jours</li>
                    <li>✓ Paiement sécurisé</li>
                    <li>✓ Service client premium</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
