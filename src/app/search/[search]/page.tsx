import GET_SEARCH_RESULTS from './data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DetailCard from '@/components/ui/DetailCard/DetailCard';

const Page = async ({ params }: { params: { search: string } }) => {
  const { shows, people, movies } = await GET_SEARCH_RESULTS(params.search);

  return (
    <main className="h-auto min-h-screen w-full flex flex-col justify-center items-center">
      <Tabs className="h-full flex flex-col justify-center items-center my-20">
        <TabsList className="bg-neutral-950">
          {movies && <TabsTrigger value="movies">movies</TabsTrigger>}
          {shows && <TabsTrigger value="shows">shows</TabsTrigger>}
          {people.length > 1 && (
            <TabsTrigger value="people">people</TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="movies" className="h-full">
          {movies.map((movie: any) => (
            <DetailCard
              key={movie.id}
              props={movie}
              href={`/movies/${movie.id}`}
              image={movie.poster_path}
            />
          ))}
        </TabsContent>
        <TabsContent value="shows" className="h-full w-full">
          {shows.map((show: any) => (
            <DetailCard
              key={show.id}
              props={show}
              href={`/shows/${show.id}`}
              image={show.poster_path}
            />
          ))}
        </TabsContent>
        <TabsContent value="people" className="h-full w-full">
          {people.map((person: any) => (
            <DetailCard
              key={person.id}
              props={person}
              image={person.profile_path}
              href={`/people/${person.id}`}
            />
          ))}
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default Page;
