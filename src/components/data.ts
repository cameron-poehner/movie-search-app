const GET_COMING_SOON = async () => {
  const url = `${process.env.MOVIE_DB_HOST_NAME}/3/movie/upcoming?api_key=${process.env.MOVIE_DB_API_KEY}&language=en-US&page=1`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  return data.results;
};
export default GET_COMING_SOON;
