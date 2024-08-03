import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { MultiSelect } from "react-multi-select-component";
import Select from "react-select";
import { useSelector } from "react-redux";

const UserOnBoarding = () => {
    const user = useSelector((state) => state.auth.user)
    const [formData, setFormData] = useState({
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        profilePic: '',
        contactNumber: '',
        skills: [],
        collegeName: '',
        highestQualification: '',
        workExperience: '',
        remarks: '',
        address: '',
        resume: null,
    });

    const skillsOptions = [
        { label: "JavaScript", value: "JavaScript" },
        { label: "React", value: "React" },
        { label: "Node.js", value: "Node.js" },
        { label: "CSS", value: "CSS" },
        { label: "HTML", value: "HTML" },
        // Add more skills as needed
    ];

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSkillsChange = (selected) => {
        setFormData((prevData) => ({
            ...prevData,
            skills: selected,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-6">
                <form className="bg-base-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 lg:max-w-2xl mx-auto" onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold mb-6">User Onboarding</h2>
                    <div className="mb-4 text-center">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profilePic">
                            Profile Picture
                        </label>
                        {user.profilePic ? (
                            <img
                                src={user.profilePic}
                                alt="Profile Preview"
                                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                            />
                        ) : (
                            <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
                        )}
                        <input
                            type="file"
                            name="profilePic"
                            className=""
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
                            First Name
                        </label>
                        <input
                            type="text"
                            disabled
                            name="contactNumber"
                            className="input input-bordered w-full h-10"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
                            Last Name
                        </label>
                        <input
                            type="text"
                            disabled
                            name="contactNumber"
                            className="input input-bordered w-full h-10"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
                            Email
                        </label>
                        <input
                            type="text"
                            disabled
                            name="contactNumber"
                            className="input input-bordered w-full h-10"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
                            Contact Number
                        </label>
                        <input
                            type="text"
                            name="contactNumber"
                            placeholder="Enter Contact Number"
                            className="input input-bordered w-full h-10"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="skills">
                            Skills
                        </label>
                        <Select
                            isMulti
                            name="skills"
                            options={skillsOptions}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            value={formData.skills}
                            onChange={handleSkillsChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="collegeName">
                            College Name
                        </label>
                        <input
                            type="text"
                            name="collegeName"
                            placeholder="Enter College Number"
                            className="input input-bordered w-full h-10"
                            value={formData.collegeName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="highestQualification">
                            Highest Qualification
                        </label>
                        <input
                            type="text"
                            name="highestQualification"
                            placeholder="Enter Highest Number"
                            className="input input-bordered w-full h-10"
                            value={formData.highestQualification}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="workExperience">
                            Work Experience
                        </label>
                        <input
                            type="text"
                            name="workExperience"
                            placeholder="Enter Work Experience"
                            className="input input-bordered w-full h-10"
                            value={formData.workExperience}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="remarks">
                            Remarks
                        </label>
                        <textarea
                            name="remarks"
                            className="textarea textarea-bordered w-full h-10"
                            value={formData.remarks}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                            Address
                        </label>
                        <textarea
                            name="address"
                            className="textarea textarea-bordered w-full h-10"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
                            Resume
                        </label>
                        <input
                            type="file"
                            name="resume"
                            className=""
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserOnBoarding;
