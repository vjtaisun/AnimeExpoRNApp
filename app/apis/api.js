import axios from "axios";
const BASE_URL = "https://api.jikan.moe/v4";

export const fetchAnimeListAPI = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/top/anime`);
    if (response.status !== 200) {
      throw new Error(`Failed to fetch anime list: ${response.status}`);
    }
    return response.data.data;
  } catch (error) {
    if (error.response) {
      throw new Error(`Server Error: ${error.response.status}`);
    } else if (error.request) {
      throw new Error("Network Error: No response received from server");
    } else {
      throw new Error(`Error: ${error.message}`);
    }
  }
};
