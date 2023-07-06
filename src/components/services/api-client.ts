import axios from "axios";

const LOCALHOST = "http://localhost:3000/";
const PRODUCTION = "https://api.rawg.io/api";
export default axios.create({
  baseURL: PRODUCTION,
  params: {
    key: "7909ef4f12564d24bbdafbb8836e6f5e",
  },
});
