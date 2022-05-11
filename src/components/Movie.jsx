import { imageUrl } from "../util/global";

import { FaHeart, FaRegHeart } from "react-icons/fa";

export const Movie = ({ movie, like }) => (
  <>
    <div className="w-[140px] sm:w-[200px] md:w-[160px] lg:w-[220px] inline-block cursor-pointer relative p-2">
      <img
        src={imageUrl + "w300" + movie.poster_path}
        alt={movie.title}
        className="w-full h-auto block"
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 text-white">
        <p className="whitespace-normal text-xs md:text-sm font-bold flex items-center justify-center h-full text-center">
          {movie.title}
        </p>
        <p>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  </>
);
