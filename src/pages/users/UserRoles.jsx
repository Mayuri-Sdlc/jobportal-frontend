import { Link, useHistory } from 'react-router-dom'
import { Sidebar, Header, Loader, Pagination } from '../../components'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllUsers } from '../../features/user/userSlice'
import moment from 'moment/moment'
import BlockUserModal from '../../components/Modals/BlockUserModal'

const UserRoles = () => {
  const dispatch = useDispatch();
  const [showBlockModal, setShowBlockModal] = useState(false);
  const openModal = () => setShowBlockModal(true)
  const closeModal = () => setShowBlockModal(false)
  const [pageNumber, setPageNumber] = useState(1);
  const [limit, setLimit] = useState(10);
  const [users, setusers] = useState([])
  let optionsData = {
    "limit": limit,
    "page": pageNumber,
  }

  const { users: userList, isLoading, isError, isSuccess, message } = useSelector((state) => state.user)

  const handleClick = (e) => {
    e.preventDefault();
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
    if (e.target.value) setLimit(e.target.value);
  };

  const handlePageNumber = (pageNumber) => {
    setPageNumber(pageNumber);
  }

  const handleUserRolesList = () => {
    const uniqueArray = [];
    const tempObj = {};

    for (const obj of users) {
      const roleName = obj.role.name;
      if (!tempObj[roleName]) {
        tempObj[roleName] = true;
        uniqueArray.push(obj);
      }
    }
  }

  useEffect(() => {
    handleUserRolesList()
  }, [])

  useEffect(() => {
    dispatch(getAllUsers(optionsData))
  }, [pageNumber, limit])

  if (isLoading) return <Loader />

  return (
    <div className='flex h-screen overflow-hidden'>
      <Sidebar />
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
        <Header></Header>
        <div className='px-2 sm:px-4'>
          <div className="overflow-x-auto w-full">
            <div className='flex flex-wrap items-center justify-between'>
              <div className='pt-4'>
                <h3 className='font-bold text-xl text-secondary'>User Roles <span className='text-xl font-bold text-secondary-light'>({users && users?.totalResults ? users.totalResults : 0})</span></h3>
              </div>
              <div className='pt-4'>
                <div className="text-sm font-normal breadcrumbs">
                  <ul>
                    <li><Link to='/dashboard' className='text-primary'>Dashboard</Link></li>
                    <li className='text-secondary'>User Roles</li>
                  </ul>
                </div>
              </div>
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
                          <span className="inline-flex items-center justify between">Full Name
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} > <path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" /> </svg>
                          </span>
                        </th>
                        <th scope="col" className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize">Email Address</th>
                        <th scope="col" className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize">Level of Access</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y border-secondary-light">
                      {users && users.results && users.results.length ?
                        users.results.map((item) => (
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
                            <td className="px-6 py-4 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left">{item?.role.name} </td>
                            <td className="px-6 py-4 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left">{item.email}</td>
                            <td className="flex flex-row items-center gap-20 px-6 py-4 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left">
                              {item.role.mainRole}
                              <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="m-1 cursor-pointer">
                                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.99295 7.80488C11.1834 7.80488 12.1358 8.78049 12.1358 10C12.1358 11.2195 11.1834 12.1951 9.99295 12.1951C8.80248 12.1951 7.8501 11.2195 7.8501 10C7.8501 8.78049 8.80248 7.80488 9.99295 7.80488ZM7.8501 2.19512C7.8501 3.41463 8.80248 4.39024 9.99295 4.39024C11.1834 4.39024 12.1358 3.41463 12.1358 2.19512C12.1358 0.97561 11.1834 0 9.99295 0C8.80248 0 7.8501 0.97561 7.8501 2.19512ZM7.8501 17.8049C7.8501 19.0244 8.80248 20 9.99295 20C11.1834 20 12.1358 19.0244 12.1358 17.8049C12.1358 16.5854 11.1834 15.6098 9.99295 15.6098C8.80248 15.6098 7.8501 16.5854 7.8501 17.8049Z" fill="#8B83BA" /> </svg>
                                </label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 border">
                                  <li onClick={e => handleClick(e)}><a>Item 1</a></li>
                                  <li onClick={e => handleClick(e)}><a>Item 2</a></li>
                                </ul>
                              </div>
                            </td>
                          </tr>)) :
                        <div className="w-full flex flex-col fixed items-center justify-center mt-20">
                          <p className="text-lg">There are no user roles</p>
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
      {showBlockModal && <BlockUserModal closeModal={closeModal} setShowBlockModal={setShowBlockModal} />}
    </div>
  )
}

export default UserRoles