export default function Header() {
    return (
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <div className="text-2xl font-bold">Minha Logo</div>
        <nav className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-black">Home</a>
          <a href="#" className="text-gray-600 hover:text-black">Produtos</a>
          <a href="#" className="text-gray-600 hover:text-black">Contato</a>
        </nav>
      </header>
    );
  }
  