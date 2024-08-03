import axios from 'axios';
import { login, reset } from '../../features/auth/authSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Config } from "../../config/index"
const SignUp = () => {

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        roleId: '',
    })
    const handleRoleChange = (e) => {
        setData({ ...data, roleId: e.target.value });
    };

    const onChange = (e) => {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const history = useHistory()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    const onSubmit = async (e) => {
        e.preventDefault()
        const registerPayload = {
            ...data,
            isEmailVerified: true,
            country: "India",
        }
        const response = await axios.post(`${Config.API_URL}/auth/register`, registerPayload)
        if (response.status) {
            toast.success('User Registered Successfully')
            history.push('/login');
        }
    }

    // function showPassword() {
    //     var x = document.getElementById("myInput");
    //     if (x.type === "password") {
    //     settoggleConfirmPassword(true)
    //         x.type = "text";
    //     } else {
    //     settoggleConfirmPassword(false)
    //         x.type = "password";
    //     }
    // }

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (isSuccess || user) {
            history.push('/users');
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, history, dispatch])

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 mx-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-primary">
                    Sign Up
                </h1>
                <form className="mt-4">
                    <div className="mb-4">
                        <label className="block text-xs font-medium text-secondary">First Name</label>
                        <input
                            type="text"
                            name='firstName'
                            value={data.firstName}
                            onChange={onChange}
                            className="block w-full px-2 py-2 text-xs font-medium text-secondary bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-xs font-medium text-secondary">Last Name</label>
                        <input
                            type="text"
                            name='lastName'
                            value={data.lastName}
                            onChange={onChange}
                            className="block w-full px-2 py-2 text-xs font-medium text-secondary bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-xs font-medium text-secondary">Email</label>
                        <input
                            type="email"
                            name='email'
                            value={data.email}
                            onChange={onChange}
                            className="block w-full px-2 py-2 text-xs font-medium text-secondary bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-xs font-medium text-secondary">Password</label>
                        <div className='relative'>
                            <input
                                id="myInput"
                                type="password"
                                name='password'
                                value={data.password}
                                onChange={onChange}
                                className="block w-full px-2 py-2  text-xs font-medium text-secondary bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                            {/* <div className='flex cursor-pointer absolute top-[8px] mr-2 right-[0]'>
                            {toggleConfirmPassword ?
                                <FiEye size={20} className=" flex cursor-pointer" onClick={showPassword} />
                                :
                                <FiEyeOff size={20} className=" flex cursor-pointer" onClick={showPassword} />
                            }
                        </div> */}
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-xs font-medium text-secondary">Role</label>
                        <div className='relative flex items-center gap-2'>
                            <label className='flex items-center gap-2' htmlFor="radio-user">
                                <span>User</span>
                                <input
                                    type="radio"
                                    id='radio-user'
                                    name="role"
                                    value="3"
                                    className="radio"
                                    checked={data.roleId === '3'}
                                    onChange={handleRoleChange}
                                />
                            </label>
                            <label className='flex items-center gap-2' htmlFor="radio-company">
                                <span>Company</span>
                                <input
                                    type="radio"
                                    id='radio-company'
                                    name="role"
                                    value="2"
                                    className="radio"
                                    checked={data.roleId === '2'}
                                    onChange={handleRoleChange}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="mt-6">
                        <button
                            className="w-full px-4 py-2 tracking-wide text-sm font-medium text-white transition-colors duration-200 transform bg-primary rounded disabled:opacity-60"
                            onClick={(e) => onSubmit(e)}
                            disabled={isLoading}
                        //disabled={false}
                        >
                            {/* {loading ? loader('Logging in...') : 'Login'} */}
                            {'Sign up'}
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp