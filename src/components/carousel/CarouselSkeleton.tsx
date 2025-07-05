import React, { type FC } from "react";

interface CarouselSkeletonProps {
  count: number;
}

const CarouselSkeleton: FC<CarouselSkeletonProps> = ({ count }) => {
  return (
    <div className="w-full container mx-auto space-y-4 mb-6 relative">
      <div className="relative w-full h-[350px] bg-gray-300 dark:bg-gray-600 rounded overflow-hidden animate-pulse"></div>

      <div className="flex items-center justify-center gap-3 mt-2 relative">
        <button
          aria-label="Previous Slide"
          className="w-12 h-12 rounded-full bg-gray-400 dark:bg-gray-700 animate-pulse"
        />

        <div className="flex gap-3 px-1">
          {Array(count)
            .fill(null)
            .map((_, inx) => (
              <div
                key={inx}
                className="w-24 h-16 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"
              />
            ))}
        </div>

        <button
          aria-label="Next Slide"
          className="w-12 h-12 rounded-full bg-gray-400 dark:bg-gray-700 animate-pulse"
        />
      </div>

      <div className="flex justify-end mb-4">
        <div className="flex items-center gap-2 text-sm md:text-base font-medium text-gray-400 dark:text-gray-500 animate-pulse">
          <span className="h-4 w-20 bg-gray-300 dark:bg-gray-600 rounded"></span>
          <span className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CarouselSkeleton);
