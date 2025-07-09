"use client"

import { useState } from "react"
import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import ProductCategories from "@/components/product-categories"
import FeaturedProducts from "@/components/featured-products"
import Footer from "@/components/footer"
import LoginModal from "@/components/login-modal"

export default function HomePage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onLoginClick={() => setIsLoginModalOpen(true)} />
      <main>
        <HeroBanner />
        <ProductCategories />
        <FeaturedProducts />
      </main>
      <Footer />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  )
}
