import { Link, useHistory } from 'react-router-dom'
import { Sidebar, Header, Loader, Pagination } from '../../components'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllCampaigns } from '../../features/campaign/campaignSlice'
import moment from 'moment/moment'
import BlockUserModal from '../../components/Modals/BlockUserModal'

const StartupListApproved = () => {
    const dispatch = useDispatch();
    const [showBlockModal, setShowBlockModal] = useState(false);
    const openModal = () => setShowBlockModal(true)
    const closeModal = () => setShowBlockModal(false)
    const [pageNumber, setPageNumber] = useState(1);
    const [limit, setLimit] = useState(10);
    let optionsData = {
        "limit": limit,
        "page": pageNumber,
    }

    const { campaigns, isLoading, isError, isSuccess, message } = useSelector((state) => state.campaign)

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

    useEffect(() => {
        dispatch(getAllCampaigns(optionsData))
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
                                <h3 className='font-bold text-xl text-secondary'>Approved Startup <span className='text-xl font-bold text-secondary-light'>({campaigns && campaigns?.totalResults ? campaigns.totalResults : 0})</span></h3>
                            </div>
                            <div className='pt-4'>
                                <div className="text-sm font-normal breadcrumbs">
                                    <ul>
                                        <li><Link to='/dashboard' className='text-primary'>Dashboard</Link></li>
                                        <li className='text-secondary'>Startup</li>
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
                                        <span>{campaigns.perPage}</span>
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
                        {/* <Table columns={campaigns.results}/> */}

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
                                                    <th scope="col" className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize" >Founder's Full Name</th>
                                                    <th scope="col" className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize">Founder Email</th>
                                                    <th scope="col" className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize">KYB Status</th>
                                                    <th scope="col" className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize"># Campaigns</th>
                                                    <th scope="col" className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize">Registered Date</th>
                                                    <th scope="col" className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y border-secondary-light">
                                                {campaigns && campaigns.results && campaigns.results.length ?
                                                    campaigns.results.map((item) => (
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

                                                            <td className="px-6 py-4 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left">{item.campaignName}</td>
                                                            <td className="px-6 py-4 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left">{item.user.founder_profiles[0].firstName} {item.user.founder_profiles[0].lastName}</td>
                                                            <td className="px-6 py-4 text-lg font-normal text-secondary whitespace-nowrap text-left">{item.user.founder_profiles[0].email}</td>
                                                            <td className="px-6 py-4 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left">{item.isVerified}</td>
                                                            <td className="px-6 py-4 text-lg font-normal text-secondary whitespace-nowrap text-left">--</td>
                                                            <td className="px-6 py-4 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left">{moment(item.createdDate).format('ddd MMM DD YYYY')} <br /><small>{moment(item.createdDate).format('HH:mm:ss Z')}</small></td>
                                                            <td className="flex gap-6 px-6 py-4 text-sm font-medium text-right whitespace-nowrap items-center">
                                                                <div className="cursor-pointer" onClick={() => openModal()}>
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z" stroke="#444444" strokeWidth="1.5" /> <path d="M15 13.327C14.0153 13.1068 13.009 12.9971 12 13C7.582 13 4 15.015 4 17.5C4 19.985 4 22 12 22C17.687 22 19.331 20.982 19.807 19.5" stroke="#444444" strokeWidth="1.5" /> <path d="M20.8281 13.171C21.5783 13.9212 21.9997 14.9386 21.9997 15.9995C21.9997 17.0604 21.5783 18.0778 20.8281 18.828C20.0779 19.5782 19.0605 19.9996 17.9996 19.9996C16.9387 19.9996 15.9213 19.5782 15.1711 18.828L20.8281 13.172M15.1721 18.828C14.4219 18.0778 14.0005 17.0604 14.0005 15.9995C14.0005 14.9386 14.4219 13.9212 15.1721 13.171C15.9223 12.4208 16.9397 11.9994 18.0006 11.9994C19.0615 11.9994 20.0789 12.4208 20.8291 13.171" stroke="#444444" strokeWidth="1.5" strokeLinejoin="round" /> </svg>
                                                                </div>
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
                                                        </tr>)) : <p>There are no approved startup</p>
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                            </div>
                            <Pagination totalPages={campaigns.totalPages} currentPage={campaigns.currentPage} handlePageNumber={handlePageNumber} />
                        </div>
                    </div>
                </div>
            </div>
            {showBlockModal && <BlockUserModal closeModal={closeModal} setShowBlockModal={setShowBlockModal} />}
        </div>
    )
}

export default StartupListApproved