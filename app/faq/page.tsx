"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/layout/page-header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqData = [
  {
    category: "Commandes",
    questions: [
      {
        question: "Comment passer une commande ?",
        answer:
          "Ajoutez vos articles au panier, sélectionnez votre taille et couleur, puis procédez au paiement. Nous acceptons les cartes bancaires, PayPal et Apple Pay.",
      },
      {
        question: "Puis-je modifier ma commande après validation ?",
        answer:
          "Vous disposez de 2 heures après validation pour modifier votre commande en nous contactant. Passé ce délai, la commande est en préparation.",
      },
      {
        question: "Comment suivre ma commande ?",
        answer:
          "Un email de confirmation avec un numéro de suivi vous sera envoyé dès l'expédition. Vous pourrez suivre votre colis en temps réel.",
      },
    ],
  },
  {
    category: "Livraison",
    questions: [
      {
        question: "Quels sont les délais de livraison ?",
        answer:
          "2-3 jours ouvrés en France métropolitaine, 5-7 jours en Europe. Livraison express disponible en 24h pour la France.",
      },
      {
        question: "La livraison est-elle gratuite ?",
        answer:
          "Livraison gratuite dès 100€ d'achat en France métropolitaine. Sinon, 9,99€ pour la livraison standard.",
      },
      {
        question: "Livrez-vous à l'international ?",
        answer:
          "Oui, nous livrons dans toute l'Europe. Les frais et délais varient selon la destination. Contactez-nous pour plus d'informations.",
      },
    ],
  },
  {
    category: "Produits",
    questions: [
      {
        question: "Comment choisir ma taille ?",
        answer:
          "Consultez notre guide des tailles disponible sur chaque fiche produit. Nos t-shirts ont une coupe droite unisexe. En cas de doute, contactez-nous.",
      },
      {
        question: "Quelle est la composition des t-shirts ?",
        answer:
          "Nos t-shirts sont en 100% coton biologique, grammage 180g/m². Sérigraphie haute qualité résistante aux lavages.",
      },
      {
        question: "Comment entretenir mes vêtements FAMW ?",
        answer:
          "Lavage à 30°C maximum, séchage à l'air libre recommandé. Repassage à basse température sur l'envers pour préserver les impressions.",
      },
    ],
  },
  {
    category: "Retours",
    questions: [
      {
        question: "Puis-je retourner un article ?",
        answer: "Oui, retours gratuits sous 30 jours. L'article doit être dans son état d'origine avec les étiquettes.",
      },
      {
        question: "Comment procéder à un retour ?",
        answer:
          "Contactez notre service client pour obtenir une étiquette de retour gratuite. Remboursement sous 5-7 jours après réception.",
      },
      {
        question: "Puis-je échanger un article ?",
        answer:
          "Les échanges sont possibles sous 30 jours. Contactez-nous pour organiser l'échange de taille ou de modèle.",
      },
    ],
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-black text-famw-cream">
      <Navigation />
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageHeader title="FAQ" subtitle="Questions fréquemment posées" />

          <div className="space-y-8">
            {faqData.map((category, categoryIndex) => (
              <div key={category.category}>
                <h2 className="text-2xl font-bold mb-6 text-yellow-500">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((item, questionIndex) => {
                    const itemId = `${categoryIndex}-${questionIndex}`
                    const isOpen = openItems.includes(itemId)

                    return (
                      <Card key={itemId} className="bg-gray-900 border-gray-800">
                        <CardContent className="p-0">
                          <button
                            onClick={() => toggleItem(itemId)}
                            className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-800 transition-colors"
                          >
                            <span className="font-bold text-lg">{item.question}</span>
                            {isOpen ? (
                              <ChevronUp className="text-yellow-500 flex-shrink-0" size={24} />
                            ) : (
                              <ChevronDown className="text-yellow-500 flex-shrink-0" size={24} />
                            )}
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-6">
                              <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center p-8 bg-gray-900 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Vous ne trouvez pas votre réponse ?</h3>
            <p className="text-gray-400 mb-6">Notre équipe est là pour vous aider</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@famw.com"
                className="bg-yellow-500 text-black px-6 py-3 rounded font-bold hover:bg-yellow-600 transition-colors"
              >
                Nous contacter
              </a>
              <a
                href="/contact"
                className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded font-bold hover:bg-yellow-500 hover:text-black transition-colors"
              >
                Formulaire de contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
