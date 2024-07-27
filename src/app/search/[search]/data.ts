const GET_SEARCH_RESULTS = async (search: string) => {
  const url = `${process.env.MOVIE_DB_HOST_NAME}/3/search/multi?language=en-US&api_key=${process.env.MOVIE_DB_API_KEY}&query=${search}`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  const movies = data.results.filter(
    (movie: any) => movie.media_type === 'movie',
  );
  const people = data.results.filter(
    (person: any) => person.media_type === 'person',
  );
  const shows = data.results.filter((show: any) => show.media_type === 'tv');

  return {
    movies,
    people,
    shows,
  };
};

export default GET_SEARCH_RESULTS;
