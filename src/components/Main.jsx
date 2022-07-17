import { useQuery } from "react-query";

import { imageUrl } from "../util/global";
import { getPopularMovies } from "../util/API";

export const Main = () => {
  const { data, isSuccess } = useQuery("popularMovies", getPopularMovies);

  let randomPopularMovie =
    isSuccess &&
    data.data.results[Math.floor(Math.random() * data.data.results.length)];

  return (
    <div className="text-white w-full h-[550px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          src={imageUrl + "original" + randomPopularMovie.backdrop_path}
          alt={randomPopularMovie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">
            {randomPopularMovie.title}
          </h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border  text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {randomPopularMovie.release_date}
          </p>
          <p className="w-[100%]  lg:max-w-[50%] xl:max-w-[35%] text-gray-400  my-4">
            {randomPopularMovie.overview}
          </p>
        </div>
      </div>
    </div>
  );
};
