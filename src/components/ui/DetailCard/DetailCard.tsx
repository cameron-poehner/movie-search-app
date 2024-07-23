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
    <Card className="w-full h-52">
      <Link href={props.href}>
        <CardContent className="flex">
          <div className="relative w-20 h-28">
            {props.image ? (
              <Image
                src={`https://image.tmdb.org/t/p/w500${props.image}`}
                alt="image title"
                fill
              />
            ) : (
              <div>Image not Found</div>
            )}
          </div>
          <div>
            <CardTitle>{props.props.title || props.props.name}</CardTitle>
            <CardDescription>{props.props.description}</CardDescription>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default DetailCard;
