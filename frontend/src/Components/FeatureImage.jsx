import React from 'react'

const FeatureImage = ({ tag, tagColor, date, title, image}) => {
  return (
  
    <div className=" flex flex-col justify-between p-5   w-full h-full min-h-[180px]">
          <div div className="flex gap-4">
      <img src={image} className="w-90 h-50 object-cover rounded-md" />
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

      
 
    </div>
    </div>
  )
}

export default FeatureImage
