import { toast } from 'react-toastify';
import  axios  from 'axios';
import {url} from '../App';
import React, { useState } from 'react'
import {assets} from '../assets/assets'

export default function AddAlbum() {

    const [image,setImage] = useState(false);
    const [colour, setColour] = useState('#121212');
    const [name, setName] = useState('');
    const [desc,setDesc] = useState("");
    const [loading,setLoading] = useState(false);

    const onSumbitHandler = async(e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('name',name);
            formData.append('desc',desc);
            formData.append('image', image);
            formData.append('bgColour',colour);

            const response = await axios.post(`${url}/api/album/add`, formData);
            if(response.data.success){
                toast.success("Album added");
                setName('');
                setDesc('');
                setImage(false);
                setColour('#121212');
            }
            else{
                toast.error("Failed to add album");
            }
        } catch (error) {
            toast.error("Something went wrong");
        }
        setLoading(false);
    }



  return loading ? (
    <div className="grid place-items-center min-h-[80vh]">
        <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin"></div>
    </div>
  ) :  (
    <form onSubmit={onSumbitHandler} className='flex flex-col items-start gap-8 text-gray-600'>
      <div className='flex flex-col gap-4'>
        <p>Upload image</p>
        <input onChange={(e)=>setImage(e.target.files[0])} type="file" name="" id="image" accept='image/*' hidden />
        <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" className=' w-24 cursor-pointer'/>
        </label>
      </div>

      <div className='flex flex-col gap-2.5'>
        <p>Album name</p>
        <input onChange={(e)=>setName(e.target.value)} value={name} type="text" name="" id="" placeholder='Type here' className=' bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' />
      </div>

      <div className='flex flex-col gap-2.5'>
        <p>Album description</p>
        <input onChange={(e)=>setDesc(e.target.value)} value={desc} type="text" name="" id="" placeholder='Type here' className=' bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' />
      </div>

      <div className='flex flex-col gap-3'>
        <p>Background colour</p>
        <input onChange={(e)=>setColour(e.target.value)} value={colour} type="color" name="" id="" />
      </div>

      <button type="submit" className='text-base bg-black text-white py-2.5 px-14 cursor-pointer'>ADD</button>
    </form>
  )
}
