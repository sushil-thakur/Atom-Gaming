import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  // Function to scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
   <footer className="relative bg-red-500 py-10 px-10 mt-60">
  {/* Top row: Logo + Social icons */}
  <div className="flex justify-between items-center">
    <div>
      <img src="/footer.png" alt="Logo" className="h-20 ml-25" />
    </div>
    <div className="flex space-x-4 text-white text-2xl">
      <FaFacebookF className="cursor-pointer hover:text-gray-200" />
      <FaInstagram className="cursor-pointer hover:text-gray-200" />
      <TiSocialYoutubeCircular className="cursor-pointer hover:text-gray-200" />
    </div>
  </div>

  {/* Full width line */}
  <hr className="border-t border-gray-500 opacity-50 w-full my-4" />

  {/* Copyright */}
  <p className="text-white text-sm ml-25">
    Atoms © 2023. Made with ⚙ by DesignUTD
  </p>

  {/* Scroll to Top Button */}
  <button
    onClick={scrollToTop}
    className="fixed bottom-5 right-5 bg-white p-3 rounded shadow-lg hover:bg-gray-200 transition"
  >
    <FaArrowUp className="text-black" />
  </button>
    </footer>
  );
};

export default Footer;
