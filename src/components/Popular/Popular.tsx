import Image from 'next/image';
import Link from 'next/link';
import { formatRating } from '@/lib/utils';
import { GET_POPULAR_SHOWS } from './data';
import { Card, CardContent } from '@/components/ui/card';
import { StarFilledIcon } from '@radix-ui/react-icons';

interface Show {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
}

const Popular = async () => {
  const { results } = await GET_POPULAR_SHOWS();
  const shows = results.slice(0, 3);

  const getYear = (date: string) => {
    const year = new Date(date).getFullYear();
    return year;
  };

  return (
    <div className="w-4/6 h-full p-5 md:max-w-80 md:col-start-4 md:col-span-2 md:w-full lg:h-max lg:max-w-full">
      <h2 className="text-center text-3xl text-gray-100 my-2">Popular Shows</h2>
      <div className="grid gap-2">
        {shows.map((show: Show) => {
          return (
            <Link href={`/shows/${show.id}`} key={show.id}>
              <Card className="border-none p-2  w-full md:h-full shadow-black shadow-md">
                <CardContent className="flex h-full">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                    alt={show.name || 'show poster'}
                    width={75}
                    height={125}
                    className="rounded-lg"
                  />
                  <span className="flex flex-col ml-2 flex-wrap justify-around items-start h-32 w-full md:h-full">
                    <h3 className="text-sm tracking-wide font-semibold leading-5 text-gray-200">
                      {show.name}
                    </h3>
                    <p className="text-sm">{getYear(show.first_air_date)}</p>
                    <span className="flex justify-between w-5/6 items-center tracking-wide">
                      <StarFilledIcon className="text-yellow-500" />
                      <p>{formatRating(show.vote_average)}</p>
                      <p>{`(${show.vote_count})`}</p>
                    </span>
                  </span>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Popular;
