import React, { useState } from 'react'

const ProfileCompany = ({ companies }) => {

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  console.log('companies:::', companies);

  return (
    <>
      <div className='flex flex-col sm:flex-row w-full gap-6'>

        <div className='w-full sm:w-1/2 flex flex-col gap-5'>

          <div className='flex flex-row gap-3 items-start bg-[#FAFBFB] rounded-lg p-8'>
            <img className='rounded-3xl w-10 h-10' src="https://i.ibb.co/fNqS8xy/founder-profile.png" alt="" />
            <div>
              <h1 className='font-bold text-lg sm:text-2xl mr-2 whitespace-nowrap capitalize'>{companies?.name ? companies.name : '--'}</h1>
              <div className='font-bold text-base sm:text-lg'>Graham, Langworth and Hettinger</div>
              <p className='font-normal text-base sm:text-lg text-[#2626EA]'>{companies?.businessEmail ? companies.businessEmail : 'Email not found'}</p>
            </div>
          </div>

          <div className="bg-[#FAFBFB] rounded-lg p-8">
            <div className="font-bold text-xl mr-2 whitespace-nowrap">Company Information</div>

            <div className="flex flex-col sm:flex-row sm:gap-3 mt-3">
              <div className="w-full sm:w-1/2 mb-4">
                <label htmlFor="dob" className="block text-sm font-medium text-gray-800">
                  No. of company Invest per year
                </label>
                <input
                  type="text"
                  id="dob"
                  name="dob"
                  disabled
                  value={companies?.investPerYear}
                  placeholder="10"
                  className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
              <div className="w-full sm:w-1/2 mb-4">
                <label htmlFor="gender" className="block text-sm font-medium text-gray-800">
                  Average ticket size
                </label>
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  disabled
                  value={companies?.avgTicket}
                  placeholder="11 - 50"
                  className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-3 mt-3">
              <div className="w-full sm:w-1/2 mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-800">
                  Previously raised from LP
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  disabled
                  placeholder="$ 75,000"
                  className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
              <div className="w-full sm:w-1/2 mb-4">
                <label htmlFor="location" className="block text-sm font-medium text-gray-800">
                  Type of security investigating
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  disabled
                  value={companies?.securityType}
                  placeholder="Preferred Equity"
                  className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-3 mt-3">
              <div className="w-full sm:w-1/2 mb-4">
                <label htmlFor="nationality" className="block text-sm font-medium text-gray-800">
                  Business registered country
                </label>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  disabled
                  placeholder="226-483-3887"
                  className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
              <div className="w-full sm:w-1/2 mb-4">
                <label htmlFor="ctr" className="block text-sm font-medium text-gray-800">
                  Website
                </label>
                <input
                  type="text"
                  id="ctr"
                  name="ctr"
                  disabled
                  value={companies?.website}
                  placeholder="http://laila.info"
                  className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-3 mt-3">
              <div className="w-full sm:w-1/2 mb-4">
                <label htmlFor="tin" className="block text-sm font-medium text-gray-800">
                  Hear about Crowdinvest
                </label>
                <input
                  type="text"
                  id="tin"
                  name="tin"
                  disabled
                  value={companies?.aboutus}
                  placeholder="Indian"
                  className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
              <div className="w-full sm:w-1/2 mb-4">
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-800">
                  Country Tax Residency
                </label>
                <input
                  type="text"
                  id="linkedin"
                  name="linkedin"
                  disabled
                  placeholder="London"
                  className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
            </div>
          </div>

        </div>

        <div className='w-full sm:w-1/2 flex flex-col gap-5'>
          <div className='bg-[#FAFBFB] rounded-lg p-8'>
            <div className='font-bold text-xl mr-2 whitespace-nowrap'>About Company:</div>
            <div className='text-base'>Based in sunny California, this company was founded by a group of tech enthusiasts with a passion for innovation and supporting talented entrepreneurs. Their mission is simple: to empower and fund early-stage startups with disruptive ideas. </div>
          </div>

          <div className="bg-[#FAFBFB] rounded-lg p-8">
            <div className='font-bold text-xl mr-2 whitespace-nowrap'>Portfolio</div>

            <div className="flex gap-3 mt-3 border-b-2">
              <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_4161_40867)"> <path fillRule="evenodd" clipRule="evenodd" d="M13.7449 0.556641C11.4885 0.556641 9.32457 1.45298 7.72908 3.04847L0.0302734 10.7472V14.2712C0.0302734 16.7609 1.09971 19.0008 2.80428 20.5566C1.09971 22.1124 0.0302734 24.3523 0.0302734 26.842V30.366L7.72908 38.0648C9.32457 39.6603 11.4885 40.5566 13.7449 40.5566C16.2346 40.5566 18.4745 39.4872 20.0303 37.7826C21.5861 39.4872 23.826 40.5566 26.3157 40.5566C28.5721 40.5566 30.736 39.6603 32.3315 38.0648L40.0303 30.366V26.842C40.0303 24.3523 38.9609 22.1124 37.2563 20.5566C38.9609 19.0008 40.0303 16.7609 40.0303 14.2712V10.7472L32.3315 3.04847C30.736 1.45298 28.5721 0.556641 26.3157 0.556641C23.826 0.556641 21.5861 1.62608 20.0303 3.33065C18.4745 1.62608 16.2346 0.556641 13.7449 0.556641ZM25.7891 20.5566C25.6932 20.4691 25.5991 20.3792 25.5069 20.287L20.0303 14.8104L14.5537 20.287C14.4615 20.3792 14.3674 20.4691 14.2715 20.5566C14.3674 20.6441 14.4615 20.734 14.5537 20.8262L20.0303 26.3028L25.5069 20.8262C25.5991 20.734 25.6932 20.6441 25.7891 20.5566ZM22.2525 30.366V32.049C22.2525 34.293 24.0717 36.1122 26.3157 36.1122C27.3933 36.1122 28.4268 35.6841 29.1888 34.9221L35.5859 28.525V26.842C35.5859 24.598 33.7667 22.7788 31.5227 22.7788C30.4451 22.7788 29.4116 23.2069 28.6496 23.9689L22.2525 30.366ZM17.8081 30.366L11.411 23.9689C10.649 23.2069 9.61551 22.7788 8.53789 22.7788C6.29386 22.7788 4.47471 24.598 4.47471 26.842V28.525L10.8718 34.9221C11.6338 35.6841 12.6673 36.1122 13.7449 36.1122C15.9889 36.1122 17.8081 34.293 17.8081 32.049V30.366ZM17.8081 9.06426V10.7472L11.411 17.1443C10.649 17.9063 9.61551 18.3344 8.53789 18.3344C6.29386 18.3344 4.47471 16.5152 4.47471 14.2712V12.5882L10.8718 6.19116C11.6338 5.42917 12.6673 5.00109 13.7449 5.00109C15.9889 5.00109 17.8081 6.82023 17.8081 9.06426ZM28.6496 17.1443L22.2525 10.7472V9.06426C22.2525 6.82023 24.0717 5.00109 26.3157 5.00109C27.3933 5.00109 28.4268 5.42917 29.1888 6.19116L35.5859 12.5882V14.2712C35.5859 16.5152 33.7667 18.3344 31.5227 18.3344C30.4451 18.3344 29.4116 17.9063 28.6496 17.1443Z" fill="#FF630B" /> </g> <defs> <clipPath id="clip0_4161_40867"> <rect width="40" height="41" fill="white" transform="translate(0.0302734 0.0405273)" /> </clipPath> </defs> </svg>
              <div className="flex flex-col">
                <span className="text-lg font-bold">{'Champlin Inc'}</span>
                <span className="text-sm font-normal">{'Stage - Pre-seeding'}</span>
              </div>
            </div>
            <div className="flex gap-3 mt-2 border-b-2">
              <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_4161_40867)"> <path fillRule="evenodd" clipRule="evenodd" d="M13.7449 0.556641C11.4885 0.556641 9.32457 1.45298 7.72908 3.04847L0.0302734 10.7472V14.2712C0.0302734 16.7609 1.09971 19.0008 2.80428 20.5566C1.09971 22.1124 0.0302734 24.3523 0.0302734 26.842V30.366L7.72908 38.0648C9.32457 39.6603 11.4885 40.5566 13.7449 40.5566C16.2346 40.5566 18.4745 39.4872 20.0303 37.7826C21.5861 39.4872 23.826 40.5566 26.3157 40.5566C28.5721 40.5566 30.736 39.6603 32.3315 38.0648L40.0303 30.366V26.842C40.0303 24.3523 38.9609 22.1124 37.2563 20.5566C38.9609 19.0008 40.0303 16.7609 40.0303 14.2712V10.7472L32.3315 3.04847C30.736 1.45298 28.5721 0.556641 26.3157 0.556641C23.826 0.556641 21.5861 1.62608 20.0303 3.33065C18.4745 1.62608 16.2346 0.556641 13.7449 0.556641ZM25.7891 20.5566C25.6932 20.4691 25.5991 20.3792 25.5069 20.287L20.0303 14.8104L14.5537 20.287C14.4615 20.3792 14.3674 20.4691 14.2715 20.5566C14.3674 20.6441 14.4615 20.734 14.5537 20.8262L20.0303 26.3028L25.5069 20.8262C25.5991 20.734 25.6932 20.6441 25.7891 20.5566ZM22.2525 30.366V32.049C22.2525 34.293 24.0717 36.1122 26.3157 36.1122C27.3933 36.1122 28.4268 35.6841 29.1888 34.9221L35.5859 28.525V26.842C35.5859 24.598 33.7667 22.7788 31.5227 22.7788C30.4451 22.7788 29.4116 23.2069 28.6496 23.9689L22.2525 30.366ZM17.8081 30.366L11.411 23.9689C10.649 23.2069 9.61551 22.7788 8.53789 22.7788C6.29386 22.7788 4.47471 24.598 4.47471 26.842V28.525L10.8718 34.9221C11.6338 35.6841 12.6673 36.1122 13.7449 36.1122C15.9889 36.1122 17.8081 34.293 17.8081 32.049V30.366ZM17.8081 9.06426V10.7472L11.411 17.1443C10.649 17.9063 9.61551 18.3344 8.53789 18.3344C6.29386 18.3344 4.47471 16.5152 4.47471 14.2712V12.5882L10.8718 6.19116C11.6338 5.42917 12.6673 5.00109 13.7449 5.00109C15.9889 5.00109 17.8081 6.82023 17.8081 9.06426ZM28.6496 17.1443L22.2525 10.7472V9.06426C22.2525 6.82023 24.0717 5.00109 26.3157 5.00109C27.3933 5.00109 28.4268 5.42917 29.1888 6.19116L35.5859 12.5882V14.2712C35.5859 16.5152 33.7667 18.3344 31.5227 18.3344C30.4451 18.3344 29.4116 17.9063 28.6496 17.1443Z" fill="#FF630B" /> </g> <defs> <clipPath id="clip0_4161_40867"> <rect width="40" height="41" fill="white" transform="translate(0.0302734 0.0405273)" /> </clipPath> </defs> </svg>
              <div className="flex flex-col">
                <span className="text-lg font-bold">{'Hettinger, Frami and Hegmann'}</span>
                <span className="text-sm font-normal">{'Stage - Pre-seeding'}</span>
              </div>
            </div>
            <div className="flex gap-3 mt-2">
              <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_4161_40867)"> <path fillRule="evenodd" clipRule="evenodd" d="M13.7449 0.556641C11.4885 0.556641 9.32457 1.45298 7.72908 3.04847L0.0302734 10.7472V14.2712C0.0302734 16.7609 1.09971 19.0008 2.80428 20.5566C1.09971 22.1124 0.0302734 24.3523 0.0302734 26.842V30.366L7.72908 38.0648C9.32457 39.6603 11.4885 40.5566 13.7449 40.5566C16.2346 40.5566 18.4745 39.4872 20.0303 37.7826C21.5861 39.4872 23.826 40.5566 26.3157 40.5566C28.5721 40.5566 30.736 39.6603 32.3315 38.0648L40.0303 30.366V26.842C40.0303 24.3523 38.9609 22.1124 37.2563 20.5566C38.9609 19.0008 40.0303 16.7609 40.0303 14.2712V10.7472L32.3315 3.04847C30.736 1.45298 28.5721 0.556641 26.3157 0.556641C23.826 0.556641 21.5861 1.62608 20.0303 3.33065C18.4745 1.62608 16.2346 0.556641 13.7449 0.556641ZM25.7891 20.5566C25.6932 20.4691 25.5991 20.3792 25.5069 20.287L20.0303 14.8104L14.5537 20.287C14.4615 20.3792 14.3674 20.4691 14.2715 20.5566C14.3674 20.6441 14.4615 20.734 14.5537 20.8262L20.0303 26.3028L25.5069 20.8262C25.5991 20.734 25.6932 20.6441 25.7891 20.5566ZM22.2525 30.366V32.049C22.2525 34.293 24.0717 36.1122 26.3157 36.1122C27.3933 36.1122 28.4268 35.6841 29.1888 34.9221L35.5859 28.525V26.842C35.5859 24.598 33.7667 22.7788 31.5227 22.7788C30.4451 22.7788 29.4116 23.2069 28.6496 23.9689L22.2525 30.366ZM17.8081 30.366L11.411 23.9689C10.649 23.2069 9.61551 22.7788 8.53789 22.7788C6.29386 22.7788 4.47471 24.598 4.47471 26.842V28.525L10.8718 34.9221C11.6338 35.6841 12.6673 36.1122 13.7449 36.1122C15.9889 36.1122 17.8081 34.293 17.8081 32.049V30.366ZM17.8081 9.06426V10.7472L11.411 17.1443C10.649 17.9063 9.61551 18.3344 8.53789 18.3344C6.29386 18.3344 4.47471 16.5152 4.47471 14.2712V12.5882L10.8718 6.19116C11.6338 5.42917 12.6673 5.00109 13.7449 5.00109C15.9889 5.00109 17.8081 6.82023 17.8081 9.06426ZM28.6496 17.1443L22.2525 10.7472V9.06426C22.2525 6.82023 24.0717 5.00109 26.3157 5.00109C27.3933 5.00109 28.4268 5.42917 29.1888 6.19116L35.5859 12.5882V14.2712C35.5859 16.5152 33.7667 18.3344 31.5227 18.3344C30.4451 18.3344 29.4116 17.9063 28.6496 17.1443Z" fill="#FF630B" /> </g> <defs> <clipPath id="clip0_4161_40867"> <rect width="40" height="41" fill="white" transform="translate(0.0302734 0.0405273)" /> </clipPath> </defs> </svg>
              <div className="flex flex-col">
                <span className="text-lg font-bold">{'King, Dach and Schmidt'}</span>
                <span className="text-sm font-normal">{'King, Dach and Schmidt'}</span>
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

export default ProfileCompany