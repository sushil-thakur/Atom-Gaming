import React from "react";
import { IoIosArrowForward } from "react-icons/io";
const BentoCard = () => {
  return (
    <div className="   h-full ml-12">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded">OFFLINE</span>
          <span className="text-gray-500 text-sm">OCTOBER 18, 2019</span>
        </div>
        <h3 className="bebas text-5xl font-bold text-black mb-4 leading-tight  hover:text-red-500 transition-colors duration-200">
          THE SCARIEST<br/> MOMENT IS ALWAYS<br/> JUST BEFORE YOU
        </h3>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of...
        </p>
        <button className="text-black text-sm font-medium hover:text-red-500 transition-colors duration-200">
          Read more →
        </button>
      </div>
    </div>
  )
}

export default BentoCard;
