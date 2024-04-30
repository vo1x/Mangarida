import { useParams } from 'react-router-dom';
import Topbar from '../components/layout/Topbar';
import { useEffect, useState } from 'react';
import Card from '../components/cards/Card';
import CardSkeleton from '../components/cards/CardSkeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useQuery } from '@tanstack/react-query';

function SearchResults() {
  const { keyword } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const {
    data: searchResults,
    isFetched,
    isError,
    isFetching
  } = useQuery({
    queryKey: [keyword],
    staleTime: Infinity,
    queryFn: () => fetch(`http://127.0.0.1:5000/search/${keyword}`).then((res) => res.json())
  });

  return (
    <>
      <Topbar />
      <div className="mx-10 my-5 flex justify-center">
        <div className="mb-6 grid max-w-screen-xl grid-cols-5 gap-10">
          {isFetching ? (
            <CardSkeleton cards={15} />
          ) : searchResults && searchResults.length > 0 ? (
            searchResults.map((result) => (
              <Card
                key={result.identifier.split('.')[1]}
                name={result.name}
                type={result.type}
                poster={result.poster_url}
                identifier={result.identifier}
                className=""
              />
            ))
          ) : (
            'No results found'
          )}

          {}
        </div>
      </div>
    </>
  );
}

export default SearchResults;
