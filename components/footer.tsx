export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Payment Methods */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Formas de Pagamento</h3>
            <div className="flex flex-wrap gap-2">
              <img src="/placeholder.svg?height=30&width=50" alt="Visa" className="bg-white rounded p-1" />
              <img src="/placeholder.svg?height=30&width=50" alt="Mastercard" className="bg-white rounded p-1" />
              <img src="/placeholder.svg?height=30&width=50" alt="PIX" className="bg-white rounded p-1" />
              <img src="/placeholder.svg?height=30&width=50" alt="Boleto" className="bg-white rounded p-1" />
            </div>
          </div>

          {/* Security */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Segurança</h3>
            <div className="space-y-2">
              <img src="/placeholder.svg?height=40&width=100" alt="SSL Certificate" className="bg-white rounded p-2" />
              <img src="/placeholder.svg?height=40&width=100" alt="Google Safe" className="bg-white rounded p-2" />
            </div>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Institucional</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-red-500">
                  Quem é a empresa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Política e Condições de Venda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Política de Troca e Devoluções
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Política de Segurança e Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ajuda</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-red-500">
                  Meus Pedidos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Minha Conta
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">© 2024 Modern Restore. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
