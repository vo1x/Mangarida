import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Topbar from './Topbar';
import ReaderBar from './ReaderBar';
import useGetCachedQueryData from '../hooks/useGetCachedQueryData';
import ChapterList from './ChapterList';
import Cookies from 'js-cookie';
import ReaderControls from './ReaderControls';
function Reader() {
  const [pages, setPages] = useState([]);
  const { mangaName, mangaID, chapter } = useParams();
  useEffect(() => {
    const getPages = async () => {
      const url = `http://127.0.0.1:5000/read/${mangaName}.${mangaID}/en/chapter-${chapter.split('-')[1]}`;
      axios.get(url).then((res) => {
        setPages(res.data);
      });
      console.log('req made');
    };
    getPages();

    // const setCookies = () => {
    //   // Retrieve existing viewed chapters or initialize as an empty array
    //   const viewedChapters = Cookies.get('viewedChapters') || '[]';

    //   // Parse the JSON string into an array
    //   const viewedChaptersArray = viewedChapters;

    //   // Check if the chapter is already viewed
    //   const isChapterViewed = viewedChaptersArray.includes(chapter);

    //   // If the chapter is not viewed, add it to the array
    //   if (!isChapterViewed) {
    //     // Add the chapter to the array
    //     const updatedViewedChapters = [...viewedChaptersArray, chapter];

    //     // Serialize the array into a JSON string and store it in the cookie
    //     Cookies.set('viewedChapters', updatedViewedChapters);
    //   }
    // };

    // setCookies();
  }, [chapter]);

  // const cachedData = useGetCachedQueryData([mangaName, mangaID]);
  // console.log('chapter list is:', cachedData.chapters);

  return (
    <>
      {/* <Topbar></Topbar> */}
      {/* <ReaderBar pgCount={pages && pages.length}></ReaderBar> */}
      <div className="relative flex justify-center bg-neutral-900">
        <div className="fixed left-0 ">
          <ReaderControls></ReaderControls>
        </div>
        {pages && pages.length > 0 && (
          <div className="mb-20 ml-52 flex max-w-screen-md flex-col place-items-center gap-1  bg-neutral-950">
            {pages.map((page) => (
              <img key={page.pg_num} src={page.pg_url} className="w-fit"></img>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Reader;
