import React from "react";

const PersonSkeleton = () => {
  return (
    <div className="container max-w-6xl mx-auto px-6 py-10 animate-pulse space-y-10">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/3 h-[450px] bg-gray-300 dark:bg-gray-700 rounded-xl" />

        <div className="flex-1 space-y-6">
          <div className="h-10 w-1/2 bg-gray-300 dark:bg-gray-600 rounded" />
          <div className="h-4 w-1/3 bg-gray-300 dark:bg-gray-600 rounded" />

          <div className="space-y-2">
            <div className="h-4 w-1/4 bg-gray-300 dark:bg-gray-600 rounded" />
            <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-600 rounded" />
          </div>

          <div>
            <div className="h-5 w-36 bg-gray-300 dark:bg-gray-600 rounded mb-2" />
            <div className="flex flex-wrap gap-2">
              {Array(3).fill(null).map((_, inx) => (
                <div key={inx} className="h-4 w-24 bg-gray-300 dark:bg-gray-600 rounded" />
              ))}
            </div>
          </div>

          <div>
            <div className="h-6 w-32 bg-gray-300 dark:bg-gray-600 rounded mb-3" />
            <div className="space-y-2">
              {Array(4).fill(null).map((_, inx) => (
                <div key={inx} className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-6 w-40 bg-gray-300 dark:bg-gray-600 rounded mt-10" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {Array(8).fill(null).map((_, inx) => (
          <div key={inx} className="h-[270px] bg-gray-300 dark:bg-gray-600 rounded-lg" />
        ))}
      </div>
    </div>
  );
};

export default React.memo(PersonSkeleton);
