import { Link } from 'react-router-dom';

function MostViewedCard(props) {
  const { name, rank, poster, identifier } = props;
  const [mangaName, mangaID] = identifier && identifier.split('.');
  return (
    <>
      <Link to={`/manga/${mangaName}/${mangaID}`}>
        <div className=" relative mt-5 flex max-h-80 max-w-56 flex-col rounded-md border border-neutral-700 bg-neutral-900 bg-gradient-to-b from-neutral-500 to-neutral-950">
          <img src={poster} alt="" className=" object-cover min-h-0 " />
          <div className="flex items-center gap-3 p-2">
            <div className="rounded-md text-2xl font-bold text-neutral-400">
              #{rank}
            </div>
            <div className="text-sm font-bold text-neutral-100">{name}</div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MostViewedCard;
