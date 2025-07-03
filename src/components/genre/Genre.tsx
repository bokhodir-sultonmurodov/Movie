import { useParamsHook } from "@/hooks/useParamsHook";
import type { IGenre } from "@/types";
import React, { type FC } from "react";

interface Props {
  data: undefined | IGenre[];
}

const Genre: FC<Props> = ({ data }) => {
  const { setParam, getParam,removeParam } = useParamsHook();
  const genre = getParam("genre");

  const handleGenre = (id:number)=>{
    if(genre===id.toString()){
      removeParam("genre")
    }else{
      setParam("genre", id.toString())
    }
  }
 
  return (
    <div className="container mx-auto flex overflow-x-auto gap-4 py-4 px-2 custom-scroll">
      
      {data?.map((item: IGenre) => (
        <div
          onClick={() => handleGenre(item.id)}
          key={item.id}
          className={`px-4 py-2 whitespace-nowrap rounded-full border transition-all duration-300 text-sm font-semibold cursor-pointer select-none
            ${
              item.id.toString() === genre
                ? "bg-gradient-to-r from-[#C61F1F] to-[#8B0000] text-white border-transparent shadow-md"
                : "bg-gray-100 dark:bg-[#1a1a1a] text-gray-800 dark:text-white border-gray-300 dark:border-gray-700 hover:bg-[#C61F1F] hover:text-white dark:hover:bg-[#C61F1F]"
            }
          `}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default React.memo(Genre);
