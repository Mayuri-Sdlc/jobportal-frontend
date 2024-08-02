import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllInvestors } from '../../../features/investor/investorSlice';
import moment from 'moment';

const CampaignFundingHistory = ({ campaign }) => {

  const { fundingHistories } = campaign

  return (
    <>
      <div className='flex flex-col sm:flex-row w-full gap-6'>

        <div className='w-full flex flex-col gap-5'>

          <div className="w-full">
            <div className="font-bold text-xl mr-2 my-4 whitespace-nowrap">Funding History</div>

            <div className="flex flex-col">
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full overflow-hidden rounded-lg">
                  <table className="table-auto min-w-full rounded-lg">
                    <thead className="bg-gray-200">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize border border-gray-300">Name</th>
                        <th scope="col" className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize border border-gray-300">Category</th>
                        <th scope="col" className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize border border-gray-300">Investment Amount</th>
                        <th scope="col" className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize border border-gray-300">Date of Investment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fundingHistories && fundingHistories.length ?
                        fundingHistories.map((item) => (
                          <tr key={item.id} >
                            <td className="px-6 py-3 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left border border-gray-300">
                              <h1 className='font-normal text-lg text-[#091E42] mr-2 whitespace-nowrap'>{item?.investorName}</h1>
                            </td>
                            <td className="px-6 py-3 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left border border-gray-300">{item?.stage}</td>
                            <td className="px-6 py-3 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left border border-gray-300">£ {item?.investmentAmount}</td>
                            <td className="px-6 py-3 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left border border-gray-300">{moment(item.dateOfInvestment).format('DD MMM, YYYY')}</td>
                          </tr>)) :
                        <div className="w-full flex flex-col fixed items-center justify-center mt-20">
                          <p className="text-lg">There are no funding history</p>
                        </div>
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}



export default CampaignFundingHistory