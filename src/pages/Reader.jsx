import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ReaderControls from '../components/manga/ReaderControls';

function Reader() {
  const { chapterId } = useParams();

  const { data: pages } = useQuery({
    queryKey: [chapterId, 'pages'],
    staleTime: Infinity,
    gcTime: 60 * 60 * 1000 * 24,
    queryFn: async () => await axios.get(`/read/${chapterId}`).then((res) => res.data.pages)
  });

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
