import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = () => {
    return (
      <div className="container-xl lg:container m-auto rounded-lg mt-6">
        <div className="bg-white p-8 rounded-lg shadow-xl mx-5">
          <div className="flex flex-col">
            <NavLink
              className="block w-full text-center bg-gray-900 text-white font-bold rounded-lg px-8 py-6 hover:bg-gray-700 hover:text-black"
              to="/calculate"
            >
              Get Started!
            </NavLink>
            <div className="mt-6"></div>
          </div>
        </div>
      </div>
    );
  };

export default Button