import React from "react";
import { CgShapeCircle } from "react-icons/cg";
import LatestNews from "./LatestNews";
import SmallCard from "../Feature/SmallCard";
import LatestNews2 from "./LatestNew2";
import LatestNews3 from "./LatestNew3";
import { IoIosSearch } from "react-icons/io";
import SmallCard1 from "./SmallCard1";
import Sidebar from "./Sidebar";


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
      <div className="flex  mt-15 gap-25">
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
      <div className="mt-15">
        <LatestNews2 />
      </div>
      <div className="flex  mt-15 gap-25">
        <SmallCard
          tag="GAMES"
          tagColor="bg-red-500"
          date="OCTOBER 18, 2019"
          title={
            <>
              Get Scary With This Vegan Spooky <br /> Spider Crackle Cake!
            </>
          }
          image="/latest4.jpg"
          className="flex-1 gap-10"
        />

        <SmallCard
          tag="REVIEW"
          tagColor="bg-red-500"
          date="OCTOBER 18, 2019"
          title={
            <>
              "I Thought My Glasses Made Me
              <br /> Unattractive"
            </>
          }
          image="/latest5.jpg"
          className="flex-1"
        />
      </div>
      <div className="mt-15">
        <LatestNews3 />
      </div>
      {/* RIGHT SIDE - SIDEBAR */}
      <div className="w-3/11 max-w-7xl mx-auto px-4 py-8 -mr-5 -mt-6 md:-mt-440  relative  ">
        {/* Search Box */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="block  w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm h-14 pl-10"
          />
          <IoIosSearch className="absolute h-5 w-5 text-gray-400 ml-70 -mt-9" />
        </div>

        <h1 className="text-2xl bebas text-black mt-10 font-bold">POSTS LIST</h1>

        {/* Sidebar Small Cards */}
        <SmallCard1
          tag="1"
          tagColor="bg-red-500"
          title="Get Scary With This Vegan Spooky Spider Crackle Cake!"
          image="/sidebar1.jpg"
        />
        <SmallCard1
          tag="2"
          tagColor="bg-red-500"
          title="It's Better to Be a Lion for a Day Than Sheep All Your Life"
          image="/sidebar.jpg"
        />
        <SmallCard1
          tag="3"
          tagColor="bg-red-500"
          title="Keep Your Eyes on the Stars and Your Feet on the Ground"
          image="/sidebar3.jpg"
        />
        <h1 className="text-2xl bebas text-black mt-15 font-bold">POSTS LIST</h1>
          <img src="/sidebar main.jpg" alt="" className="w-full h-15vh rounded-xl"/>
        
      </div>
      <Sidebar
      tag="1"
       title="Keep Your Eyes on the Stars and Your Feet on the Ground"

      />
    </div>
  );
};

export default LatestNewa;
