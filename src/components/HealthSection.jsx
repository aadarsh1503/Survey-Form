import React from 'react';

const HealthSection = ({ formData, handleChange }) => (
  <div className="mb-4">
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Exercise Frequency:</label>
      <select
        name="exerciseFrequency"
        value={formData.exerciseFrequency}
        onChange={handleChange}
        required
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="" className="text-gray-500">Select frequency</option>
        <option value="daily" className="text-gray-700">Daily</option>
        <option value="weekly" className="text-gray-700">Weekly</option>
        <option value="monthly" className="text-gray-700">Monthly</option>
        <option value="rarely" className="text-gray-700">Rarely</option>
      </select>
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Diet Preference:</label>
      <select
        name="dietPreference"
        value={formData.dietPreference}
        onChange={handleChange}
        required
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="" className="text-gray-500">Select diet</option>
        <option value="vegetarian" className="text-gray-700">Vegetarian</option>
        <option value="vegan" className="text-gray-700">Vegan</option>
        <option value="nonvegetarian" className="text-gray-700">Non-Vegetarian</option>
      </select>
    </div>
  </div>
);

export default HealthSection;
