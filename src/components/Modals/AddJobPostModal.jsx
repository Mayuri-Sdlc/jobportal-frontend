import React, { useState } from 'react';
import Select from 'react-select';
import { components } from 'react-select';
import { apiPOST } from '../../utils/apiHelper';
import { toast } from 'react-toastify';

// Custom component to show the remove icon
const MultiValueRemove = (props) => {
  return (
    <components.MultiValueRemove {...props}>
      <span className="text-red-500">×</span>
    </components.MultiValueRemove>
  );
};

const AddJobPostModal = ({ isOpen, onRequestClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState([]);

  const skillOptions = [
    { label: "JavaScript", value: "javascript" },
    { label: "React", value: "react" },
    { label: "Node.js", value: "nodejs" },
    // Add more options as needed
  ];

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const payload = {
      name:title,
      desc:description,
      skills: skills.map(skill => skill.value).join(', '),
      eventId:"2",
    };
    console.log(payload);
    const response = await apiPOST(`/jobpost/add`,payload)
    console.log("Add event",response);
    if (response?.status==200) {
      toast.success('Job post added successfully');
    } else {
      toast.error('Failed to add job post',);
    }
    // Handle the job data submission logic here
    onRequestClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
        <h2 className="text-2xl font-semibold mb-4">Add Job Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Skills:</label>
            <Select
              isMulti
              options={skillOptions}
              value={skills}
              onChange={setSkills}
              closeMenuOnSelect={false}
              components={{ MultiValueRemove }}
              className="mt-1"
            />
          </div>
          
          <div className="flex justify-end space-x-2">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Job Post
            </button>
            <button
              type="button"
              onClick={onRequestClose}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJobPostModal;
