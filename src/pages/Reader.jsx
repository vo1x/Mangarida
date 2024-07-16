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
      const url = `/read/${mangaName}.${mangaID}/${chapter}`;
      axios.get(url).then(({ data }) => {
        console.log(data);
        setPages(data.pages);
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
              <img key={page.pgNum} src={page.url} className="w-fit"></img>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Reader;
