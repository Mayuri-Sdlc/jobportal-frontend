import React, { useContext } from 'react';
import { SidebarContext } from '../../context/SidebarContext';
import { FaSearch, FaBell, FaCog } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Header = () => {
    const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);

    return (
        <header className="top-0 z-30 px-2 sm:px-4 bg-white border-b border-gray-200 min-w-full">
            <div className={`flex flex-wrap items-center ${isSidebarOpen ? 'justify-center md:justify-between' : 'justify-between'} mx-auto`}>
                <div className="flex flex-wrap items-center justify-between h-16">
                    <GiHamburgerMenu
                        className='cursor-pointer'
                        size={35}
                        onClick={toggleSidebar}
                    />
                    <div className="relative mx-1 md:mx-4">
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <FaSearch className="w-5 h-5 text-secondary-extra-light" />
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input
                            type="text"
                            id="search-navbar"
                            className="block w-full p-2 pr-1 md:pr-16 text-sm text-gray-900 border border-secondary-extra-light rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Search"
                        />
                    </div>
                </div>
                <div className='flex flex-wrap justify-between gap-2'>
                    <Link to={"/login"}>
                        <button className='border  p-2 rounded-md'>Logout</button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
