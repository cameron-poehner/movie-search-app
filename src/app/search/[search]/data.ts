export const GET_SEARCH_RESULTS = async (search: string) => {
  const url = `${process.env.MOVIE_DB_HOST_NAME}/3/search/movie?api_key=${process.env.MOVIE_DB_API}&query=${search} `;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  return data;
};
