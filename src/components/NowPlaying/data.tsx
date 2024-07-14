export const GET_NOW_PLAYING = async () => {
  const urlSegments = {
    host: process.env.MOVIE_DB_HOST_NAME,
    api_key: process.env.MOVIE_DB_API_KEY,
    language: 'en-US',
    page: 1,
  };

  const url = `${urlSegments.host}/3/movie/now_playing?language=${urlSegments.language}&api_key=${urlSegments.api_key}`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  return data;
};
