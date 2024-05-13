import React from "react";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className=" w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className=" bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img src={assets.home_icon} className="w-6" alt="" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img src={assets.search_icon} className="w-6" alt="" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      <div className=" bg-[#121212] h-[85%] rounded flex flex-col ">
        <div className=" p-4 flex items-center justify-between">
          <div className=" flex items-center gap-3">
            <img src={assets.stack_icon} className="w-8" alt="" />
            <p className=" font-semibold">Your Library</p>
          </div>
          <div className=" flex items-center justify-end gap-3">
            <img
              src={assets.arrow_icon}
              className="w-5 hover:scale-110"
              alt=""
            />
            <img
              src={assets.plus_icon}
              className="w-5 hover:scale-110"
              alt=""
            />
          </div>
        </div>

        <div className=" bg-[#242424] p-4 m-2 flex gap-2 flex-col content-center rounded items-start font-semibold ">
          <p>Create your first playlist</p>
          <p className="text-sm">it's easy we'll help you</p>
          <button className="px-4 py-1.5 bg-white text-black rounded-full mt-4 shadow-md hover:scale-105">
            Create playlist
          </button>
        </div>

        <div className=" bg-[#242424] p-4 m-2 flex gap-2 flex-col content-center rounded items-start font-semibold ">
          <p>Let's find some podcasts to follow</p>
          <p className="text-sm">We'll keep you updated on new episode</p>
          <button className="px-4 py-1.5 bg-white text-black rounded-full mt-4 shadow-md hover:scale-105">
            Browse podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
