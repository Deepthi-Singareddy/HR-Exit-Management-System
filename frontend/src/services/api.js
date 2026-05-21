import axios from "axios";

export default axios.create({
  baseURL: "https://hr-exit-backend.onrender.com/api"
})