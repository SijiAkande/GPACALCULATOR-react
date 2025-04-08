import React from 'react';
import calcimg from '../assets/images/Calc.png'
import { NavLink } from 'react-router-dom';

const Mainbar = () => {

  return (
    <div>
        <nav className="bg-gray-900 border-b border-indigo-700">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
              <img className = "h-10 w-auto" src = {calcimg} alt = "CGPA Tracker"/>
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >CGPA Tracker enabled </span
              >
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className="bg-black text-white hover:bg-gray-700 hover:text-black rounded-md px-3 py-2"
                  >Home</NavLink
                >
                <NavLink
                  to="/calculate"
                  className="bg-black text-white hover:bg-gray-700 hover:text-black rounded-md px-3 py-2"
                  >Calculate</NavLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Mainbar;
