import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllInvestors } from '../../../features/investor/investorSlice';
import moment from 'moment';

const CampaignFinancial = ({ campaign, investors: users }) => {

  const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState(false);

  const handleButtonClick = () => {
    setShowSearch(!showSearch);
  };


  let optionsData = {
    "limit": 5,
    "page": 1,
  }

  const handleClick = (e) => {
    e.preventDefault();
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };


  return (
    <>
      <div className='flex flex-col sm:flex-row w-full gap-6'>

        <div className='w-full flex flex-col gap-5'>

          <div className="w-full sm:w-4/5 bg-[#FAFBFB] rounded-lg p-8">
            <div className="font-bold text-xl mr-2 whitespace-nowrap">Financial</div>

            <div className="flex flex-col sm:flex-row sm:gap-5 mt-3">
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-medium text-gray-800">
                  Financial
                </label>
                <input
                  type="text"
                  name="financial"
                  disabled
                  value={campaign?.financial}
                  placeholder="Libbie"
                  className="block w-full px-2 py-2 mt-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-base font-medium text-gray-800">
                  Paid Up Capital
                </label>
                <input
                  type="text"
                  name="paidUpCapital"
                  disabled
                  value={campaign?.paidUpCapita}
                  placeholder="Volkman"
                  className="block w-full px-2 py-2 mt-2 text-base font-semibold text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                />
              </div>
              <div className="w-full sm:w-1/2 mb-4">
                <label className="block text-sm font-medium text-gray-800">
                  Bank Document
                </label>
                <div className="flex flex-row mt-2 gap-3 items-center">
                  <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M56.1199 31.3801H53.2499V5.12012C53.2499 4.57012 52.7999 4.12012 52.2499 4.12012H11.7499C11.1999 4.12012 10.7499 4.57012 10.7499 5.12012V31.3801H7.87988C7.31988 31.3801 6.87988 31.8201 6.87988 32.3801V51.6201C6.87988 52.1801 7.31988 52.6201 7.87988 52.6201H10.7499V58.8801C10.7499 59.4301 11.1999 59.8801 11.7499 59.8801H52.2499C52.7999 59.8801 53.2499 59.4301 53.2499 58.8801V52.6201H56.1199C56.6799 52.6201 57.1199 52.1801 57.1199 51.6201V32.3801C57.1199 31.8201 56.6799 31.3801 56.1199 31.3801ZM51.2499 57.8801H12.7499V52.6201H51.2499V57.8801ZM17.8399 47.2501V36.5101C17.8399 36.3801 17.9499 36.2601 18.0899 36.2601H21.5699C22.9199 36.2601 23.7899 36.3211 24.2099 36.4301C24.8799 36.6111 25.4399 36.9911 25.8899 37.5711C26.3399 38.1511 26.5709 38.9111 26.5709 39.8211C26.5709 40.5101 26.4409 41.1111 26.1799 41.6001C25.9199 42.0801 25.5899 42.4601 25.1909 42.7411C24.7909 43.0201 24.3799 43.2011 23.9809 43.2911C23.4299 43.4011 22.6799 43.4511 21.6699 43.4511H20.5099V47.2511C20.5099 47.3911 20.4009 47.5011 20.2599 47.5011H18.0899C17.9499 47.5001 17.8399 47.3901 17.8399 47.2501ZM27.8399 47.2501V36.5101C27.8399 36.3801 27.9499 36.2601 28.0899 36.2601H32.0499C32.9809 36.2601 33.6699 36.3301 34.1699 36.4811C34.8399 36.6801 35.4199 37.0311 35.8899 37.5411C36.3699 38.0311 36.7309 38.6511 36.9699 39.3711C37.2199 40.0811 37.3399 40.9611 37.3399 41.9811C37.3399 42.8901 37.2199 43.6911 36.9999 44.3501C36.7199 45.1701 36.3099 45.8401 35.7899 46.3501C35.3799 46.7411 34.8399 47.0501 34.1599 47.2601C33.6599 47.4201 32.9899 47.5001 32.1699 47.5001H28.0899C27.9499 47.5001 27.8399 47.3901 27.8399 47.2501ZM45.5899 40.6201C45.7309 40.6201 45.8399 40.7301 45.8399 40.8701V42.6901C45.8399 42.8301 45.7309 42.9401 45.5899 42.9401H41.3599V47.2501C41.3599 47.3901 41.2499 47.5001 41.1099 47.5001H38.9399C38.8089 47.5001 38.6899 47.3901 38.6899 47.2501V36.5101C38.6899 36.3801 38.8089 36.2601 38.9399 36.2601H46.2999C46.4409 36.2601 46.5499 36.3801 46.5499 36.5101V38.3301C46.5499 38.4701 46.4409 38.5801 46.2999 38.5801H41.3599V40.6201H45.5899ZM51.2499 31.3801H12.7499V6.12012H51.2499V31.3801Z" fill="#CD4527" />
                    <path d="M23.8298 39.8501C23.8298 40.1111 23.7598 40.3401 23.6298 40.5401C23.4998 40.7401 23.3098 40.8801 23.0698 40.9701C22.8888 41.0401 22.4688 41.1301 21.4498 41.1301H20.5098V38.5801H21.3098C22.0708 38.5801 22.5808 38.6001 22.8208 38.6501C23.1208 38.7001 23.3608 38.8301 23.5498 39.0491C23.7398 39.2501 23.8298 39.5201 23.8298 39.8501Z" fill="#CD4527" />
                    <path d="M34.5998 41.89C34.5998 42.691 34.5308 43.33 34.3898 43.781C34.2598 44.22 34.0898 44.531 33.8898 44.711C33.6908 44.891 33.4408 45.021 33.1198 45.101C32.8798 45.162 32.4598 45.192 31.8798 45.192H30.5098V38.582H31.2308C32.0898 38.582 32.6698 38.612 32.9598 38.682C33.3198 38.752 33.6098 38.903 33.8398 39.122C34.0698 39.342 34.2598 39.652 34.3898 40.052C34.5298 40.47 34.5998 41.09 34.5998 41.89Z" fill="#CD4527" />
                    <path d="M46.75 13.375H17.25C16.697 13.375 16.25 12.928 16.25 12.375C16.25 11.822 16.697 11.375 17.25 11.375H46.75C47.303 11.375 47.75 11.822 47.75 12.375C47.75 12.928 47.303 13.375 46.75 13.375Z" fill="#CD4527" />
                    <path d="M46.75 20.375H17.25C16.697 20.375 16.25 19.928 16.25 19.375C16.25 18.822 16.697 18.375 17.25 18.375H46.75C47.303 18.375 47.75 18.822 47.75 19.375C47.75 19.928 47.303 20.375 46.75 20.375Z" fill="#CD4527" />
                    <path d="M46.75 27.375H17.25C16.697 27.375 16.25 26.928 16.25 26.375C16.25 25.822 16.697 25.375 17.25 25.375H46.75C47.303 25.375 47.75 25.822 47.75 26.375C47.75 26.928 47.303 27.375 46.75 27.375Z" fill="#CD4527" />
                  </svg>
                  <p className='font-medium'>bank-document.pdf</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className='flex justify-between'>
              <div className="font-bold text-xl mr-2 my-4 whitespace-nowrap">Investments</div>
              <div className='flex items-center gap-2'>
                <div className="relative">
                  <div className="flex relative">
                    <input className={`bg-transparent outline-none transition-all duration-300 ease-in-out ${showSearch ? 'w-40 sm:w-48 p-2 border-y border-l rounded-tl-md rounded-bl-md' : 'w-0'}`}
                      type="text"
                      placeholder="Search..."
                    />
                    <button className={`bg-gray-100 p-2 focus:outline-none transition-all duration-300 ease-in-out ${showSearch ? 'bg-white text-gray-700 border-y border-r rounded-tr rounded-br' : 'text-white rounded'}`}
                      onClick={handleButtonClick}
                    >
                      <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
                    </button>
                  </div>
                </div>
                <select className='bg-gray-100 p-2 rounded'>
                  <option value=''>Sort By</option>
                  <option value='latest'>Latest</option>
                  <option value='asc'>Ascending</option>
                  <option value='desc'>Descending</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="">
                <div className="">
                  <table className="leading-normal  w-[100%] border-separate border-spacing-y-2 ">
                    <thead className="bg-gray-200 rounded-lg">
                      <tr>
                        <th scope="col" className="border  rounded-l-lg border-r-0 px-6 py-6 text-lg font-bold text-left text-secondary capitalize">Investor</th>
                        <th scope="col" className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize">Amt. Invested</th>
                        <th scope="col" className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize">Date of Investment</th>
                        <th scope="col" className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize">Type</th>
                        <th scope="col" className="border  rounded-r-lg border-l-0 px-6 py-3 text-lg font-bold text-left text-secondary capitalize">Action</th>
                      </tr>
                    </thead>
                    <tbody className="border-secondary-light">
                      {users && users.results && users.results.length ?
                        users.results.map((item) => (
                          <tr key={item.id} className='border border-gray-300 rounded-lg '>
                            <td className="rounded-l-lg border border-r-0 border-seprate border-[#C2C7D0] px-6 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left">
                              <div className='flex flex-row gap-3 items-center'>
                                <img className='rounded-3xl w-10 h-10' src={item?.profilePic ? item.profilePic : 'https://img.freepik.com/premium-vector/user-customer-avatar-vector-illustration_276184-160.jpg?w=50'} alt="" />
                                <h1 className='font-normal text-lg text-[#091E42] mr-2 whitespace-nowrap'>{item.firstName} {item.lastName}</h1>
                              </div>
                            </td>
                            <td className="border border-l-0 border-r-0 border-seprate border-[#C2C7D0] px-6 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left">{'£ 1000'}</td>
                            <td className="border border-l-0 border-r-0 border-seprate border-[#C2C7D0] px-6 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left">{moment(item.createdDate).format('DD MMM, YYYY')}</td>
                            <td className="border border-l-0 border-r-0 border-seprate border-[#C2C7D0] px-6 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left">{item.role.mainRole}</td>
                            <td className="border border-l-0 rounded-r-lg border-seprate border-[#C2C7D0] flex gap-6 px-6 text-sm font-medium text-right whitespace-nowrap items-center">
                              <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="m-1 cursor-pointer">
                                  <svg width="55" height="32" viewBox="0 0 55 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.9998 13.3333V21.3333M15.9998 21.3333L11.9998 17.3333M15.9998 21.3333L19.9998 17.3333M22.6665 28H9.33317C7.86041 28 6.6665 26.8061 6.6665 25.3333V6.66667C6.6665 5.19391 7.86041 4 9.33317 4H16.7809C17.1345 4 17.4736 4.14048 17.7237 4.39052L24.9426 11.6095C25.1927 11.8595 25.3332 12.1987 25.3332 12.5523V25.3333C25.3332 26.8061 24.1393 28 22.6665 28Z" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M42 13L48 19L54 13" stroke="#091E42" stroke-width="2" stroke-linecap="round" />
                                  </svg>

                                </label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 border">
                                  <li onClick={e => handleClick(e)}><a>Item 1</a></li>
                                  <li onClick={e => handleClick(e)}><a>Item 2</a></li>
                                </ul>
                              </div>
                            </td>
                          </tr>)) :
                        <div className="w-full flex flex-col fixed items-center justify-center mt-20">
                          <p className="text-lg">There are no investments</p>
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



export default CampaignFinancial