import React from 'react';

const TechnologySection = ({ formData, handleChange }) => (
  <div className="mb-4">
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Favorite Programming Language:</label>
      <select
        name="favProgrammingLanguage"
        value={formData.favProgrammingLanguage}
        onChange={handleChange}
        required
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="" className="text-gray-500">Select a language</option>
        <option value="javascript" className="text-gray-700">JavaScript</option>
        <option value="python" className="text-gray-700">Python</option>
        <option value="java" className="text-gray-700">Java</option>
        <option value="csharp" className="text-gray-700">C#</option>
      </select>
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Years of Experience:</label>
      <input
        type="number"
        name="yearsOfExperience"
        value={formData.yearsOfExperience}
        onChange={handleChange}
        required
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  </div>
);

export default TechnologySection;
