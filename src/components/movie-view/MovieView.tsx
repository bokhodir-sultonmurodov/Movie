import { IMAGE_URL } from "@/const";
import type { IMovie } from "@/types";
import React, { type FC } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FiBookmark } from "react-icons/fi"; 

interface SkeletonProps {
  count: number;
}
const Skeleton: FC<SkeletonProps> = ({ count }) => {
  return (
    <>
      {Array(count)
        .fill(null)
        .map((_, inx) => (
          <div
            key={inx}
            className="space-y-4 bg-gray-300 dark:bg-gray-500 p-4 rounded-[12px] mb-6"
          >
            <div className="h-[270px]  bg-gray-300 dark:bg-gray-600"></div>

            <div className="h-8 rounded bg-gray-300 dark:bg-gray-600 w-10/12"></div>

            <div className="h-6 rounded bg-gray-300 dark:bg-gray-600 w-6/12"></div>

            <div className="flex justify-between items-center">
              <div className="h-6 rounded bg-gray-300 dark:bg-gray-600 w-24"></div>

              <div className="h-6 rounded bg-gray-300 dark:bg-gray-600 w-16"></div>
            </div>
          </div>
        ))}
    </>
  );
};

interface Props {
  data: undefined | IMovie[];
  loading: boolean;
  count: number;
}

const MovieView: FC<Props> = ({ data, loading, count }) => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 px-4 py-6">
      {loading ? 
        <Skeleton count={count} />
      : 
        data?.map((movie: IMovie) => (
          <div
            key={movie.id}
            className="bg-white dark:bg-[#1D1D1D] rounded-[12px] overflow-hidden relative"
          >
            <div className="bg-[#1D1D1D] dark:bg-[#1D1D1D]">
              <img
                onClick={() => navigate(`/movie/${movie.id}`)}
                loading="lazy"
                src={IMAGE_URL + movie.poster_path}
                alt={movie.title}
                className="rounded-[12px] w-full object-cover cursor-pointer"
              />
            </div>
            <FiBookmark className="text-[24px] absolute top-3 right-3 cursor-pointer text-gray-300 hover:text-gray-400ey- transition" />
            
            <div className="p-4">
              <p>{movie.release_date.slice(0,4)}</p>
              <h3
                title={movie.title}
                className="text-[24px] font-semibold line-clamp-1 text-black dark:text-white"
              >
                {movie.title}
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mt-1">
                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  {movie.vote_average.toFixed(1)} 
                </span>
                {/* <span className="flex items-center gap-1">
                  <BiWorld className="align-middle" />
                  <span className="leading-none">{movie.original_language}</span>
                </span> */}
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default React.memo(MovieView);
