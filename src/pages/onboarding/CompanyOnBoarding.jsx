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
import { addCompanyProfile } from "../../features/company/company.slice";

const CompanyOnBoarding = () => {
    const user = useSelector((state) => state.auth.user)
    const history = useHistory()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        contactno: '',
        website: '',
        logo: ''
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
        // Handle form submission
        const response = await apiPOST(`${Config.API_URL}/company/addupdate`, formData);
        if (response.status && response.data) {
            console.log(response.data.data);
            dispatch(addCompanyProfile(response.data.data))
            toast.success('Company data updated successfully');
            history.push('/company/home')
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-6">
                <form className="bg-base-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 lg:max-w-2xl mx-auto" onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold mb-6">Company Onboarding</h2>
                    <div className="mb-4 text-center">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profilePic">
                            Company Logo
                        </label>
                        {!formData.logo ? (
                            <img
                                src={'https://test-env-ci-platform.s3.eu-west-2.amazonaws.com/uploads/1683631172390Group-2829-%281%29.png'}
                                alt="Profile Preview"
                                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                            />
                        ) : (
                            <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4">
                                <img
                                    src={formData.logo}
                                    alt="Profile Preview"
                                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                                />
                            </div>
                        )}
                        <FilePickInput
                            accept="image/png, image/gif, image/jpeg"
                            id={"logo"}
                            fileChange={(e) => {
                                // let newErrors = { ...errors4 };
                                // if (e.length == 0) {
                                //     newErrors["profilePic"] = "Invalid Profile pic";
                                // } else {
                                //     newErrors["profilePic"] = "";
                                // }
                                // setErrors4(newErrors);
                                setFormData({ ...formData, logo: e });
                            }}
                            label="Upload company logo"
                            // error={errors4["profilePic"].length > 0 ? true : false}
                            value={formData["logo"]}
                        // onChange={(e) => {
                        //   onChange4(e);
                        // }}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
                            Company Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter company name"
                            className="input input-bordered w-full h-10"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
                            Website url
                        </label>
                        <input
                            type="text"
                            name="website"
                            placeholder="Enter website url"
                            className="input input-bordered w-full h-10"
                            value={formData.website}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="collegeName">
                            Address
                        </label>
                        <input
                            type="text"
                            name="address"
                            placeholder="Enter company address"
                            className="input input-bordered w-full h-10"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="highestQualification">
                            Contact Number
                        </label>
                        <input
                            type="text"
                            name="contactno"
                            placeholder="Enter company contact"
                            className="input input-bordered w-full h-10"
                            value={formData.contactno}
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

export default CompanyOnBoarding;
