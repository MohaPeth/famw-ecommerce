"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import {
  CreditCard,
  Smartphone,
  DollarSign,
  Lock,
  Truck,
  Shield,
  CheckCircle,
  MapPin,
  Mail,
  Phone,
  User,
  Package,
} from "lucide-react"
import { useCart } from "@/hooks/useCart"
import { useProducts } from "@/hooks/useProducts"
import { useCheckout } from "@/hooks/useCheckout"

export default function CheckoutPage() {
  const router = useRouter()
  const { cartItems, getCartItemsCount, clearCart } = useCart()
  const { getProductById } = useProducts()
  const { processPayment, isProcessing } = useCheckout()

  const [paymentMethod, setPaymentMethod] = useState("card")
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "France",
  })

  const [paymentInfo, setPaymentInfo] = useState({
    // Carte bancaire
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    // PayPal
    paypalEmail: "",
    // Airtel Money
    airtelNumber: "",
    airtelPin: "",
  })

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

  const handleInputChange = (section: "shipping" | "payment", field: string, value: string) => {
    if (section === "shipping") {
      setShippingInfo((prev) => ({ ...prev, [field]: value }))
    } else {
      setPaymentInfo((prev) => ({ ...prev, [field]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const orderData = {
      items: cartItemsWithProducts,
      shipping: shippingInfo,
      payment: {
        method: paymentMethod,
        ...paymentInfo,
      },
      totals: {
        subtotal,
        shipping,
        total,
      },
    }

    try {
      const result = await processPayment(orderData)
      if (result.success) {
        clearCart()
        router.push(`/order-confirmation?orderId=${result.orderId}`)
      }
    } catch (error) {
      console.error("Payment failed:", error)
    }
  }

  // Commentons temporairement cette vérification pour voir si c'est la cause du problème
  // if (cartItems.length === 0) {
  //   router.push("/panier")
  //   return null
  // }

  return (
    <div className="min-h-screen bg-black text-famw-cream">
      <Navigation />

      {/* Hero Section */}
      <div className="relative pt-24 pb-12 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-transparent" />
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gray-900/50 rounded-full border border-yellow-500/20">
            <Lock className="text-yellow-500" size={20} />
            <span className="text-sm font-bold tracking-wider">PAIEMENT SÉCURISÉ</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">FINALISER VOTRE COMMANDE</h1>
          <p className="text-gray-400 text-lg">Dernière étape avant de rejoindre la meute</p>
          <div className="text-3xl mt-4">🐺</div>
        </div>
      </div>

      <div className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Forms */}
              <div className="lg:col-span-2 space-y-8">
                {/* Progress Steps */}
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold text-sm">
                        1
                      </div>
                      <span className="ml-2 text-sm font-bold">Livraison</span>
                    </div>
                    <div className="w-12 h-px bg-gray-700"></div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold text-sm">
                        2
                      </div>
                      <span className="ml-2 text-sm font-bold">Paiement</span>
                    </div>
                    <div className="w-12 h-px bg-gray-700"></div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-700 text-gray-400 rounded-full flex items-center justify-center font-bold text-sm">
                        3
                      </div>
                      <span className="ml-2 text-sm text-gray-400">Confirmation</span>
                    </div>
                  </div>
                </div>

                {/* Shipping Information */}
                <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 shadow-2xl">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-yellow-500 text-xl">
                      <div className="p-2 bg-yellow-500/10 rounded-lg">
                        <Truck size={24} />
                      </div>
                      INFORMATIONS DE LIVRAISON
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="flex items-center gap-2 text-sm font-bold">
                          <User size={16} className="text-yellow-500" />
                          Prénom *
                        </Label>
                        <Input
                          id="firstName"
                          required
                          value={shippingInfo.firstName}
                          onChange={(e) => handleInputChange("shipping", "firstName", e.target.value)}
                          className="bg-black/50 border-gray-600 text-famw-cream focus:border-yellow-500 focus:ring-yellow-500/20 transition-all duration-300"
                          placeholder="Votre prénom"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="flex items-center gap-2 text-sm font-bold">
                          <User size={16} className="text-yellow-500" />
                          Nom *
                        </Label>
                        <Input
                          id="lastName"
                          required
                          value={shippingInfo.lastName}
                          onChange={(e) => handleInputChange("shipping", "lastName", e.target.value)}
                          className="bg-black/50 border-gray-600 text-famw-cream focus:border-yellow-500 focus:ring-yellow-500/20 transition-all duration-300"
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2 text-sm font-bold">
                          <Mail size={16} className="text-yellow-500" />
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={shippingInfo.email}
                          onChange={(e) => handleInputChange("shipping", "email", e.target.value)}
                          className="bg-black/50 border-gray-600 text-famw-cream focus:border-yellow-500 focus:ring-yellow-500/20 transition-all duration-300"
                          placeholder="votre@email.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center gap-2 text-sm font-bold">
                          <Phone size={16} className="text-yellow-500" />
                          Téléphone *
                        </Label>
                        <Input
                          id="phone"
                          required
                          value={shippingInfo.phone}
                          onChange={(e) => handleInputChange("shipping", "phone", e.target.value)}
                          className="bg-black/50 border-gray-600 text-famw-cream focus:border-yellow-500 focus:ring-yellow-500/20 transition-all duration-300"
                          placeholder="+33 X XX XX XX XX"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address" className="flex items-center gap-2 text-sm font-bold">
                        <MapPin size={16} className="text-yellow-500" />
                        Adresse complète *
                      </Label>
                      <Input
                        id="address"
                        required
                        value={shippingInfo.address}
                        onChange={(e) => handleInputChange("shipping", "address", e.target.value)}
                        className="bg-black/50 border-gray-600 text-famw-cream focus:border-yellow-500 focus:ring-yellow-500/20 transition-all duration-300"
                        placeholder="123 Rue de la Meute"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="city" className="text-sm font-bold">
                          Ville *
                        </Label>
                        <Input
                          id="city"
                          required
                          value={shippingInfo.city}
                          onChange={(e) => handleInputChange("shipping", "city", e.target.value)}
                          className="bg-black/50 border-gray-600 text-famw-cream focus:border-yellow-500 focus:ring-yellow-500/20 transition-all duration-300"
                          placeholder="Paris"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postalCode" className="text-sm font-bold">
                          Code postal *
                        </Label>
                        <Input
                          id="postalCode"
                          required
                          value={shippingInfo.postalCode}
                          onChange={(e) => handleInputChange("shipping", "postalCode", e.target.value)}
                          className="bg-black/50 border-gray-600 text-famw-cream focus:border-yellow-500 focus:ring-yellow-500/20 transition-all duration-300"
                          placeholder="75001"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method Selection */}
                <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 shadow-2xl">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-yellow-500 text-xl">
                      <div className="p-2 bg-yellow-500/10 rounded-lg">
                        <CreditCard size={24} />
                      </div>
                      MÉTHODE DE PAIEMENT
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                      <div
                        className={`relative p-6 border-2 rounded-xl transition-all duration-300 cursor-pointer group hover:border-yellow-500/50 ${
                          paymentMethod === "card"
                            ? "border-yellow-500 bg-yellow-500/5"
                            : "border-gray-600 hover:bg-gray-800/50"
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <RadioGroupItem value="card" id="card" className="border-yellow-500 text-yellow-500" />
                          <Label htmlFor="card" className="flex items-center gap-4 cursor-pointer flex-1">
                            <div className="p-3 bg-blue-500/10 rounded-lg">
                              <CreditCard size={24} className="text-blue-400" />
                            </div>
                            <div>
                              <span className="font-bold text-lg">Carte bancaire</span>
                              <p className="text-gray-400 text-sm">Visa, Mastercard, American Express</p>
                            </div>
                          </Label>
                        </div>
                        {paymentMethod === "card" && (
                          <div className="absolute top-4 right-4">
                            <CheckCircle className="text-yellow-500" size={20} />
                          </div>
                        )}
                      </div>

                      <div
                        className={`relative p-6 border-2 rounded-xl transition-all duration-300 cursor-pointer group hover:border-yellow-500/50 ${
                          paymentMethod === "paypal"
                            ? "border-yellow-500 bg-yellow-500/5"
                            : "border-gray-600 hover:bg-gray-800/50"
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <RadioGroupItem value="paypal" id="paypal" className="border-yellow-500 text-yellow-500" />
                          <Label htmlFor="paypal" className="flex items-center gap-4 cursor-pointer flex-1">
                            <div className="p-3 bg-blue-600/10 rounded-lg">
                              <DollarSign size={24} className="text-blue-500" />
                            </div>
                            <div>
                              <span className="font-bold text-lg">PayPal</span>
                              <p className="text-gray-400 text-sm">Paiement sécurisé via PayPal</p>
                            </div>
                          </Label>
                        </div>
                        {paymentMethod === "paypal" && (
                          <div className="absolute top-4 right-4">
                            <CheckCircle className="text-yellow-500" size={20} />
                          </div>
                        )}
                      </div>

                      <div
                        className={`relative p-6 border-2 rounded-xl transition-all duration-300 cursor-pointer group hover:border-yellow-500/50 ${
                          paymentMethod === "airtel"
                            ? "border-yellow-500 bg-yellow-500/5"
                            : "border-gray-600 hover:bg-gray-800/50"
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <RadioGroupItem value="airtel" id="airtel" className="border-yellow-500 text-yellow-500" />
                          <Label htmlFor="airtel" className="flex items-center gap-4 cursor-pointer flex-1">
                            <div className="p-3 bg-red-500/10 rounded-lg">
                              <Smartphone size={24} className="text-red-400" />
                            </div>
                            <div>
                              <span className="font-bold text-lg">Airtel Money</span>
                              <p className="text-gray-400 text-sm">Paiement mobile sécurisé</p>
                            </div>
                          </Label>
                        </div>
                        {paymentMethod === "airtel" && (
                          <div className="absolute top-4 right-4">
                            <CheckCircle className="text-yellow-500" size={20} />
                          </div>
                        )}
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Payment Details */}
                <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 shadow-2xl">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-yellow-500 text-xl">
                      <div className="p-2 bg-yellow-500/10 rounded-lg">
                        <Shield size={24} />
                      </div>
                      DÉTAILS DE PAIEMENT
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {paymentMethod === "card" && (
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="cardName" className="text-sm font-bold">
                            Nom du titulaire *
                          </Label>
                          <Input
                            id="cardName"
                            required
                            value={paymentInfo.cardName}
                            onChange={(e) => handleInputChange("payment", "cardName", e.target.value)}
                            className="bg-black/50 border-gray-600 text-famw-cream focus:border-yellow-500 focus:ring-yellow-500/20 transition-all duration-300"
                            placeholder="Nom complet"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber" className="text-sm font-bold">
                            Numéro de carte *
                          </Label>
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            required
                            value={paymentInfo.cardNumber}
                            onChange={(e) => handleInputChange("payment", "cardNumber", e.target.value)}
                            className="bg-black/50 border-gray-600 text-famw-cream focus:border-yellow-500 focus:ring-yellow-500/20 transition-all duration-300"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="expiryDate" className="text-sm font-bold">
                              Date d'expiration *
                            </Label>
                            <Input
                              id="expiryDate"
                              placeholder="MM/YY"
                              required
                              value={paymentInfo.expiryDate}
                              onChange={(e) => handleInputChange("payment", "expiryDate", e.target.value)}
                              className="bg-black/50 border-gray-600 text-famw-cream focus:border-yellow-500 focus:ring-yellow-500/20 transition-all duration-300"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv" className="text-sm font-bold">
                              Code CVV *
                            </Label>
                            <Input
                              id="cvv"
                              placeholder="123"
                              required
                              value={paymentInfo.cvv}
                              onChange={(e) => handleInputChange("payment", "cvv", e.target.value)}
                              className="bg-black/50 border-gray-600 text-famw-cream focus:border-yellow-500 focus:ring-yellow-500/20 transition-all duration-300"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === "paypal" && (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="paypalEmail" className="text-sm font-bold">
                            Email PayPal *
                          </Label>
                          <Input
                            id="paypalEmail"
                            type="email"
                            required
                            value={paymentInfo.paypalEmail}
                            onChange={(e) => handleInputChange("payment", "paypalEmail", e.target.value)}
                            className="bg-black/50 border-gray-600 text-famw-cream focus:border-yellow-500 focus:ring-yellow-500/20 transition-all duration-300"
                            placeholder="votre@email.com"
                          />
                        </div>
                        <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                          <p className="text-blue-400 text-sm flex items-center gap-2">
                            <DollarSign size={16} />
                            Vous serez redirigé vers PayPal pour finaliser le paiement de manière sécurisée
                          </p>
                        </div>
                      </div>
                    )}

                    {paymentMethod === "airtel" && (
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="airtelNumber" className="text-sm font-bold">
                            Numéro Airtel Money *
                          </Label>
                          <Input
                            id="airtelNumber"
                            placeholder="+243 XXX XXX XXX"
                            required
                            value={paymentInfo.airtelNumber}
                            onChange={(e) => handleInputChange("payment", "airtelNumber", e.target.value)}
                            className="bg-black/50 border-gray-600 text-famw-cream focus:border-yellow-500 focus:ring-yellow-500/20 transition-all duration-300"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="airtelPin" className="text-sm font-bold">
                            Code PIN *
                          </Label>
                          <Input
                            id="airtelPin"
                            type="password"
                            placeholder="****"
                            required
                            value={paymentInfo.airtelPin}
                            onChange={(e) => handleInputChange("payment", "airtelPin", e.target.value)}
                            className="bg-black/50 border-gray-600 text-famw-cream focus:border-yellow-500 focus:ring-yellow-500/20 transition-all duration-300"
                          />
                        </div>
                        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                          <p className="text-red-400 text-sm flex items-center gap-2">
                            <Smartphone size={16} />
                            Votre paiement sera traité via Airtel Money de manière sécurisée
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Order Summary */}
              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 shadow-2xl sticky top-24">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-yellow-500 text-xl">
                      <div className="p-2 bg-yellow-500/10 rounded-lg">
                        <Package size={24} />
                      </div>
                      VOTRE COMMANDE
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4 max-h-64 overflow-y-auto">
                      {cartItemsWithProducts.map((item) => {
                        if (!item.product) return null
                        return (
                          <div
                            key={`${item.productId}-${item.size}-${item.color}`}
                            className="flex gap-4 p-3 bg-black/30 rounded-lg"
                          >
                            <div className="relative w-16 h-16 bg-white rounded overflow-hidden flex-shrink-0">
                              <Image
                                src={item.product.image || "/placeholder.svg?height=64&width=64"}
                                alt={item.product.name}
                                fill
                                className="object-contain p-1"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-sm">{item.product.name}</h4>
                              <p className="text-gray-400 text-xs">
                                {item.size} | {item.color} | Qty: {item.quantity}
                              </p>
                              <p className="text-yellow-500 font-bold text-sm">{item.product.price}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    <Separator className="bg-gray-600" />

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Sous-total</span>
                        <span>{subtotal.toFixed(2)}€</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Livraison</span>
                        <span>{shipping === 0 ? "Gratuite" : `${shipping.toFixed(2)}€`}</span>
                      </div>
                      {shipping === 0 && (
                        <div className="flex items-center gap-2 text-green-500 text-sm">
                          <CheckCircle size={16} />
                          <span>Livraison gratuite dès 100€</span>
                        </div>
                      )}
                      <Separator className="bg-gray-600" />
                      <div className="flex justify-between font-bold text-xl">
                        <span>Total</span>
                        <span className="text-yellow-500">{total.toFixed(2)}€</span>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black hover:from-yellow-600 hover:to-yellow-500 font-bold py-4 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
                    >
                      {isProcessing ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                          TRAITEMENT...
                        </div>
                      ) : (
                        `PAYER ${total.toFixed(2)}€`
                      )}
                    </Button>

                    <div className="text-center space-y-2">
                      <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                        <Lock size={14} />
                        <span>Paiement 100% sécurisé SSL</span>
                      </div>
                      <p className="text-xs text-gray-500">Vos données sont protégées et chiffrées</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-4 text-yellow-500 flex items-center gap-2">
                      <Shield size={20} />
                      GARANTIES FAMW
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-300">
                      <li className="flex items-center gap-3">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        <span>Livraison gratuite dès 100€</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        <span>Retours gratuits sous 30 jours</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        <span>Paiement 100% sécurisé</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        <span>Service client premium 24/7</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
