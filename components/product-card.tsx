"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"
import type { Product } from "@/lib/types"
import { useCart } from "@/contexts/cart-context"
import Link from "next/link"
import { toast } from "sonner"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
    toast.success(`${product.name} adicionado ao carrinho!`)
  }

  return (
    <Link href={`/product/${product.id}`}>
      <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer h-full">
        <CardContent className="p-4 flex flex-col h-full">
          <div className="relative mb-4">
            {product.discount && (
              <Badge className="absolute top-2 left-2 bg-red-600 text-white text-xs z-10">
                {product.discount}% OFF
              </Badge>
            )}
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-40 object-contain" />
          </div>

          <div className="flex-1 flex flex-col">
            <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 flex-1">{product.name}</h3>

            <div className="flex items-center mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
            </div>

            <div className="space-y-1 mb-4">
              {product.originalPrice && (
                <p className="text-xs text-gray-500 line-through">{formatPrice(product.originalPrice)}</p>
              )}
              <p className="text-lg font-bold text-red-600">{formatPrice(product.price)}</p>
              <p className="text-xs text-gray-600">ou 12x de {formatPrice(product.price / 12)}</p>
            </div>

            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full bg-red-600 hover:bg-red-700 text-white mt-auto"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              {product.inStock ? "Adicionar" : "Indisponível"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
