import axios from "axios";
import { url } from "../App";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function ListSong() {
  const [data, setData] = useState([]);
  const fetchSongs = async () => {
    try {
      const response = await axios.get(`${url}/api/song/list`);
      if (response.data.success) {
        setData(response.data.songs);
      }
    } catch (error) {
      toast.error("Failed to fetch song list");
    }
  };

  const removeSong = async(id)=>{
    try {
        const response = await axios.post(`${url}/api/song/remove`,{id});
        if(response.data.success){
            toast.success(response.data.message);
            fetchSongs();
        }
        else{
            toast.error(response.data.message);
        }
    } catch (error) {
        toast.error("Failed to remove song");
    }
  }

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div>
  <p>All songs list</p>
  <br />
  <div>
    <div className="grid grid-cols-[50px_1fr_1fr_1fr_1fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
      <b>Image</b>
      <b>Name</b>
      <b>Album</b>
      <b>Duration</b>
      <b>Action</b>
    </div>
    {data.map((item, index) => (
      <div
        key={item._id}
        className="grid grid-cols-[50px_1fr_1fr_1fr_1fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5"
      >
        <img src={item.image} alt="" className="w-10 h-10" />
        <p className="truncate">{item.name}</p>
        <p className="truncate">{item.album}</p>
        <p className="truncate">{item.duration}</p>
        <div className="flex justify-start">
          <button onClick={()=>removeSong(item._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-700 rounded">
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}
