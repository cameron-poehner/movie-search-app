import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';

interface Details {
  id: number;
}

const DetailCard = (props: any) => {
  console.log('🚀 props', props);
  return (
    <Card className="w-full h-full mt-2 border-white">
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
          <div className="flex flex-col flex-wrap items-start ml-2">
            <CardTitle className="text-xs">
              {props.props.title || props.props.name}
            </CardTitle>
            <CardDescription>
              {props.props.release_date || props.props.first_air_date}
            </CardDescription>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default DetailCard;
