// src/components/Card.js
import React from "react";

const Card = ({ image, title, status, date }) => {
  const statusColor =
    status === "Online" ? "bg-red-500 text-white" : "bg-red-500 text-white opacity-70";

  return (
    <div className="max-w-sm w-full rounded-xl overflow-hidden  ">
      <img src={image} alt="card" className="w-90 h-70 object-cover rounded-xl " />
      <div className="px-0 py-6">
        <div className="flex items-center space-x-3 mb-2">
          <span className={`text-xs px-2 py-1 rounded ${statusColor}`}>{status}</span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className=" babas text-xl font-bold uppercase text-gray-800 hover:text-red-500 cursor-pointer">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
