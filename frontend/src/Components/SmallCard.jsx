import React from "react";

const SmallCard = ({ tag, tagColor, date, title, image }) => {
  return (
    <div className="flex gap-4">
      <img src={image} className="w-20 h-20 object-cover rounded-md" />
      <div className="flex-1">
      <div className="flex items-center gap-2 mb-2">
        <span
          className={`text-white text-xs font-bold px-2 rounded ${tagColor}`}
        >
          {tag}
        </span>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
      <h3 className="bebas text-2xl font-normal leading-5 hover:text-red-500 cursor-pointer">
        {title}
      </h3>
      </div>
    </div>
  );
};

export default SmallCard;
