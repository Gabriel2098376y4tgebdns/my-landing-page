// pages/index.js
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";

export default function Home({ products }) {
  return (
    <div>
      <Header />
      <HeroSection />
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  // Simulando um fetch de produtos do servidor
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/300",
      name: "Produto A",
      price: 100.00,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      name: "Produto B",
      price: 200.00,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300",
      name: "Produto C",
      price: 300.00,
    },
  ];

  return {
    props: {
      products,
    },
  };
}
