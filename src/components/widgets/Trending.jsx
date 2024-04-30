import { useQuery } from '@tanstack/react-query';
import TrendingCard from '../cards/TrendingCard';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
function Trending() {
  const [loading, setLoading] = useState(true);
  const { data, isFetched, isFetching, isError } = useQuery({
    queryKey: ['trendingManga'],
    staleTime: Infinity,
    queryFn: () => fetch('http://127.0.0.1:5000/trending').then((res) => res.json())
  });

  useEffect(() => {
    if (isFetched && !isError) {
      setLoading(false);
    }
  });

  return (
    <>
      {loading ? (
        <Skeleton width={1280} height={384} className="mt-10" />
      ) : (
        <div className="mt-10 h-full min-h-96 w-full max-w-7xl rounded-md border border-neutral-800 bg-neutral-950">
          <TrendingCard trendingData={data} />
        </div>
      )}
    </>
  );
}

export default Trending;
