import React from "react";

type Review = {
  id: string;
  author: string;
  content: string;
};

interface Props {
  reviews?: Review[];
}

const ReviewList: React.FC<Props> = ({ reviews = [] }) => {
  return (
    <div>
      
        {reviews.map((item) => (
          <div
            key={item.id}
            className="mb-4 p-4 bg-gray-100 dark:bg-[#1f1f1f] rounded"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.author}
            </h3>
            <p className="text-gray-800 dark:text-gray-300 mt-2">
              {item.content}
            </p>
          </div>
        ))}
    </div>
  );
};

export default ReviewList;
