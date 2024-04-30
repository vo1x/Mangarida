import Topbar from '../components/layout/Topbar';
import Trending from '../components/widgets/Trending';
import MostViewed from '../components/widgets/MostViewed';
import RecentlyUpdated from '../components/widgets/RecentlyUpdated';
function Home() {
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
