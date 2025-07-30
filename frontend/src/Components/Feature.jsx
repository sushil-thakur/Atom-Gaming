import React from "react";
import { CgShapeCircle } from "react-icons/cg";

const Feature = () => {
  return (
    <div className="relative h-[200px]  ">
      <div className="absolute top-15 left-60 text-red-400  text-3xl flex gap-2">
        <CgShapeCircle />
        <span className="bebas text-3xl text-black font-bold top-20 left-60 ">
          FEATURED NEWS
        </span>
        <span className="bebas text-xs border-2 rounded-md px-2 py-1 inline-flex items-center justify-center cursor-pointer h-8 ml-2 transition-colors duration-200 hover:bg-red-500 hover:text-white">
          SEE ALL
        </span>
      </div>
      
    </div>
    
  );
};

export default Feature;
