import { useQuery } from '@tanstack/react-query';
import RecentlyUpdatedCard from './RecentlyUpdatedCard';

function RecentlyUpdated() {
  const { data: recentlyUpdated } = useQuery({
    queryKey: ['recentlyUpdated'],
    staleTime: Infinity,
    queryFn: () => fetch('http://127.0.0.1:5000/recent').then((res) => res.json())
  });

  return (
    <>
      <div className="relative mb-10 flex h-max flex-col">
        <div className="text-3xl font-bold uppercase text-neutral-100">Recently Updated</div>

        <div className="grid grid-cols-5 gap-10 gap-y-5">
          {recentlyUpdated &&
            recentlyUpdated.map((item) => (
              <RecentlyUpdatedCard
                name={item.name}
                rank={item.rank}
                poster={item.poster_url}
                identifier={item.identifier}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default RecentlyUpdated;
