import Link from 'next/link';
import Image from 'next/image';
import { HeartFilledIcon } from '@radix-ui/react-icons';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { formatDate } from '@/lib/utils';

interface Details {
  id: number;
}

const DetailCard = (props: any) => {
  console.log('🚀 props', props);
  return (
    <Card className="w-full h-full shadow-md shadow-neutral-950 mt-2 border-white">
      <Link href={props.href}>
        <CardContent className="flex">
          <div className="relative max-w-20 w-full h-max min-h-28">
            {props.image ? (
              <Image
                src={`https://image.tmdb.org/t/p/w500${props.image}`}
                alt="image title"
                fill
                className="rounded-lg rounded-r-none  object-fit"
              />
            ) : (
              <div>Image not Found</div>
            )}
          </div>
          <div className="flex flex-col flex-wrap items-start justify-around ml-2">
            <CardTitle className="text-xs font-medium tracking-normal">
              {props.props.title || props.props.name}
            </CardTitle>
            <CardDescription className="text-xs">
              {props.props.release_date &&
                formatDate(props.props.release_date, 'year')}
              {props.props.first_air_date &&
                formatDate(props.props.first_air_date, 'year')}
            </CardDescription>
            <CardFooter className="text-xs flex w-4/6">
              <HeartFilledIcon className="text-red-500 " />
              <p className="ml-2 tracking-wider">
                {Math.round(props.props.popularity)}
              </p>
            </CardFooter>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default DetailCard;
