import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const RecommendationFeature = () => {
  return (
    <div class="min-h-[80vh] bg-gray-100 flex items-center justify-center w-full mt-0">
      <div class="max-w-7xl w-full grid grid-cols-3 gap-6 px-0 py-0">
        <div class=" col-span-2 relative h-[500px] bg-black">
          <img
            src="/rec2.jpg"
            alt="rec"
            class="w-full h-full object-cover rounded-lg"
          />
          <div class="absolute bottom-6 left-6 text-white">
            <div className="flex gap-2">
              <span class="bg-red-600 px-3 py-1 text-xs rounded ">REVIEW</span>
              <p class="text-sm mt-1 ">October 18, 2019</p>
            </div>
            <h2 class="bebas text-4xl font-bold mt-2 max-w-xl leading-tight">
              GENDERLESS KEI – JAPAN’S HOT NEW FASHION TREND
            </h2>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-red-500 text-white items-center justify-center flex ">
                <p className="text-xs">
                  De-
                  <br />
                  Sign
                </p>
              </div>
              <p class="mt-2 text-sm flex ">
                By <span class="font-semibold flex">DesignUTD</span>
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Right Side Articles (2 stacked boxes) --> */}
        <div class="flex flex-col gap-6">
          {/* <!-- Top Box --> */}

          <div className="absolute px-5 py-8 flex flex-col gap-2">
            <div className="flex gap-2 mt-1">
              <span className="bg-red-400 px-3 py-1 text-xs rounded text-white cursor-pointer">
                NEWS
              </span>
              <p className="text-sm mt-1 px-2">October 18, 2019</p>
            </div>
            <span className="py-1 px-1 bebas text-3xl text-semibold hover:text-red-500">
              The Two Most Important <br /> Tools to Reconnect
            </span>
            <div className="px-53 cursor-pointer py-10 text-xs flex justify-evenly text-semibold">
              Read More <IoIosArrowForward className="mt-1" />
            </div>
          </div>

          <div class="h-[240px] bg-white shadow-md p-6">
            {/* <!-- News block content --> */}
          </div>

          {/* <!-- Bottom Box (Red background) --> */}
          <div class="h-[240px] bg-red-600 shadow-md p-6 text-white">
            {/* <!-- Review block content --> */}
            <div className="absolute px-5 py-3 flex flex-col gap-2">
              <div className="flex gap-2 mt-1">
                <span className="bg-red-400 px-3 py-1 text-xs rounded text-white cursor-pointer">
                  REVIEW
                </span>
                <p className="text-sm mt-1 px-2">October 18, 2019</p>
              </div>
              <span className="py-1 px-1 bebas text-3xl text-semibold ">
                The Two Most Important <br /> Tools to Reconnect
              </span>
              <div className="px-50 cursor-pointer py-8 text-xs flex justify-evenly text-semibold">
                Read More <IoIosArrowForward className="mt-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationFeature;
