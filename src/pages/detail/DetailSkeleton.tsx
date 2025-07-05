import React from "react";

const DetailSkeleton = () => {
  return (
    <div className="container max-w-6xl mx-auto p-6 space-y-12 animate-pulse">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 h-[400px] bg-gray-300 dark:bg-gray-700 rounded-lg" />

        <div className="flex-1 flex flex-col space-y-4">
          <div className="h-10 w-3/4 bg-gray-300 dark:bg-gray-600 rounded"></div>

          <div className="flex gap-4 text-sm">
            <div className="h-4 w-28 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-4 w-20 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-4 w-24 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>

          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-4 w-4/6 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>

          <div>
            <div className="h-5 w-24 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
            <div className="flex gap-2 flex-wrap">
              {Array(4).fill(null).map((_, inx) => (
                <div key={inx} className="h-6 w-20 bg-gray-300 dark:bg-gray-600 rounded-full" />
              ))}
            </div>
          </div>

          <div>
            <div className="h-5 w-48 bg-gray-300 dark:bg-gray-600 rounded mb-3"></div>
            <div className="flex gap-4">
              {Array(3).fill(null).map((_, inx) => (
                <div key={inx} className="h-10 w-24 bg-gray-300 dark:bg-gray-600 rounded" />
              ))}
            </div>
          </div>

          <div>
            <div className="h-5 w-40 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
            <div className="space-y-1">
              <div className="h-3 w-24 bg-gray-300 dark:bg-gray-600 rounded" />
              <div className="h-3 w-20 bg-gray-300 dark:bg-gray-600 rounded" />
            </div>
          </div>
        </div>
      </div>

      <div className="h-6 w-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
      <div className="h-6 w-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {Array(10).fill(null).map((_, inx) => (
          <div key={inx} className="bg-gray-300 dark:bg-gray-600 h-[260px] rounded-lg"></div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(DetailSkeleton);
