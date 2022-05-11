import { useQuery } from "react-query";

import { useState } from "react";
import { Movie } from "./Movie";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const Row = ({ title, fetchFunc, queryKey }) => {
  const { data, isSuccess } = useQuery(queryKey, fetchFunc);

  const [like, setLike] = useState(false);

  const slider = document.querySelector("#popularSlider" + queryKey);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          size={40}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          onClick={() => (slider.scrollLeft -= 1000)}
        />
        <div
          id={"popularSlider" + queryKey}
          className="overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {isSuccess &&
            data.data.results.map((movie, id) => (
              <Movie movie={movie} like={like} setLike={setLike} key={id} />
            ))}
        </div>
        <MdChevronRight
          size={40}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          onClick={() => (slider.scrollLeft += 1000)}
        />
      </div>
    </>
  );
};
