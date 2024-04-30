import { FiChevronDown, FiInfo } from 'react-icons/fi';
import Header from '../layout/Header';
import { useParams, Link } from 'react-router-dom';
import ChapterList from './ChapterList';
import ChapterPicker from './ChapterPicker';
import { RiExpandUpDownFill } from 'react-icons/ri';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
function ReaderControls() {
  const { mangaName, mangaID, chapter } = useParams();
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const togglePicker = () => setIsPickerOpen((isPickerOpen) => !isPickerOpen);
  return (
    <>
      <div className="flex gap-1">
        <div className="z-50 flex min-h-svh w-56 flex-col justify-between bg-neutral-950 p-5 ">
          <div className="flex flex-col gap-3">
            <Header></Header>
            <span className=" w-full border-b border-neutral-700 "></span>
            <div className="flex max-w-44 flex-col">
              {/* <FiChevronDown /> */}
              <span className="text-lg font-bold capitalize">{mangaName.replace('-', ' ')}</span>
              <div className="mt-3 flex flex-col gap-2 ">
                <span className="w-full rounded-md border border-neutral-700 bg-neutral-900 p-2 text-center  text-base">
                  Language: EN
                </span>
                <button
                  onClick={togglePicker}
                  className={`${isPickerOpen ? 'bg-neutral-100 text-neutral-950' : 'bg-neutral-900 text-neutral-100'} flex w-full items-center justify-center gap-1 rounded-md border border-neutral-700 p-2 text-center  text-base transition-all duration-300 `}
                >
                  <span>Chapter: {chapter.split('-')[1]}</span>
                  <span className="text-lg ">
                    <RiExpandUpDownFill />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className=" w-full border-b border-neutral-700 "></span>
            <Link to={`/manga/${mangaName}/${mangaID}/`}>
              <div className="flex w-full cursor-pointer items-center gap-2 rounded-md p-2 text-center text-base text-neutral-400 transition-all duration-300 hover:text-neutral-100 ">
                <FiInfo></FiInfo>
                <span>Manga Details</span>
              </div>
            </Link>
          </div>
        </div>
        <AnimatePresence>
          {isPickerOpen && (
            <motion.div
              initial={{ translateX: -300 }}
              animate={{ translateX: 0 }}
              exit={{ translateX: -300 }}
              transition={{ type: 'tween', duration: 0.1 }}
            >
              <ChapterPicker mangaName={mangaName} mangaID={mangaID} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default ReaderControls;
