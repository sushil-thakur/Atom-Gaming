import React from 'react'

const FeatureCard = ({ tag, tagColor, date, title, author = "DesignUTD", comments = 0 }) => {
  return (
    <div className="group flex flex-col justify-between bg-white hover:bg-red-500 rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300 w-full h-full min-h-[180px]">
      {/* Tag and Date */}
      <div className="flex items-center justify-between mb-3">
        <span className={`text-white text-xs font-bold px-2 py-1 rounded ${tagColor}`}>
          {tag}
        </span>
        <span className="text-xs text-gray-500 group-hover:text-white">{date}</span>
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-black group-hover:text-white leading-snug line-clamp-3">
        {title}
      </h3>

      {/* Author and Comments */}
      <div className="flex items-center gap-4 text-xs text-gray-500 group-hover:text-white mt-4">
        <span>By <span className="font-semibold">{author}</span></span>
        <span className="flex items-center gap-1">💬 {comments}</span>
      </div>
    </div>
  )
}

export default FeatureCard
