import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'

const Loader = () => {
  return (
    <div className="flex h-screen overflow-hidden">

      <Sidebar />
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>

        <Header />
        <div className="px-4 sm:px-6 lg:px-8 py-4 w-full mx-auto h-full">
          <div className=" bg-white mb-4 flex justify-center items-center h-full">
            <div className="flex justify-center items-center text-center">
              <div role="status">
                <svg className="animate-spin" fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4" stroke="#00008E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" /></svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Loader