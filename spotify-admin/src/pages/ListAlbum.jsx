import { toast } from "react-toastify";
import axios from "axios";
import { url } from "../App";
import React, { useEffect, useState } from "react";

export default function ListAlbum() {
  const [data, setData] = useState([]);
  const fetchAlbums = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);
      if (response.data.success) {
        setData(response.data.albums);
      } else {
        toast.error("Failed to fetch albums");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const removeAlbum = async (id) => {
    try {
      const response = await axios.post(`${url}/api/album/remove`, { id });
      if (response.data.success) {
        toast.success("Album deleted successfully");
        await fetchAlbums();
      } else {
        toast.error("Failed to delete album");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div>
      <p>All albums list</p>
      <br />
      <div>
        <div className="grid grid-cols-[50px_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Album colour</b>
          <b>Action</b>
        </div>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-[50px_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5"
            >
              <img src={item.image} className="w-12 h-10" alt="" />
              <p className="truncate">{item.name}</p>
              <p className="truncate">{item.desc}</p>
              <input
                className="truncate"
                type="color"
                name=""
                value={item.bgColour}
                id=""
                readOnly
              />
              <div className=" flex justify-start">
                <button
                  onClick={() => removeAlbum(item._id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-700 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
