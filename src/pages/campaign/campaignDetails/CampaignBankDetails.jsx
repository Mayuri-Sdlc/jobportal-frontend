import React, { useState, useEffect } from 'react'

const CampaignBankDetails = ({ campaign,companyBankAccount }) => {
console.log("accounts",companyBankAccount)
  const [toggleBank, settoggleBank] = useState(false)

  const handleSwitchBank = () => {
    settoggleBank(!toggleBank)
  }


  return (
    <>
      <div className='flex flex-col sm:flex-row w-full gap-6'>

        <div className='w-full flex flex-col gap-5'>

          <div className="font-bold text-xl mr-2 whitespace-nowrap">Bank Details</div>

          <div className="w-full sm:w-4/5 bg-[#FAFBFB] rounded-lg p-8">

            <div className='flex flex-row gap-8 cursor-pointer'>
              <div className={`font-semibold text-lg mr-2 whitespace-nowrap ${toggleBank ? 'text-gray-500' : 'text-black'}`} onClick={() => handleSwitchBank()}>International Bank Account</div>
              <div className={`font-semibold text-lg mr-2 whitespace-nowrap ${toggleBank ? 'text-black' : 'text-gray-400'}`} onClick={() => handleSwitchBank()}>UK Bank Account</div>
            </div>

                <div>
                    
                    {companyBankAccount?.length && companyBankAccount.map((item)=>{
                      return(
                        <div>
                <div className="flex flex-col sm:flex-row sm:gap-5 mt-5">
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-medium text-gray-800">
                  Bank Name
                </label>
                <input
                  type="text"
                  name="bankName"
                  disabled
                  value={item?.name}
                  placeholder="Libbie"
                  className="block w-full px-2 py-2 mt-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-medium text-gray-800">
                  BIC/SWIFT
                </label>
                <input
                  type="text"
                  name="swift"
                  disabled
                  value={item?.bankCode}
                  placeholder="Volkman"
                  className="block w-full px-2 py-2 mt-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-medium text-gray-800">
                  Holder Country ( ISO 2 Code)
                </label>
                <input
                  type="text"
                  name="holderCountry"
                  disabled
                  value={item?.holderCountry}
                  placeholder="Volkman"
                  className="block w-full px-2 py-2 mt-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-5 mt-3">
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-medium text-gray-800">
                  Sort/IFSC Code
                </label>
                <input
                  type="text"
                  name="ifsc"
                  disabled
                  value={item?.ifscCode}
                  placeholder="Libbie"
                  className="block w-full px-2 py-2 mt-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-medium text-gray-800">
                  Account Number
                </label>
                <input
                  type="text"
                  name="accountNumber"
                  disabled
                  value={item?.accountNumber}
                  placeholder="Volkman"
                  className="block w-full px-2 py-2 mt-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-medium text-gray-800">
                  Bank Branch
                </label>
                <input
                  type="text"
                  name="bankBranch"
                  disabled
                  value={item?.bankBranch}
                  placeholder="Volkman"
                  className="block w-full px-2 py-2 mt-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-5 mt-3">
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-medium text-gray-800">
                  Bank Country ( ISO 2 Code)
                </label>
                <input
                  type="text"
                  name="bankCountry"
                  disabled
                  value={item?.bankCountry}
                  placeholder="Libbie"
                  className="block w-full px-2 py-2 mt-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
            </div>
                </div>
                      )
                    })} 

                </div>
          </div>

        </div>
      </div>
    </>
  )
}



export default CampaignBankDetails