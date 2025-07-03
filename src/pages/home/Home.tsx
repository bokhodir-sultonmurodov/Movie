import { useMovie } from '@/api/hooks/useMovie'
import React, { useEffect } from 'react'
import MovieView from '@/components/movie-view/MovieView'
import Carousel from '@/components/carousel/Carousel'
const Home = () => {
  const {getMovies} = useMovie()
  const {data,isLoading} = getMovies({page: 1, without_genres: "18,36,27,10749"})
  const movies = data?.results?.slice(0, 5)
    useEffect(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, []);
  return (
    <div>
      <Carousel  data={movies}/>
      <MovieView loading={isLoading} data={data?.results?.slice(0, 10)} count={10}/>
    </div>
  )
}

export default React.memo(Home)