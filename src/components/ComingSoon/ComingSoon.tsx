import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import GET_COMING_SOON from '@/components/data';

// To-do: Style individual card
// To-do: Map over list of upcoming movies for cards
// To-do: Style carousel

const ComingSoon = async () => {
  const data = await GET_COMING_SOON();
  console.log('GET_COMING_SOON', data);

  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <Card>
            <CardContent>
              <Image
                src={`https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`}
                alt={data.results[0].title}
                width={75}
                height={130}
              />
              <h2>{data.results[0].title}</h2>
              <p>In theaters</p>
              <p>{data.results[0].release_date}</p>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default ComingSoon;
