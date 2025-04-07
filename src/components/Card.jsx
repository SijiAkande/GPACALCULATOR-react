import React from 'react'
import logo from '../assets/images/logo.png'
import pic from '../assets/images/gpa2.png'

const Card = () => {
  return (
    <div className = "container-xl lg:container m-auto">
      <div className = "grid grid-cols-1 md: grid-cols-2 gap-4 p-4 rounded-lg">
        <div className = "bg-gray-900 p-8 rounded-lg shadow-xl ml-5">
          <div className = "flex-col flex-shrink-0">
            <img src = {pic} className = "h-20 w-auto"/>
            <h2 className = "text-2xl font-bold text-white">Calculate Your GPA</h2>
            <p className = "mt-4 text-gray-300">Enter your grades and get your CGPA instantly.</p>
            <div className = "mt-6">
            </div>
        </div>
    </div>
    <div className = "bg-white p-8 rounded-lg shadow-xl mr-5 border border-gray-300">
        <div className = "flex-col flex-shrink-0">
          <img src = {logo} className = "h-20 w-auto"/>
            <h2 className = "text-2xl font-bold text-gray-900">Tailored for Covenant University Students</h2>
            <p className = "mt-4 text-gray-800">With a just a few clicks get your Entire Course Structure layed out just for you.</p>
            <div className = "mt-6">
            </div>
          </div>
        </div>
      </div>
    </div>
  

  )
}

export default Card