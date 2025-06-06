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
import { Minus, Plus, Trash2, ShoppingBag, Gift, Shield, Truck, ArrowRight, Tag } from "lucide-react"
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
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-yellow-500/10 rounded-full blur-3xl"></div>
                <ShoppingBag size={80} className="mx-auto text-gray-600 relative z-10" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Votre panier est vide</h2>
              <p className="text-gray-400 mb-8 text-lg">Découvrez notre collection et ajoutez vos pièces préférées</p>
              <Button
                asChild
                className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black hover:from-yellow-600 hover:to-yellow-500 font-bold px-12 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
              >
                <Link href="/produits">
                  DÉCOUVRIR LA COLLECTION
                  <ArrowRight className="ml-2" size={20} />
                </Link>
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

      {/* Hero Section */}
      <div className="relative pt-24 pb-12 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-transparent" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gray-900/50 rounded-full border border-yellow-500/20">
              <ShoppingBag className="text-yellow-500" size={20} />
              <span className="text-sm font-bold tracking-wider">
                {getCartItemsCount()} ARTICLE{getCartItemsCount() > 1 ? "S" : ""}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">VOTRE PANIER</h1>
            <p className="text-gray-400 text-lg">Finalisez votre sélection FAMW</p>
            <div className="text-3xl mt-4">🐺</div>
          </div>
        </div>
      </div>

      <div className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItemsWithProducts.map((item, index) => {
                if (!item.product) return null
                return (
                  <Card
                    key={`${item.productId}-${item.size}-${item.color}`}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-yellow-500/30"
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="relative w-32 h-32 bg-white rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                          <Image
                            src={item.product.image || "/placeholder.svg?height=128&width=128"}
                            alt={item.product.name}
                            fill
                            className="object-contain p-3 hover:scale-105 transition-transform duration-300"
                          />
                          {item.product.isNew && (
                            <div className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 text-xs font-bold rounded">
                              NEW
                            </div>
                          )}
                        </div>

                        <div className="flex-1 space-y-3">
                          <div>
                            <h3 className="font-bold text-xl mb-2 text-famw-cream">{item.product.name}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                              <span className="bg-gray-800 px-3 py-1 rounded-full">Taille: {item.size}</span>
                              <span className="bg-gray-800 px-3 py-1 rounded-full">Couleur: {item.color}</span>
                            </div>
                          </div>
                          <p className="text-yellow-500 font-bold text-2xl">{item.product.price}</p>
                        </div>

                        <div className="flex flex-col items-end gap-4">
                          <button
                            onClick={() => removeFromCart(item.productId, item.size, item.color)}
                            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all duration-300"
                          >
                            <Trash2 size={20} />
                          </button>

                          <div className="flex items-center gap-3 bg-gray-800/50 rounded-xl p-2">
                            <button
                              onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity - 1)}
                              className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-12 text-center font-bold text-lg">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity + 1)}
                              className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
                <Button
                  onClick={clearCart}
                  variant="outline"
                  className="border-red-500/50 text-red-400 hover:border-red-500 hover:bg-red-500/10 hover:text-red-300 transition-all duration-300 px-6 py-3"
                >
                  <Trash2 size={18} className="mr-2" />
                  Vider le panier
                </Button>
                <Button
                  asChild
                  className="bg-gray-800 border border-gray-600 text-famw-cream hover:border-yellow-500 hover:bg-gray-700 transition-all duration-300 px-8 py-3"
                >
                  <Link href="/produits">
                    <ArrowRight size={18} className="mr-2 rotate-180" />
                    Continuer les achats
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Order Summary */}
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-yellow-500">RÉSUMÉ DE COMMANDE</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-lg">
                      <span>Sous-total</span>
                      <span className="font-bold">{subtotal.toFixed(2)}€</span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span>Livraison</span>
                      <span className="font-bold">{shipping === 0 ? "Gratuite" : `${shipping.toFixed(2)}€`}</span>
                    </div>
                    {shipping === 0 && (
                      <div className="flex items-center gap-2 text-green-500 text-sm bg-green-500/10 p-3 rounded-lg">
                        <Gift size={16} />
                        <span>Livraison gratuite dès 100€ !</span>
                      </div>
                    )}
                    <div className="border-t border-gray-600 pt-4">
                      <div className="flex justify-between font-bold text-2xl">
                        <span>Total</span>
                        <span className="text-yellow-500">{total.toFixed(2)}€</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="/checkout"
                    className="block w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black hover:from-yellow-600 hover:to-yellow-500 font-bold py-4 text-lg text-center rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-500/25 mb-4"
                  >
                    COMMANDER MAINTENANT
                    <ArrowRight className="inline ml-2" size={20} />
                  </a>

                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                      <Shield size={14} />
                      <span>Paiement 100% sécurisé</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Promo Code */}
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-yellow-500">
                    <Tag size={20} />
                    CODE PROMO
                  </h3>
                  <div className="space-y-4">
                    <Input
                      placeholder="Entrez votre code promo"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="bg-black/50 border-gray-600 text-famw-cream focus:border-yellow-500 focus:ring-yellow-500/20 transition-all duration-300"
                    />
                    <Button className="w-full bg-gray-800 border border-gray-600 text-famw-cream hover:border-yellow-500 hover:bg-gray-700 transition-all duration-300">
                      Appliquer le code
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 shadow-xl">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-4 text-yellow-500 flex items-center gap-2">
                    <Shield size={20} />
                    AVANTAGES FAMW
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span>Livraison gratuite dès 100€</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span>Retours gratuits sous 30 jours</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span>Paiement sécurisé SSL</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span>Service client premium 24/7</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Shipping Info */}
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 shadow-xl">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-4 text-yellow-500 flex items-center gap-2">
                    <Truck size={20} />
                    LIVRAISON
                  </h4>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex justify-between items-center">
                      <span>France métropolitaine</span>
                      <span className="font-bold text-yellow-500">2-3 jours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Livraison express</span>
                      <span className="font-bold text-yellow-500">24h</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-3 p-2 bg-gray-800/50 rounded">
                      💡 Commande avant 14h = expédition le jour même
                    </div>
                  </div>
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
