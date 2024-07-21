const GET_MOVIE_DETAILS = async (movie: string) => {
  const url = `${process.env.MOVIE_DB_HOST_NAME}/3/movie/${movie}?language=en-US&api_key=${process.env.MOVIE_DB_API_KEY}`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
};
export default GET_MOVIE_DETAILS;
