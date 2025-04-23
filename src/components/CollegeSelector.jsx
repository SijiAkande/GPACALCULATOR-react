import React from 'react'

const CollegeSelector = ({programsData, handleCollegeChange}) => {
    return (
        <div className = "flex flex-1 items-center justify-center md:items-stretchmd:justify-start mt-4">
          <label className="text-1xl text-white flex flex-col">
            Select College:<select onChange={handleCollegeChange} className = "group relative border border-gray-300 bg-gray-150 text-gray-500 text-lg px-3 py-1 rounded">
              <option className = "active">Select a College</option>
              {programsData.map(c => (
                <option key={c.college} value={c.college}>
                  {c.college}
                </option>
              ))}
            </select>
          </label>
        </div>
      );
}

export default CollegeSelector
