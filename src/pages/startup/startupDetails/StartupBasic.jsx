import React, { useState } from 'react'


const StartupBasic = ({ campaign }) => {


  return (
    <>
      <div className='flex flex-col sm:flex-row w-full gap-6'>

        <div className='w-full sm:w-3/5 flex flex-col gap-5'>

          <div className="bg-[#FAFBFB] rounded-lg p-8">
            <div className="font-bold text-xl mr-2 whitespace-nowrap">Profile</div>

            <div className="flex flex-col sm:flex-row sm:gap-3 mt-3">
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-normal text-gray-800">
                  Campaign Name
                </label>
                <input
                  type="text"
                  name="campaignName"
                  disabled
                  value={campaign?.campaignName}
                  placeholder="Enter Company Name"
                  className="block w-full px-2 py-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-normal text-gray-800">
                  Funding Stage
                </label>
                <input
                  type="text"
                  name="fundingStage"
                  disabled
                  value={campaign?.fundingStage}
                  placeholder="Enter Funding Stage"
                  className="block w-full px-2 py-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-3 mt-3">
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-normal text-gray-800">
                  Funding Required
                </label>
                <input
                  type="text"
                  name="fundingRequired"
                  disabled
                  value={campaign?.fundingRequired}
                  placeholder="Enter Funding Required"
                  className="block w-full px-2 py-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-normal text-gray-800">
                  SEIS/EIS
                </label>
                <input
                  type="text"
                  name="seis"
                  disabled
                  value={campaign?.company?.seis}
                  placeholder="SEIS"
                  className="block w-full px-2 py-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-3 mt-3">
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-normal text-gray-800">
                  Instrument
                </label>
                <input
                  type="text"
                  name="instrument"
                  disabled
                  value={campaign?.instrument}
                  placeholder="Enter your instrument"
                  className="block w-full px-2 py-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-normal text-gray-800">
                  Valuation
                </label>
                <input
                  type="text"
                  name="valuation"
                  disabled
                  value={campaign?.valuation}
                  placeholder="Enter Valuation"
                  className="block w-full px-2 py-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-3 mt-3">
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-normal text-gray-800">
                  Valuation Type
                </label>
                <input
                  type="text"
                  name="valuationType"
                  disabled
                  value={campaign?.valuationType}
                  placeholder="Enter your valuation Type"
                  className="block w-full px-2 py-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-normal text-gray-800">
                  Share Type
                </label>
                <input
                  type="text"
                  name="shareType"
                  disabled
                  value={campaign?.company?.shareTypes}
                  placeholder="Enter share Type"
                  className="block w-full px-2 py-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-3 mt-3">
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-normal text-gray-800">
                  Percentage of Equity Offered
                </label>
                <input
                  type="text"
                  name="peo"
                  disabled
                  value={campaign?.company?.perEquityOffered}
                  placeholder="Enter Percentage of Equity Offered"
                  className="block w-full px-2 py-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-normal text-gray-800">
                  Monthly Recurring Revenue
                </label>
                <input
                  type="text"
                  name="mrv"
                  disabled
                  value={campaign?.company?.revenue}
                  placeholder="Enter Monthly Recurring Revenue"
                  className="block w-full px-2 py-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-3 mt-3">
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-normal text-gray-800">
                  TTM
                </label>
                <input
                  type="text"
                  name="ttm"
                  disabled
                  value={campaign?.ttm}
                  placeholder="TTM"
                  className="block w-full px-2 py-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default StartupBasic