import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/layout/page-header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-black text-famw-cream">
      <Navigation />
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageHeader title="MENTIONS LÉGALES" subtitle="Informations légales FAMW" />

          <div className="space-y-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-yellow-500">1. ÉDITEUR DU SITE</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-bold text-famw-cream mb-2">FAMW SAS</h4>
                  <p>Société par Actions Simplifiée au capital de 50 000€</p>
                  <p>RCS Paris : 123 456 789</p>
                  <p>SIRET : 123 456 789 00012</p>
                  <p>TVA Intracommunautaire : FR12 123456789</p>
                </div>
                <div>
                  <h4 className="font-bold text-famw-cream mb-2">Siège social :</h4>
                  <p>123 Rue de la Meute</p>
                  <p>75001 Paris, France</p>
                </div>
                <div>
                  <h4 className="font-bold text-famw-cream mb-2">Contact :</h4>
                  <p>Téléphone : +33 1 23 45 67 89</p>
                  <p>Email : contact@famw.com</p>
                </div>
                <div>
                  <h4 className="font-bold text-famw-cream mb-2">Directeur de publication :</h4>
                  <p>M. Alexandre WOLF, Président</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-yellow-500">2. HÉBERGEMENT</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-bold text-famw-cream mb-2">Vercel Inc.</h4>
                  <p>340 S Lemon Ave #4133</p>
                  <p>Walnut, CA 91789, États-Unis</p>
                  <p>Site web : https://vercel.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-yellow-500">3. PROPRIÉTÉ INTELLECTUELLE</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p>
                  L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, etc.) est la propriété
                  exclusive de FAMW SAS ou de ses partenaires.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des
                  éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation
                  écrite préalable de FAMW SAS.
                </p>
                <div>
                  <h4 className="font-bold text-famw-cream mb-2">Marques déposées :</h4>
                  <ul className="space-y-1">
                    <li>• FAMW® - Marque déposée INPI n°123456789</li>
                    <li>• "For All My Wolves"® - Marque déposée INPI n°987654321</li>
                    <li>• Logo FAMW® - Marque déposée INPI n°456789123</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-yellow-500">4. CONDITIONS D'UTILISATION</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p>
                  L'utilisation de ce site implique l'acceptation pleine et entière des conditions générales
                  d'utilisation décrites ci-après.
                </p>
                <div>
                  <h4 className="font-bold text-famw-cream mb-2">L'utilisateur s'engage à :</h4>
                  <ul className="space-y-1">
                    <li>• Utiliser le site conformément à sa destination</li>
                    <li>• Ne pas porter atteinte à l'ordre public et aux bonnes mœurs</li>
                    <li>• Respecter les droits de propriété intellectuelle</li>
                    <li>• Ne pas introduire de virus ou programmes malveillants</li>
                    <li>• Fournir des informations exactes lors de l'inscription</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-yellow-500">5. RESPONSABILITÉ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p>
                  FAMW SAS met tout en œuvre pour offrir aux utilisateurs des informations et/ou des outils disponibles
                  et vérifiés, mais ne saurait être tenue pour responsable des erreurs, d'une absence de disponibilité
                  des informations et/ou de la présence de virus sur son site.
                </p>
                <div>
                  <h4 className="font-bold text-famw-cream mb-2">Limitations de responsabilité :</h4>
                  <ul className="space-y-1">
                    <li>• Interruptions temporaires du service</li>
                    <li>• Erreurs ou omissions dans le contenu</li>
                    <li>• Dommages résultant de l'utilisation du site</li>
                    <li>• Actes de tiers (piratage, virus, etc.)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-yellow-500">6. DROIT APPLICABLE</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p>
                  Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux
                  français seront seuls compétents.
                </p>
                <div>
                  <h4 className="font-bold text-famw-cream mb-2">Médiation :</h4>
                  <p>
                    Conformément à l'article L.616-1 du Code de la consommation, nous proposons un dispositif de
                    médiation de la consommation. L'entité de médiation retenue est :
                  </p>
                  <p className="mt-2">
                    <strong>CNPM - MÉDIATION DE LA CONSOMMATION</strong>
                    <br />
                    27 avenue de la libération
                    <br />
                    42400 Saint-Chamond
                    <br />
                    <a href="https://cnpm-mediation-consommation.eu" className="text-yellow-500 hover:underline">
                      cnpm-mediation-consommation.eu
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-yellow-500">7. CONTACT</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p>Pour toute question concernant ces mentions légales, vous pouvez nous contacter :</p>
                <div className="space-y-2">
                  <p>
                    Email :{" "}
                    <a href="mailto:legal@famw.com" className="text-yellow-500 hover:underline">
                      legal@famw.com
                    </a>
                  </p>
                  <p>
                    Téléphone :{" "}
                    <a href="tel:+33123456789" className="text-yellow-500 hover:underline">
                      +33 1 23 45 67 89
                    </a>
                  </p>
                  <p>Courrier : FAMW SAS - Service Juridique - 123 Rue de la Meute, 75001 Paris</p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center p-8 bg-gray-900 rounded-lg">
              <p className="text-gray-500 text-sm">
                Dernière mise à jour des mentions légales : {new Date().toLocaleDateString("fr-FR")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
