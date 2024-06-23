import React, { useState } from 'react';
import TechnologySection from './components/TechnologySection';
import HealthSection from './components/HealthSection';
import EducationSection from './components/EducationSection';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    surveyTopic: '',
    feedback: '',
    favProgrammingLanguage: '',
    yearsOfExperience: '',
    exerciseFrequency: '',
    dietPreference: '',
    highestQualification: '',
    fieldOfStudy: ''
  });

  const [additionalQuestions, setAdditionalQuestions] = useState([]);
  const [summary, setSummary] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form data
    if (!formData.fullName || !formData.email || !formData.surveyTopic || !formData.feedback || formData.feedback.length < 50) {
      toast.error('Please fill out all required fields and ensure feedback is at least 50 characters.');
      return;
    }

    if (formData.surveyTopic === 'technology' && (!formData.favProgrammingLanguage || !formData.yearsOfExperience)) {
      toast.error('Please fill out all fields in the Technology section.');
      return;
    }

    if (formData.surveyTopic === 'health' && (!formData.exerciseFrequency || !formData.dietPreference)) {
      toast.error('Please fill out all fields in the Health section.');
      return;
    }

    if (formData.surveyTopic === 'education' && (!formData.highestQualification || !formData.fieldOfStudy)) {
      toast.error('Please fill out all fields in the Education section.');
      return;
    }

    try {
      const response = await fetch('https://<project_id>.mockapi.io/api/v1/questions');
      const data = await response.json();
      setAdditionalQuestions(data);
    } catch (error) {
      console.error('Error fetching additional questions:', error);
    }

    // Set the summary
    setSummary(formData);

    // Reset the form data after submission
    setFormData({
      fullName: '',
      email: '',
      surveyTopic: '',
      feedback: '',
      favProgrammingLanguage: '',
      yearsOfExperience: '',
      exerciseFrequency: '',
      dietPreference: '',
      highestQualification: '',
      fieldOfStudy: ''
    });

    // Notify success
    toast.success('Form Submitted');
  };

  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-6 text-center">Survey Form</h1>

        {summary ? (
          <div className="mt-8 p-6 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Survey Summary</h2>
            <p className="mb-2 text-gray-700"><strong>Full Name:</strong> {summary.fullName}</p>
            <p className="mb-2 text-gray-700"><strong>Email:</strong> {summary.email}</p>
            <p className="mb-2 text-gray-700"><strong>Survey Topic:</strong> {summary.surveyTopic}</p>
            <div className="mb-4">
              <strong className="text-gray-700">Feedback:</strong>
              <div className="bg-white border border-gray-300 rounded-md p-2 mt-1" style={{ maxHeight: '10rem', overflowY: 'auto' }}>
                {summary.feedback}
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Additional Questions:</h3>
            <ul className="list-disc list-inside space-y-1">
              {additionalQuestions.map((q, index) => (
                <li key={index} className="text-gray-700">{q.question}</li>
              ))}
            </ul>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Survey Topic</label>
              <select name="surveyTopic" value={formData.surveyTopic} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                <option value="">Select a topic</option>
                <option value="technology">Technology</option>
                <option value="health">Health</option>
                <option value="education">Education</option>
              </select>
            </div>

            {formData.surveyTopic === 'technology' && (
              <TechnologySection formData={formData} handleChange={handleChange} />
            )}

            {formData.surveyTopic === 'health' && (
              <HealthSection formData={formData} handleChange={handleChange} />
            )}

            {formData.surveyTopic === 'education' && (
              <EducationSection formData={formData} handleChange={handleChange} />
            )}

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Feedback</label>
              <textarea name="feedback" value={formData.feedback} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required minLength="50"></textarea>
            </div>

            <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
