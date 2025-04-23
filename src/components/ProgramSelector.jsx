import React from 'react';

const ProgramSelector = ({ selectedCollege, handleProgramChange }) => {
  return (
    <div className = "flex flex-1 items-center justify-center md:items-stretch md:justify-start mt-4">
      <label className = "text-1xl text-white flex flex-col">
        Select Program:
        <select onChange={handleProgramChange} className = "group relative border border-gray-300 bg-gray-150 text-gray-500 text-lg px-3 py-1 rounded">
          <option className = "active">Select a program</option>
          {selectedCollege?.programs.map(p => (
            <option key={p.program} value={p.program}>
              {p.program}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default ProgramSelector;
