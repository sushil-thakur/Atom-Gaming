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

        <h1 className="text-2xl bebas text-black mt-10 font-bold">
          POSTS LIST
        </h1>

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
        <h1 className="text-2xl bebas text-black mt-15 font-bold mb-7">
          POSTS LIST
        </h1>
       <div class="relative">
  <img
    src="/sidebar main.jpg"
    alt=""
    class="w-full h-15vh rounded-xl"
  />
  <div class="absolute top-0 left-0 p-1 flex">
    <span class=" text-white text-3xl font-bold px-1 py-1 rounded mt-17">1</span>
    <p class="text-white text-2xl font-bold mt-17 bebas cursor-pointer ">Family-owned florist business looks</p>
  </div>
</div>
      </div>
      <div className="ml-244">
      <Sidebar
        tag="2"
        title="It's better to be a lion for a day than sheep all your life"
      />
       <hr className="text-gray-400 mb-3"/>
      <Sidebar
        tag="3"
        title="Keep your eyes on the stars and your feet on the ground"
      />
      <hr className="text-gray-400 mb-3"/>
      <Sidebar
        tag="4"
        title="Every next level of your life will demand a different you"
      />
      <hr className="text-gray-400 mb-3"/>
      <Sidebar
        tag="5"
        title="And a lonely stranger has spoke to me ever since"
      />
      </div>
      <h1 className="bebas text-4xl ml-244 mt-10">SUBSCRIBE US</h1>
      <div className="ml-244 mt-10 ">
        <div className="relative">
          <input
            type="text"
            placeholder="ENTER YOUR EMAIL ADDRESS"
             className="block w-full  border border-black focus:border-red-500 focus:ring-red-500 sm:text-sm h-14 pl-10"
          />
        <input
  type="text"
  placeholder="SUBSCRIBE"
  className="w-full  border border-red-500 bg-red-500 text-white placeholder-white 
             text-center h-14 hover:bg-white hover:text-red-500 hover:placeholder-red-500 
             focus:bg-white focus:text-red-500 focus:placeholder-red-500 transition mt-5"
/>


          </div>
          </div>
    </div>
  );
};

export default LatestNewa;
