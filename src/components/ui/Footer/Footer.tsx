import Image from 'next/image';

const Footer = async () => {
  return (
    <footer className="bg-neutral-950 text-sm w-full h-max p-20 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <a
          href="https://www.themoviedb.org/"
          title="TMDB"
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 w-20 relative"
        >
          <Image
            src={`https://image.tmdb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg`}
            alt="TMDB logo"
            fill
            sizes="50vw"
            className="m-0 p-0"
          />
        </a>
        <p>
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
