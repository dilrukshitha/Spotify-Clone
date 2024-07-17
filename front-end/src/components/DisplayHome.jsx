import React, { useContext, useRef } from "react";
import Navbar from "./Navbar";
import AlbumItems from "./AlbumItems";
import SongItems from "./SongItems";
import { PlayerContext } from "../context/PlayerContext";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

export default function DisplayHome() {
  const { songsData, albumsData } = useContext(PlayerContext);
  const albumContainerRef = useRef(null);
  const songContainerRef = useRef(null);

  const scroll = (ref, direction) => {
    const { current } = ref;
    if (direction === "left") {
      current.scrollBy({ left: -current.clientWidth * 0.8, behavior: "smooth" });
    } else {
      current.scrollBy({ left: current.clientWidth * 0.8, behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />

      <div className="my-4 relative">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-4xl text-white bg-black bg-opacity-50 rounded-full p-2 z-10"
          onClick={() => scroll(albumContainerRef, "left")}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="flex overflow-x-auto" ref={albumContainerRef}>
          {albumsData.map((item, index) => {
            return (
              <AlbumItems
                key={index}
                name={item.name}
                desc={item.desc}
                id={item._id}
                image={item.image}
              ></AlbumItems>
            );
          })}
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-4xl text-white bg-black bg-opacity-50 rounded-full p-2 z-10"
          onClick={() => scroll(albumContainerRef, "right")}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <div className="my-4 relative">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-4xl text-white bg-black bg-opacity-50 rounded-full p-2 z-10"
          onClick={() => scroll(songContainerRef, "left")}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="flex overflow-x-auto" ref={songContainerRef}>
          {songsData.map((item, index) => {
            return (
              <SongItems
                key={index}
                name={item.name}
                desc={item.desc}
                id={item._id}
                image={item.image}
              ></SongItems>
            );
          })}
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-4xl text-white bg-black bg-opacity-50 rounded-full p-2 z-10"
          onClick={() => scroll(songContainerRef, "right")}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </>
  );
}
