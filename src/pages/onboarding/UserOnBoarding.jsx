import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { MultiSelect } from "react-multi-select-component";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import FilePickInput from "../../components/filepickInput";
import { apiPOST } from "../../utils/apiHelper";
import { Config } from "../../config";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { addUserProfile } from "../../features/user/userSlice";

const UserOnBoarding = () => {
    const user = useSelector((state) => state.auth.user)
    const history = useHistory()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        profilePic: '',
        contactno: '',
        skills: '',
        collegeName: '',
        qualification: '',
        workExp: '',
        workdesc: '',
        address: '',
        resume: '',
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
        const skillsString = formData.skills.map(skill => skill.value).join(', ');
        const submittedData = {
            ...formData,
            skills: skillsString
        };
        // Handle form submission
        if (submittedData) {
            const response = await apiPOST(`${Config.API_URL}/userprofile/addupdate`, submittedData);
            if (response.status && response.data) {
                console.log(response.data.data);
                console.log(submittedData);
                dispatch(addUserProfile(response.data.data))
                toast.success('User updated successfully');
                history.push('/home')
            }
        }

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
                        {!formData.profilePic ? (
                            <img
                                src={user?.profilePic}
                                alt="Profile Preview"
                                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                            />
                        ) : (
                            <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4">
                                <img
                                    src={formData.profilePic}
                                    alt="Profile Preview"
                                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                                />
                            </div>
                        )}
                        <FilePickInput
                            accept="image/png, image/gif, image/jpeg"
                            id={"profilePic"}
                            fileChange={(e) => {
                                // let newErrors = { ...errors4 };
                                // if (e.length == 0) {
                                //     newErrors["profilePic"] = "Invalid Profile pic";
                                // } else {
                                //     newErrors["profilePic"] = "";
                                // }
                                // setErrors4(newErrors);
                                setFormData({ ...formData, profilePic: e });
                            }}
                            label="Upload Profile Pic"
                            // error={errors4["profilePic"].length > 0 ? true : false}
                            value={formData["profilePic"]}
                        // onChange={(e) => {
                        //   onChange4(e);
                        // }}
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
                            name="qualification"
                            placeholder="Enter Highest Number"
                            className="input input-bordered w-full h-10"
                            value={formData.qualification}
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
                            name="workExp"
                            placeholder="Enter Work Experience"
                            className="input input-bordered w-full h-10"
                            value={formData.workExp}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="remarks">
                            Work Description
                        </label>
                        <textarea
                            name="workdesc"
                            className="textarea textarea-bordered w-full h-10"
                            value={formData.workdesc}
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
                        <FilePickInput
                            accept="application/pdf"
                            id={"resume"}
                            fileChange={(e) => {
                                // let newErrors = { ...errors4 };
                                // if (e.length == 0) {
                                //     newErrors["profilePic"] = "Invalid Profile pic";
                                // } else {
                                //     newErrors["profilePic"] = "";
                                // }
                                // setErrors4(newErrors);
                                setFormData({ ...formData, resume: e });
                            }}
                            label="Upload Resume File"
                            // error={errors4["profilePic"].length > 0 ? true : false}
                            value={formData["resume"]}
                        // onChange={(e) => {
                        //   onChange4(e);
                        // }}
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
