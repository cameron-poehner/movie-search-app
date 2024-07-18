import Image from 'next/image';
import NowPlaying from '@/components/NowPlaying/NowPlaying';
import Popular from '@/components/Popular/Popular';
import ComingSoon from '@/components/ComingSoon/ComingSoon';
export default function Home() {
  return (
    <main>
      <div className="grid h-full justify-items-center items-center grid-rows-4 gap-12">
        <NowPlaying />
        <Popular />
        <ComingSoon />
      </div>
    </main>
  );
}
