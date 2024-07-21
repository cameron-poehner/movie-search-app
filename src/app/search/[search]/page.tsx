import GET_SEARCH_RESULTS from './data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Page = async ({ params }: { params: { search: string } }) => {
  const { shows, people, movies } = await GET_SEARCH_RESULTS(params.search);

  console.log('📺 Shows', shows);
  console.log('🧍 People', people);
  console.log('🎬 Movies', movies);

  return (
    <div className="h-max w-full">
      <h1>My Search: {params.search}</h1>
      <div>
        <h2>Shows</h2>
        {shows.map((show: any) => (
          <p key={show.id}>{show.name}</p>
        ))}
      </div>
      <div>
        <h2>Movies</h2>
        {movies.map((movie: any) => (
          <p key={movie.id}>{movie.title}</p>
        ))}
      </div>
      <div>
        <h2>People</h2>
        {people.map((person: any) => (
          <p key={person.id}>{person.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Page;
