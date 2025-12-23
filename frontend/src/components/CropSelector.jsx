const crops = ["Onion", "Wheat", "Tomato"];

export default function CropSelector({ crop, setCrop }) {
  return (
    <select
      className="w-full p-2 border rounded"
      value={crop}
      onChange={(e) => setCrop(e.target.value)}
    >
      {crops.map((c) => (
        <option key={c} value={c}>{c}</option>
      ))}
    </select>
  );
}
