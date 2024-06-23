import React from 'react';

const EducationSection = ({ formData, handleChange }) => (
  <div className="mb-4">
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Highest Qualification:</label>
      <select
        name="highestQualification"
        value={formData.highestQualification}
        onChange={handleChange}
        required
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="" className="text-gray-500">Select qualification</option>
        <option value="highschool" className="text-gray-700">High School</option>
        <option value="bachelors" className="text-gray-700">Bachelor's</option>
        <option value="masters" className="text-gray-700">Master's</option>
        <option value="phd" className="text-gray-700">PhD</option>
      </select>
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Field of Study:</label>
      <input
        type="text"
        name="fieldOfStudy"
        value={formData.fieldOfStudy}
        onChange={handleChange}
        required
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  </div>
);

export default EducationSection;
