import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true); // Initially visible
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down past a certain threshold (e.g., 100px)
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      } flex items-center justify-between px-10 py-4 bg-white shadow`}
    >
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
        <FaUserAlt className="text-2xl cursor-pointer" />
        <IoIosSearch className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;