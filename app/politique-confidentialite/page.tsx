import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/layout/page-header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-black text-famw-cream">
      <Navigation />
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageHeader title="POLITIQUE DE CONFIDENTIALITÉ" subtitle="Protection de vos données personnelles" />

          <div className="space-y-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-yellow-500">1. COLLECTE DES DONNÉES</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p>
                  FAMW collecte vos données personnelles dans le cadre de la gestion de votre compte client, du
                  traitement de vos commandes et de l'amélioration de nos services.
                </p>
                <div>
                  <h4 className="font-bold text-famw-cream mb-2">Données collectées :</h4>
                  <ul className="space-y-1">
                    <li>• Informations d'identification (nom, prénom, email)</li>
                    <li>• Adresses de livraison et facturation</li>
                    <li>• Historique des commandes et préférences</li>
                    <li>• Données de navigation (cookies, adresse IP)</li>
                    <li>• Communications avec notre service client</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-yellow-500">2. UTILISATION DES DONNÉES</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-bold text-famw-cream mb-2">Vos données sont utilisées pour :</h4>
                  <ul className="space-y-1">
                    <li>• Traiter et livrer vos commandes</li>
                    <li>• Gérer votre compte client</li>
                    <li>• Vous contacter concernant vos commandes</li>
                    <li>• Améliorer notre site et nos services</li>
                    <li>• Vous envoyer nos newsletters (avec votre consentement)</li>
                    <li>• Respecter nos obligations légales</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-yellow-500">3. PARTAGE DES DONNÉES</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p>
                  FAMW ne vend, ne loue ni ne partage vos données personnelles avec des tiers, sauf dans les cas
                  suivants :
                </p>
                <ul className="space-y-1">
                  <li>• Prestataires de services (livraison, paiement, hébergement)</li>
                  <li>• Obligations légales ou réglementaires</li>
                  <li>• Protection de nos droits et sécurité</li>
                  <li>• Avec votre consentement explicite</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-yellow-500">4. SÉCURITÉ DES DONNÉES</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p>
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos
                  données personnelles :
                </p>
                <ul className="space-y-1">
                  <li>• Chiffrement SSL pour toutes les transactions</li>
                  <li>• Serveurs sécurisés et sauvegardés</li>
                  <li>• Accès limité aux données personnelles</li>
                  <li>• Formation du personnel à la protection des données</li>
                  <li>• Audits de sécurité réguliers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-yellow-500">5. VOS DROITS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-famw-cream mb-2">Droit d'accès</h4>
                    <p className="text-sm">Connaître les données que nous détenons sur vous</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-famw-cream mb-2">Droit de rectification</h4>
                    <p className="text-sm">Corriger vos données inexactes</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-famw-cream mb-2">Droit d'effacement</h4>
                    <p className="text-sm">Demander la suppression de vos données</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-famw-cream mb-2">Droit d'opposition</h4>
                    <p className="text-sm">Vous opposer au traitement de vos données</p>
                  </div>
                </div>
                <p className="text-sm">
                  Pour exercer vos droits, contactez-nous à :
                  <a href="mailto:privacy@famw.com" className="text-yellow-500 hover:underline ml-1">
                    privacy@famw.com
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-yellow-500">6. COOKIES</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p>Notre site utilise des cookies pour améliorer votre expérience de navigation :</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-famw-cream">Cookies essentiels</h4>
                    <p className="text-sm">Nécessaires au fonctionnement du site (panier, connexion)</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-famw-cream">Cookies analytiques</h4>
                    <p className="text-sm">Mesure d'audience et amélioration du site</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-famw-cream">Cookies marketing</h4>
                    <p className="text-sm">Personnalisation des publicités (avec votre consentement)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-yellow-500">7. CONSERVATION DES DONNÉES</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p>Nous conservons vos données personnelles pendant les durées suivantes :</p>
                <ul className="space-y-1">
                  <li>• Données de compte : jusqu'à suppression de votre compte</li>
                  <li>• Données de commande : 10 ans (obligations comptables)</li>
                  <li>• Données marketing : 3 ans après le dernier contact</li>
                  <li>• Cookies : 13 mois maximum</li>
                </ul>
              </CardContent>
            </Card>

            <div className="text-center p-8 bg-gray-900 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Questions sur la confidentialité ?</h3>
              <p className="text-gray-400 mb-6">Notre délégué à la protection des données est à votre disposition</p>
              <div className="space-y-2 text-sm">
                <p>
                  Email:{" "}
                  <a href="mailto:privacy@famw.com" className="text-yellow-500 hover:underline">
                    privacy@famw.com
                  </a>
                </p>
                <p className="text-gray-500">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
