
import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

export default function SongItems({ name, image, desc, id }) {
  const { playWithId } = useContext(PlayerContext);

  // Function to truncate description and add dots if needed
  const truncateDesc = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '.......'; // Truncate and add dots
    }
    return text;
  };

  return (
    <div
      onClick={() => playWithId(id)}
      className='min-w-[180px] max-w-[250px] p-2 px-3 cursor-pointer hover:bg-[#ffffff26] flex-shrink-0'
      style={{ width: '200px' }} // Ensure a fixed width
    >
      <div className="w-full h-[180px]">
        <img
          src={image}
          className="w-full h-full object-cover rounded"
          alt={name}
        />
      </div>
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{truncateDesc(desc, 80)}</p>
    </div>
  );
}
