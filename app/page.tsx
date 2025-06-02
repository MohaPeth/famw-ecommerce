import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"
import { ProductGrid } from "@/components/ui/product-grid"
import { HeroSection } from "@/components/layout/hero-section"
import { PhilosophySection } from "@/components/layout/philosophy-section"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { products } from "@/data/products"

export default function HomePage() {
  const featuredProducts = products.slice(0, 6)

  return (
    <div className="min-h-screen bg-black text-famw-cream">
      <Navigation />
      <HeroSection />

      {/* Featured Products */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="FEATURED COLLECTION" subtitle="Pour ceux qui ne cherchent pas à appartenir" />
          <ProductGrid products={featuredProducts} />
          <div className="text-center mt-16">
            <Button
              asChild
              className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold px-12 py-4 text-lg transition-all duration-300"
            >
              <Link href="/produits">VOIR TOUTE LA COLLECTION</Link>
            </Button>
          </div>
        </div>
      </section>

      <PhilosophySection />
      <Footer />
    </div>
  )
}
