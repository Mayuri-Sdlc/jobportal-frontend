import React, { useRef, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Header } from '../index'
import { SidebarContext } from '../../context/SidebarContext';
import { useContext } from 'react';


function Sidebar() {
  const location = useLocation();
  const { pathname } = location;
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);
  const [toggleUser, settoggleUser] = useState(false)
  const [toggleCompany, settoggleCompany] = useState(false)
  const [toggleEvents, settoggleEvents] = useState(false)
  const [toggleJobPost, settoggleJobPost] = useState(false)

  return (
    <div className="flex flex-col shadow-sm">
      {/* Sidebar */}
      <div className={`bg-sidebar ${isSidebarOpen ? 'w-64' : 'hidden'} min-h-screen transition-all relative`}  >
        {/* Sidebar content goes here */}
        <div className="space-y-8">
          <div>
            <div className='flex justify-center p-4 bg-primary'>
              {
                isSidebarOpen ?
                  <h1 className='text-white text-xl'>Job Portal</h1> : null
              }
            </div>
            {/* Pages group */}
            <ul className="mt-6">
              <li className={`px-3 py-2 rounded-sm mb-3 last:mb-0`}>
                <React.Fragment>
                  <Link
                    to="/dashboard"
                    className={`block text-sidebar-profile truncate transition duration-150 ${(pathname === '/' || pathname.includes('dashboard')) ? 'opacity-100' : 'opacity-50'
                      }`}
                  >
                    <div className="flex items-center justify-start gap-4">
                      <div className="flex items-center w-[25px]">
                        {(pathname === '/' || pathname.includes('dashboard'))
                          ? <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 18C1.45 18 0.979002 17.804 0.587002 17.412C0.195002 17.02 -0.000664969 16.5493 1.69779e-06 16V2C1.69779e-06 1.45 0.196002 0.979002 0.588002 0.587002C0.980002 0.195002 1.45067 -0.000664969 2 1.69779e-06H6C6.55 1.69779e-06 7.021 0.196002 7.413 0.588002C7.805 0.980002 8.00067 1.45067 8 2V16C8 16.55 7.804 17.021 7.412 17.413C7.02 17.805 6.54934 18.0007 6 18H2ZM12 7C11.45 7 10.979 6.804 10.587 6.412C10.195 6.02 9.99934 5.54934 10 5V2C10 1.45 10.196 0.979002 10.588 0.587002C10.98 0.195002 11.4507 -0.000664969 12 1.69779e-06H16C16.55 1.69779e-06 17.021 0.196002 17.413 0.588002C17.805 0.980002 18.0007 1.45067 18 2V5C18 5.55 17.804 6.021 17.412 6.413C17.02 6.805 16.5493 7.00067 16 7H12ZM12 18C11.45 18 10.979 17.804 10.587 17.412C10.195 17.02 9.99934 16.5493 10 16V11C10 10.45 10.196 9.979 10.588 9.587C10.98 9.195 11.4507 8.99934 12 9H16C16.55 9 17.021 9.196 17.413 9.588C17.805 9.98 18.0007 10.4507 18 11V16C18 16.55 17.804 17.021 17.412 17.413C17.02 17.805 16.5493 18.0007 16 18H12Z" fill="white" />
                          </svg> :
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" fillOpacity={0.5} xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 18C1.45 18 0.979002 17.804 0.587002 17.412C0.195002 17.02 -0.000664969 16.5493 1.69779e-06 16V2C1.69779e-06 1.45 0.196002 0.979002 0.588002 0.587002C0.980002 0.195002 1.45067 -0.000664969 2 1.69779e-06H6C6.55 1.69779e-06 7.021 0.196002 7.413 0.588002C7.805 0.980002 8.00067 1.45067 8 2V16C8 16.55 7.804 17.021 7.412 17.413C7.02 17.805 6.54934 18.0007 6 18H2ZM12 7C11.45 7 10.979 6.804 10.587 6.412C10.195 6.02 9.99934 5.54934 10 5V2C10 1.45 10.196 0.979002 10.588 0.587002C10.98 0.195002 11.4507 -0.000664969 12 1.69779e-06H16C16.55 1.69779e-06 17.021 0.196002 17.413 0.588002C17.805 0.980002 18.0007 1.45067 18 2V5C18 5.55 17.804 6.021 17.412 6.413C17.02 6.805 16.5493 7.00067 16 7H12ZM12 18C11.45 18 10.979 17.804 10.587 17.412C10.195 17.02 9.99934 16.5493 10 16V11C10 10.45 10.196 9.979 10.588 9.587C10.98 9.195 11.4507 8.99934 12 9H16C16.55 9 17.021 9.196 17.413 9.588C17.805 9.98 18.0007 10.4507 18 11V16C18 16.55 17.804 17.021 17.412 17.413C17.02 17.805 16.5493 18.0007 16 18H12Z" fill="white" />
                          </svg>
                        }
                      </div>
                      {
                        isSidebarOpen ?
                          <span className={`text-base font-semibold font-inter  ${(pathname === '/' || pathname.includes('dashboard')) ? 'opacity-100' : 'opacity-50'} duration-200`}>
                            Dashboard
                          </span> : null
                      }
                    </div>
                  </Link>
                </React.Fragment>
              </li>
              <li className={`px-3 py-2 rounded-sm mb-3 last:mb-0`}>
                <React.Fragment>
                  <div
                    // to="/users"
                    className={`block text-sidebar-profile truncate cursor-pointer transition duration-150 ${pathname.includes('users') ? 'opacity-100' : 'opacity-50'
                      }`}
                  >
                    <div className="flex items-start justify-start gap-4">
                      <div className="flex items-center w-[25px]">
                        {pathname.includes('users')
                          ? <svg width="20" height="20" viewBox="0 0 20 20" fill="white" fillOpacity={1} xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17.2C7.5 17.2 5.29 15.92 4 14C4.03 12 8 10.9 10 10.9C12 10.9 15.97 12 16 14C15.3389 14.9844 14.4459 15.7912 13.3996 16.3492C12.3533 16.9072 11.1858 17.1994 10 17.2ZM10 3C10.7956 3 11.5587 3.31607 12.1213 3.87868C12.6839 4.44129 13 5.20435 13 6C13 6.79565 12.6839 7.55871 12.1213 8.12132C11.5587 8.68393 10.7956 9 10 9C9.20435 9 8.44129 8.68393 7.87868 8.12132C7.31607 7.55871 7 6.79565 7 6C7 5.20435 7.31607 4.44129 7.87868 3.87868C8.44129 3.31607 9.20435 3 10 3ZM10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 4.47 15.5 0 10 0Z" fill="white" />
                          </svg> :
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="white" fillOpacity={0.5} xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17.2C7.5 17.2 5.29 15.92 4 14C4.03 12 8 10.9 10 10.9C12 10.9 15.97 12 16 14C15.3389 14.9844 14.4459 15.7912 13.3996 16.3492C12.3533 16.9072 11.1858 17.1994 10 17.2ZM10 3C10.7956 3 11.5587 3.31607 12.1213 3.87868C12.6839 4.44129 13 5.20435 13 6C13 6.79565 12.6839 7.55871 12.1213 8.12132C11.5587 8.68393 10.7956 9 10 9C9.20435 9 8.44129 8.68393 7.87868 8.12132C7.31607 7.55871 7 6.79565 7 6C7 5.20435 7.31607 4.44129 7.87868 3.87868C8.44129 3.31607 9.20435 3 10 3ZM10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 4.47 15.5 0 10 0Z" fill="white" />
                          </svg>
                        }
                      </div>
                      {
                        isSidebarOpen ?
                          <div className='w-full'>
                            <span onClick={() => settoggleUser(!toggleUser)} className={`w-full flex justify-between text-base font-semibold font-inter  ${pathname.includes('users') ? 'opacity-100 text-[#F5F6F7]' : 'opacity-50'} duration-200`}>
                              <div>Users</div>
                              {toggleUser
                                ? <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"> <path d="M7.41,15.42L12,10.83L16.59,15.42L18,14L12,8L6,14L7.41,15.42Z" /> </svg>
                                : <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>}
                            </span>
                            {toggleUser &&
                              <>
                                <div className='mt-5'><Link to="/admin/users">All Users</Link></div>
                              </>
                            }
                          </div>
                          : null
                      }
                    </div>
                  </div>
                </React.Fragment>
              </li>

              <li className={`px-3 py-2 rounded-sm mb-3 last:mb-0`}>
                <React.Fragment>
                  <div
                    className={`block text-sidebar-profile truncate cursor-pointer transition duration-150 ${pathname.includes('all-companies') ? 'opacity-100' : 'opacity-50'
                      }`}
                  >
                    <div className="flex items-start justify-start gap-4">
                      <div className="flex items-center w-[25px]">
                        {pathname.includes('all-companies')
                          ? <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.498 19.005H11.502C10.8405 20.5874 9.58238 21.8455 8 22.507C6.41762 21.8455 5.15947 20.5874 4.498 19.005ZM14 13.81L16 16.078V18.005H0V16.078L2 13.81V8.00499C2 4.51999 4.504 1.55799 8 0.459991C11.496 1.55799 14 4.52099 14 8.00499V13.809V13.81ZM8 10.005C8.53043 10.005 9.03914 9.79428 9.41421 9.4192C9.78929 9.04413 10 8.53542 10 8.00499C10 7.47456 9.78929 6.96585 9.41421 6.59078C9.03914 6.2157 8.53043 6.00499 8 6.00499C7.46957 6.00499 6.96086 6.2157 6.58579 6.59078C6.21071 6.96585 6 7.47456 6 8.00499C6 8.53542 6.21071 9.04413 6.58579 9.4192C6.96086 9.79428 7.46957 10.005 8 10.005Z" fill="white" />
                          </svg> :
                          <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.498 19.005H11.502C10.8405 20.5874 9.58238 21.8455 8 22.507C6.41762 21.8455 5.15947 20.5874 4.498 19.005ZM14 13.81L16 16.078V18.005H0V16.078L2 13.81V8.00499C2 4.51999 4.504 1.55799 8 0.459991C11.496 1.55799 14 4.52099 14 8.00499V13.809V13.81ZM8 10.005C8.53043 10.005 9.03914 9.79428 9.41421 9.4192C9.78929 9.04413 10 8.53542 10 8.00499C10 7.47456 9.78929 6.96585 9.41421 6.59078C9.03914 6.2157 8.53043 6.00499 8 6.00499C7.46957 6.00499 6.96086 6.2157 6.58579 6.59078C6.21071 6.96585 6 7.47456 6 8.00499C6 8.53542 6.21071 9.04413 6.58579 9.4192C6.96086 9.79428 7.46957 10.005 8 10.005Z" fill="white" />
                          </svg>
                        }
                      </div>
                      {
                        isSidebarOpen ?
                          <div className='w-full'>
                            <span onClick={() => settoggleCompany(!toggleCompany)} className={`w-full flex justify-between text-base font-semibold font-inter  ${pathname.includes('all-companies') ? 'opacity-100 text-[#F5F6F7]' : 'opacity-50'} duration-200`}>
                              <div>Company</div>
                              {toggleCompany
                                ? <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"> <path d="M7.41,15.42L12,10.83L16.59,15.42L18,14L12,8L6,14L7.41,15.42Z" /> </svg>
                                : <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>}
                            </span>
                            {toggleCompany &&
                              <>
                                <div className='mt-5'><Link to="/admin/all-companies">All Companies</Link></div>

                              </>
                            }
                          </div>
                          : null
                      }
                    </div>
                  </div>
                </React.Fragment>
              </li>

              {/* <li className={`px-3 py-2 rounded-sm mb-3 last:mb-0`}>
                <React.Fragment>
                  <div
                    className={`block text-sidebar-profile truncate cursor-pointer transition duration-150 ${pathname.includes('events') ? 'opacity-100' : 'opacity-50'
                      }`}
                  >
                    <div className="flex items-start justify-start gap-4">
                      <div className="flex items-center w-[25px]">
                        {pathname.includes('events')
                          ? <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.498 19.005H11.502C10.8405 20.5874 9.58238 21.8455 8 22.507C6.41762 21.8455 5.15947 20.5874 4.498 19.005ZM14 13.81L16 16.078V18.005H0V16.078L2 13.81V8.00499C2 4.51999 4.504 1.55799 8 0.459991C11.496 1.55799 14 4.52099 14 8.00499V13.809V13.81ZM8 10.005C8.53043 10.005 9.03914 9.79428 9.41421 9.4192C9.78929 9.04413 10 8.53542 10 8.00499C10 7.47456 9.78929 6.96585 9.41421 6.59078C9.03914 6.2157 8.53043 6.00499 8 6.00499C7.46957 6.00499 6.96086 6.2157 6.58579 6.59078C6.21071 6.96585 6 7.47456 6 8.00499C6 8.53542 6.21071 9.04413 6.58579 9.4192C6.96086 9.79428 7.46957 10.005 8 10.005Z" fill="white" />
                          </svg> :
                          <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.498 19.005H11.502C10.8405 20.5874 9.58238 21.8455 8 22.507C6.41762 21.8455 5.15947 20.5874 4.498 19.005ZM14 13.81L16 16.078V18.005H0V16.078L2 13.81V8.00499C2 4.51999 4.504 1.55799 8 0.459991C11.496 1.55799 14 4.52099 14 8.00499V13.809V13.81ZM8 10.005C8.53043 10.005 9.03914 9.79428 9.41421 9.4192C9.78929 9.04413 10 8.53542 10 8.00499C10 7.47456 9.78929 6.96585 9.41421 6.59078C9.03914 6.2157 8.53043 6.00499 8 6.00499C7.46957 6.00499 6.96086 6.2157 6.58579 6.59078C6.21071 6.96585 6 7.47456 6 8.00499C6 8.53542 6.21071 9.04413 6.58579 9.4192C6.96086 9.79428 7.46957 10.005 8 10.005Z" fill="white" />
                          </svg>
                        }
                      </div>
                      {
                        isSidebarOpen ?
                          <div className='w-full'>
                            <span onClick={() => settoggleEvents(!toggleEvents)} className={`w-full flex justify-between text-base font-semibold font-inter  ${pathname.includes('events') ? 'opacity-100 text-[#F5F6F7]' : 'opacity-50'} duration-200`}>
                              <div>Events</div>
                              {toggleEvents
                                ? <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"> <path d="M7.41,15.42L12,10.83L16.59,15.42L18,14L12,8L6,14L7.41,15.42Z" /> </svg>
                                : <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>}
                            </span>
                            {toggleEvents &&
                              <>
                                <div className='mt-5'><Link to="/admin/events">All Events</Link></div>

                              </>
                            }
                          </div>
                          : null
                      }
                    </div>
                  </div>
                </React.Fragment>
              </li> */}
              <li className={`px-3 py-2 rounded-sm mb-3 last:mb-0`}>
                <React.Fragment>
                  <div
                    className={`block text-sidebar-profile truncate cursor-pointer transition duration-150 ${pathname.includes('events') ? 'opacity-100' : 'opacity-50'
                      }`}
                  >
                    <div className="flex items-start justify-start gap-4">
                      <div className="flex items-center w-[25px]">
                        {pathname.includes('all-job-posts')
                          ? <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.498 19.005H11.502C10.8405 20.5874 9.58238 21.8455 8 22.507C6.41762 21.8455 5.15947 20.5874 4.498 19.005ZM14 13.81L16 16.078V18.005H0V16.078L2 13.81V8.00499C2 4.51999 4.504 1.55799 8 0.459991C11.496 1.55799 14 4.52099 14 8.00499V13.809V13.81ZM8 10.005C8.53043 10.005 9.03914 9.79428 9.41421 9.4192C9.78929 9.04413 10 8.53542 10 8.00499C10 7.47456 9.78929 6.96585 9.41421 6.59078C9.03914 6.2157 8.53043 6.00499 8 6.00499C7.46957 6.00499 6.96086 6.2157 6.58579 6.59078C6.21071 6.96585 6 7.47456 6 8.00499C6 8.53542 6.21071 9.04413 6.58579 9.4192C6.96086 9.79428 7.46957 10.005 8 10.005Z" fill="white" />
                          </svg> :
                          <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.498 19.005H11.502C10.8405 20.5874 9.58238 21.8455 8 22.507C6.41762 21.8455 5.15947 20.5874 4.498 19.005ZM14 13.81L16 16.078V18.005H0V16.078L2 13.81V8.00499C2 4.51999 4.504 1.55799 8 0.459991C11.496 1.55799 14 4.52099 14 8.00499V13.809V13.81ZM8 10.005C8.53043 10.005 9.03914 9.79428 9.41421 9.4192C9.78929 9.04413 10 8.53542 10 8.00499C10 7.47456 9.78929 6.96585 9.41421 6.59078C9.03914 6.2157 8.53043 6.00499 8 6.00499C7.46957 6.00499 6.96086 6.2157 6.58579 6.59078C6.21071 6.96585 6 7.47456 6 8.00499C6 8.53542 6.21071 9.04413 6.58579 9.4192C6.96086 9.79428 7.46957 10.005 8 10.005Z" fill="white" />
                          </svg>
                        }
                      </div>
                      {
                        isSidebarOpen ?
                          <div className='w-full'>
                            <span onClick={() => settoggleJobPost(!toggleJobPost)} className={`w-full flex justify-between text-base font-semibold font-inter  ${pathname.includes('job-posts') ? 'opacity-100 text-[#F5F6F7]' : 'opacity-50'} duration-200`}>
                              <div>Job Posts</div>
                              {toggleJobPost
                                ? <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"> <path d="M7.41,15.42L12,10.83L16.59,15.42L18,14L12,8L6,14L7.41,15.42Z" /> </svg>
                                : <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>}
                            </span>
                            {toggleJobPost &&
                              <>
                                <div className='mt-5'><Link to="/admin/all-job-posts">All Job Post</Link></div>

                              </>
                            }
                          </div>
                          : null
                      }
                    </div>
                  </div>
                </React.Fragment>
              </li>
              <li className={`px-3 py-2 rounded-sm mb-3 last:mb-0`}>
                <React.Fragment>
                  <Link
                    to="/admin/roles"
                    className={`block text-sidebar-profile truncate transition duration-150 ${pathname.includes('roles') ? 'opacity-100' : 'opacity-50'
                      }`}
                  >
                    <div className="flex items-center justify-start gap-4">
                      <div className="flex items-center w-[25px]">
                        {pathname.includes('roles')
                          ? <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4C4 1.79 5.79 0 8 0C10.21 0 12 1.79 12 4C12 6.21 10.21 8 8 8C5.79 8 4 6.21 4 4ZM10 14.2C10 13.24 10.5 12.34 11.2 11.74V11.5C11.2 11.11 11.27 10.74 11.38 10.38C10.35 10.14 9.21 10 8 10C3.58 10 0 11.79 0 14V16H10V14.2ZM20 14.3V17.8C20 18.4 19.4 19 18.7 19H13.2C12.6 19 12 18.4 12 17.7V14.2C12 13.6 12.6 13 13.2 13V11.5C13.2 10.1 14.6 9 16 9C17.4 9 18.8 10.1 18.8 11.5V13C19.4 13 20 13.6 20 14.3ZM17.5 11.5C17.5 10.7 16.8 10.2 16 10.2C15.2 10.2 14.5 10.7 14.5 11.5V13H17.5V11.5Z" fill="white" />
                          </svg> :
                          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4C4 1.79 5.79 0 8 0C10.21 0 12 1.79 12 4C12 6.21 10.21 8 8 8C5.79 8 4 6.21 4 4ZM10 14.2C10 13.24 10.5 12.34 11.2 11.74V11.5C11.2 11.11 11.27 10.74 11.38 10.38C10.35 10.14 9.21 10 8 10C3.58 10 0 11.79 0 14V16H10V14.2ZM20 14.3V17.8C20 18.4 19.4 19 18.7 19H13.2C12.6 19 12 18.4 12 17.7V14.2C12 13.6 12.6 13 13.2 13V11.5C13.2 10.1 14.6 9 16 9C17.4 9 18.8 10.1 18.8 11.5V13C19.4 13 20 13.6 20 14.3ZM17.5 11.5C17.5 10.7 16.8 10.2 16 10.2C15.2 10.2 14.5 10.7 14.5 11.5V13H17.5V11.5Z" fill="white" />
                          </svg>
                        }
                      </div>
                      {
                        isSidebarOpen ?
                          <span className={`text-base font-semibold font-inter  ${pathname.includes('roles') ? 'opacity-100 text-[#F5F6F7]' : 'opacity-50'} duration-200`}>
                            User Roles
                          </span> : null
                      }
                    </div>
                  </Link>
                </React.Fragment>
              </li>
              <li className={`px-3 py-2 rounded-sm mb-3 last:mb-0`}>
                <React.Fragment>
                  <Link
                    to="/admin/history"
                    className={`block text-sidebar-profile truncate transition duration-150 ${pathname.includes('history') ? 'opacity-100' : 'opacity-50'
                      }`}
                  >
                    <div className="flex items-center justify-start gap-4">
                      <div className="flex items-center w-[25px]">
                        {pathname.includes('history')
                          ? <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4C4 1.79 5.79 0 8 0C10.21 0 12 1.79 12 4C12 6.21 10.21 8 8 8C5.79 8 4 6.21 4 4ZM10 14.2C10 13.24 10.5 12.34 11.2 11.74V11.5C11.2 11.11 11.27 10.74 11.38 10.38C10.35 10.14 9.21 10 8 10C3.58 10 0 11.79 0 14V16H10V14.2ZM20 14.3V17.8C20 18.4 19.4 19 18.7 19H13.2C12.6 19 12 18.4 12 17.7V14.2C12 13.6 12.6 13 13.2 13V11.5C13.2 10.1 14.6 9 16 9C17.4 9 18.8 10.1 18.8 11.5V13C19.4 13 20 13.6 20 14.3ZM17.5 11.5C17.5 10.7 16.8 10.2 16 10.2C15.2 10.2 14.5 10.7 14.5 11.5V13H17.5V11.5Z" fill="white" />
                          </svg> :
                          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4C4 1.79 5.79 0 8 0C10.21 0 12 1.79 12 4C12 6.21 10.21 8 8 8C5.79 8 4 6.21 4 4ZM10 14.2C10 13.24 10.5 12.34 11.2 11.74V11.5C11.2 11.11 11.27 10.74 11.38 10.38C10.35 10.14 9.21 10 8 10C3.58 10 0 11.79 0 14V16H10V14.2ZM20 14.3V17.8C20 18.4 19.4 19 18.7 19H13.2C12.6 19 12 18.4 12 17.7V14.2C12 13.6 12.6 13 13.2 13V11.5C13.2 10.1 14.6 9 16 9C17.4 9 18.8 10.1 18.8 11.5V13C19.4 13 20 13.6 20 14.3ZM17.5 11.5C17.5 10.7 16.8 10.2 16 10.2C15.2 10.2 14.5 10.7 14.5 11.5V13H17.5V11.5Z" fill="white" />
                          </svg>
                        }
                      </div>
                      {
                        isSidebarOpen ?
                          <span className={`text-base font-semibold font-inter  ${pathname.includes('history') ? 'opacity-100 text-[#F5F6F7]' : 'opacity-50'} duration-200`}>
                            History
                          </span> : null
                      }
                    </div>
                  </Link>
                </React.Fragment>
              </li>
            </ul>
            {
              isSidebarOpen ?
                <div className='flex items-center justify-start gap-2 mx-2 mt-28 '>
                  <div>
                    <img src="https://img.freepik.com/premium-vector/user-customer-avatar-vector-illustration_276184-160.jpg?w=50" alt="" className='rounded-[50%]' />
                  </div>
                  <div className='flex flex-col items-center'>
                    <h1 className='text-white text-sm font-semibold'>Doug Daumbach</h1>
                    <small className='text-sidebar-profile text-xs font-light'>dough@crowdinvest.com</small>
                  </div>
                </div> :
                <div className='flex items-center justify-start gap-2 mx-2 mt-16'>
                  <div>
                    <img src="https://img.freepik.com/premium-vector/user-customer-avatar-vector-illustration_276184-160.jpg?w=50" alt="" className='rounded-[50%]' />
                  </div>
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar