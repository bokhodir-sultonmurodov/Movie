import MovieView from '@/components/movie-view/MovieView'
import { useStore } from '@/zustand/useStore'
import React from 'react'
import { Empty } from 'antd'

const Saved = () => {
  const { saved } = useStore()

  return (
    <div className="min-h-screen bg-white dark:bg-[#000] py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Your Saved Movies
        </h2>

        {saved.length > 0 ? 
          <MovieView data={saved} loading={false} count={saved.length} />
        : 
          <div className="flex justify-center items-center h-64">
            <Empty
              description={<span className="dark:text-white">No saved movies yet</span>}
            />
          </div>
        }
      </div>
    </div>
  )
}

export default React.memo(Saved)
