
// services/api.ts
import axios from 'axios';

const API_URL = 'https://api.example.com';

export const fetchData = async (endpoint: string) => {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};
