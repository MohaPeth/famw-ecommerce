import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-black text-famw-cream">
      <Navigation />

      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">À PROPOS</h1>
            <div className="text-6xl mb-8">🐺</div>
            <p className="text-yellow-500 text-2xl font-bold">For all my Wolves = FAMW</p>
          </div>

          {/* Brand Story */}
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">NOTRE HISTOIRE</h2>
              <div className="space-y-6 text-lg leading-relaxed font-serif text-gray-300">
                <p>
                  Ce n'est pas une marque qui cherche à parler fort. Elle préfère laisser le silence travailler, laisser
                  les regards se poser, les questions naître.
                </p>
                <p>FAMW ne suit pas les tendances. Elle compose avec le regard, le doute, l'ambiguïté.</p>
                <p>Pour ceux qui ne cherchent pas à appartenir.</p>
                <p>Pour ceux qui observent, qui traduisent, qui créent sans demander.</p>
                <p className="text-famw-cream font-bold text-xl">Ce n'est pas du simple textile. C'est une présence.</p>
              </div>
            </div>

            {/* Philosophy Grid */}
            <div className="grid md:grid-cols-2 gap-12 mt-20">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-yellow-500">PHILOSOPHIE</h3>
                <p className="text-gray-300 leading-relaxed">
                  Chaque création FAMW incarne une vision : celle d'une mode qui ne crie pas, mais qui marque. Une
                  esthétique brutale et douce à la fois, inspirée des grands maîtres du design minimaliste.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Nous créons pour la meute silencieuse, celle qui comprend sans qu'on lui explique, qui ressent avant
                  de voir.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-yellow-500">QUALITÉ</h3>
                <p className="text-gray-300 leading-relaxed">
                  Chaque T-shirt FAMW est confectionné avec des matériaux premium, dans le respect des artisans et de
                  l'environnement.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Coton biologique, coutures renforcées, teintures durables : nous privilégions la longévité à la
                  quantité.
                </p>
              </div>
            </div>

            {/* Visual Gallery */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-center mb-12">LA MEUTE</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative h-64 bg-gray-900 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="FAMW Community"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 bg-gray-900 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="FAMW Craftsmanship"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 bg-gray-900 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="FAMW Philosophy"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Final Message */}
            <div className="text-center mt-20 p-8 bg-gray-900 rounded-lg">
              <div className="text-4xl mb-6">🐺</div>
              <p className="text-xl font-serif text-gray-300 mb-4">
                "Nous ne vendons pas des vêtements. Nous offrons une appartenance."
              </p>
              <p className="text-yellow-500 font-bold text-lg">For all my Wolves = FAMW</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
