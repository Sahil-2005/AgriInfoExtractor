export default function PriceCard({ data }) {
  if (!data) return null;

  return (
    <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4 text-center">
      <h2 className="text-lg font-bold text-green-700">
        {data.commodity} Price
      </h2>

      <p className="text-2xl font-semibold mt-2">
        ₹{data.modalPrice} / Quintal
      </p>

      <p className="text-sm text-gray-600 mt-1">
        {data.market}
      </p>

      <p className="text-xs text-gray-500 mt-1">
        Updated: {data.date}
      </p>

      <p className="text-xs mt-2">
        Min: ₹{data.minPrice} | Max: ₹{data.maxPrice}
      </p>
    </div>
  );
}
