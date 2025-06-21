export default function ProductCard({ image, name, price }) {
  return (
    <div className="border rounded shadow hover:shadow-lg transition p-4">
      <img src={image} alt={name} className="w-full h-48 object-cover mb-4 rounded"/>
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-700 mt-2">R$ {price}</p>
    </div>
  );
}
