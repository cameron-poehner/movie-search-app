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

// To-do: Style individual card
// To-do: Map over list of upcoming movies for cards
// To-do: Style carousel

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
      className="w-4/6 max-w-80"
      opts={{
        align: 'center',
        slidesToScroll: 'auto',
        loop: true,
        inViewThreshold: 0,
      }}
    >
      <CarouselContent className="w-32 flex">
        {results.map((movie: Movie) => {
          return (
            <CarouselItem key={movie.id}>
              <Card className="h-52">
                <CardContent className="flex flex-col items-center text-sm">
                  <div className="relative h-36 w-full rounded-t-md">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      fill
                      className="rounded-t-md"
                    />
                  </div>
                  <span className="font-sans tracking-wide flex flex-col items-center mt-3 pl-2 text-xs w-full rounded-b-md">
                    <p>In theaters</p>
                    <p>{formatDate(movie.release_date)}</p>
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ComingSoon;
