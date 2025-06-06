import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10" />
      <Image
        src="/images/hero-wolves.jpeg"
        alt="FAMW - La Meute"
        fill
        className="object-cover blur-sm scale-105"
        priority
      />
      <div className="relative z-20 text-center px-4">
        <div className="text-center">
          <h1 className="text-famw-cream font-sans text-lg md:text-xl tracking-wider leading-relaxed max-w-2xl mx-auto">
            Ici, on ne crie pas. On laisse le regard dire ce que les mots taisent.
          </h1>
          <p className="mt-6 text-yellow-500 font-serif italic text-xl md:text-2xl tracking-wide">For all my Wolves</p>
        </div>
        <p className="text-sm md:text-base mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Ce n'est pas une marque qui cherche à parler fort. Elle préfère laisser le silence travailler...
        </p>
        <Button asChild variant="premium" size="xl">
          <Link href="/produits">DÉCOUVRIR</Link>
        </Button>
      </div>
    </section>
  )
}
