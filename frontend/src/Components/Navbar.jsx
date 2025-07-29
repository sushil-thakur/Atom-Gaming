import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-4 bg-white shadow">
      {/* Logo */}
      <img src="/logo.png" alt="Logo" className="h-12 w-auto" />

      {/* Navigation Menu */}
      <ul className="flex gap-6 cursor-pointer">
        <li>HOME</li>
        <li>ONLINE</li>
        <li>REVIEW</li>
        <li>TIPS</li>
        <li>GAMES</li>
        <li>OFFLINE</li>
        <li>NEWS</li>
      </ul>

      {/* Search Icon */}
      <div className="flex gap-5 mr-20">
      <FaUserAlt className="text-2xl cursor-pointer"/>
      <IoIosSearch className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
