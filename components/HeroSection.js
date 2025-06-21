export default function HeroSection() {
    return (
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-100">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Bem-vindo à nossa loja!
        </h1>
        <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
          Ver Produtos
        </button>
      </section>
    );
  }
  