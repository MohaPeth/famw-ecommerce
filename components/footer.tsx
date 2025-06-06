import Link from "next/link"
import Image from "next/image"
import { Instagram, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/images/logo-famw-light.png"
              alt="FAMW - For All My Wolves"
              width={150}
              height={100}
              className="h-20 w-auto opacity-70 hover:opacity-90 transition-opacity duration-300"
            />
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
              Ce n'est pas du simple textile. C'est une présence. Pour ceux qui ne cherchent pas à appartenir.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-famw-cream font-bold uppercase tracking-wide text-sm">NAVIGATION</h3>
            <div className="space-y-3">
              <Link
                href="/"
                className="block text-gray-400 hover:text-yellow-500 text-sm transition-colors duration-300 uppercase tracking-wide"
              >
                Accueil
              </Link>
              <Link
                href="/produits"
                className="block text-gray-400 hover:text-yellow-500 text-sm transition-colors duration-300 uppercase tracking-wide"
              >
                Produits
              </Link>
              <Link
                href="/a-propos"
                className="block text-gray-400 hover:text-yellow-500 text-sm transition-colors duration-300 uppercase tracking-wide"
              >
                À propos
              </Link>
              <Link
                href="/contact"
                className="block text-gray-400 hover:text-yellow-500 text-sm transition-colors duration-300 uppercase tracking-wide"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-famw-cream font-bold uppercase tracking-wide text-sm">SUPPORT</h3>
            <div className="space-y-3">
              <Link
                href="/faq"
                className="block text-gray-400 hover:text-yellow-500 text-sm transition-colors duration-300 uppercase tracking-wide"
              >
                FAQ
              </Link>
              <Link
                href="/livraison"
                className="block text-gray-400 hover:text-yellow-500 text-sm transition-colors duration-300 uppercase tracking-wide"
              >
                Livraison
              </Link>
              <Link
                href="/retours"
                className="block text-gray-400 hover:text-yellow-500 text-sm transition-colors duration-300 uppercase tracking-wide"
              >
                Retours
              </Link>
              <Link
                href="/panier"
                className="block text-gray-400 hover:text-yellow-500 text-sm transition-colors duration-300 uppercase tracking-wide"
              >
                Panier
              </Link>
              <Link
                href="/checkout"
                className="block text-gray-400 hover:text-yellow-500 text-sm transition-colors duration-300 uppercase tracking-wide"
              >
                Checkout
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-famw-cream font-bold uppercase tracking-wide text-sm">CONTACT</h3>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">contact@famw.com</p>
              <p className="text-gray-400 text-sm">+33 1 23 45 67 89</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-famw-cream font-bold uppercase tracking-wide text-xs">SUIVEZ-NOUS</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 hover:scale-110 transform"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 hover:scale-110 transform"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 hover:scale-110 transform"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-gray-500 text-sm">© {new Date().getFullYear()} FAMW. Tous droits réservés.</p>
              <div className="hidden md:block w-px h-4 bg-gray-700"></div>
              <p className="text-gray-600 text-xs italic font-serif">"For all my Wolves"</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <Link
                href="/mentions-legales"
                className="text-gray-500 hover:text-yellow-500 transition-colors duration-300"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="text-gray-500 hover:text-yellow-500 transition-colors duration-300"
              >
                Politique de confidentialité
              </Link>
              <Link href="/retours" className="text-gray-500 hover:text-yellow-500 transition-colors duration-300">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
