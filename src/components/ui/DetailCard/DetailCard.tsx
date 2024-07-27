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
  href: string;
  image: string;
  name: string;
  popularity: number;
  date?: string;
}

const DetailCard: React.FC<Details> = ({
  image,
  href,
  name,
  date,
  popularity,
}) => {
  return (
    <Card className="w-full  h-auto flex-grow shadow-md shadow-neutral-950 mt-2 border-white md:w-auto lg:max-w-5/6">
      <Link href={href}>
        <CardContent className="flex w-full lg:max-w-5/6">
          <div className="relative max-w-20 w-full min-h-28 h-full">
            {image ? (
              <Image
                src={`https://image.tmdb.org/t/p/w500${image}`}
                alt="image title"
                fill
                className="rounded-lg rounded-r-none  object-fit"
              />
            ) : (
              <div className="min-h-28 h-fit bg-neutral-700 z-10 rounded-l-lg blur-[2px] text-sm flex flex-col justify-center text-center">
                Image Not Available
              </div>
            )}
          </div>
          <div className="flex flex-col flex-wrap items-start justify-around ml-2">
            <CardTitle className="text-xs font-medium tracking-normal text-wrap">
              {name}
            </CardTitle>
            <CardDescription className="text-xs">
              {date && formatDate(date, 'year')}
            </CardDescription>
            <CardFooter className="text-xs flex">
              <HeartFilledIcon className="text-red-500 " />
              <p className="ml-2 tracking-wider">{Math.round(popularity)}</p>
            </CardFooter>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default DetailCard;
