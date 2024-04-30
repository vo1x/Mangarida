import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
function CardSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div className="flex max-w-48 flex-col gap-2" key={i}>
        <div>
          <Skeleton width={192} height={272} />
        </div>
        <div className="flex flex-col gap-1">
          <Skeleton height={20} width={160} />
          <Skeleton height={20} width={100} />
        </div>
      </div>
    ));
}

export default CardSkeleton;
