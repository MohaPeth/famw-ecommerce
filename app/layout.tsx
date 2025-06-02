import type React from "react"
import type { Metadata } from "next"
import { AppWrapper } from "@/components/layout/app-wrapper"
import "./globals.css"

export const metadata: Metadata = {
  title: "FAMW - For All My Wolves",
  description: "Premium streetwear brand. Ce n'est pas du simple textile. C'est une présence.",
  keywords: ["streetwear", "fashion", "premium", "t-shirts", "FAMW", "wolves"],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="bg-black text-famw-cream">
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  )
}
