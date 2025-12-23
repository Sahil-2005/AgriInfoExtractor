import { useState } from "react";
import { getMandiPrice } from "./services/mandi.api";

import LocationSelector from "./components/LocationSelector";
import CropSelector from "./components/CropSelector";
import PriceCard from "./components/PriceCard";

export default function App() {
  const [state, setState] = useState("Maharashtra");
  const [district, setDistrict] = useState("Pune");
  const [crop, setCrop] = useState("Onion");
  const [priceData, setPriceData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPrice = async () => {
    try {
      setLoading(true);
      const data = await getMandiPrice({
        state,
        district,
        commodity: crop
      });
      setPriceData(data);
    } catch (err) {
      alert("No data available for this crop");
      setPriceData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80">
        <h1 className="text-xl font-bold text-center text-green-700 mb-4">
          🌾 Mandi Price Checker
        </h1>

        <LocationSelector
          state={state}
          district={district}
          setState={setState}
          setDistrict={setDistrict}
        />

        <div className="mt-3">
          <CropSelector crop={crop} setCrop={setCrop} />
        </div>

        <button
          onClick={fetchPrice}
          className="w-full mt-4 bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          {loading ? "Loading..." : "Get Price"}
        </button>

        <PriceCard data={priceData} />
      </div>
    </div>
  );
}
