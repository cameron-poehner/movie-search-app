import Image from 'next/image';
import Link from 'next/link';
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
  console.log('🎉 Resulst', shows);

  const dateConverter = (date: string) => {
    const dateToConvert = new Date(date);
    const convert = Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(dateToConvert);
    console.log('📆 Date', convert);
    return convert;
  };

  const getYear = (date: string) => {
    const year = new Date(date).getFullYear();
    console.log('🎊 Year', year);
    return year;
  };

  const formatRating = (rating: number) => {
    return Math.floor(rating * 10) / 10;
  };

  console.log('Converted Date', dateConverter('2022-01-01'));

  return (
    <div className="flex-col w-4/6 md:max-w-80">
      <h2 className="text-3xl text-gray-100 m-0 p-0">Popular Shows</h2>
      <div>
        {shows.map((show: Show) => {
          return (
            <Link href={`/shows/${show.id}`} key={show.id}>
              <Card className="border-none p-2 my-1 w-full">
                <CardContent className="flex h-full">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                    alt={show.name || 'show poster'}
                    width={75}
                    height={125}
                    className="rounded-lg"
                  />
                  <span className="flex flex-col ml-2 flex-wrap justify-around items-start h-32 w-full">
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
