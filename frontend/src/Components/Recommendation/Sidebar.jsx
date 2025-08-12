import React from "react";

const Sidebar = ({ tag, title, imageUrl }) => {
  return (
    <div className="flex gap-4 mb-6 items-start">
      {/* Tag number on the left */}
      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
        <span className="text-2xl font-bold text-gray-800">
          {tag}
        </span>
      </div>
      
      {/* Title on the right */}
      <div className="flex-1">
        <h3 className="bebas text-2xl font-normal leading-snug hover:text-red-500 cursor-pointer uppercase tracking-wide">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Sidebar;