import Image from 'next/image';
import { GET_POPULAR_SHOWS } from './data';
import { Card, CardContent } from '@/components/ui/card';

interface Show {
  id: number;
  name: string;
  poster_path?: string;
  first_air_date?: string;
  vote_average?: number;
  vote_count?: number;
}

const Popular = async () => {
  const { results } = await GET_POPULAR_SHOWS();
  const shows = results.slice(0, 3);
  console.log('🎉 Resulst', shows);

  return (
    <div className="flex-col w-4/6 md:max-w-80">
      <h2 className="text-3xl text-gray-100 m-0 p-0">Popular Shows</h2>
      <div>
        {shows.map((show: Show) => {
          return (
            <Card key={show.id} className="border-none p-2 my-1 w-full">
              <CardContent className="flex h-auto">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                  alt={show.name || 'show poster'}
                  width={75}
                  height={125}
                  className="rounded-lg"
                />
                <span className="">
                  <h3 className="text-sm font-medium leading-5 text-gray-200">
                    {show.name}
                  </h3>
                  <p>{show.first_air_date}</p>
                  <span>
                    <p>{show.vote_average}</p>
                    <p>{show.vote_count}</p>
                  </span>
                </span>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
export default Popular;
