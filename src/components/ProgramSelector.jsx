import React from 'react';

const ProgramSelector = ({ selectedCollege, handleProgramChange }) => {
  return (
    <div className = "flex flex-1 items-center justify-center md:items-stretchmd:justify-start mt-4">
      <label className = "text-1xl text-white">
        Select Program:
        <select onChange={handleProgramChange} className = "group relative border border-gray-300 bg-gray-150 text-gray-500 text-lg px-3 py-1 rounded">
          <div className = "absolute top-full right-0 rounded-lg p-3 mt-1 shadow-md scale-y-0 group-focus:scale-y-100 origin-top duration-200">
          <option className = "active">Select a program</option>
          {selectedCollege?.programs.map(p => (
            <option key={p.program} value={p.program}>
              {p.program}
            </option>
          ))}
          </div>
        </select>
      </label>
    </div>
  );
};

export default ProgramSelector;