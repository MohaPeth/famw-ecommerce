"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { Menu, X, ShoppingBag } from "lucide-react"
import { NAV_ITEMS } from "@/data/constants"
import { useCart } from "@/hooks/useCart"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { getCartItemsCount } = useCart()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d] border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 hover:text-yellow-500 ${
                  pathname === item.href ? "text-yellow-500" : "text-famw-cream"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/panier">
              <Button
                variant="outline"
                size="sm"
                className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 font-bold px-6 py-2 uppercase relative"
              >
                <ShoppingBag size={16} className="mr-2" />
                CART
                {getCartItemsCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getCartItemsCount()}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link href="/panier">
              <Button
                variant="outline"
                size="sm"
                className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black p-2 relative"
              >
                <ShoppingBag size={18} />
                {getCartItemsCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {getCartItemsCount()}
                  </span>
                )}
              </Button>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-famw-cream hover:text-yellow-500 transition-colors duration-300 p-2 focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-gray-900">
            <div className="flex flex-col space-y-6 text-center">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold tracking-wider uppercase transition-colors duration-300 hover:text-yellow-500 ${
                    pathname === item.href ? "text-yellow-500" : "text-famw-cream"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
