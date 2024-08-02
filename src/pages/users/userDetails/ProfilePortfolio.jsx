import React, { useEffect, useState } from 'react'
import { apiGET } from '../../../utils/apiHelper';
import { Loader } from '../../../components';

const ProfilePortfolio = ({ investor, history, historyLoading }) => {

  const [fundingList, setfundingList] = useState([])

  const getInvestorFundindHistory = async () => {
    try {
      let response = await apiGET(`/fundinghistory/user/${investor?.userId}`)
      if (response.status == 201) {
        setfundingList(response.data.data)
      }
    } catch (error) {
      console.log('getInvestorFundindHistory error', error);
    }
  }

  // useEffect(() => {
  //   if (investor?.userId) getInvestorFundindHistory()
  // }, [investor?.userId])

  // if(historyLoading) return <Loader />

  return (
    <>
      <div className="flex flex-wrap gap-6">
        {history && history.length ? history.map((item) => (
          <div className="w-full sm:w-[35%] 2xl:w-1/4 bg-[#FAFBFB] rounded-2xl p-6">
            <div className="flex gap-3">
              <img className='w-10 h-10 rounded-full' src={item?.investorPhoto} />
              <div className="flex flex-col">
                <span className="text-lg font-bold">{item.investorName}</span>
                <span className="text-sm font-normal">{item?.company.name}</span>
              </div>
            </div>
            <div className="flex flex-row mt-4">
              <div className="w-2/6">Type</div> <span>: {item.stage}</span>
            </div>
            <div className="flex flex-row">
              <div className="w-2/6">Date</div> <span>: {item.dateOfInvestment}</span>
            </div>
            <div className="flex flex-row">
              <div className="w-2/6">Amount</div> <span>: $ {item.investmentAmount}</span>
            </div>
          </div>
        )) : <div className='flex justify-center items-center text-lg w-full mt-4'>This user does not have any Portfolio</div>}
      </div>
    </>
  )
}

export default ProfilePortfolio