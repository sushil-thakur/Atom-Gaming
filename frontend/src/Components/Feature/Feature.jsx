import { CgShapeCircle } from "react-icons/cg";
import SmallCard from "./SmallCard";
import BentoCard from "./BentoCard";



const Feature = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 mt-10 mb-10">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-8 ml-12">
        <CgShapeCircle className="text-red-500 text-2xl" />
        <h2 className="bebas text-3xl font-bold text-black tracking-wide">
          FEATURED NEWS
        </h2>
        <span className="bebas text-1xl rounded-xl border border-gray-300 px-3 py-1 ml-4 cursor-pointer transition-colors duration-200 hover:bg-red-500 hover:text-white hover:border-red-500">
          SEE ALL
        </span>
      </div>

      {/* Main Content Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Left - Main Bento Card */}
        <div className="lg:col-span-1">
          <BentoCard />
        </div>

        {/* Middle - Hero Image */}
        <div className="lg:col-span-1 flex items-center justify-center gap-10">
          <img
            src="/feature1.jpg"
            alt="Featured martial artist"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Right - Small Cards */}
        <div className="lg:col-span-1 flex flex-col gap-10">
          <SmallCard
            tag="NEWS"
            tagColor="bg-red-500"
            date="OCTOBER 18, 2019"
            title="THE ARGUMENT FOR SHORT MEDITATIONS"
            image="/feature3.jpg"
          />
          <SmallCard
            tag="ONLINE"
            tagColor="bg-red-500"
            date="OCTOBER 18, 2019"
            title="DO YOU WANT STRONGER FRIENDSHIPS"
            image="/feature 4.jpg"
          />
          <SmallCard
            tag="REVIEW"
            tagColor="bg-red-500"
            date="OCTOBER 18, 2019"
            title="THE NEXT BIG THING IN FASHION NOT WASHING"
            image="/feature 2.jpg"
          />
        </div>
  


      </div>
    </div>
  );
};

export default Feature;
