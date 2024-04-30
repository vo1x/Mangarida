import Topbar from './Topbar';
import Trending from './Trending';
import MostViewed from './MostViewed';
import RecentlyUpdated from './RecentlyUpdated';
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
