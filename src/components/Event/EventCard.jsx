import React from 'react';

const EventCard = ({ event }) => {
    const {
        name,
        desc,
        datetime,
        company: { name: companyName, address, contactno, logo, website },
        user: { firstName, lastName, profilePic }
    } = event;

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
                <img src={logo} alt={companyName} className="w-12 h-12 rounded-full mr-4" />
                <div>
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p className="text-gray-600">{companyName}</p>
                </div>
            </div>
            <p className="text-gray-700 mb-4 line-clamp-3">{desc}</p>
            <p className="text-gray-600"><strong>Date & Time:</strong> {datetime}</p>
            <p className="text-gray-600"><strong>Location:</strong> {address}</p>
            <p className="text-gray-600"><strong>Contact:</strong> {contactno}</p>
            <a href={website} className="text-blue-500 hover:underline">Visit Website</a>
        </div>
    );
};

export default EventCard;
