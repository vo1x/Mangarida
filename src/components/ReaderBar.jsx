// import Topbar from './Topbar';
import Header from './Header';
import SearchBar from './SearchBar';
import { useParams } from 'react-router-dom';
import useGetCachedQueryData from '../hooks/useGetCachedQueryData';
import ChapterList from './ChapterList';
import { useCallback, useState } from 'react';

function ReaderBar() {
  const { mangaName, mangaID, chapter } = useParams();
  // const cachedData = useGetCachedQueryData([mangaName, mangaID]);

  return (
    <>
      <div className="sticky top-0 z-50 w-full border-b border-neutral-900 bg-black shadow-md backdrop-blur-md">
        <div className="flex items-center justify-between p-3 px-10">
          <Header></Header>
          <div className="relative flex w-full max-w-lg justify-center ">
            <span> {chapter}</span>
          </div>
          <SearchBar></SearchBar>
        </div>
      </div>
    </>
  );
}

export default ReaderBar;
