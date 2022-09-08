import axios from 'axios';
import { toast } from 'react-toastify';

const API_KEY = 'd4083077964ed74e2ce02f9dca4a4248';
const BASE_URL = 'https://api.themoviedb.org/3';
const instanceURL = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});
// Trend Movies
export const getTrending = async () => {
  try {
    const response = await instanceURL.get('/trending/movie/day');
    const { data } = response;
    return data;
  } catch (error) {
    toast.error('Sorry error server!', {});
  }
};
// Full info for movies
export const getMoveDetails = async id => {
  try {
    const response = await instanceURL.get(`/movie/${id}`);
    return response;
  } catch (error) {
    toast.error('Sorry error server!', {});
  }
};

// Search movies
export const getSearchMovies = async query => {
  try {
    const response = await instanceURL.get('/search/movie', {
      params: query,
    });
    return response;
  } catch (error) {
    toast.error('Sorry error server!', {});
  }
};
// Actors from movies
export const getCredits = async id => {
  try {
    const response = await instanceURL.get(`/movie/${id}/credits`);
    return response;
  } catch (error) {
    toast.error('Sorry error server!', {});
  }
};
// Details from movies
export const getReviews = async id => {
  try {
    const response = await instanceURL.get(`/movie/${id}/reviews`);
    return response;
  } catch (error) {
    toast.error('Sorry error server!', {});
  }
};
