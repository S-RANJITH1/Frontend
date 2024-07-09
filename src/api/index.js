import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:7000/api",
});

export const SignUpUser = async (userData) => {
  try {
    const response = await instance.post("/user/signup", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const SignInUser = async (userData) => {
  try {
    const response = await instance.post("/user/signin", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDashboardDetails = async (token) => {
  try {
    const response = await instance.get("/dashboard", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getWorkouts = async (token, date) => {
  try {
    const response = await instance.get(`/workout/${date}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addWorkout = async (token, data) => {
  try {
    const response = await instance.post("/workout", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default instance;
