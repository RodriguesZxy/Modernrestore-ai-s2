import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header onLoginClick={() => {}} />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold mb-4">Pedido Realizado com Sucesso!</h1>
              <p className="text-gray-400 mb-6">
                Seu pedido foi processado e você receberá um e-mail de confirmação em breve.
              </p>
              <div className="space-y-4">
                <Link href="/products">
                  <Button className="w-full bg-red-600 hover:bg-red-700">Continuar Comprando</Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" className="w-full bg-transparent">
                    Voltar ao Início
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
