import React from 'react';

const SemesterSelector = ({ selectedYear, handleSemesterChange }) => {
  return (
    <div className = "flex flex-1 items-center justify-center md:items-stretchmd:justify-start mt-4">
      <label className = "text-1xl text-white flex flex-col">
        Select Semester:
        <select onChange={handleSemesterChange} className = "group relative border border-gray-300 bg-white text-gray-500 text-lg px-3 py-1 rounded">
          <div className = "absolute top-full right-0 rounded-lg p-3 mt-1 shadow-md scale-y-0 group-focus:scale-y-100 origin-top duration-200">
          <option className = "active">Select a semester</option>
          {selectedYear?.semesters.map(s => (
            <option key={s.semester} value={s.semester}>
              {s.semester}
            </option>
          ))}
          </div>
        </select>
      </label>
    </div>
  );
};

export default SemesterSelector;