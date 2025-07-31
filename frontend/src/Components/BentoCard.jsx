import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const BentoCard = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-3">
        <h1 className="h-6 w-12 bg-red-500 text-amber-50 flex items-center justify-center text-xs font-semibold cursor-pointer">
          TIPS
        </h1>
        <span className="text-xs text-black mt-1">OCTOBER 29, 2019</span>
      </div>
      <h1 className="bebas text-4xl font-bold transition-colors duration-200 hover:text-red-500 cursor-pointer inline-block">
        THE SCARIEST
        <br /> MOMENT IS ALWAYS <br />
        JUST BEFORE YOU
      </h1>
      <p className="mt-10">
        Set to launch on the manufacturer’s <br />
        new A330neo aircraft in 2017, it’s offering lots <br />
        of ....
      </p>
      <span className="inline-flex mt-6 items-center gap-2 transition-colors duration-200 hover:text-red-500 cursor-pointer">
        Read more <IoIosArrowForward className="mt-1.5" />
      </span>
    </div>
  );
};

export default BentoCard;
