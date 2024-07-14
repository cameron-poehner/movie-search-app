import Image from 'next/image';
import { GET_POPULAR_SHOWS } from './data';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface Show {
  id: number;
  name: string;
  poster_path?: string;
}

const Popular = async () => {
  const { results } = await GET_POPULAR_SHOWS();
  console.log('🎉 Resulst', results);

  return (
    <Carousel orientation="vertical">
      <CarouselPrevious />
      <CarouselContent>
        {results.map((show: Show) => {
          return (
            <CarouselItem key={show.id}>
              <Card className="border-none">
                <CardContent className="h-10 relative">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                    alt={show.name || 'show poster'}
                    fill
                    className="rounded-lg"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
};
export default Popular;
