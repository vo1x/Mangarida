import { Link } from 'react-router-dom';

function RecentlyUpdatedCard(props) {
  const { name, poster, identifier } = props;
  const [mangaName, mangaID] = identifier && identifier.split('.');
  return (
    <>
      <Link to={`/manga/${mangaName}/${mangaID}`}>
        <div className=" relative mt-5 flex max-h-80 max-w-56 flex-col  rounded-md border border-neutral-700 bg-neutral-900 bg-gradient-to-b from-neutral-500 to-neutral-950">
          <img src={poster} alt="" className=" min-h-0 object-cover" />
          <div className="text-md p-2 font-bold text-slate-100">{name}</div>
        </div>
      </Link>
    </>
  );
}

export default RecentlyUpdatedCard;
