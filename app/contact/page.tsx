"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Instagram, Twitter } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ nom: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-black text-famw-cream">
      <Navigation />

      <div className="pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">CONTACT</h1>
            <p className="text-gray-400 text-lg">Rejoignez la meute</p>
            <div className="text-4xl mt-6">🐺</div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-yellow-500">NOUS ÉCRIRE</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-bold mb-2">
                      NOM *
                    </label>
                    <Input
                      id="nom"
                      name="nom"
                      type="text"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      className="bg-black border-gray-700 text-famw-cream focus:border-yellow-500"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold mb-2">
                      EMAIL *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-black border-gray-700 text-famw-cream focus:border-yellow-500"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold mb-2">
                      MESSAGE *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-black border-gray-700 text-famw-cream focus:border-yellow-500 resize-none"
                      placeholder="Votre message..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-yellow-500 text-black hover:bg-yellow-600 font-bold py-3 transition-all duration-300 hover:scale-105"
                  >
                    ENVOYER
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-yellow-500">COORDONNÉES</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="text-yellow-500" size={24} />
                    <div>
                      <p className="font-bold">Email</p>
                      <p className="text-gray-400">contact@famw.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Phone className="text-yellow-500" size={24} />
                    <div>
                      <p className="font-bold">Téléphone</p>
                      <p className="text-gray-400">+33 1 23 45 67 89</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <MapPin className="text-yellow-500" size={24} />
                    <div>
                      <p className="font-bold">Adresse</p>
                      <p className="text-gray-400">
                        123 Rue de la Meute
                        <br />
                        75001 Paris, France
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-yellow-500">RÉSEAUX SOCIAUX</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-6">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram size={32} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
                      aria-label="Twitter"
                    >
                      <Twitter size={32} />
                    </a>
                  </div>
                  <p className="text-gray-400 mt-4 text-sm">
                    Suivez-nous pour découvrir les coulisses de FAMW et rejoindre notre communauté.
                  </p>
                </CardContent>
              </Card>

              <div className="bg-gray-900 p-8 rounded-lg text-center">
                <div className="text-3xl mb-4">🐺</div>
                <p className="font-serif text-gray-300 mb-2">"La meute vous attend"</p>
                <p className="text-yellow-500 font-bold">For all my Wolves = FAMW</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
