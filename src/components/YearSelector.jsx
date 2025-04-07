import React from 'react';

const YearSelector = ({ selectedProgram, handleYearChange }) => {
  return (
    <div className = "flex flex-1 items-center justify-center md:items-stretchmd:justify-start mt-4 ">
      <label className = "text-1xl text-white ">
        Select Year:
        <select onChange={handleYearChange} className = "group relative border border-gray-300 bg-white text-gray-500 text-lg px-3 py-1 rounded">
          <div className = "absolute top-full right-0 rounded-lg p-3 mt-1 shadow-md scale-y-0 group-focus:scale-y-100 origin-top duration-200">
          <option>Select a year</option>
          {selectedProgram?.years.map(y => (
            <option key={y.year} value={y.year}>
              {y.year}
            </option>
          ))}
          </div>
        </select>
      </label>
    </div>
  );
};

export default YearSelector;