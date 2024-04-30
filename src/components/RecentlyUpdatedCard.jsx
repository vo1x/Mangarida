import { Link } from 'react-router-dom';

function RecentlyUpdatedCard(props) {
  const { name, poster, identifier } = props;
  const [mangaName, mangaID] = identifier && identifier.split('.');
  return (
    <>
      <Link to={`/manga/${mangaName}/${mangaID}`}>
        <div className=" relative mt-5 flex min-h-80 max-w-48 flex-col">
          <img src={poster} alt="" className=" max-h-72 min-h-72 object-cover" />
          <div className="text-md p-2 font-semibold text-slate-200">{name}</div>
        </div>
      </Link>
    </>
  );
}

export default RecentlyUpdatedCard;
