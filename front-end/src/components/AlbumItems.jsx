import { useNavigate } from 'react-router-dom'
import React from 'react'

export default function AlbumItems({ image, name, desc, id }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[180px] max-w-[250px] p-2 px-3 cursor-pointer hover:bg-[#ffffff26]" // Added max-w-[250px] to limit the width
    >
      <div className="w-full h-[180px]">
        <img
          src={image}
          className="w-full h-full object-cover rounded"
          alt={name}
        />
      </div>
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
}