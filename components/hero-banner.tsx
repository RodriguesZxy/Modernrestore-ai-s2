export default function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-r from-red-900 to-black py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="mb-4">
              <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">GEFORCE RTX SÉRIE 50</span>
            </div>
            <h2 className="text-5xl font-bold mb-4">GIGABYTE™</h2>
            <p className="text-xl mb-6">
              <span className="text-red-500">JOGUE</span> COMO UM <span className="text-red-500">PRO</span>
            </p>
            <div className="flex space-x-4">
              <div className="bg-red-600 text-white px-4 py-2 rounded">
                <div className="text-2xl font-bold">4X</div>
                <div className="text-sm">MAIS RÁPIDO</div>
              </div>
              <div className="bg-red-600 text-white px-4 py-2 rounded">
                <div className="text-2xl font-bold">2X</div>
                <div className="text-sm">RAY TRACING</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="/placeholder.svg?height=300&width=400" alt="GIGABYTE Graphics Card" className="max-w-md" />
          </div>
        </div>
      </div>
    </section>
  )
}
