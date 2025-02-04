'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Mic2, Music, Speaker, Truck, Users, PhoneIcon as WhatsApp } from "lucide-react"
import { useState } from "react"
import { TermsOfService } from "@/components/terms-of-service"
import { PrivacyPolicy } from "@/components/privacy-policy"

export default function LandingPage() {
  const [isTermsOpen, setIsTermsOpen] = useState(false)
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gradient-to-r from-gradient-start to-gradient-end">
        <Link href="/" className="flex items-center justify-center">
          <Speaker className="h-6 w-6 mr-2 text-white" />
          <span className="font-bold text-white">Axiolutions</span>
        </Link>
      </header>
      <main className="flex-1 w-full overflow-hidden">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-gradient-start to-gradient-end text-white">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Audio Profesional
                  <span className="block text-black">para tus eventos</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                  Transforma tu evento con sonido de alta calidad. Instalación, ecualización y servicio personalizado
                  incluidos
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://api.whatsapp.com/send?phone=525577650994&text=Hola.%20Quiero%20informes" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-white text-gradient-start hover:bg-white/90">
                    <WhatsApp className="mr-2 h-4 w-4" /> WhatsApp
                  </Button>
                </Link>
                <Link href="https://www.instagram.com/axiolutions/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white hover:text-gradient-start"
                  >
                    <Instagram className="mr-2 h-4 w-4" /> Instagram
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
              Nuestros Servicios
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="border-gradient-start/20">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Speaker className="h-12 w-12 text-gradient-start" />
                  <h3 className="text-xl font-bold">Audio Profesional JBL</h3>
                  <p className="text-center text-gray-600">Sonido de alta calidad que realmente se escucha de diez</p>
                </CardContent>
              </Card>
              <Card className="border-gradient-start/20">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Music className="h-12 w-12 text-gradient-end" />
                  <h3 className="text-xl font-bold">Ecualización Personalizada</h3>
                  <p className="text-center text-gray-600">
                    Adaptamos el sonido a cada espacio para una experiencia óptima
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gradient-start/20">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Truck className="h-12 w-12 text-gradient-start" />
                  <h3 className="text-xl font-bold">Servicio Completo</h3>
                  <p className="text-center text-gray-600">
                    Transporte, instalación, monitoreo y desinstalación incluidos
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gradient-start/20">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Mic2 className="h-12 w-12 text-gradient-end" />
                  <h3 className="text-xl font-bold">Micrófonos Inalámbricos</h3>
                  <p className="text-center text-gray-600">Incluidos para discursos o karaoke en cualquier momento</p>
                </CardContent>
              </Card>
              <Card className="border-gradient-start/20">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Music className="h-12 w-12 text-gradient-start" />
                  <h3 className="text-xl font-bold">Música Personalizada</h3>
                  <p className="text-center text-gray-600">
                    Tu playlist o nuestras selecciones según el mood de tu evento
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gradient-start/20">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Users className="h-12 w-12 text-gradient-end" />
                  <h3 className="text-xl font-bold">Servicio de DJ</h3>
                  <p className="text-center text-gray-600">
                    Opción de contratar un DJ profesional para amenizar tu evento
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gradient-start to-gradient-end text-white">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ¿Listo para Elevar tu Evento?
              </h2>
              <p className="mx-auto max-w-[600px] text-white/90 md:text-xl">
                Contáctanos ahora y haz que tu evento suene increíble
              </p>
              <div className="space-x-4">
                <Link href="https://api.whatsapp.com/send?phone=525577650994&text=Hola.%20Quiero%20informes" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-white text-gradient-start hover:bg-white/90">
                    <WhatsApp className="mr-2 h-4 w-4" /> WhatsApp
                  </Button>
                </Link>
                <Link href="https://www.instagram.com/axiolutions/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white hover:text-gradient-start"
                  >
                    <Instagram className="mr-2 h-4 w-4" /> Instagram
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <button onClick={() => setIsTermsOpen(true)} className="text-xs hover:underline underline-offset-4">
            Términos de Servicio
          </button>
          <button onClick={() => setIsPrivacyOpen(true)} className="text-xs hover:underline underline-offset-4">
            Política de Privacidad
          </button>
        </nav>
        <TermsOfService isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
        <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      </footer>
    </div>
  )
}

