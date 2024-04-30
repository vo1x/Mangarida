import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function TrendingCard(props) {
  const { trendingData } = props;
  const [imagesLoaded, setImagesLoaded] = useState({ image1: false, image2: false });
  const [imageCount, setImageCount] = useState(0);
  const handleImageLoad = (imageId) => {
    setImagesLoaded((prevState) => ({
      ...prevState,
      [imageId]: true
    }));
  };

  const [currentPage, setCurrentPage] = useState(0);
  return (
    <>
      {/* {(!imagesLoaded.image1 || !imagesLoaded.image2 || !trendingData) && (
        <Skeleton width={1280} height={384} className="z-10" />
      )} */}
      <div
        className={`relative w-full overflow-hidden text-white ${!imagesLoaded.image1 || !imagesLoaded.image2 ? 'hidden' : ''}`}
      >
        <div className="relative">
          <img
            src={trendingData[currentPage].poster_url}
            alt=""
            onLoad={() => handleImageLoad('image1')}
            className="absolute inset-0 z-0 w-full object-cover blur-lg"
          />
          <div className="absolute inset-0 h-96 w-full bg-black/50 "> </div>
        </div>
        <div className="relative z-10 flex justify-between ">
          <div className="flex max-w-2xl flex-col justify-center gap-2 pl-10">
            <div className="flex flex-col ">
              <div className="capitalize text-white ">
                Chapter: <span>{trendingData[currentPage].latest_chapter.chapter}</span> - Volume:{' '}
                <span>{trendingData[currentPage].latest_chapter.volume}</span>
              </div>

              <div className=" w-max overflow-hidden text-wrap text-2xl font-bold capitalize">
                <Link
                  to={`/manga/${trendingData[currentPage].identifier.split('.')[0]}/${trendingData[currentPage].identifier.split('.')[1]}`}
                >
                  {trendingData[currentPage].name}
                </Link>
              </div>
            </div>
            <div className="max-w-xl text-white">{trendingData[currentPage].description}</div>
            <div className="mt-3 flex w-max gap-3 text-xs capitalize">
              {trendingData[currentPage].genres.map((genre, i) => (
                <div key={i} className="rounded-md border bg-neutral-100/10 px-2 py-1">
                  {genre}
                </div>
              ))}
            </div>
            <div className="mt-7 flex gap-3">
              <Link
                to={`/read/${trendingData[currentPage].identifier.split('.')[0]}/${trendingData[currentPage].identifier.split('.')[1]}/chapter-1`}
              >
                <div className="rounded-md bg-neutral-100 px-4 py-2 font-bold text-neutral-950">
                  Read Now
                </div>
              </Link>
              <Link
                to={`/manga/${trendingData[currentPage].identifier.split('.')[0]}/${trendingData[currentPage].identifier.split('.')[1]}`}
              >
                <div className="rounded-md border border-neutral-100 px-4 py-2 font-bold text-neutral-100 hover:bg-neutral-100/20">
                  View Info
                </div>
              </Link>
            </div>
          </div>
          <div className="mr-60 min-h-96 shadow-2xl">
            <img
              src={trendingData[currentPage].poster_url}
              alt=""
              onLoad={() => handleImageLoad('image2')}
              className="h-full max-h-96  rotate-12 scale-125 border-[10px] border-y-0 border-white "
            />
          </div>
        </div>
        <div className="absolute bottom-0 right-0 z-10 mb-10 mr-10 flex gap-2">
          <button
            className="cursor-pointer rounded-full border bg-white p-2 text-xl text-neutral-950"
            onClick={() =>
              setCurrentPage((prev) => (prev === 0 ? trendingData.length - 1 : prev - 1))
            }
          >
            <FiArrowLeft></FiArrowLeft>
          </button>
          <button
            className="cursor-pointer rounded-full border bg-white p-2 text-xl text-neutral-950"
            onClick={() =>
              setCurrentPage((prev) => (prev === trendingData.length - 1 ? 0 : prev + 1))
            }
          >
            <FiArrowRight></FiArrowRight>
          </button>
        </div>
      </div>
    </>
  );
}

export default TrendingCard;
