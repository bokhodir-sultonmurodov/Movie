import { useMovie } from "@/api/hooks/useMovie";
import MovieView from "@/components/movie-view/MovieView";
import React, { useEffect } from "react";
import { Pagination } from "antd";
import { useGenre } from "@/api/hooks/useGenre";
import Genre from "@/components/genre/Genre";
import { useParamsHook } from "@/hooks/useParamsHook";

const Movies = () => {
  const { getMovies } = useMovie();
  const { getGenres } = useGenre();
  const { data: genreData } = getGenres();
  const { getParam, setParam } = useParamsHook()
  const genre = getParam("genre")
  // console.log(genre);
  const page = Number(getParam("page")) || 1
  const { data, isLoading } = getMovies({
    page: page,
    with_genres: genre,
    without_genres: "18,36,27,10749",
    // "release_date.gte": "01-01-1980",
    // "release_date.lte":"01-01-1990"
    // // limit: 20,
    // // skip: 20 * (Number(page) - 1),
  });

  const handleChangePage = (value: number) => {
    setParam("page", value.toString())
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  // console.log(genreData);
  return (
    <div className="min-h-screen bg-white dark:bg-[#000] pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Genre data={genreData?.genres} />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <MovieView loading={isLoading} data={data?.results} count={20} />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex justify-center">
    <div className="custom-pagination dark:text-white p-4 rounded-xl shadow-md">
      <Pagination
        current={page}
        onChange={handleChangePage}
        pageSize={20}
        total={data?.total_results <= 10_000 ? data?.total_results : 10_000}
        showSizeChanger={false}
      />
    </div>
  </div>
</div>

        </div>
      </div>

    </div>
  );
};

export default React.memo(Movies);
