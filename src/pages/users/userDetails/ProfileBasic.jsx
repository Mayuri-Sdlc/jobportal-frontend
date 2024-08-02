import React, { useEffect, useState } from 'react'
import { Loader } from '../../../components';

const ProfileBasic = ({ investor, preferences, preferencesLoading }) => {

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  if(preferencesLoading) return <Loader />

  return (
    <>
      <div className='flex flex-col sm:flex-row w-full gap-6'>

        <div className='w-full sm:w-1/2 flex flex-col gap-5'>

          <div className='flex flex-col sm:flex-row gap-3 items-center bg-[#FAFBFB] rounded-lg p-8'>
            <img className='rounded-full w-32 h-32' src={investor?.profilePic ?? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt="" />
            <div>
              <h1 className='font-bold text-lg sm:text-xl mr-2 whitespace-nowrap'>{`${investor?.firstName} ${investor?.lastName}`}</h1>
              <div className='font-medium text-base sm:text-lg text-[#858fa1]'>{investor?.user?.role?.name}</div>
              <div className='flex gap-2 items-center mt-1'>
                <svg className="h-4 w-4 sm:h-6 sm:w-6 text-[#2626EA]" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
                <p className='font-normal text-base sm:text-lg text-[#2626EA]'>Send a message</p>
              </div>
            </div>
          </div>

          <div className="bg-[#FAFBFB] rounded-lg p-8">
            <div className="font-bold text-xl mr-2 whitespace-nowrap">Personal Information</div>

            <div className="flex flex-col sm:flex-row sm:gap-3 mt-3">
              <div className="w-full sm:w-1/2 mb-4">
                <label htmlFor="dob" className="block text-sm font-medium text-gray-800">
                  Date Of Birth
                </label>
                <input
                  type="text"
                  id="dob"
                  name="dob"
                  disabled
                  value={investor?.dob}
                  placeholder="Enter your dob"
                  className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
              <div className="w-full sm:w-1/2 mb-4">
                <label htmlFor="gender" className="block text-sm font-medium text-gray-800">
                  Gender
                </label>
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  disabled
                  value={investor?.gender}
                  placeholder="Enter your gender"
                  className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-3 mt-3">
              <div className="w-full sm:w-1/2 mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-800">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  disabled
                  value={investor?.mobile}
                  placeholder="Enter your phone Number"
                  className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
              <div className="w-full sm:w-1/2 mb-4">
                <label htmlFor="location" className="block text-sm font-medium text-gray-800">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  disabled
                  value={investor?.country}
                  placeholder="Bahrain"
                  className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-3 mt-3">
              <div className="w-full sm:w-1/2 mb-4">
                <label htmlFor="nationality" className="block text-sm font-medium text-gray-800">
                  Nationality
                </label>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  disabled
                  value={investor?.nationality}
                  placeholder="Indian"
                  className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
              <div className="w-full sm:w-1/2 mb-4">
                <label htmlFor="ctr" className="block text-sm font-medium text-gray-800">
                  Country Tax Residency
                </label>
                <input
                  type="text"
                  id="ctr"
                  name="ctr"
                  disabled
                  value={investor?.country}
                  placeholder="London"
                  className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-3 mt-3">
              <div className="w-full sm:w-1/2 mb-4">
                <label htmlFor="tin" className="block text-sm font-medium text-gray-800">
                  Tax Identification Number
                </label>
                <input
                  type="text"
                  id="tin"
                  name="tin"
                  disabled
                  value={investor?.taxResidencyData?.idNumber}
                  placeholder="QSHPM7549X"
                  className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
              <div className="w-full sm:w-1/2 mb-4">
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-800">
                  LinkedIn
                </label>
                <input
                  type="text"
                  id="linkedin"
                  name="linkedin"
                  disabled
                  value={investor?.linkdinUrl}
                  placeholder="@morisotte"
                  className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
            </div>
          </div>

        </div>

        <div className='w-full sm:w-1/2 flex flex-col gap-5'>
          <div className='bg-[#FAFBFB] rounded-lg p-8'>
            <div className='font-bold text-xl mr-2 whitespace-nowrap'>About Me:</div>
            <div className='text-base'>{investor?.bio}</div>
          </div>

          <div className="bg-[#FAFBFB] rounded-lg p-8">
            <div className='font-bold text-xl mr-2 whitespace-nowrap'>Industry/Interests</div>
            <div className="flex flex-wrap mt-2">
              <button
                className={`tab tab-bordered text-base ${activeTab === 0 ? 'tab-active font-bold' : 'font-normal'}`}
                onClick={() => handleTabClick(0)}
              >
                Sector
              </button>
              <button
                className={`tab tab-bordered text-base ${activeTab === 1 ? 'tab-active font-bold' : 'font-normal'}`}
                onClick={() => handleTabClick(1)}
              >
                Stage
              </button>
              <button
                className={`tab tab-bordered text-base ${activeTab === 2 ? 'tab-active font-bold' : 'font-normal'}`}
                onClick={() => handleTabClick(2)}
              >
                Revenue
              </button>
              <button
                className={`tab tab-bordered text-base ${activeTab === 3 ? 'tab-active font-bold' : 'font-normal'}`}
                onClick={() => handleTabClick(3)}
              >
                Type of Business
              </button>
            </div>

            <div className="p-2 flex-auto">
              <div className={activeTab === 0 ? "flex flex-wrap gap-2" : "hidden"}>
                {preferences && preferences.filter((item) => item?.preference.type === "sector").length ?
              preferences.filter((item) => item?.preference.type === "sector")
                  .map((item) => (
                    <CloseButton text={item?.preference?.name} />
                  )) : <span className='text-sm font-normal text-secondary'>There are no items</span>
                }
              </div>
              <div className={activeTab === 1 ? "flex flex-wrap gap-2" : "hidden"}>
                {preferences && preferences.filter((item) => item?.preference.type === "stage").length ?
                preferences.filter((item) => item?.preference.type === "stage")
                  .map((item) => (
                    <CloseButton text={item?.preference?.name} />
                  )) : <span className='text-sm font-normal text-secondary'>There are no items</span>
                }
              </div>
              <div className={activeTab === 2 ? "flex flex-wrap gap-2" : "hidden"}>
                {preferences && preferences.filter((item) => item?.preference.type === "revenue").length ? 
                  preferences.filter((item) => item?.preference.type === "revenue")
                  .map((item) => (
                    <CloseButton text={item?.preference?.name} />
                  )) : <span className='text-sm font-normal text-secondary'>There are no items</span>
                }
              </div>
              <div className={activeTab === 3 ? "flex flex-wrap gap-2" : "hidden"}>
                {preferences && preferences.filter((item) => item?.preference.type === "typeOfBusiness").length ?
                  preferences.filter((item) => item?.preference.type === "typeOfBusiness")
                  .map((item) => (
                    <CloseButton text={item?.preference?.name} />
                  )) : <span className='text-sm font-normal text-secondary'>There are no items</span>
                }
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

const CloseButton = ({ text = "Button" }) => {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
  };

  if (isClosed) return null;

  return (
    <div className="flex items-center justify-between bg-gray-200 px-2 py-1 mt-2 rounded-md">
      <button className="flex items-center text-gray-700" onClick={handleClose}>
        <span className="mr-2 text-sm">{text}</span>
        <svg className="h-3 w-3" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
      </button>
    </div>
  );
};

export default ProfileBasic