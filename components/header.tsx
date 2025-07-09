"use client"

import { Search, User, Heart, ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/contexts/cart-context"
import { useAuth } from "@/contexts/auth-context"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface HeaderProps {
  onLoginClick: () => void
}

export default function Header({ onLoginClick }: HeaderProps) {
  const { getTotalItems } = useCart()
  const { user, logout } = useAuth()
  const totalItems = getTotalItems()

  const navItems = [
    "DEPARTAMENTOS",
    "PROMOÇÕES",
    "PC GAMER",
    "KIT UPGRADE",
    "HARDWARE",
    "NOTEBOOKS",
    "MONITORES",
    "MONTE SEU PC",
    "ATENDIMENTO",
  ]

  return (
    <header className="bg-black border-b border-gray-800">
      {/* Top bar */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-red-500">
              Modern
              <br />
              <span className="text-white">Restore</span>
            </h1>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Pesquise o seu produto"
                className="w-full bg-white text-black pl-4 pr-10"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>

          {/* User actions */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm">Olá, {user.name}</span>
                <Button variant="ghost" onClick={logout} className="text-white hover:text-red-500 text-sm">
                  Sair
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                className="flex items-center space-x-2 text-white hover:text-red-500"
                onClick={onLoginClick}
              >
                <User className="w-5 h-5" />
                <div className="text-sm">
                  <div>Olá, Entre ou</div>
                  <div>Cadastre-se</div>
                </div>
              </Button>
            )}

            <Button variant="ghost" size="icon" className="text-white hover:text-red-500">
              <Heart className="w-5 h-5" />
            </Button>

            <Link href="/cart">
              <Button variant="ghost" size="icon" className="text-white hover:text-red-500 relative">
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-600 text-white text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="text-white mr-4">
              <Menu className="w-5 h-5" />
            </Button>
            <div className="flex space-x-6 overflow-x-auto">
              {navItems.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="text-white hover:text-red-500 whitespace-nowrap text-sm font-medium py-4"
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
