import axios from 'axios';

const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3/';

const defaultLanguage = 'us-EN';

const commonOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`,
  },
  params: {
    language: defaultLanguage,
  },
};

export const fetchTrendingMovies = async () => {
  const resp = await axios.get(`${BASE_URL}trending/movie/day?`, commonOptions);
  return resp.data.results;
};

export const fetchMovieById = async movieId => {
  const resp = await axios.get(`${BASE_URL}movie/${movieId}?`, commonOptions);
  return resp.data;
};

export const fetchMovieCast = async movieId => {
  const resp = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?`,
    commonOptions
  );
  return resp.data.cast;
};

export const fetchMovieReviews = async movieId => {
  const resp = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?`,
    commonOptions
  );
  return resp.data.results;
};

export const fetchMovieByQuery = async query => {
  const resp = await axios.get(
    `${BASE_URL}search/movie?query=${query}`,
    commonOptions
  );
  return resp.data.results;
};
