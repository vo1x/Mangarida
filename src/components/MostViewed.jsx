import { useQuery } from '@tanstack/react-query';
import MostViewedCard from './MostViewedCard';
import { useState } from 'react';
import CardSkeleton from './CardSkeleton';

function MostViewed() {
  const {
    data: mostViewed,
    isFetching,
    isFetched,
    isError
  } = useQuery({
    queryKey: ['mostViewed'],
    staleTime: Infinity,
    queryFn: () => fetch('http://127.0.0.1:5000/most_viewed').then((res) => res.json())
  });

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTab = (type) =>
    type === 'day'
      ? setActiveTabIndex(0)
      : type === 'week'
        ? setActiveTabIndex(1)
        : setActiveTabIndex(2);

  return (
    <>
      <div className="relative flex h-max flex-col items-center  ">
        <div className=" ">
          <div className="flex items-center justify-between">
            <div className="  text-3xl font-bold uppercase text-neutral-100">Most Viewed</div>

            <div className="flex w-max items-center gap-3  p-1 text-sm text-neutral-400">
              <div
                className={`w-max cursor-pointer  rounded-md ${activeTabIndex === 0 ? 'rounded-none border-b text-neutral-100' : 'border-b border-b-black hover:bg-neutral-900 hover:text-neutral-100'} p-2 text-center`}
                onClick={() => handleTab('day')}
              >
                Day
              </div>
              <div
                onClick={() => handleTab('week')}
                className={`w-max cursor-pointer ${activeTabIndex === 1 ? 'border-b text-neutral-100' : 'rounded-md border-b border-b-black hover:bg-neutral-900 hover:text-neutral-100'} p-2 text-center`}
              >
                Week
              </div>
              <div
                onClick={() => handleTab('month')}
                className={`w-max cursor-pointer ${activeTabIndex === 2 ? 'border-b text-neutral-100' : ' rounded-md border-b border-b-black hover:bg-neutral-900 hover:text-neutral-100'} p-2 text-center`}
              >
                Month
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-10 gap-y-5">
            {isFetching ? (
              <CardSkeleton cards={10} />
            ) : mostViewed && activeTabIndex === 0 ? (
              mostViewed.day.map((item) => (
                <MostViewedCard
                  name={item.name}
                  rank={item.rank}
                  poster={item.poster_url}
                  identifier={item.identifier}
                />
              ))
            ) : mostViewed && activeTabIndex === 1 ? (
              mostViewed.week.map((item) => (
                <MostViewedCard
                  name={item.name}
                  rank={item.rank}
                  poster={item.poster_url}
                  identifier={item.identifier}
                />
              ))
            ) : (
              mostViewed &&
              mostViewed.month.map((item) => (
                <MostViewedCard
                  name={item.name}
                  rank={item.rank}
                  poster={item.poster_url}
                  identifier={item.identifier}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MostViewed;
