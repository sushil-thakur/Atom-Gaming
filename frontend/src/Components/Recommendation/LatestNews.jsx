import React from 'react';

const LatestNews = () => {
  return (
    <div className="w-3/4 flex gap-7">
      
      {/* First Image with Overlay */}
      <div className="relative group w-[45%] h-[38%] rounded-xl overflow-hidden">
        <img 
          src="/latest1.jpg" 
          alt="" 
          className="w-full h-full object-cover rounded-xl" 
        />
        
        {/* Dot Overlay */}
       <div
  className="absolute inset-0 
  opacity-0 group-hover:opacity-100 transition-opacity duration-500
  bg-[radial-gradient(circle,rgba(255,255,255,0.25)_1px,transparent_1px)] 
  [background-size:14px_14px]"
></div>


        {/* Text & Labels */}
        <h1 className='bebas absolute top-0 left-0 text-white text-3xl mt-70 ml-7 cursor-pointer'>
          Want to Strengthen Your <br /> Relationship?
        </h1>
        <span className="absolute bg-red-500 px-3 py-1 text-xs rounded text-white cursor-pointer mt-90 ml-7 top-0 left-0">
          Games
        </span>
        <p className=" absolute top-0 left-0 text-white  mt-90 ml-25">
          October 18, 2019
        </p>
      </div>

      {/* Second Image with Overlay */}
      <div className="relative group w-[45%] h-[38%] rounded-xl overflow-hidden">
        <img 
          src="/lastest.jpg" 
          alt="" 
          className="w-full h-full object-cover rounded-xl" 
        />

        {/* Dot Overlay */}
      <div
  className="absolute inset-0 
  opacity-0 group-hover:opacity-100 transition-opacity duration-500
  bg-[radial-gradient(circle,rgba(255,255,255,0.25)_1px,transparent_1px)] 
  [background-size:14px_14px]"
></div>
 <h1 className='bebas absolute top-0 left-0 text-white text-3xl mt-70 ml-7 cursor-pointer'>
         A Simple Way to Address the<br/> Gap Between Attention
        </h1>
        <span className="absolute bg-red-500 px-3 py-1 text-xs rounded text-white cursor-pointer mt-90 ml-7 top-0 left-0">
          News
        </span>
        <p className=" absolute top-0 left-0 text-white  mt-90 ml-25">
          October 18, 2019
        </p>

      </div>
      

    </div>
  );
};

export default LatestNews;
