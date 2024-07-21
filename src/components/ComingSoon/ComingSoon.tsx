import Link from 'next/link';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import GET_COMING_SOON from '@/components/data';

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
}

const ComingSoon = async () => {
  const results = await GET_COMING_SOON();

  const formatDate = (date: string) => {
    const dateToConvert = new Date(date);
    const convert = Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
    }).format(dateToConvert);
    return convert;
  };

  return (
    <Carousel
      className="w-4/6 sm:w-5/6 md:w-4/6 self-center md:row-start-2 md:col-span-6 md:justify-self-center xl:w-1/2"
      opts={{
        align: 'center',
        slidesToScroll: 2,
        loop: true,
        inViewThreshold: 0,
      }}
    >
      <h2 className="text-center text-3xl text-gray-100 my-2">Coming Soon</h2>
      <CarouselPrevious className="absolute z-10 left-0 bg-gray-400 bg-opacity-20 hover:bg-gray-600" />
      <CarouselContent className="w-32 flex">
        {results.map((movie: Movie) => {
          return (
            <CarouselItem key={movie.id}>
              <Link href={`/movies/${movie.id}`}>
                <Card className="h-52">
                  <CardContent className="flex flex-col items-center text-sm">
                    <div className="relative h-36 w-full rounded-t-md">
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        fill
                        sizes="(min-width:320px) 50vw, 50vh"
                        className="rounded-t-md"
                      />
                    </div>
                    <span className="font-sans tracking-wide flex flex-col items-center mt-3 pl-2 text-xs w-full rounded-b-md">
                      <p>In theaters</p>
                      <p>{formatDate(movie.release_date)}</p>
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselNext className="absolute z-10 right-0 bg-gray-400 bg-opacity-20 hover:bg-gray-600" />
    </Carousel>
  );
};

export default ComingSoon;
