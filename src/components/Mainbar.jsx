import React from 'react';
import { NavLink } from 'react-router-dom';

const Mainbar = () => {

  return (
    <div className = "h-20 w-full grid place-items-center gap-10px bg-gray-900 border border border-gray-300 rounded">
      <div className = "absolute left-4 top-15 w-auto h-7">
        <h1 className = "text-white font-bold">CGPA Tracker</h1>
      </div>
      <div className = "absolute right-10 top 15 max-w-sm">
       <div className = "flex h-20 items-center justify-between">
        <div classNmae = "flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <div className = "md:ml-auto">
            <div className = "flex space-x-2">
            <NavLink
            className ="bg-black text-white hover:bg-gray-700 hover:text-black rounded-md px-3 py-2"
            to = "/">
              Home
              </NavLink>
            <NavLink
            className = 'bg-black text-white hover:bg-gray-700 hover:text-black rounded-md px-3 py-2'
            to = "/calculate">
              Calculate!
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Mainbar;
