import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Ensure this matches your json-server URL

export const fetchRecipes = async () => {
  return await axios.get(`${API_BASE_URL}/recipes`);
};

export const fetchRecipeById = async (id: string) => {
  return await axios.get(`${API_BASE_URL}/recipes/${id}`);
};

export const fetchFavorites = async () => {
  return await axios.get(`${API_BASE_URL}/favorites`);
};

export const addToFavorites = async (recipeId: string) => {
  return await axios.post(`${API_BASE_URL}/favorites`, { recipeId });
};

export const loginUser = async (email: string, password: string) => {
  // Mocking login, you can expand this logic as needed
  return { data: { token: 'mock-token' } };
};

export const signupUser = async (email: string, password: string) => {
  // Mocking signup, you can expand this logic as needed
  return { data: { message: 'User registered' } };
};
