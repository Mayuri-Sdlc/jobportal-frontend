import { logout } from '../../features/auth/authSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    const loggedInUser = useSelector((state) => state.auth.user) || {};
    const dispatch = useDispatch()
    const history = useHistory()
    const handleLogout = () => {
        dispatch(logout())
        history.push('/login')
    }
    useEffect(() => {
        if (loggedInUser === null) {
            history.push('/login')
        }
    }, [loggedInUser])
    return (
        <div className="navbar bg-base-100 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                    </label>
                    {
                        loggedInUser?.roleId === 3 ? <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a className="hover:text-primary" href="/home">Home</a></li>
                            <li><a className="hover:text-primary" href="/about">My Jobs</a></li>
                            <li><a className="hover:text-primary" href="/services">Services</a></li>
                            <li><a className="hover:text-primary" href="/contact">Companies</a></li>
                            <li><a className="hover:text-primary" href="/explore">Explore</a></li>
                        </ul> : <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a className="hover:text-primary" href="/home">Home</a></li>
                            <li><a className="hover:text-primary" href="/about">My Jobs</a></li>
                            <li><a className="hover:text-primary" href="/services">Services</a></li>
                            <li><a className="hover:text-primary" href="/contact">Companies</a></li>
                            <li><a className="hover:text-primary" href="/explore">Explore</a></li>
                        </ul>
                    }
                </div>
                <a className="btn btn-ghost normal-case text-xl font-bold" href="/home">Job Portal</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                {loggedInUser?.roleId === 3 ? <ul className="menu menu-horizontal p-0 space-x-4">
                    <li><a className="hover:text-primary" href="/home">Home</a></li>
                    <li><a className="hover:text-primary" href="/about">My Jobs</a></li>
                    <li><a className="hover:text-primary" href="/services">Services</a></li>
                    <li><a className="hover:text-primary" href="/contact">Companies</a></li>
                    <li><a className="hover:text-primary" href="/explore">Explore</a></li>
                </ul> : <ul className="menu menu-horizontal p-0 space-x-4">
                    <li><a className="hover:text-primary" href="/company/home">Home</a></li>
                    <li><a className="hover:text-primary" href="/about">Jobs</a></li>
                    <li><a className="hover:text-primary" href="/events">Events</a></li>
                    <li><a className="hover:text-primary" href="/explore">Explore</a></li>
                </ul>}
            </div>
            <div className="navbar-end">
                {loggedInUser ? (
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={loggedInUser.profilePic} alt="Profile" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href="/profile" className="justify-between">Profile</a></li>
                            <li><a href="/settings">Settings</a></li>
                            <li><span onClick={handleLogout}>Logout</span></li>
                        </ul>
                    </div>
                ) : (
                    <a className="btn btn-primary" href="/login">Login</a>
                )}
            </div>
        </div>
    );
};

export default Navbar;
