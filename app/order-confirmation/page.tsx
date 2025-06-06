"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { CheckCircle, Package, Truck, Mail, Download } from "lucide-react"

interface OrderDetails {
  orderId: string
  status: string
  total: number
  paymentMethod: string
  estimatedDelivery: string
  trackingNumber?: string
}

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("orderId")
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null)

  useEffect(() => {
    if (orderId) {
      // Simulate fetching order details
      setOrderDetails({
        orderId,
        status: "confirmed",
        total: 189.99,
        paymentMethod: "Carte bancaire",
        estimatedDelivery: "3-5 jours ouvrés",
        trackingNumber: `FAMW${orderId.slice(-6).toUpperCase()}`,
      })
    }
  }, [orderId])

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-black text-famw-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Commande introuvable</h1>
          <p className="text-gray-400 mb-8">Impossible de trouver les détails de cette commande.</p>
          <Button asChild className="bg-yellow-500 text-black hover:bg-yellow-600">
            <Link href="/">Retour à l'accueil</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-famw-cream">
      <Navigation />
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <CheckCircle size={80} className="mx-auto mb-6 text-green-500" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">COMMANDE CONFIRMÉE</h1>
            <p className="text-gray-400 text-lg">Merci pour votre achat chez FAMW</p>
            <div className="text-4xl mt-6">🐺</div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-yellow-500">
                  <Package size={24} />
                  DÉTAILS DE LA COMMANDE
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Numéro de commande</span>
                  <span className="font-bold">#{orderDetails.orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Statut</span>
                  <span className="text-green-500 font-bold">Confirmée</span>
                </div>
                <div className="flex justify-between">
                  <span>Total payé</span>
                  <span className="font-bold text-yellow-500">{orderDetails.total.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between">
                  <span>Méthode de paiement</span>
                  <span>{orderDetails.paymentMethod}</span>
                </div>
                {orderDetails.trackingNumber && (
                  <div className="flex justify-between">
                    <span>Numéro de suivi</span>
                    <span className="font-bold">{orderDetails.trackingNumber}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-yellow-500">
                  <Truck size={24} />
                  LIVRAISON
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Délai estimé</span>
                  <span className="font-bold">{orderDetails.estimatedDelivery}</span>
                </div>
                <div className="text-sm text-gray-400">
                  <p>Votre commande sera préparée avec soin dans nos ateliers.</p>
                  <p className="mt-2">Un email de suivi vous sera envoyé dès l'expédition.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Next Steps */}
          <Card className="bg-gray-900 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="text-yellow-500">PROCHAINES ÉTAPES</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Mail className="mx-auto mb-4 text-yellow-500" size={32} />
                  <h3 className="font-bold mb-2">1. Confirmation par email</h3>
                  <p className="text-gray-400 text-sm">
                    Vous recevrez un email de confirmation avec tous les détails de votre commande.
                  </p>
                </div>
                <div className="text-center">
                  <Package className="mx-auto mb-4 text-yellow-500" size={32} />
                  <h3 className="font-bold mb-2">2. Préparation</h3>
                  <p className="text-gray-400 text-sm">
                    Votre commande sera préparée avec soin dans nos ateliers sous 24-48h.
                  </p>
                </div>
                <div className="text-center">
                  <Truck className="mx-auto mb-4 text-yellow-500" size={32} />
                  <h3 className="font-bold mb-2">3. Expédition</h3>
                  <p className="text-gray-400 text-sm">
                    Vous recevrez un email avec le numéro de suivi dès l'expédition.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-yellow-500 text-black hover:bg-yellow-600 font-bold px-8 py-3">
              <Link href="/produits">CONTINUER LES ACHATS</Link>
            </Button>
            <Button
              variant="outline"
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold px-8 py-3"
            >
              <Download size={20} className="mr-2" />
              TÉLÉCHARGER LA FACTURE
            </Button>
          </div>

          {/* Support */}
          <div className="mt-12 text-center p-8 bg-gray-900 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Besoin d'aide ?</h3>
            <p className="text-gray-400 mb-6">Notre équipe est là pour vous accompagner</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="outline"
                className="border-gray-600 text-gray-300 hover:border-yellow-500 hover:text-yellow-500"
              >
                <Link href="/contact">NOUS CONTACTER</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-gray-600 text-gray-300 hover:border-yellow-500 hover:text-yellow-500"
              >
                <Link href="/faq">CONSULTER LA FAQ</Link>
              </Button>
            </div>
          </div>

          {/* Brand Message */}
          <div className="mt-12 text-center p-8 bg-gray-900 rounded-lg">
            <div className="text-3xl mb-4">🐺</div>
            <p className="font-serif text-gray-300 mb-2">"Bienvenue dans la meute"</p>
            <p className="text-yellow-500 font-bold">For all my Wolves = FAMW</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
