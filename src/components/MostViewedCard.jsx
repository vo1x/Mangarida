import { Link } from 'react-router-dom';

function MostViewedCard(props) {
  const { name, rank, poster, identifier } = props;
  const [mangaName, mangaID] = identifier && identifier.split('.');
  return (
    <>
      <Link to={`/manga/${mangaName}/${mangaID}`}>
        <div className=" relative mt-5 flex min-h-80 max-w-48 flex-col ">
          <img src={poster} alt="" className=" max-h-72 min-h-72 object-cover " />
          <div className="flex items-center gap-3 p-2">
            <div className="rounded-md text-2xl font-bold text-neutral-400">#{rank}</div>
            <div className="text-sm font-bold text-neutral-100">{name}</div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MostViewedCard;
