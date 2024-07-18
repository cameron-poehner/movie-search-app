'use client';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface Movie {
  id: number;
  poster_path?: string;
  title?: string;
}

const NowPlaying = () => {
  const [results, setResults] = useState([]);

  const segment: any = {
    host: process.env.NEXT_PUBLIC_MOVIE_DB_HOST_NAME,
    path: '/3/movie/now_playing',
    params: `?language=en-US&api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}`,
  };

  const url = `${segment.host}${segment.path}${segment.params}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results);
      })
      .catch((err) => console.error('🛑', err));
  }, [url]);

  return (
    <Carousel
      className="w-4/6 mt-8 md:max-w-80"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <h1 className="text-3xl text-gray-100">Now Playing</h1>
      <CarouselContent className="bg-transparent">
        {results.map((movie: Movie) => {
          return (
            <CarouselItem key={movie.id}>
              <Card className="border-none">
                <CardContent className="h-96 relative">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title || 'movie poster'}
                    fill
                    className="rounded-lg"
                  />
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

export default NowPlaying;
