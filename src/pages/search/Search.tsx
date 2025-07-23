import { useMovie } from '@/api/hooks/useMovie'
import MovieView from '@/components/movie-view/MovieView'
import useDebounce from '@/hooks/useDebouns'
import { useParamsHook } from '@/hooks/useParamsHook'
import { Input, Pagination } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'

const Search = () => {
  const { setParam, getParam } = useParamsHook()
  const { getMovieBySearch } = useMovie()

  const query = getParam("query")
  const page = Number(getParam("page")) || 1
  const [value, setValue] = useState(query || "")
  const debonse = useDebounce(value)

  const { data, isLoading } = getMovieBySearch({ query: query ? query : debonse, page })

  useEffect(() => {
    if (debonse) {
      setParam("query", debonse)
      setParam("page", "1")
    }
  }, [debonse])

  const handleChangePage = (page: number) => {
    setParam("page", page.toString())
  }

  return (
    <div className='min-h-screen flex flex-col bg-white dark:bg-[#0f0f0f] text-black dark:text-white transition-colors duration-300 py-10'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        
        <div className='mb-10'>
          <Input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder='Search for movies, actors, genres...'
            prefix={<SearchOutlined className="text-gray-500 dark:text-gray-400" />}
            className='!h-14 !text-lg !rounded-full !px-6 !bg-white dark:!bg-[#1f1f1f] !border-gray-300 dark:!border-[#444] shadow-md focus-within:!border-blue-500 dark:focus-within:!border-blue-400 transition-all duration-300'
          />
        </div>

        <MovieView data={data?.results} count={8} loading={isLoading} />
      </div>

      <div className="mt-auto w-full flex justify-center pt-10 pb-4">
        <div className="p-4 rounded-xl shadow-md bg-gray-100 dark:bg-[#1a1a1a]">
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
  )
}

export default React.memo(Search)
