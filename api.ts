const api_key = '1e36459c5b61f7df2629c124f3a64ac6';

const BASE_URL = 'https://api.themoviedb.org/3';

const trending = () =>
  fetch(`${BASE_URL}/trending/movie/week?api_key=${api_key}`).then((res) => res.json());

const upcoming = () =>
  fetch(`${BASE_URL}/movie/upcoming?api_key=${api_key}&language=en-US&page=1`).then((res) =>
    res.json()
  );

const nowPlaying = () =>
  fetch(`${BASE_URL}/movie/now_playing?api_key=${api_key}&language=en-US&page=1&region=kr`).then(
    (res) => res.json()
  );

export const moviesApi = { trending, upcoming, nowPlaying };
