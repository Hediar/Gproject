import BottomBar from '@/components/BottomBar/BottomBar';
import LeftChartBar from '@/components/LeftBar/LeftChartBar';
import KakaoMap from '@/components/Map/KakaoMap';
import NavBar from '@/components/NavBar/NavBar';
import RightBar from '@/components/RightBar/RightBar';

// export const revalidate = 1;

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="">
        <KakaoMap />
        <div className="relative">
          <LeftChartBar />
          <BottomBar />
          <RightBar />
        </div>
      </main>
    </>
  );
}
