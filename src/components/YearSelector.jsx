import React from 'react';

const YearSelector = ({ selectedProgram, handleYearChange }) => {
  return (
    <div className = "flex flex-1 items-center justify-center md:items-stretchmd:justify-start mt-4 ">
      <label className = "text-1xl text-white flex flex-col ">
        Select Year:
        <select onChange={handleYearChange} className = "group relative border border-gray-300 bg-white text-gray-500 text-lg px-3 py-1 rounded">
          <option>Select a year</option>
          {selectedProgram?.years.map(y => (
            <option key={y.year} value={y.year}>
              {y.year}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default YearSelector;
