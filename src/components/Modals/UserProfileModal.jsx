import React from 'react';

const UserProfileModal = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">User Profile</h2>
        </div>
        <div className="p-6">
          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 rounded-full mb-4"
              src={user.userProfiles[0]?.profilePic}
              alt="Profile"
            />
            <h3 className="text-lg font-medium">{user.firstName} {user.lastName}</h3>
            <p className="text-sm text-gray-500">{user.email}</p>
            <p className="text-sm text-gray-500">{user.country}</p>
          </div>
        </div>
        <div className="p-4 border-t">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileModal;
