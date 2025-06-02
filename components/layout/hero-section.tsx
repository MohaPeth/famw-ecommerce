import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10" />
      <Image src="/placeholder.svg?height=1080&width=1920" alt="FAMW Hero" fill className="object-cover" priority />
      <div className="relative z-20 text-center px-4">
        <div className="mb-8">
          <Logo size="lg" />
        </div>
        <p className="text-sm md:text-base mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Ce n'est pas une marque qui cherche à parler fort. Elle préfère laisser le silence travailler...
        </p>
        <Button
          asChild
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
        >
          <Link href="/produits">DÉCOUVRIR</Link>
        </Button>
      </div>
    </section>
  )
}
