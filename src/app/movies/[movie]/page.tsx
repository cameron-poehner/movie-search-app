import GET_MOVIE_DETAILS from './data';

const Page = async ({ params }: { params: { movie: string } }) => {
  const movie = await GET_MOVIE_DETAILS(params.movie);
  console.log('Movie', movie);
  return (
    <div>
      <p>This is a movie page! </p>
    </div>
  );
};
export default Page;
