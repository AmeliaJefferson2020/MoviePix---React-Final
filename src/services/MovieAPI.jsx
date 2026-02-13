import axios from "axios";
const API_KEY = "f16911f3";
const BASE_URL = "https://www.omdbapi.com/";

const movieAPI = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: API_KEY,
  },
});

export const searchMovies = async (searchTerm, page = 1) => {
  console.log("Search Term: ", searchTerm);
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=f16911f3&s=${searchTerm}`
    )

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error Searching Movies", error);
    throw error;
  }
};

export const getMovieDetails = async (imdbId) => {
  try {
    const response = await movieAPI.get("", {
      params: {
        i: imdbId,
        plot: "full",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error Fetching Movie Details", error);
    throw error;
  }
};

export const getMovieByTitle = async (title, year = null) => {
  try {
    const response = await movieAPI.get("", {
      params: {
        t: title,
        y: year,
        plot: "full",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error Fecthing Movie By Title", error);
    throw error;
  }
};