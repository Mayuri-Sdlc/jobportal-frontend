import React from 'react'

const CampaignSoftCommitment = ({ campaign }) => {

  const { softCommitments } = campaign

  return (
    <>
      <div className='flex flex-col sm:flex-row w-full gap-6'>

        <div className='w-full flex flex-col gap-5'>

          <div className="w-full">
            <div className="font-bold text-xl mr-2 my-4 whitespace-nowrap">Soft Commitments</div>

            <div className="flex flex-col">
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full overflow-hidden rounded-lg">
                  <table className="table-auto min-w-full rounded-lg">
                    <thead className="bg-gray-200">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize border border-gray-300">Name</th>
                        <th scope="col" className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize border border-gray-300">Status</th>
                        <th scope="col" className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize border border-gray-300">Designation</th>
                        <th scope="col" className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize border border-gray-300">Funding Commitments</th>
                      </tr>
                    </thead>
                    <tbody>
                      {softCommitments && softCommitments.length ?
                        softCommitments.map((item) => (
                          <tr key={item.id} >
                            <td className="px-6 py-3 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left border border-gray-300">
                              <h1 className='font-normal text-lg text-[#091E42] mr-2 whitespace-nowrap'>{item?.investorName}</h1>
                            </td>
                            <td className="px-6 py-3 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left border border-gray-300">{item?.status}</td>
                            <td className="px-6 py-3 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left border border-gray-300">{item?.designation}</td>
                            <td className="px-6 py-3 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left border border-gray-300">£ {item?.fundingCommitment}</td>
                          </tr>)) :
                        <div className="w-full flex flex-col fixed items-center justify-center mt-20">
                          <p className="text-lg">There are no soft commitments</p>
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



export default CampaignSoftCommitment