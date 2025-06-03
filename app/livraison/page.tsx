import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/layout/page-header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Truck, Clock, MapPin, Package } from "lucide-react"

export default function LivraisonPage() {
  return (
    <div className="min-h-screen bg-black text-famw-cream">
      <Navigation />
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageHeader title="LIVRAISON" subtitle="Informations de livraison FAMW" />

          {/* Shipping Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-yellow-500">
                  <Truck size={24} />
                  Livraison Standard
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>France métropolitaine</span>
                  <span className="font-bold">2-3 jours</span>
                </div>
                <div className="flex justify-between">
                  <span>Prix</span>
                  <span className="font-bold">9,99€</span>
                </div>
                <div className="text-green-500 text-sm">✓ Gratuite d��s 100€ d'achat</div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-yellow-500">
                  <Clock size={24} />
                  Livraison Express
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>France métropolitaine</span>
                  <span className="font-bold">24h</span>
                </div>
                <div className="flex justify-between">
                  <span>Prix</span>
                  <span className="font-bold">19,99€</span>
                </div>
                <div className="text-blue-400 text-sm">⚡ Commande avant 14h = livraison le lendemain</div>
              </CardContent>
            </Card>
          </div>

          {/* International Shipping */}
          <Card className="bg-gray-900 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="text-yellow-500">LIVRAISON INTERNATIONALE</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3">Zone</th>
                      <th className="text-left py-3">Délai</th>
                      <th className="text-left py-3">Prix</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-800">
                      <td className="py-3">Union Européenne</td>
                      <td className="py-3">5-7 jours</td>
                      <td className="py-3">14,99€</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3">Suisse, Norvège</td>
                      <td className="py-3">7-10 jours</td>
                      <td className="py-3">19,99€</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3">Royaume-Uni</td>
                      <td className="py-3">7-10 jours</td>
                      <td className="py-3">24,99€</td>
                    </tr>
                    <tr>
                      <td className="py-3">Reste du monde</td>
                      <td className="py-3">10-15 jours</td>
                      <td className="py-3">Sur devis</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                * Les délais sont donnés à titre indicatif et peuvent varier selon les conditions douanières.
              </p>
            </CardContent>
          </Card>

          {/* Shipping Process */}
          <Card className="bg-gray-900 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="text-yellow-500">PROCESSUS DE LIVRAISON</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Préparation</h4>
                    <p className="text-gray-300">
                      Votre commande est préparée avec soin dans nos ateliers sous 24-48h.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Expédition</h4>
                    <p className="text-gray-300">
                      Votre colis est expédié et vous recevez un email avec le numéro de suivi.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Suivi</h4>
                    <p className="text-gray-300">Suivez votre colis en temps réel grâce au lien de suivi fourni.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Livraison</h4>
                    <p className="text-gray-300">
                      Réception de votre commande à l'adresse indiquée ou en point relais.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-yellow-500">
                  <Package size={24} />
                  Emballage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-gray-300">
                <p>• Emballage soigné et écologique</p>
                <p>• Protection optimale de vos articles</p>
                <p>• Matériaux recyclables</p>
                <p>• Packaging aux couleurs FAMW</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-yellow-500">
                  <MapPin size={24} />
                  Points relais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-gray-300">
                <p>• Plus de 6000 points relais en France</p>
                <p>• Retrait sous 14 jours</p>
                <p>• Horaires étendus</p>
                <p>• Notification SMS/email</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact */}
          <div className="mt-12 text-center p-8 bg-gray-900 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Questions sur votre livraison ?</h3>
            <p className="text-gray-400 mb-6">Notre équipe logistique est à votre disposition</p>
            <div className="space-y-2 text-sm">
              <p>
                Email:{" "}
                <a href="mailto:livraison@famw.com" className="text-yellow-500 hover:underline">
                  livraison@famw.com
                </a>
              </p>
              <p>
                Téléphone:{" "}
                <a href="tel:+33123456789" className="text-yellow-500 hover:underline">
                  +33 1 23 45 67 89
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
