import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

// Register
export async function register({ username, email, password }) {
  try {
    const response = await api.post("/auth/register", {
      username,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.error("Register Error:", error.response?.data || error.message);
    throw error;
  }
}

// Login
export async function login({ email, password }) {
  try {
    const response = await api.post("/auth/login", {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
    throw error;
  }
}

// Logout
export async function logout() {
  try {
    const response = await api.post("/auth/logout");
    return response.data;
  } catch (error) {
    console.error("Logout Error:", error.response?.data || error.message);
    throw error;
  }
}

// Get Current User
export async function getMe() {
  try {
    const response = await api.get("/auth/get-me");
    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      return null;
    }
    console.error("GetMe Error:", error.response?.data || error.message);
    throw error;
  }
}
