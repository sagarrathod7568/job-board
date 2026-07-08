import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const googleLogin = async (token) => {
  const response = await API.post("/auth/google", {
    token,
  });

  return response.data;
};
