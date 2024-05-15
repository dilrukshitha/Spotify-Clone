import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";

export default function DisplayAlbum() {
  const { id } = useParams();
  const albumData = albumsData[id];

  return (
    <>
      <Navbar />
      <div className=" mt-10 flex gap-8 flex-col items-start md:flex-row md:items-end">
        <img src={albumData.image} className=" w-48 rounded" alt="" />
        <div className=" flex flex-col items-start">
          <p>Playlist</p>
          <h2 className=" text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img
              src={assets.spotify_logo}
              className="inline-block w-5 mr-1"
              alt=""
            />
            <b>Spotify</b>
            <span className="mx-1">&#8226;</span>
            1,323,154 likes
            <span className="mx-1">&#8226;</span>
            50 songs about 2 hr 30 min
          </p>
        </div>
      </div>

      <div className="grid grid-cols-5 sm:grid-cols-7 grid-rows-1 justify-items-start gap-2 mt-10 mb-5 p-2 text-[#a7a7a7]">
        <p className="col-span-2">
          <b className="mr-4">#</b>Title
        </p>
        <p className="col-span-2">Album</p>
        <p className=" hidden sm:block col-span-2">Date Added</p>
        <img src={assets.clock_icon} className=" w-4 col-span-1 block m-auto" alt="" />
      </div>
      <hr />
      
      {songsData.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-5 sm:grid-cols-7 justify-items-start gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className=" text-white col-span-2">
            <b className=" mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img src={item.image} className=" inline-block w-10 mr-5" alt="" />
            {item.name}
          </p>
          <p className="text-[15px] col-span-2">{albumData.name}</p>
          <p className="text-[15px] hidden sm:block col-span-2">5 days ago</p>
          <p className="text-[15px] m-auto col-span-1">{item.duration}</p>
        </div>
      ))}
    </>
  );
}
