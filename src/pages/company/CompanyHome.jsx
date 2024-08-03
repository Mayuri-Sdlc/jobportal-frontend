import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Widget from '../../components/Widget/Widget';
import { apiPOST } from '../../utils/apiHelper';
import { Config } from '../../config';
import { useSelector } from 'react-redux';
import EventCard from '../../components/Event/EventCard';

const CompanyDashboard = () => {
    const user = useSelector((state) => state.auth.user)
    const [ongoingEvents, setOnGoingEvents] = useState([])
    const getAllEvents = async () => {
        const payload = {
            companyId: user?.companies[0]?.id
        }
        const response = await apiPOST(`${Config.API_URL}/events/getall`, payload)
        if (response.status) {
            setOnGoingEvents(response.data?.data)
        }
    }
    useEffect(() => {
        getAllEvents()
    }, [])
    return (
        <div className="flex bg-gray-100">
            <div className="flex-1 flex flex-col">
                <Navbar />
                <div className="flex-1 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Widget title="Total Job Posts" value="45" />
                        <Widget title="New Applications" value="230" />
                        <Widget title="Interviews Scheduled" value="15" />
                        <Widget title="Hired Candidates" value="12" />
                        <Widget title="Pending Applications" value="70" />
                        <Widget title="Rejected Applications" value="50" />
                    </div>
                </div>
                <div className="p-6 bg-gray-100 min-h-screen">
                    <h1 className="text-3xl font-bold mb-6">Ongoing Events</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ongoingEvents.length !== 0 && ongoingEvents?.map(event => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyDashboard;
