import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <div className=" w-full flex justify-between items-center font-semibold">
        <div className=" flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            src={assets.arrow_left}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer hover:scale-105"
            alt=""
          />
          <img
            onClick={() => navigate(1)}
            src={assets.arrow_right}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer hover:scale-105"
            alt=""
          />
        </div>
        <div className="flex items-center justify-end gap-4">
          <button className="px-4 py-1 bg-white text-black rounded-full shadow-md hover:scale-105">
            Explore Premium
          </button>
          <button className="bg-black px-4 py-1 rounded-2xl border border-gray-700 shadow-md hover:scale-105">
            Install App
          </button>
          <p className=" bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 hover:text-gray-900">
            D
          </p>
        </div>
      </div>

      <div className=" flex items-center gap-2 mt-4 font-semibold">
        <button className="px-6 py-1 bg-white text-black rounded-full shadow-md">
          All
        </button>
        <button className="bg-radial-gradient text-gray-200 px-4 py-1 rounded-2xl border border-gray-800 shadow-md hover:text-white">
          Music
        </button>
        <button className="bg-radial-gradient text-gray-200 px-4 py-1 rounded-2xl border border-gray-800 shadow-md hover:text-white">
          Podcasts
        </button>
      </div>
    </>
  );
}
