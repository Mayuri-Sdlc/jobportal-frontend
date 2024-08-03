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
  const [toggleCampaign, settoggleCampaign] = useState(false)
  const [toggleStartup, settoggleStartup] = useState(false)

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
                                <div className='mt-5'><Link to="/users/investors">All Users</Link></div>
                              </>
                            }
                          </div>
                          : null
                      }
                    </div>
                  </div>
                </React.Fragment>
              </li>
              {/* <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0`}>
                <React.Fragment>
                  <Link
                    to="/investors"
                    className={`block text-sidebar-profile truncate transition duration-150 ${pathname.includes('investors') ? 'opacity-100' : 'opacity-50'
                      }`}
                  >
                    <div className="flex items-center justify-start gap-4">
                      <div className="flex items-center w-[25px]">
                        {pathname.includes('investors')
                          ? <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.75 0C7.42392 0 6.15215 0.520587 5.21447 1.44724C4.27678 2.37389 3.75 3.63069 3.75 4.94118C3.75 6.25166 4.27678 7.50847 5.21447 8.43512C6.15215 9.36177 7.42392 9.88235 8.75 9.88235C10.0761 9.88235 11.3479 9.36177 12.2855 8.43512C13.2232 7.50847 13.75 6.25166 13.75 4.94118C13.75 3.63069 13.2232 2.37389 12.2855 1.44724C11.3479 0.520587 10.0761 0 8.75 0ZM2.51125 11.1176C2.18205 11.1163 1.85582 11.1793 1.55128 11.3028C1.24674 11.4264 0.96988 11.6082 0.736574 11.8377C0.503268 12.0672 0.318106 12.34 0.191708 12.6404C0.0653099 12.9408 0.00016189 13.2629 0 13.5882C0 15.6771 1.04125 17.2521 2.66875 18.2786C3.97875 19.1038 5.6625 19.5732 7.5 19.7153V14.8235C7.5 14.1683 7.76339 13.5399 8.23223 13.0766C8.70107 12.6132 9.33696 12.3529 10 12.3529H17.165C16.9456 11.9774 16.63 11.6655 16.25 11.4487C15.8699 11.2318 15.4388 11.1177 15 11.1176H2.51125ZM20 15.4412V19.1471C20 19.6385 19.8025 20.1098 19.4508 20.4573C19.0992 20.8048 18.6223 21 18.125 21H10.625C10.1277 21 9.65081 20.8048 9.29917 20.4573C8.94754 20.1098 8.75 19.6385 8.75 19.1471V15.4412C8.75 14.9497 8.94754 14.4784 9.29917 14.1309C9.65081 13.7835 10.1277 13.5882 10.625 13.5882H18.125C18.6223 13.5882 19.0992 13.7835 19.4508 14.1309C19.8025 14.4784 20 14.9497 20 15.4412ZM18.75 19.1471V17.9118C18.2527 17.9118 17.7758 18.107 17.4242 18.4545C17.0725 18.802 16.875 19.2733 16.875 19.7647H18.125C18.125 19.6009 18.1908 19.4438 18.3081 19.328C18.4253 19.2121 18.5842 19.1471 18.75 19.1471ZM18.75 15.4412C18.5842 15.4412 18.4253 15.3761 18.3081 15.2603C18.1908 15.1444 18.125 14.9873 18.125 14.8235H16.875C16.875 15.315 17.0725 15.7863 17.4242 16.1338C17.7758 16.4813 18.2527 16.6765 18.75 16.6765V15.4412ZM10.625 14.8235C10.625 14.9873 10.5592 15.1444 10.4419 15.2603C10.3247 15.3761 10.1658 15.4412 10 15.4412V16.6765C10.4973 16.6765 10.9742 16.4813 11.3258 16.1338C11.6775 15.7863 11.875 15.315 11.875 14.8235H10.625ZM10 19.1471C10.1658 19.1471 10.3247 19.2121 10.4419 19.328C10.5592 19.4438 10.625 19.6009 10.625 19.7647H11.875C11.875 19.2733 11.6775 18.802 11.3258 18.4545C10.9742 18.107 10.4973 17.9118 10 17.9118V19.1471ZM14.375 15.4412C13.8777 15.4412 13.4008 15.6364 13.0492 15.9839C12.6975 16.3314 12.5 16.8027 12.5 17.2941C12.5 17.7855 12.6975 18.2568 13.0492 18.6043C13.4008 18.9518 13.8777 19.1471 14.375 19.1471C14.8723 19.1471 15.3492 18.9518 15.7008 18.6043C16.0525 18.2568 16.25 17.7855 16.25 17.2941C16.25 16.8027 16.0525 16.3314 15.7008 15.9839C15.3492 15.6364 14.8723 15.4412 14.375 15.4412Z" fill="white" />
                          </svg> :
                          <svg width="19" height="20" viewBox="0 0 19 20" fill="none" fillOpacity={0.5} xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.75 0C7.42392 0 6.15215 0.520587 5.21447 1.44724C4.27678 2.37389 3.75 3.63069 3.75 4.94118C3.75 6.25166 4.27678 7.50847 5.21447 8.43512C6.15215 9.36177 7.42392 9.88235 8.75 9.88235C10.0761 9.88235 11.3479 9.36177 12.2855 8.43512C13.2232 7.50847 13.75 6.25166 13.75 4.94118C13.75 3.63069 13.2232 2.37389 12.2855 1.44724C11.3479 0.520587 10.0761 0 8.75 0ZM2.51125 11.1176C2.18205 11.1163 1.85582 11.1793 1.55128 11.3028C1.24674 11.4264 0.96988 11.6082 0.736574 11.8377C0.503268 12.0672 0.318106 12.34 0.191708 12.6404C0.0653099 12.9408 0.00016189 13.2629 0 13.5882C0 15.6771 1.04125 17.2521 2.66875 18.2786C3.97875 19.1038 5.6625 19.5732 7.5 19.7153V14.8235C7.5 14.1683 7.76339 13.5399 8.23223 13.0766C8.70107 12.6132 9.33696 12.3529 10 12.3529H17.165C16.9456 11.9774 16.63 11.6655 16.25 11.4487C15.8699 11.2318 15.4388 11.1177 15 11.1176H2.51125ZM20 15.4412V19.1471C20 19.6385 19.8025 20.1098 19.4508 20.4573C19.0992 20.8048 18.6223 21 18.125 21H10.625C10.1277 21 9.65081 20.8048 9.29917 20.4573C8.94754 20.1098 8.75 19.6385 8.75 19.1471V15.4412C8.75 14.9497 8.94754 14.4784 9.29917 14.1309C9.65081 13.7835 10.1277 13.5882 10.625 13.5882H18.125C18.6223 13.5882 19.0992 13.7835 19.4508 14.1309C19.8025 14.4784 20 14.9497 20 15.4412ZM18.75 19.1471V17.9118C18.2527 17.9118 17.7758 18.107 17.4242 18.4545C17.0725 18.802 16.875 19.2733 16.875 19.7647H18.125C18.125 19.6009 18.1908 19.4438 18.3081 19.328C18.4253 19.2121 18.5842 19.1471 18.75 19.1471ZM18.75 15.4412C18.5842 15.4412 18.4253 15.3761 18.3081 15.2603C18.1908 15.1444 18.125 14.9873 18.125 14.8235H16.875C16.875 15.315 17.0725 15.7863 17.4242 16.1338C17.7758 16.4813 18.2527 16.6765 18.75 16.6765V15.4412ZM10.625 14.8235C10.625 14.9873 10.5592 15.1444 10.4419 15.2603C10.3247 15.3761 10.1658 15.4412 10 15.4412V16.6765C10.4973 16.6765 10.9742 16.4813 11.3258 16.1338C11.6775 15.7863 11.875 15.315 11.875 14.8235H10.625ZM10 19.1471C10.1658 19.1471 10.3247 19.2121 10.4419 19.328C10.5592 19.4438 10.625 19.6009 10.625 19.7647H11.875C11.875 19.2733 11.6775 18.802 11.3258 18.4545C10.9742 18.107 10.4973 17.9118 10 17.9118V19.1471ZM14.375 15.4412C13.8777 15.4412 13.4008 15.6364 13.0492 15.9839C12.6975 16.3314 12.5 16.8027 12.5 17.2941C12.5 17.7855 12.6975 18.2568 13.0492 18.6043C13.4008 18.9518 13.8777 19.1471 14.375 19.1471C14.8723 19.1471 15.3492 18.9518 15.7008 18.6043C16.0525 18.2568 16.25 17.7855 16.25 17.2941C16.25 16.8027 16.0525 16.3314 15.7008 15.9839C15.3492 15.6364 14.8723 15.4412 14.375 15.4412Z" fill="white" />
                          </svg>
                        }
                      </div>
                      {
                        isSidebarOpen ?
                          <span className={`text-base font-semibold font-inter  ${pathname.includes('investors') ? 'opacity-100 text-[#F5F6F7]' : 'opacity-50'} duration-200`}>
                            Investors
                          </span> : null
                      }
                    </div>
                  </Link>
                </React.Fragment>
              </li> */}
              <li className={`px-3 py-2 rounded-sm mb-3 last:mb-0`}>
                <React.Fragment>
                  <div
                    className={`block text-sidebar-profile truncate cursor-pointer transition duration-150 ${pathname.includes('startup') ? 'opacity-100' : 'opacity-50'
                      }`}
                  >
                    <div className="flex items-start justify-start gap-4">
                      <div className="flex items-center w-[25px]">
                        {pathname.includes('startup')
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
                            <span onClick={() => settoggleStartup(!toggleStartup)} className={`w-full flex justify-between text-base font-semibold font-inter  ${pathname.includes('startup') ? 'opacity-100 text-[#F5F6F7]' : 'opacity-50'} duration-200`}>
                              <div>Company</div>
                              {toggleCampaign
                                ? <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"> <path d="M7.41,15.42L12,10.83L16.59,15.42L18,14L12,8L6,14L7.41,15.42Z" /> </svg>
                                : <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>}
                            </span>
                            {toggleStartup &&
                              <>
                                <div className='mt-5'><Link to="/startups/approved">Approved</Link></div>
                                <div className='my-2'><Link to="/startups/pending">Pending</Link></div>
                                <div><Link to="/startups/declined">Declined</Link></div>
                                <div className='my-2'><Link to="/startups">All</Link></div>
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
                    to="/roles"
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
                    to="/history"
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