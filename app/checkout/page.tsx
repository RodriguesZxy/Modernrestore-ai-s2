"use client"

import type React from "react"

import { useState } from "react"
import { useCart } from "@/contexts/cart-context"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Smartphone, FileText } from "lucide-react"

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart()
  const { user } = useAuth()
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [loading, setLoading] = useState(false)

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simular processamento do pedido
    setTimeout(() => {
      clearCart()
      router.push("/order-success")
    }, 2000)
  }

  if (!user) {
    router.push("/login?redirect=/checkout")
    return null
  }

  if (items.length === 0) {
    router.push("/cart")
    return null
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onLoginClick={() => {}} />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Finalizar Compra</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulário de checkout */}
            <div className="lg:col-span-2 space-y-6">
              {/* Dados pessoais */}
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle>Dados Pessoais</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input id="name" defaultValue={user.name} required />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" defaultValue={user.email} required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" type="tel" defaultValue={user.phone} required />
                    </div>
                    <div>
                      <Label htmlFor="cpf">CPF</Label>
                      <Input id="cpf" placeholder="000.000.000-00" required />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Endereço de entrega */}
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle>Endereço de Entrega</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="zipCode">CEP</Label>
                      <Input id="zipCode" placeholder="00000-000" required />
                    </div>
                    <div>
                      <Label htmlFor="street">Rua</Label>
                      <Input id="street" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="number">Número</Label>
                      <Input id="number" required />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="complement">Complemento</Label>
                      <Input id="complement" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="neighborhood">Bairro</Label>
                      <Input id="neighborhood" required />
                    </div>
                    <div>
                      <Label htmlFor="city">Cidade</Label>
                      <Input id="city" required />
                    </div>
                    <div>
                      <Label htmlFor="state">Estado</Label>
                      <Input id="state" required />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Forma de pagamento */}
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle>Forma de Pagamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2 p-4 border border-gray-600 rounded">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <CreditCard className="w-5 h-5" />
                      <Label htmlFor="credit-card">Cartão de Crédito</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border border-gray-600 rounded">
                      <RadioGroupItem value="pix" id="pix" />
                      <Smartphone className="w-5 h-5" />
                      <Label htmlFor="pix">PIX (5% de desconto)</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border border-gray-600 rounded">
                      <RadioGroupItem value="boleto" id="boleto" />
                      <FileText className="w-5 h-5" />
                      <Label htmlFor="boleto">Boleto Bancário</Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "credit-card" && (
                    <div className="mt-4 space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Número do Cartão</Label>
                        <Input id="cardNumber" placeholder="0000 0000 0000 0000" required />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Validade</Label>
                          <Input id="expiry" placeholder="MM/AA" required />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="000" required />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="cardName">Nome no Cartão</Label>
                        <Input id="cardName" required />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Resumo do pedido */}
            <div>
              <Card className="bg-gray-900 border-gray-700 sticky top-4">
                <CardHeader>
                  <CardTitle>Resumo do Pedido</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Items */}
                  <div className="space-y-2">
                    {items.map((item) => (
                      <div key={item.product.id} className="flex justify-between text-sm">
                        <span>
                          {item.product.name} x{item.quantity}
                        </span>
                        <span>{formatPrice(item.product.price * item.quantity)}</span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Totais */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>{formatPrice(getTotalPrice())}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Frete:</span>
                      <span className="text-green-500">Grátis</span>
                    </div>
                    {paymentMethod === "pix" && (
                      <div className="flex justify-between text-green-500">
                        <span>Desconto PIX (5%):</span>
                        <span>-{formatPrice(getTotalPrice() * 0.05)}</span>
                      </div>
                    )}
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-red-500">
                        {formatPrice(paymentMethod === "pix" ? getTotalPrice() * 0.95 : getTotalPrice())}
                      </span>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={loading}>
                    {loading ? "Processando..." : "Finalizar Compra"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  )
}
