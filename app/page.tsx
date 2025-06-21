import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const products = [
    { id: 1, image: "https://via.placeholder.com/300", name: "Produto A", price: 100 },
    { id: 2, image: "https://via.placeholder.com/300", name: "Produto B", price: 200 },
    { id: 3, image: "https://via.placeholder.com/300", name: "Produto C", price: 300 },
  ];

  return (
    <main>
      <Header />
      <HeroSection />
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            image={p.image}
            name={p.name}
            price={p.price}
          />
        ))}
      </section>
    </main>
  );
}
