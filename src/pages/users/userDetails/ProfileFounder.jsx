import React, { useEffect, useState } from 'react'

const ProfileFounder = ({ founder }) => {
  
  const [founderData, setfounderData] = useState({})
  const { company, docsFunding, profile  } = founderData

  useEffect(() => {
    if (founder && founder.length) setfounderData(founder[0])
  }, [founder])
  

  return (
    <>
      <div className='flex flex-col sm:flex-row w-full gap-6'>

        <div className='w-full sm:w-1/2 flex flex-col gap-5'>

          <div className='flex flex-col sm:flex-row gap-3 investors-center bg-[#FAFBFB] rounded-lg p-8'>
            <img className='rounded-full w-32 h-32' src={profile?.profilePic ?? "https://i.ibb.co/fNqS8xy/founder-profile.png"} alt="" />
            <div>
              <h1 className='font-bold text-lg sm:text-xl mr-2 whitespace-nowrap'>{profile?.firstName ? `${profile?.firstName} ${profile?.lastName}` : "Founder"}</h1>
              <div className='font-medium text-base sm:text-lg text-[#858fa1]'>{profile?.designation}</div>
              <div className='flex gap-2 investors-center mt-1'>
                <svg className="h-4 w-4 sm:h-6 sm:w-6 text-[#2626EA]" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
                <p className='font-normal text-base sm:text-lg text-[#2626EA]'>Send a message</p>
              </div>
            </div>
          </div>

          <div className="bg-[#FAFBFB] rounded-lg p-8">
            <div className="font-bold text-xl mr-2 whitespace-nowrap">Personal Information</div>

            <div className="flex flex-col sm:flex-row sm:gap-3 mt-3">
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-medium text-gray-800">
                  Date Of Birth
                </label>
                <input
                  type="text"
                  name="dob"
                  disabled
                  value={profile?.dob}
                  placeholder="Enter your dob"
                  className="block w-full px-2 py-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-medium text-gray-800">
                  Gender
                </label>
                <input
                  type="text"
                  name="gender"
                  disabled
                  value={profile?.gender}
                  placeholder="Enter your gender"
                  className="block w-full px-2 py-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-3 mt-3">
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-medium text-gray-800">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  disabled
                  value={profile?.mobile}
                  placeholder="Enter your phone Number"
                  className="block w-full px-2 py-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-medium text-gray-800">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  disabled
                  value={profile?.email}
                  placeholder="arial16@gmail.com"
                  className="block w-full px-2 py-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-3 mt-3">
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-medium text-gray-800">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  disabled
                  value={profile?.country}
                  placeholder="London"
                  className="block w-full px-2 py-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-medium text-gray-800">
                  Nationality
                </label>
                <input
                  type="text"
                  name="nationality"
                  disabled
                  value={profile?.nationality}
                  placeholder="Indian"
                  className="block w-full px-2 py-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-3 mt-3">
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-medium text-gray-800">
                  Country of Residence
                </label>
                <input
                  type="text"
                  name="residency"
                  disabled
                  value={profile?.residency}
                  placeholder="London"
                  className="block w-full px-2 py-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
            </div>
          </div>

        </div>

        <div className='w-full sm:w-1/2 flex flex-col gap-5'>
          <div className='bg-[#FAFBFB] rounded-lg p-8'>
            <div className='font-bold text-xl mr-2 whitespace-nowrap'>About Me:</div>
            <div className='text-base'>{profile?.bio ?? 'Bio not set' }</div>
          </div>

          <div className="bg-[#FAFBFB] rounded-lg p-8">
            <div className='font-bold text-xl mr-2 whitespace-nowrap'>Startup Information</div>
            <div className="flex flex-wrap mt-3">
              <div className="flex gap-3">
                <div><svg width="41" height="36" viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_4161_40873)"> <path fillRule="evenodd" clipRule="evenodd" d="M25.0493 30.0405C26.3625 30.0405 27.6629 29.7818 28.8761 29.2793C30.0894 28.7767 31.1918 28.0402 32.1204 27.1116C33.049 26.183 33.7855 25.0806 34.2881 23.8673C34.7906 22.6541 35.0493 21.3537 35.0493 20.0405C35.0493 16.0623 33.4689 12.2469 30.6559 9.43393C27.8429 6.62088 24.0275 5.04053 20.0493 5.04053C16.0711 5.04053 12.2557 6.62088 9.44272 9.43393C6.62967 12.2469 5.04932 16.0623 5.04932 20.0405C5.04932 21.3537 5.30798 22.6541 5.81052 23.8673C6.31307 25.0806 7.04967 26.183 7.97825 27.1116C8.90684 28.0402 10.0092 28.7767 11.2225 29.2793C12.4357 29.7818 13.7361 30.0405 15.0493 30.0405H25.0493ZM20.0493 9.04053C17.1319 9.04053 14.334 10.1994 12.2711 12.2623C10.2082 14.3252 9.04932 17.1231 9.04932 20.0405C9.04932 20.8284 9.20451 21.6086 9.50604 22.3366C9.80757 23.0646 10.2495 23.726 10.8067 24.2831C11.3638 24.8403 12.0252 25.2822 12.7532 25.5838C13.4812 25.8853 14.2614 26.0405 15.0493 26.0405H25.0493C25.8372 26.0405 26.6174 25.8853 27.3454 25.5838C28.0734 25.2822 28.7348 24.8403 29.2919 24.2831C29.8491 23.726 30.291 23.0646 30.5926 22.3366C30.8941 21.6086 31.0493 20.8284 31.0493 20.0405C31.0493 17.1231 29.8904 14.3252 27.8275 12.2623C25.7646 10.1994 22.9667 9.04053 20.0493 9.04053Z" fill="#3064E8" /> <path fillRule="evenodd" clipRule="evenodd" d="M13.0493 35.0405C11.3421 35.0405 9.6517 34.6525 8.07444 33.8987C6.49724 33.1449 5.06412 32.04 3.85693 30.6471C2.64979 29.2542 1.69221 27.6007 1.03888 25.7808C0.385573 23.9609 0.0493164 22.0103 0.0493164 20.0405C0.0493164 14.7362 2.15646 9.64912 5.90719 5.89839C9.65791 2.14767 14.745 0.0405273 20.0493 0.0405273C25.3536 0.0405273 30.4407 2.14767 34.1914 5.89839C37.9422 9.64912 40.0493 14.7362 40.0493 20.0405C40.0493 22.0103 39.713 23.9609 39.0597 25.7808C38.4064 27.6007 37.4488 29.2542 36.2417 30.6471C35.0345 32.04 33.6014 33.1449 32.0242 33.8987C30.4469 34.6525 28.7565 35.0405 27.0493 35.0405H13.0493ZM8.73561 8.72682C11.7362 5.72624 15.8058 4.04053 20.0493 4.04053C24.2928 4.04053 28.3624 5.72624 31.363 8.72682C34.3636 11.7274 36.0493 15.797 36.0493 20.0405C36.0493 21.5584 35.7897 23.0512 35.295 24.4293C34.8003 25.8073 34.0869 27.0259 33.2189 28.0274C32.3519 29.0278 31.3538 29.7857 30.2993 30.2897C29.2474 30.7925 28.145 31.0405 27.0493 31.0405H13.0493C11.9536 31.0405 10.8512 30.7925 9.79931 30.2897C8.74481 29.7857 7.74672 29.0278 6.87969 28.0274C6.01174 27.0259 5.29835 25.8073 4.80365 24.4293C4.30893 23.0512 4.04932 21.5584 4.04932 20.0405C4.04932 15.797 5.73503 11.7274 8.73561 8.72682Z" fill="#3064E8" /> <path d="M25.0493 25.0405H20.0449C19.7089 25.0402 19.3754 25.006 19.0493 24.9395C18.4173 24.8105 17.813 24.5597 17.2715 24.1978C16.4492 23.6484 15.8083 22.8676 15.4299 21.9539C15.3072 21.6576 15.2138 21.3517 15.1503 21.0405C15.0179 20.392 15.015 19.7204 15.1454 19.065C15.3383 18.0951 15.8145 17.2042 16.5138 16.505C17.213 15.8057 18.1039 15.3295 19.0738 15.1366C19.1042 15.1305 19.1345 15.1248 19.1649 15.1193C19.458 15.0667 19.754 15.0405 20.0493 15.0405C20.7028 15.0405 21.3531 15.1686 21.9627 15.4211C22.8763 15.7995 23.6572 16.4404 24.2066 17.2626C24.7561 18.0849 25.0493 19.0516 25.0493 20.0405H21.0493C21.0493 19.8427 20.9907 19.6494 20.8808 19.4849C20.7709 19.3205 20.6147 19.1923 20.432 19.1166C20.2493 19.0409 20.0482 19.0211 19.8542 19.0597C19.6602 19.0983 19.482 19.1935 19.3422 19.3334C19.2023 19.4732 19.1071 19.6514 19.0685 19.8454C19.0299 20.0394 19.0497 20.2405 19.1254 20.4232C19.2011 20.6059 19.3293 20.7621 19.4937 20.872C19.6582 20.9819 19.8515 21.0405 20.0493 21.0405H25.0493C25.1806 21.0405 25.3107 21.0146 25.432 20.9644C25.5533 20.9141 25.6635 20.8405 25.7564 20.7476C25.8493 20.6547 25.9229 20.5445 25.9732 20.4232C26.0234 20.3019 26.0493 20.1718 26.0493 20.0405C26.0493 18.4492 25.4172 16.9231 24.2919 15.7979C23.1667 14.6726 21.6406 14.0405 20.0493 14.0405C19.8767 14.0405 19.7049 14.0479 19.5343 14.0626C19.115 14.0987 18.7028 14.1787 18.3043 14.2999C17.9122 14.419 17.5333 14.5781 17.1736 14.7745C16.7616 14.9995 16.3748 15.2735 16.0223 15.5927C15.9489 15.6591 15.877 15.7275 15.8067 15.7979C15.3144 16.2901 14.9165 16.8592 14.6246 17.4768C14.4787 17.7856 14.3592 18.1065 14.2678 18.4361C14.1632 18.8129 14.0952 19.2009 14.0659 19.5949C14.0549 19.7427 14.0493 19.8913 14.0493 20.0405C14.0493 20.8246 14.203 21.6051 14.506 22.3366C14.9602 23.433 15.7292 24.37 16.7159 25.0293C16.7215 25.0331 16.7271 25.0368 16.7327 25.0405H15.0493C14.3927 25.0405 13.7425 24.9112 13.1359 24.6599C12.5293 24.4086 11.9781 24.0403 11.5138 23.576C11.0495 23.1117 10.6812 22.5605 10.4299 21.9539C10.1786 21.3473 10.0493 20.6971 10.0493 20.0405C10.0493 17.3883 11.1029 14.8448 12.9782 12.9694C14.8536 11.0941 17.3971 10.0405 20.0493 10.0405C22.7015 10.0405 25.245 11.0941 27.1204 12.9694C28.9957 14.8448 30.0493 17.3883 30.0493 20.0405C30.0493 20.6971 29.92 21.3473 29.6687 21.9539C29.4174 22.5605 29.0491 23.1117 28.5848 23.576C28.1205 24.0403 27.5693 24.4086 26.9627 24.6599C26.3561 24.9112 25.7059 25.0405 25.0493 25.0405Z" fill="#3064E8" /> </g> <defs> <clipPath id="clip0_4161_40873"> <rect width="40" height="35" fill="white" transform="translate(0.0493164 0.0405273)" /> </clipPath> </defs> </svg></div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold">{company?.name ?? "Champlin Inc"}</span>
                  <span className="text-lg font-normal">{company?.stage ?? "Stage - Pre-seeding"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProfileFounder