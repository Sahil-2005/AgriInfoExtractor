export default function LocationSelector({ state, district, setState, setDistrict }) {
  return (
    <div className="space-y-2">
      <select
        className="w-full p-2 border rounded"
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option value="Maharashtra">Maharashtra</option>
      </select>

      <select
        className="w-full p-2 border rounded"
        value={district}
        onChange={(e) => setDistrict(e.target.value)}
      >
        <option value="Pune">Pune</option>
      </select>
    </div>
  );
}
