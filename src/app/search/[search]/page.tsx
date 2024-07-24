import GET_SEARCH_RESULTS from './data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DetailCard from '@/components/ui/DetailCard/DetailCard';

const Page = async ({ params }: { params: { search: string } }) => {
  const { shows, people, movies } = await GET_SEARCH_RESULTS(params.search);

  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center">
      <Tabs className="h-full bg-neutral-900 rounded-lg p-4 w-5/6 flex flex-col justify-center items-start">
        <TabsList className="bg-neutral-950 ">
          {movies.length > 0 && (
            <TabsTrigger value="movies">movies</TabsTrigger>
          )}
          {shows.length > 0 && <TabsTrigger value="shows">shows</TabsTrigger>}
          {people.length > 0 && (
            <TabsTrigger value="people">people</TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="movies" className="h-full w-full">
          {movies.length > 0 &&
            movies.map((movie: any) => (
              <DetailCard
                key={movie.id}
                props={movie}
                href={`/movies/${movie.id}`}
                image={movie.poster_path}
                popularity={movie.popularity}
                date={movie.release_date}
              />
            ))}
        </TabsContent>
        <TabsContent value="shows" className="h-full w-full">
          {shows.length > 0 &&
            shows.map((show: any) => (
              <DetailCard
                key={show.id}
                props={show}
                href={`/shows/${show.id}`}
                image={show.poster_path}
                popularity={show.popularity}
                date={show.first_air_date}
              />
            ))}
        </TabsContent>
        <TabsContent value="people" className="h-full w-full =">
          {people.length > 0 &&
            people.map((person: any) => (
              <DetailCard
                key={person.id}
                props={person}
                image={person.profile_path}
                href={`/people/${person.id}`}
                popularity={person.popularity}
              />
            ))}
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default Page;
