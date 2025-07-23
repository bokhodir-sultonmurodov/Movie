import React, { lazy, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMovie } from "@/api/hooks/useMovie";
import { IMAGE_URL } from "@/const";
import MovieView from "@/components/movie-view/MovieView";
import { Image } from "antd";
import { FaStar } from "react-icons/fa";

const DetailSkeleton = lazy(() => import("./DetailSkeleton"));

// import ReviewList from "./Reviewlist";

const Detail = () => {
  const { id } = useParams();
  const { getMovieSingle, getMovieDetail } = useMovie();

  const { data: product, isLoading, error } = getMovieSingle(id || "");
  const { data: creditsData } = getMovieDetail(id || "", "credits");
  const { data: similarData } = getMovieDetail(id || "", "similar");
  const { data: reviews } = getMovieDetail(id || "", "reviews");
  const navigate = useNavigate();
  console.log(reviews);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (isLoading) return <DetailSkeleton />
  if (error)
    return
  <div className="text-center py-10 text-red-500 text-lg">Try later</div>;

  return (

    <div className="container max-w-6xl mx-auto p-6 bg-white dark:bg-[#121212] text-gray-900 dark:text-white space-y-12 mb-[40px]">
    

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 rounded-lg overflow-hidden  border-gray-200 dark:border-gray-700">
          <img
            src={IMAGE_URL + product?.poster_path}
            alt={product?.original_title}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <h1 className="text-4xl font-extrabold mb-3">{product?.original_title}</h1>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>Release Date: {product?.release_date}</span>
            <span>Runtime: {product?.runtime} min</span>
            <span className="flex items-center gap-1">
              Rating: {product?.vote_average?.toFixed(1)}
              <FaStar className="text-yellow-400" />
            </span>

          </div>

          <p className="mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            {product?.overview}
          </p>

          <div className="mb-6">
            <h3 className="font-semibold mb-2 text-lg">Genres</h3>
            <div className="flex flex-wrap gap-2">
              {product?.genres?.map((genre: any) => (
                <span
                  key={genre.id}
                  className="bg-gradient-to-r from-red-800 to-red-900 text-white px-3 py-1 rounded-full text-sm font-medium"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-lg">Production Companies</h3>
            <div className="flex flex-wrap gap-6 items-center">
              {product?.production_companies?.map((company: any) =>
                company.logo_path ? (
                  <img
                    key={company.id}
                    src={IMAGE_URL + company.logo_path}
                    alt={company.name}
                    className="h-10 object-contain"
                    loading="lazy"
                    title={company.name}
                  />
                ) : null
              )}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-2 text-lg">Spoken Languages</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
              {product?.spoken_languages?.map((lang: any, inx: number) => (
                <li key={inx}>{lang.english_name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Reviews</h2>
        <ReviewList reviews={reviews?.results } />
      </div> */}

      <div>
        <h2 className="text-2xl font-semibold mb-4">Top Cast</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {creditsData?.cast?.slice(0, 10).map((person: any) => (
            <div
              key={person.id}
              className="bg-gray-100 dark:bg-[#1e1e1e] rounded-lg overflow-hidden"
            >
              <Image
                src={IMAGE_URL + person.profile_path}
                alt={person.original_name}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-3">
                <h3
                  onClick={() => navigate(`/person/${person.id}`)}
                  className="select-none text-md font-bold truncate text-black hover:underline cursor-pointer transition duration-200 dark:text-teal-50"
                >
                  {person.original_name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                  as {person.character}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-[20px]">
        <h2 className="text-2xl font-semibold mb-4">Related Movies</h2>
        <MovieView
          count={20}
          loading={false}
          data={similarData?.results?.slice(0, 4)}
        />
      </div>
    </div>
  );
};

export default React.memo(Detail);
