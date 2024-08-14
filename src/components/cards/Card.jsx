import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css';
import { motion } from 'framer-motion';
import CardSkeleton from './CardSkeleton';

function Card(props) {
  const { name, type, poster, slug, comicId } = props;
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <Link to={`/comic/${comicId}`}>
        <div className="min-h-80 max-w-48 rounded-md ">
          {!imageLoaded && <CardSkeleton />}
          <div style={{ display: imageLoaded ? 'block' : 'none' }}>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: imageLoaded ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              src={poster}
              alt=""
              className="h-full max-h-72 min-h-72 object-contain"
              onLoad={handleImageLoad}
            />
            <div className="">
              <div className="text-sm font-bold text-neutral-100">{name}</div>
              <div className="text-xs  text-neutral-400">{type}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
