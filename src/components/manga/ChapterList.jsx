import { Link } from 'react-router-dom';
import { FiLoader } from 'react-icons/fi';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import axios from 'axios';

function ChapterList(props) {
  const { mangaName, mangaID } = props;
  const { data: chapters } = useQuery({
    queryKey: [mangaName, mangaID, 'chapters'],
    staleTime: Infinity,
    gcTime: 60 * 60 * 1000,
    queryFn: async () =>
      await axios.get(`/chapters/${mangaName}.${mangaID}/`).then((res) => res.data)
  });
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="no-scrollbar flex max-h-svh min-h-96 max-w-screen-lg flex-col overflow-auto rounded-md border border-neutral-700 bg-neutral-950 text-neutral-400 outline-none">
      <div className="sticky top-0 z-10 bg-black">
        <div className="flex items-center justify-between border-b border-b-neutral-700 bg-black px-7 py-3">
          <div className="text-lg font-bold">Chapter List</div>
          <div>
            <input
              type="number"
              min={0}
              onChange={(e) => setInputValue(e.target.value)}
              className="rounded-md border border-neutral-700 bg-neutral-900 p-2 text-neutral-100 outline-none placeholder:text-neutral-500"
              placeholder="Chapter Number"
            />
          </div>
        </div>
      </div>
      {chapters && chapters.chapters.length > 0 ? (
        inputValue === '' ? (
          chapters.chapters.map((chapter) => (
            <Link to={`/read/${mangaName}/${mangaID}/chapter-${chapter.chNum}`} key={chapter.chNum}>
              <div className="flex  justify-between border-b border-neutral-800 p-3 px-7 transition-colors duration-300 hover:bg-neutral-900 hover:text-neutral-100">
                <div>
                  <span>{chapter.title}</span>
                </div>
                <span>{chapter.publishedOn}</span>
              </div>
            </Link>
          ))
        ) : (
          chapters.chapters
            .filter((chapter) => parseInt(chapter.chNum) === parseInt(inputValue))
            .map((chapter) => (
              <Link
                to={`/read/${mangaName}/${mangaID}/chapter-${chapter.chNum}`}
                key={chapter.chNum}
              >
                <div className="flex  justify-between border-b border-neutral-800 p-3 px-7 transition-colors duration-300 hover:bg-neutral-900 hover:text-neutral-100">
                  <div>
                    <span>{chapter.title}</span>
                  </div>
                  <span>{chapter.publishedOn}</span>
                </div>
              </Link>
            ))
        )
      ) : (
        <div className="flex max-h-96 min-h-96 flex-col items-center justify-center text-neutral-400 outline-none">
          <FiLoader className="animate-spin text-5xl" />
          <span className="text-lg">Loading chapters</span>
        </div>
      )}
    </div>
  );
}

export default ChapterList;
