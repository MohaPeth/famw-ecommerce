import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/layout/page-header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Package, Clock, RefreshCw, Shield } from "lucide-react"

export default function RetoursPage() {
  return (
    <div className="min-h-screen bg-black text-famw-cream">
      <Navigation />
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageHeader title="RETOURS & ÉCHANGES" subtitle="Politique de retour FAMW" />

          {/* Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gray-900 border-gray-800 text-center">
              <CardContent className="p-6">
                <Clock className="mx-auto mb-4 text-yellow-500" size={32} />
                <h3 className="font-bold mb-2">30 jours</h3>
                <p className="text-gray-400 text-sm">pour retourner vos articles</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800 text-center">
              <CardContent className="p-6">
                <Package className="mx-auto mb-4 text-yellow-500" size={32} />
                <h3 className="font-bold mb-2">Retour gratuit</h3>
                <p className="text-gray-400 text-sm">étiquette prépayée fournie</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800 text-center">
              <CardContent className="p-6">
                <RefreshCw className="mx-auto mb-4 text-yellow-500" size={32} />
                <h3 className="font-bold mb-2">Échange facile</h3>
                <p className="text-gray-400 text-sm">changement de taille ou modèle</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800 text-center">
              <CardContent className="p-6">
                <Shield className="mx-auto mb-4 text-yellow-500" size={32} />
                <h3 className="font-bold mb-2">Remboursement</h3>
                <p className="text-gray-400 text-sm">sous 5-7 jours ouvrés</p>
              </CardContent>
            </Card>
          </div>

          {/* Conditions */}
          <Card className="bg-gray-900 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="text-yellow-500">CONDITIONS DE RETOUR</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">Articles éligibles</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Articles dans leur état d'origine</li>
                  <li>• Étiquettes attachées et non endommagées</li>
                  <li>• Emballage d'origine conservé</li>
                  <li>• Aucune trace d'usure ou d'odeur</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Articles non éligibles</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Articles personnalisés ou sur-mesure</li>
                  <li>• Articles soldés ou en promotion spéciale</li>
                  <li>• Articles portés ou lavés</li>
                  <li>• Articles retournés après 30 jours</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Process */}
          <Card className="bg-gray-900 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="text-yellow-500">PROCÉDURE DE RETOUR</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Contactez-nous</h4>
                    <p className="text-gray-300">
                      Envoyez un email à{" "}
                      <a href="mailto:retours@famw.com" className="text-yellow-500 hover:underline">
                        retours@famw.com
                      </a>{" "}
                      avec votre numéro de commande et le motif du retour.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Recevez l'étiquette</h4>
                    <p className="text-gray-300">
                      Nous vous envoyons une étiquette de retour prépayée par email sous 24h.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Préparez le colis</h4>
                    <p className="text-gray-300">
                      Emballez l'article dans son emballage d'origine avec tous les accessoires et étiquettes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Expédiez</h4>
                    <p className="text-gray-300">
                      Collez l'étiquette sur le colis et déposez-le dans un point relais ou bureau de poste.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Remboursement</h4>
                    <p className="text-gray-300">
                      Dès réception et vérification, nous procédons au remboursement sous 5-7 jours ouvrés.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <div className="text-center p-8 bg-gray-900 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Besoin d'aide ?</h3>
            <p className="text-gray-400 mb-6">Notre équipe est disponible pour vous accompagner</p>
            <div className="space-y-2 text-sm">
              <p>
                Email:{" "}
                <a href="mailto:retours@famw.com" className="text-yellow-500 hover:underline">
                  retours@famw.com
                </a>
              </p>
              <p>
                Téléphone:{" "}
                <a href="tel:+33123456789" className="text-yellow-500 hover:underline">
                  +33 1 23 45 67 89
                </a>
              </p>
              <p className="text-gray-500">Lundi - Vendredi: 9h - 18h</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
