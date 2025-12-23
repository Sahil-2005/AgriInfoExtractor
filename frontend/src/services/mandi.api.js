import axios from "axios";

const API_BASE = "http://localhost:5000/api";

export const getMandiPrice = async ({ state, district, commodity }) => {
  const res = await axios.get(`${API_BASE}/mandi/price`, {
    params: { state, district, commodity }
  });
  return res.data;
};
