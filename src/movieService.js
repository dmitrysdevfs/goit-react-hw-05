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
};

export const fetchTrendingMovies = async () => {
  const params = {
    language: defaultLanguage,
  };
  const resp = await axios.get(`${BASE_URL}trending/movie/day?`, {
    ...commonOptions,
    params,
  });
  return resp.data.results;
};
