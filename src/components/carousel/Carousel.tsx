import React, { type FC, useState } from "react";
import { IMAGE_URL } from "@/const";
import type { IMovie } from "@/types";
import { useMovie } from "@/api/hooks/useMovie";
import next from "@/assets/Vector.png";
import prev from "@/assets/Vector (1).png";
import { useNavigate } from "react-router-dom";
import CarouselSkeleton from "./CarouselSkeleton";

interface CarouselProps {
  data: undefined | IMovie[];
}

const Carousel: FC<CarouselProps> = () => {
  const { getMovies } = useMovie();
  const { data, isLoading } = getMovies({ page: 1, without_genres: "18,36,27,10749" });

  const movies: IMovie[] = data?.results?.slice(0, 5) || [];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = (): void => {
    setCurrentIndex((prev) => (prev - 1 + movies.length) % movies.length);
  };

  const nextSlide = (): void => {
    setCurrentIndex((prev) => (prev + 1) % movies.length);
  };

  const navigate = useNavigate();

  if (isLoading) return <CarouselSkeleton count={5} />;

  return (
    <div className="w-full container mx-auto space-y-4 mb-6 relative">

      {/* Главный большой слайд: высота адаптивная */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded overflow-hidden select-none">
        {movies[currentIndex] && (
          <img
            src={IMAGE_URL + (movies[currentIndex].backdrop_path || movies[currentIndex].poster_path)}
            alt={movies[currentIndex].title}
            className="w-full h-full object-cover"
            draggable={false}
          />
        )}
      </div>

      {/* Управление: стрелки и превью */}
      <div className="flex items-center justify-center gap-3 mt-2 relative">

        {/* Кнопка назад */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full hover:bg-gray-800 transition flex items-center justify-center cursor-pointer"
        >
          <img
            src={prev}
            alt="Previous"
            className="object-contain"
          />
        </button>

        {/* Превью миниатюры - добавлен горизонтальный скролл на мобильных */}
        <div className="flex gap-3 px-1 overflow-x-auto scrollbar-hide select-none">
          {movies.map((movie: IMovie, i: number) => (
            <div
              key={movie.id}
              onClick={() => setCurrentIndex(i)}
              className={`cursor-pointer rounded-full p-1 transition-all duration-300 ${i === currentIndex ? "translate-y-1" : "bg-transparent"}`}
            >
              <img
                src={IMAGE_URL + (movie.poster_path || movie.backdrop_path)}
                alt={movie.title}
                className={`w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-16 object-cover rounded cursor-pointer transition-transform duration-300 ${i === currentIndex ? "scale-105" : "scale-100"}`}
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Кнопка вперед */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full hover:bg-gray-800 transition flex items-center justify-center cursor-pointer"
        >
          <img
            src={next}
            alt="Next"
            className="object-contain"
          />
        </button>

      </div>

      {/* Кнопка "View All" */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => navigate("/movies")}
          className="cursor-pointer flex items-center gap-1 text-xs sm:text-sm md:text-base font-medium text-black dark:text-[#C61F1F] hover:underline"
        >
          View All
          <img
            src={next}
            alt="Next icon"
            className="w-3 sm:w-4 md:w-4 object-contain"
          />
        </button>
      </div>
    </div>
  );
};

export default React.memo(Carousel);
