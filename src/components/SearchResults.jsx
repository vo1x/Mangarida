import { useParams } from 'react-router-dom';
import Topbar from './Topbar';
import { useEffect, useState } from 'react';
import Card from './Card';
import CardSkeleton from './CardSkeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useQuery } from '@tanstack/react-query';

function SearchResults() {
  const { keyword } = useParams();
  // const [searchResults, setSearchResults] = useState([]);
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

  // useEffect(() => {
  //   if (isFetched && !isError) {
  //     setSearchResults(data);
  //     setIsLoading(false);
  //   }
  // }, [data, isFetched, isError]);

  // useEffect(() => {
  //   const fetchResults = async () => {
  //     try {
  //       setIsLoading(true);
  //       const url = `http://127.0.0.1:5000/search/${keyword}`;
  //       const res = await fetch(url);
  //       const data = await res.json();
  //       setSearchResults(data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching search results:', error);
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchResults();
  // }, [keyword]);

  // useEffect(() => {
  //   setImagesLoaded(false);

  //   if (!isLoading && searchResults.length > 0) {
  //     const images = [];
  //     let loadedCount = 0;
  //     searchResults.forEach((result) => {
  //       const img = new Image();
  //       img.src = result.poster_url;
  //       img.onload = () => {
  //         loadedCount++;
  //         if (loadedCount === searchResults.length) {
  //           setImagesLoaded(true);
  //         }
  //       };
  //       images.push(img);
  //     });
  //   }
  // }, [isLoading, searchResults]);

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
