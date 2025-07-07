import React, { type FC, useState } from "react";
import { IMAGE_URL } from "@/const";
import type { IMovie } from "@/types";
import { useMovie } from "@/api/hooks/useMovie";
import next from "@/assets/Vector.png"
import prev from "@/assets/Vector (1).png"
import { useNavigate } from "react-router-dom";
import CarouselSkeleton from "./CarouselSkeleton";
interface CarouselProps {
  data: undefined | IMovie[];
}

const Carousel: FC<CarouselProps> = () => {
  const { getMovies } = useMovie();
  const { data,isLoading } = getMovies({ page: 1, without_genres: "18,36,27,10749" });

  const movies: IMovie[] = data?.results?.slice(0, 5) || [];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = (): void => {
    setCurrentIndex((prev) => (prev - 1 + movies.length) % movies.length);
  };

  const nextSlide = (): void => {
    setCurrentIndex((prev) => (prev + 1) % movies.length);
  };
  const navigate = useNavigate()
  if (isLoading) return <CarouselSkeleton count={5} />;

  return (
   
    <div className="w-full container mx-auto space-y-4 mb-6 relative">

      <div className="relative w-full h-[350px] rounded overflow-hidden ">
        {movies[currentIndex] && (
          <img
            src={IMAGE_URL + (movies[currentIndex].backdrop_path || movies[currentIndex].poster_path)}
            alt={movies[currentIndex].title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="flex items-center justify-center gap-3 mt-2 relative">

        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="w-12 h-12 rounded-full hover:bg-gray-800 transition flex items-center justify-center cursor-pointer"
        >
          <img
            src={prev}
            alt="Previous"
            className=" object-contain"
          />
        </button>

        <div className="flex gap-3  px-1">
          {movies.map((movie: IMovie, i: number) => (
            <div
              key={movie.id}
              onClick={() => setCurrentIndex(i)}
              className={`cursor-pointer rounded-full p-1 transition-all duration-300 ${i === currentIndex ? " translate-y-1" : "bg-transparent"
                }`}
            >
              <img
                src={IMAGE_URL + (movie.poster_path || movie.backdrop_path)}
                alt={movie.title}
                className={`w-24 h-16 object-cover rounded cursor-pointer transition-transform duration-300 ${i === currentIndex ? "scale-105" : "scale-100"
                  }`}
                draggable={false}
              />
            </div>
          ))}
        </div>


        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="w-12 h-12 rounded-full hover:bg-gray-800 transition flex items-center justify-center cursor-pointer"
        >
          <img
            src={next}
            alt="Next"
            className=" object-contain"
          />
        </button>

      </div>
     <div className="flex justify-end mb-4">
  <button
    onClick={() => navigate("/movies")}
    className="cursor-pointer flex items-center gap-2 text-sm md:text-base font-medium text-black dark:text-[#C61F1F] hover:underline"
  >
    View All
    <img
      src={next}
      alt="Next icon"
      className="w-4 h-4 object-contain"

    />
  </button>
</div>

    </div>
  );
};

export default React.memo(Carousel);
