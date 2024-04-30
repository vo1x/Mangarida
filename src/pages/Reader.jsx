import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReaderControls from '../components/manga/ReaderControls';
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
  }, [chapter]);

  return (
    <>
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
