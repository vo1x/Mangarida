// import { useQuery } from '@tanstack/react-query';
import Topbar from './Topbar';
import Trending from './Trending';
import MostViewed from './MostViewed';
import RecentlyUpdated from './RecentlyUpdated';
function Home() {
  // const { data: trendingData } = useQuery({
  //   queryKey: ['trendingManga'],
  //   staleTime: Infinity,
  //   queryFn: () => fetch('http://127.0.0.1:5000/trending').then((res) => res.json())
  // });

  return (
    <>
      <Topbar />
      <div className="flex flex-col items-center gap-20">
        <Trending />
        <MostViewed />
        <RecentlyUpdated />
      </div>
    </>
  );
}

export default Home;
