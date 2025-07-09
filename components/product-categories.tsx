export default function ProductCategories() {
  const categories = [
    {
      title: "MONTE O SEU PC",
      subtitle: "CUSTOM",
      description: "DO SEU JEITO",
      color: "bg-blue-600",
    },
    {
      title: "MONTE O SEU PC",
      subtitle: "GAMER",
      description: "DO SEU JEITO",
      color: "bg-purple-600",
    },
    {
      title: "MONTE O SEU PC",
      subtitle: "MOBA",
      description: "",
      color: "bg-orange-600",
    },
    {
      title: "MONTE SEU PC",
      subtitle: "HOME",
      description: "",
      color: "bg-gray-600",
    },
  ]

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${category.color} rounded-lg p-6 text-white relative overflow-hidden group cursor-pointer hover:scale-105 transition-transform`}
            >
              <div className="relative z-10">
                <h3 className="text-sm font-medium mb-2">{category.title}</h3>
                <h4 className="text-2xl font-bold mb-1">{category.subtitle}</h4>
                {category.description && <p className="text-sm">{category.description}</p>}
              </div>
              <div className="absolute bottom-4 right-4 opacity-20">
                <img src="/placeholder.svg?height=80&width=80" alt="PC Icon" className="w-16 h-16" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
