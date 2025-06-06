"use client"

import { useEffect, useState } from "react"

export default function DebugPage() {
  const [cartData, setCartData] = useState<string>("Chargement...")

  useEffect(() => {
    // Récupérer les données du panier depuis localStorage
    const cart = localStorage.getItem("famw_cart")
    setCartData(cart || "Panier vide")
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Page de débogage</h1>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Contenu du panier (localStorage)</h2>
        <pre className="bg-gray-800 p-4 rounded overflow-auto max-h-96">{cartData}</pre>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold mb-2">Actions</h2>
        <div className="space-x-4">
          <a href="/panier" className="bg-blue-500 text-white px-4 py-2 rounded">
            Voir le panier
          </a>
          <a href="/checkout" className="bg-green-500 text-white px-4 py-2 rounded">
            Aller au checkout
          </a>
          <button
            onClick={() => {
              localStorage.removeItem("famw_cart")
              setCartData("Panier vidé")
            }}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Vider le panier
          </button>
        </div>
      </div>
    </div>
  )
}
