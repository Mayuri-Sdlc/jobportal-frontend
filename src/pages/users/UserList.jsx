import { Link, useHistory } from 'react-router-dom'
import { Sidebar, Header, Loader, Pagination } from '../../components'
import React, { useState } from 'react'
import { useEffect } from 'react'
import moment from 'moment/moment'
import { apiGET, apiPOST } from '../../utils/apiHelper'
import { FaEdit, FaEye } from 'react-icons/fa'
import UserProfileModal from '../../components/Modals/UserProfileModal'

const UserList = () => {
  const users = [{
    id: 1
}]
const [allUsers,setAllUsers] = useState([])
const [loading,setLoading]= useState(false)
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectUser, setSelectUser] = useState('');

const getAllUsers = async()=>{
  setLoading(true)
const response = await apiPOST(`/users/getall`)
if(response?.data?.status==200){
  setAllUsers(response?.data?.data)
  setLoading(false)
}
setLoading(false)
}

  const viewProfile = (item) => {
    setIsModalOpen(true)
    setSelectUser(item)
  }

useEffect(()=>{
  getAllUsers()
},[])

if(loading)return <Loader/>


  return (
    <div className='flex h-screen overflow-hidden'>
      <Sidebar />
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
        <Header></Header>
        <div className='px-2 sm:px-4'>
          <div className="overflow-x-auto w-full">
            <div className='flex flex-wrap items-center justify-between'>
              <div className='pt-4'>
                <h3 className='font-bold text-xl text-secondary'>All Users <span className='text-xl font-bold text-secondary-light'>({users && users?.totalResults ? users.totalResults : 0})</span></h3>
              </div>
              <div className='pt-4'>
                <div className="text-sm font-normal breadcrumbs">
                  <ul>
                    <li><Link to='/dashboard' className='text-primary'>Dashboard</Link></li>
                    <li className='text-secondary'>Users</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='flex justify-end'>
                            <button className='bg-[#2626ea] text-white p-2 rounded-md'>Add User</button>
                        </div>
            <div className='flex flex-wrap justify-between items-center'>
              <div className='py-4 flex items-center'>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-secondary-extra-light" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input type="text" id="search-navbar" className="block w-full p-2 text-lg text-gray-900 border border-secondary-extra-light rounded-lg focus:ring-primary focus:border-primary " placeholder="Search" />
                </div>
                <div className='px-4'>
                  <svg className='cursor-pointer' width="24" height="18" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 12V10H11V12H7ZM3 7V5H15V7H3ZM0 2V0H18V2H0Z" fill="#2626EA" />
                  </svg>
                </div>
              </div>
              <div className='py-4 flex items-center'>
                <span className='text-lg text-secondary-extra-light font-normal'>Rows per page</span>
                <div className="dropdown">
                  <label tabIndex={0} className="flex items-center justify-between w-14 border border-secondary-extra-light px-2 py-1 ml-1 bg-transparent cursor-pointer">
                    <span>{users?.perPage}</span>
                    <span>
                      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.8332 1.5L6.99984 7.33333L1.1665 1.5" stroke="#A6AEBB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </label>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 w-14 px-1 cursor-pointer">
                    <li value={10} onClick={e => handleClick(e)} className='text-center hover:bg-primary hover:text-white text-sm'>10</li>
                    <li value={30} onClick={e => handleClick(e)} className='text-center hover:bg-primary hover:text-white text-sm'>30</li>
                    <li value={50} onClick={e => handleClick(e)} className='text-center hover:bg-primary hover:text-white text-sm'>50</li>
                    <li value={100} onClick={e => handleClick(e)} className='text-center hover:bg-primary hover:text-white text-sm'>100</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <Table/> */}

            <div className="flex flex-col">
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full overflow-hidden">
                  <table className="divide-y border-secondary-light table-auto min-w-full">
                    <thead className="border-secondary-light border-b">
                      <tr>
                        <th scope="col" className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input id="checkbox-all" type="checkbox" className="text-secondary border-secondary-light rounded focus:ring-blue-500" />
                            <label htmlFor="checkbox" className="sr-only">Checkbox</label>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize">
                          <span className="inline-flex items-center justify between">Name
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} > <path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" /> </svg>
                          </span>
                        </th>
                        <th scope="col" className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize">Email Address</th>
                        <th scope="col" className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize">Country</th>
                        <th scope="col" className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y border-secondary-light">
                      {allUsers && allUsers && allUsers.length ?
                        allUsers.map((item) => (
                          <tr key={item.id}>
                            <td className="py-3 pl-4">
                              <div className="flex items-center h-5">
                                <input
                                  type="checkbox"
                                  className="text-secondary border-secondary rounded focus:ring-blue-500"
                                />
                                <label htmlFor="checkbox" className="sr-only" >
                                  Checkbox
                                </label>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left">
                              <div className='flex gap-3 items-center'>
                                <img className='rounded-3xl w-10 h-10' src={item?.userProfiles[0]?.profilePic ? item?.userProfiles[0]?.profilePic : 'https://img.freepik.com/premium-vector/user-customer-avatar-vector-illustration_276184-160.jpg?w=50'} alt="" />
                                <div>
                                  <h1 className='font-normal text-lg text-[#091E42] mr-2 whitespace-nowrap'><Link to={`/users/`}>{item.firstName} {item.lastName}</Link></h1>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left">{item.email}</td>
                            <td className="px-6 py-4 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left">{item.country}</td>
                            <td className="px-6 py-4 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left">{moment(item.createdDate).format('ddd MMM DD YYYY')} <br /><small>{moment(item.createdDate).format('HH:mm:ss Z')}</small></td>
                            <td className="flex gap-6 px-6 py-4 text-sm font-medium text-right whitespace-nowrap items-center">
                              <div className="cursor-pointer flex gap-2" >
                                <FaEdit size={20} />
                                <FaEye  onClick={()=>viewProfile(item)} size={20} />
                              </div>
                            </td>
                          </tr>)) :
                        <div className="w-full flex flex-col fixed items-center justify-center mt-20">
                          <p className="text-lg">There are no users</p>
                        </div>
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {users && users.results && users.results.length ? <Pagination totalPages={users.totalPages} currentPage={users.currentPage} handlePageNumber={handlePageNumber} /> : null}
          </div>
        </div>
      </div>
      <UserProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={selectUser}
      />
      {/* {showBlockModal && <BlockUserModal closeModal={closeModal} setShowBlockModal={setShowBlockModal} />} */}
    </div>
  )
}

export default UserList