import ProductCard from "@/components/product-card"
import { products } from "@/lib/data"

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 6) // Show first 6 products

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <h2 className="text-3xl font-bold text-white mr-4">DESCONTOS ARRASADORES</h2>
          <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">IMPERDÍVEL</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
