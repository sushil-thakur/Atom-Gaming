import React from 'react'
import { CgShapeCircle } from "react-icons/cg";
import RecommendationFeature from './RecommendationFeature';

const Recommendation = () => {
  return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8  mt-0">
            {/* Header Section */}
            <div className="flex items-center gap-3 mb-8 ml-12">
              <CgShapeCircle className="text-red-500 text-2xl" />
              <h2 className="bebas text-3xl font-bold text-black tracking-wide">
                Recommendation
              </h2>
              <span className="bebas text-1xl rounded-xl border border-gray-300 px-3 py-1 ml-4 cursor-pointer transition-colors duration-200 hover:bg-red-500 hover:text-white hover:border-red-500">
                SEE ALL
              </span>
            </div>
            <RecommendationFeature/>
        
    </div>
  )
}

export default Recommendation
