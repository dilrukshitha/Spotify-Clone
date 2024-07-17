import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddSong from "./pages/AddSong";
import AddAlbum from "./pages/AddAlbum";
import ListAlbum from "./pages/ListAlbum";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import ListSong from "./pages/ListSong";

export const url = 'http://localhost:4000'

const App = () => {
  return (
    <div className=" flex items-start min-h-screen">
      <ToastContainer />
      <Sidebar />

      <div className=" flex-1 h-screen overflow-y-scroll bg-[#f3fff7]">
        <Navbar/>
        <div className=" pt-8 pl-5 sm:pt-12 sm:pl-12">
          <Routes>
            <Route path="/" element={<AddSong />} />
            <Route path="/add-song" element={<AddSong />} />
            <Route path="/add-album" element={<AddAlbum />} />
            <Route path="/list-album" element={<ListAlbum />} />
            <Route path="/list-song" element={<ListSong />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
