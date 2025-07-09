"use client"

import type React from "react"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/contexts/auth-context"
import { useState } from "react"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { login, register } = useAuth()
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      let success = false
      if (isLogin) {
        success = await login(email, password)
      } else {
        success = await register(name, email, password)
      }

      if (success) {
        onClose()
        setEmail("")
        setPassword("")
        setName("")
      } else {
        alert(isLogin ? "Credenciais inválidas" : "Erro ao criar conta")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-red-500 text-white">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            {isLogin ? "Bem-vindo! de volta" : "Criar conta"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <p className="text-center text-sm">
            {isLogin
              ? "Olá! Se você já comprou na loja da Modern Restore antes, por favor, informe seu e-mail e senha."
              : "Crie sua conta na Modern Restore e aproveite nossas ofertas exclusivas!"}
          </p>
          <div className="space-y-4">
            {!isLogin && (
              <div>
                <Label htmlFor="name" className="text-white">
                  Nome
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Digite seu nome"
                  className="bg-white text-black"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}
            <div>
              <Label htmlFor="email" className="text-white">
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                className="bg-white text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-white">
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                className="bg-white text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-white text-red-500 hover:bg-gray-100" disabled={loading}>
              {loading ? "Carregando..." : isLogin ? "Entrar" : "Criar conta"}
            </Button>
            {isLogin && (
              <div className="text-center">
                <a href="#" className="text-sm underline hover:no-underline">
                  Esqueci minha senha
                </a>
              </div>
            )}
            <div className="text-center">
              <p className="text-sm">{isLogin ? "Não tem conta?" : "Já tem conta?"}</p>
              <Button
                type="button"
                variant="outline"
                className="mt-2 bg-transparent border-white text-white hover:bg-white hover:text-red-500"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Cadastre-se" : "Fazer login"}
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
