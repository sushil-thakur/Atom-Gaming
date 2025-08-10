import React from "react";
import { CgShapeCircle } from "react-icons/cg";
import LatestNews from "./LatestNews";
import SmallCard from "../Feature/SmallCard";
import LatestNews2 from "./LatestNew2";

const LatestNewa = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8  -mt-6 md:-mt-12">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-8 ml-2 ">
        <CgShapeCircle className="text-red-500 text-2xl" />
        <h2 className="bebas text-3xl font-bold text-black tracking-wide">
          Latest News
        </h2>
        <span className="bebas text-1xl rounded-xl border border-gray-300 px-3 py-1 ml-4 cursor-pointer transition-colors duration-200 hover:bg-red-500 hover:text-white hover:border-red-500">
          SEE ALL
        </span>
      </div>
      <LatestNews />
      <div className="flex  mt-20 gap-25">
        <SmallCard
          tag="NEWS"
          tagColor="bg-red-500"
          date="OCTOBER 18, 2019"
          title={
            <>
              Get Scary With This Vegan Spooky <br /> Spider Crackle Cake!
            </>
          }
          image="/feature 6.jpg"
          className="flex-1 gap-10"
        />

        <SmallCard
          tag="NEWS"
          tagColor="bg-red-500"
          date="OCTOBER 18, 2019"
          title={
            <>
              "I Thought My Glasses Made Me
              <br /> Unattractive"
            </>
          }
          image="/feature3.jpg"
          className="flex-1"
        />
      </div>
      <div className="mt-20">
        <LatestNews2 />
      </div>
    </div>
  );
};

export default LatestNewa;
