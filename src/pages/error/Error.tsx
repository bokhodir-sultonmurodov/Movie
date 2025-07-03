import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full py-20 px-4 bg-white dark:bg-[#121212] flex justify-center">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-extrabold text-[#C61F1F] dark:text-[#C61F1F] mb-2">
          404
        </h1>
        <p className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          Lost your way?
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
         Sorry, we can't find that page. You'll find lots to explore on the home page. 
        </p>
        <button
          onClick={() => navigate("/")}
          className="cursor-pointer px-5 py-2 rounded-md bg-[#C61F1F] hover:bg-[#cb7171] text-white transition duration-300"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default React.memo(Error);
