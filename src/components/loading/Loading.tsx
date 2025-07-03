import React, { type FC } from "react";

const Loading: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div
        className="animate-spin rounded-full border-8 border-t-8 border-gray-300 border-t-red-500 h-16 w-16"
        role="status"
        aria-label="loading"
      />
      <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg font-semibold">
        Loading...
      </p>
    </div>
  );
};

export default React.memo(Loading);
