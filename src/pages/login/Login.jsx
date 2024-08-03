import { login, reset } from '../../features/auth/authSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = data

    const onChange = (e) => {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const history = useHistory()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    const onSubmit = (e) => {
        e.preventDefault()
        const userData = { email, password }
        dispatch(login(userData))
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
            if (user.roleId === 3) {
                history.push('/user-onboarding');
            } else if (user.roleId === 2) {
                history.push('/company-onboarding');
            } else {
                history.push('/admin/dashboard');
            }
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, history, dispatch])

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 mx-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-primary">
                    Sign in
                </h1>
                <form className="mt-4">
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
                    <div className="mt-6">
                        <button
                            className="w-full px-4 py-2 tracking-wide text-sm font-medium text-white transition-colors duration-200 transform bg-primary rounded disabled:opacity-60"
                            onClick={(e) => onSubmit(e)}
                            disabled={isLoading}
                        //disabled={false}
                        >
                            {/* {loading ? loader('Logging in...') : 'Login'} */}
                            {'Login'}
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login