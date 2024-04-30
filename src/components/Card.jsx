import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css';
import CardSkeleton from './CardSkeleton';
import { motion } from 'framer-motion';

function Card(props) {
  const { name, type, poster, identifier } = props;
  const [imageLoaded, setImageLoaded] = useState(false);

  const [mangaName, mangaID] = identifier && identifier.split('.');

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <Link to={`/manga/${mangaName}/${mangaID}`}>
        <div className="min-h-80 max-w-48 rounded-md ">
          {/* {!imageLoaded && <CardSkeleton />} */}
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
            <div className="p-2">
              <div className="text-md font-bold text-slate-100">{name}</div>
              <div className="text-sm font-bold text-slate-400">{type}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
