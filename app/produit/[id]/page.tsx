"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Minus, Plus, Heart, Share2 } from "lucide-react"
import { useProducts } from "@/hooks/useProducts"
import { useCart } from "@/hooks/useCart"

export default function ProductPage() {
  const params = useParams()
  const productId = Number.parseInt(params.id as string)
  const { getProductById } = useProducts()
  const { addToCart } = useCart()

  const product = getProductById(productId)

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-famw-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Produit non trouvé</h1>
          <p className="text-gray-400">Le produit que vous recherchez n'existe pas.</p>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) return

    addToCart({
      productId: product.id,
      quantity,
      size: selectedSize,
      color: selectedColor,
    })

    // Ajouter une alerte pour confirmer l'ajout au panier
    alert(`${product.name} ajouté au panier !`)

    // Reset selections
    setSelectedSize("")
    setSelectedColor("")
    setQuantity(1)
  }

  return (
    <div className="min-h-screen bg-black text-famw-cream">
      <Navigation />

      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-white rounded-lg overflow-hidden">
                <Image
                  src={product.images?.[selectedImage] || product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                />
                {product.isNew && (
                  <div className="absolute top-4 right-4 bg-black text-famw-cream px-3 py-1 text-xs font-bold">NEW</div>
                )}
                {product.isBestseller && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 text-xs font-bold">
                    BESTSELLER
                  </div>
                )}
              </div>

              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative aspect-square bg-white rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === index ? "border-yellow-500" : "border-gray-700 hover:border-gray-600"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} ${index + 1}`}
                        fill
                        className="object-contain p-2"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                <p className="text-3xl text-yellow-500 font-bold mb-6">{product.price}</p>
                <p className="text-gray-300 text-lg leading-relaxed">{product.description}</p>
              </div>

              {/* Color Selection */}
              {product.colors && (
                <div>
                  <h3 className="text-lg font-bold mb-4">COULEUR</h3>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 border rounded-lg font-bold transition-all duration-300 ${
                          selectedColor === color
                            ? "border-yellow-500 text-yellow-500"
                            : "border-gray-600 text-gray-300 hover:border-gray-500"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes && (
                <div>
                  <h3 className="text-lg font-bold mb-4">TAILLE</h3>
                  <div className="flex gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 border rounded-lg font-bold transition-all duration-300 ${
                          selectedSize === size
                            ? "border-yellow-500 text-yellow-500"
                            : "border-gray-600 text-gray-300 hover:border-gray-500"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <h3 className="text-lg font-bold mb-4">QUANTITÉ</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center hover:border-yellow-500 transition-colors duration-300"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="text-xl font-bold w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center hover:border-yellow-500 transition-colors duration-300"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <Button
                  onClick={handleAddToCart}
                  className="w-full bg-yellow-500 text-black hover:bg-yellow-600 font-bold py-4 text-lg transition-all duration-300 hover:scale-105"
                  disabled={!selectedSize || !selectedColor}
                >
                  AJOUTER AU PANIER
                </Button>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="flex-1 border-gray-600 text-gray-300 hover:border-yellow-500 hover:text-yellow-500"
                  >
                    <Heart size={20} className="mr-2" />
                    FAVORIS
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-gray-600 text-gray-300 hover:border-yellow-500 hover:text-yellow-500"
                  >
                    <Share2 size={20} className="mr-2" />
                    PARTAGER
                  </Button>
                </div>
              </div>

              {/* Product Details */}
              {product.details && (
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 text-yellow-500">DÉTAILS</h3>
                    <ul className="space-y-2 text-gray-300">
                      {product.details.map((detail, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
