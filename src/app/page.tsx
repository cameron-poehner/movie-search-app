import Image from 'next/image';
import NowPlaying from '@/components/NowPlaying/NowPlaying';
import Popular from '@/components/Popular/Popular';
import ComingSoon from '@/components/ComingSoon/ComingSoon';
export default function Home() {
  return (
    <main>
      <div className="grid h-full justify-items-center items-center grid-rows-3 md:grid-rows-2 gap-12 md:grid-cols-6 md:gap-2">
        <NowPlaying />
        <Popular />
        <ComingSoon />
      </div>
    </main>
  );
}
