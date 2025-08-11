import React from "react";

const SmallCard1 = ({ tag, tagColor, title, image,  }) => {
  return (
    <div className="flex gap-4">
      <div className="relative">
        <img src={image} className="w-20 h-20 object-cover rounded-md mt-5" />
        <span
          className={`absolute bottom-1 left-1 w-20px text-white text-xs font-bold p-1 rounded-md ${tagColor}`}
        >
          {tag}
        </span>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
      
        </div>
        <h3 className="bebas text-2xl font-normal leading-5 hover:text-red-500 cursor-pointer mt-5">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default SmallCard1;