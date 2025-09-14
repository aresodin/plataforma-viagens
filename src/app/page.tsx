
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-10 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/imgs/travel_1000dp_FFF_FILL0_wght400_GRAD0_opsz48.svg" alt="Jacarelli Logo" className="h-10 w-10 mr-2" />
          <h1 className="text-2xl font-bold text-white">Jacarelli</h1>
        </div>
        <nav>
          <Link href="/login" className="text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-white hover:text-[#3ECF8E]">
            Login
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center" 
        style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900?brazil,nature')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h2 className="text-5xl font-extrabold text-white mb-4">Descubra o Brasil com a Jacarelli</h2>
          <p className="text-xl text-white mb-8">Sua próxima grande aventura começa aqui. Descubra os tesouros do Brasil com ofertas imperdíveis.</p>
          <Link href="/destinos" className="bg-[#3ECF8E] text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 hover:scale-105">
            Encontre seu Destino
          </Link>
        </div>
      </section>

      {/* Destinos Populares Section */}
      <section className="py-20 px-4">
        <h3 className="text-4xl font-bold text-center mb-12">Destinos Incríveis no Brasil</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Destination Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
            <img src="https://source.unsplash.com/random/800x600?rio-de-janeiro" alt="Rio de Janeiro" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-2">Rio de Janeiro</h4>
              <p className="text-gray-600">Cidade maravilhosa, cheia de encantos mil. Praias, montanhas e um povo contagiante.</p>
            </div>
          </div>
          {/* Destination Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
            <img src="https://source.unsplash.com/random/800x600?salvador,bahia" alt="Salvador" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-2">Salvador</h4>
              <p className="text-gray-600">O coração do Brasil, onde a cultura, a música e a história se encontram em cada esquina.</p>
            </div>
          </div>
          {/* Destination Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
            <img src="https://source.unsplash.com/random/800x600?amazon,rainforest" alt="Amazônia" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-2">Amazônia</h4>
              <p className="text-gray-600">A maior floresta tropical do mundo. Uma imersão na natureza selvagem e exuberante.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="bg-gray-100 py-20 px-4">
        <h3 className="text-4xl font-bold text-center mb-12">Nossos Serviços</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          <div className="p-6">
            <span className="material-symbols-outlined text-5xl text-[#3ECF8E] mb-4">flight</span>
            <h4 className="text-xl font-bold mb-2">Passagens Aéreas</h4>
            <p className="text-gray-600">As melhores tarifas para você voar para os principais destinos do Brasil.</p>
          </div>
          <div className="p-6">
            <span className="material-symbols-outlined text-5xl text-[#3ECF8E] mb-4">hotel</span>
            <h4 className="text-xl font-bold mb-2">Hotéis</h4>
            <p className="text-gray-600">Uma vasta seleção de hotéis para todos os estilos e orçamentos.</p>
          </div>
           <div className="p-6">
            <span className="material-symbols-outlined text-5xl text-[#3ECF8E] mb-4">directions_bus</span>
            <h4 className="text-xl font-bold mb-2">Passagens de Ônibus</h4>
            <p className="text-gray-600">Viaje por terra com conforto e segurança, explorando cada canto do país.</p>
          </div>
          <div className="p-6">
            <span className="material-symbols-outlined text-5xl text-[#3ECF8E] mb-4">support_agent</span>
            <h4 className="text-xl font-bold mb-2">Suporte 24/7</h4>
            <p className="text-gray-600">Nossa equipe está sempre pronta para te ajudar, a qualquer hora.</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 text-center">
        <h3 className="text-4xl font-bold mb-4">Fique por Dentro das Novidades</h3>
        <p className="text-lg text-gray-600 mb-8">Assine nossa newsletter para receber as melhores ofertas e dicas de viagem.</p>
        <form className="max-w-md mx-auto flex">
          <input 
            type="email" 
            placeholder="Seu e-mail" 
            className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#3ECF8E]" 
          />
          <button type="submit" className="bg-[#3ECF8E] text-white font-bold py-3 px-6 rounded-r-lg transition-colors duration-300 hover:bg-[#35b47c]">
            Assinar
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-xl font-bold mb-4">Jacarelli</h4>
            <p className="text-gray-400">Sua jornada dos sonhos começa aqui. Nós cuidamos de tudo para você.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Links Úteis</h4>
            <ul>
              <li className="mb-2"><Link href="/sobre" className="hover:text-[#3ECF8E]">Sobre Nós</Link></li>
              <li className="mb-2"><Link href="/contato" className="hover:text-[#3ECF8E]">Contato</Link></li>
              <li className="mb-2"><Link href="/privacidade" className="hover:text-[#3ECF8E]">Política de Privacidade</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Siga-nos</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#3ECF8E]">
                <span className="material-symbols-outlined">facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#3ECF8E]">
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#3ECF8E]">
                <span className="material-symbols-outlined">chat</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; 2025 Jacarelli. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
