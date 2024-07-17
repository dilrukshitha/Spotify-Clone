import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className=" h-screen">
      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        className="sm:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md"
      >
        {isSidebarOpen ? "Close" : "Menu"}
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } sm:block w-48 sm:w-64 bg-green-800 text-white h-full`}
      >
        <div className="p-14 sm:p-10">
          <h1 className="text-2xl font-bold mb-6">Spotify</h1>
          <nav>
            <ul>
              <li className="mb-4">
                <NavLink
                  to="/add-song"
                  className={({ isActive }) => (isActive ? "font-bold" : "")}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Add Song
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/list-song"
                  className={({ isActive }) => (isActive ? "font-bold" : "")}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  List Song
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/add-album"
                  className={({ isActive }) => (isActive ? "font-bold" : "")}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Add Album
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/list-album"
                  className={({ isActive }) => (isActive ? "font-bold" : "")}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  List Album
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
