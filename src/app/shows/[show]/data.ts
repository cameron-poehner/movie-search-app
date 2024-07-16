export const GET_SHOW_DETAILS = async (show: string) => {
  const url = `${process.env.MOVIE_DB_HOST_NAME}/3/tv/${show}?api_key=${process.env.MOVIE_DB_API}&language=en-US`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  return data;
};
