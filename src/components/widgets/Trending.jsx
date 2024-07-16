import { useQuery } from '@tanstack/react-query';
import TrendingCard from '../cards/TrendingCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
function Trending() {
  const [loading, setLoading] = useState(true);
  const { data, isFetched, isFetching, isError } = useQuery({
    queryKey: ['trendingManga'],
    staleTime: Infinity,
    queryFn: () => axios.get('/trending').then((response) => response.data)
  });

  console.log(data);

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
          <TrendingCard trendingData={data.results} />
        </div>
      )}
    </>
  );
}

export default Trending;
