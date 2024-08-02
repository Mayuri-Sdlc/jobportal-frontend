import React, { useState } from 'react'
import card from '../../../assets/communication/card.png'
const CommunicationDetail = () => {

    return (
        <>
            <div className='flex flex-col sm:flex-row w-full gap-6'>

                <div className='w-full sm:w-1/2 flex flex-col gap-5'>
                    <div className="bg-[#FAFBFB] rounded-lg p-8">
                        <div className="font-bold text-xl mr-2 whitespace-nowrap">Communication Details</div>

                        <div className="flex flex-col sm:flex-row sm:gap-10 mt-3">
                            <div className="w-full sm:w-1/2 mb-4">
                                <label htmlFor="Location" className="block text-sm font-medium text-gray-800 mb-2">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    placeholder=""
                                    className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                                />
                            </div>
                            <div className="w-full sm:w-1/2 mb-4">
                                <label htmlFor="Revenue Model" className="block text-sm font-medium text-gray-800 mb-2">
                                    Revenue Model
                                </label>
                                <input
                                    type="text"
                                    id="revenueModel"
                                    name="revenueModel"
                                    placeholder=""
                                    className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:gap-10 mt-3">
                            <div className="w-full sm:w-1/2 mb-4">
                                <label htmlFor="Website" className="block text-sm font-medium text-gray-800 mb-2">
                                    Website
                                </label>
                                <input
                                    type="text"
                                    id="website"
                                    name="website"
                                    placeholder=""
                                    className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                                />
                            </div>
                            <div className="w-full sm:w-1/2 mb-4">
                                <label htmlFor="Instagram" className="block text-sm font-medium text-gray-800 mb-2">
                                    Instagram
                                </label>
                                <input
                                    type="text"
                                    id="instagram"
                                    name="instagram"
                                    placeholder=""
                                    className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:gap-10 mt-3">
                            <div className="w-full sm:w-1/2 mb-4">
                                <label htmlFor="LinkedIn" className="block text-sm font-medium text-gray-800 mb-2">
                                    LinkedIn
                                </label>
                                <input
                                    type="text"
                                    id="linkedIn"
                                    name="linkedIn"
                                    placeholder=""
                                    className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                                />
                            </div>
                            <div className="w-full sm:w-1/2 mb-4">
                                <label htmlFor="Twitter" className="block text-sm font-medium text-gray-800 mb-2">
                                    Twitter
                                </label>
                                <input
                                    type="text"
                                    id="twitter"
                                    name="twitter"
                                    placeholder=""
                                    className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='mt-5'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    <div className="bg-[#FAFBFB] rounded-lg p-8">
                        <div className="font-bold text-xl">Pitch Details</div>
                        <div className='sm:flex gap-3 mb-8'>
                            <div className='drop-shadow-2xl'><img src={card} /></div>
                            <div className='flex items-center'>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M56.1199 31.3801H53.2499V5.12012C53.2499 4.57012 52.7999 4.12012 52.2499 4.12012H11.7499C11.1999 4.12012 10.7499 4.57012 10.7499 5.12012V31.3801H7.87988C7.31988 31.3801 6.87988 31.8201 6.87988 32.3801V51.6201C6.87988 52.1801 7.31988 52.6201 7.87988 52.6201H10.7499V58.8801C10.7499 59.4301 11.1999 59.8801 11.7499 59.8801H52.2499C52.7999 59.8801 53.2499 59.4301 53.2499 58.8801V52.6201H56.1199C56.6799 52.6201 57.1199 52.1801 57.1199 51.6201V32.3801C57.1199 31.8201 56.6799 31.3801 56.1199 31.3801ZM51.2499 57.8801H12.7499V52.6201H51.2499V57.8801ZM18.2499 47.2501V36.5101C18.2499 36.3801 18.3699 36.2601 18.4999 36.2601H21.9799C23.3399 36.2601 24.1999 36.3211 24.6299 36.4301C25.2899 36.6111 25.8599 36.9911 26.3099 37.5711C26.7499 38.1511 26.9799 38.9111 26.9799 39.8211C26.9799 40.5101 26.8499 41.1111 26.5899 41.6001C26.3399 42.0801 25.9999 42.4601 25.5999 42.7411C25.2099 43.0201 24.7999 43.2011 24.3899 43.2911C23.8499 43.4011 23.0999 43.4511 22.0899 43.4511H20.9199V47.2511C20.9199 47.3911 20.8099 47.5011 20.6699 47.5011H18.4999C18.3699 47.5001 18.2499 47.3901 18.2499 47.2501ZM28.2599 47.2501V36.5101C28.2599 36.3801 28.3699 36.2601 28.5099 36.2601H31.9899C33.3399 36.2601 34.2099 36.3211 34.6299 36.4301C35.2999 36.6111 35.8599 36.9911 36.3099 37.5711C36.7599 38.1511 36.9809 38.9111 36.9809 39.8211C36.9809 40.5101 36.8499 41.1111 36.5999 41.6001C36.3399 42.0801 36.0099 42.4601 35.6109 42.7411C35.2109 43.0201 34.7999 43.2011 34.3899 43.2911C33.8499 43.4011 33.0999 43.4511 32.0899 43.4511H30.9299V47.2511C30.9299 47.3911 30.8199 47.5011 30.6799 47.5011H28.5099C28.3699 47.5001 28.2599 47.3901 28.2599 47.2501ZM37.7499 38.5801C37.6099 38.5801 37.4999 38.4701 37.4999 38.3301V36.5101C37.4999 36.3801 37.6099 36.2601 37.7499 36.2601H46.2799C46.4199 36.2601 46.5299 36.3801 46.5299 36.5101V38.3301C46.5299 38.4701 46.4199 38.5801 46.2799 38.5801H43.3499V47.2501C43.3499 47.3901 43.2409 47.5001 43.0999 47.5001H40.9299C40.7899 47.5001 40.6799 47.3901 40.6799 47.2501V38.5801H37.7499ZM51.2499 31.3801H12.7499V6.12012H51.2499V31.3801Z" fill="#CD4527" />
                                    <path d="M24.2499 39.8501C24.2499 40.1111 24.1799 40.3401 24.0399 40.5401C23.9099 40.7401 23.7199 40.8801 23.4799 40.9701C23.3099 41.0401 22.8799 41.1301 21.8599 41.1301H20.9199V38.5801H21.7199C22.4799 38.5801 22.9899 38.6001 23.2399 38.6501C23.5299 38.7001 23.7699 38.8301 23.9699 39.0491C24.1499 39.2501 24.2499 39.5201 24.2499 39.8501Z" fill="#CD4527" />
                                    <path d="M34.2499 39.8501C34.2499 40.1111 34.1799 40.3401 34.0499 40.5401C33.9099 40.7401 33.7309 40.8801 33.4899 40.9701C33.3089 41.0401 32.8899 41.1301 31.8599 41.1301H30.9299V38.5801H31.7299C32.4899 38.5801 32.9999 38.6001 33.2399 38.6501C33.5399 38.7001 33.7799 38.8301 33.9689 39.0491C34.1599 39.2501 34.2499 39.5201 34.2499 39.8501Z" fill="#CD4527" />
                                    <path d="M46.75 13.375H17.25C16.697 13.375 16.25 12.928 16.25 12.375C16.25 11.822 16.697 11.375 17.25 11.375H46.75C47.303 11.375 47.75 11.822 47.75 12.375C47.75 12.928 47.303 13.375 46.75 13.375Z" fill="#CD4527" />
                                    <path d="M46.75 20.375H17.25C16.697 20.375 16.25 19.928 16.25 19.375C16.25 18.822 16.697 18.375 17.25 18.375H46.75C47.303 18.375 47.75 18.822 47.75 19.375C47.75 19.928 47.303 20.375 46.75 20.375Z" fill="#CD4527" />
                                    <path d="M46.75 27.375H17.25C16.697 27.375 16.25 26.928 16.25 26.375C16.25 25.822 16.697 25.375 17.25 25.375H46.75C47.303 25.375 47.75 25.822 47.75 26.375C47.75 26.928 47.303 27.375 46.75 27.375Z" fill="#CD4527" />
                                </svg>
                                <div>pitch_deck.ppt</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#FAFBFB] rounded-lg ">
                        <div className="font-bold text-xl p-6">Funding History</div>
                        <div className='w-full'>
                            <table className="table-auto w-full">
                                <thead>
                                    <tr className='bg-white'>
                                        <th>Amount</th>
                                        <th>Post Money Valuation</th>
                                        <th>Stage of Funding</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='h-[40px] bg-[#EBEDF0]'>
                                        <td className='text-center'>$ 50,000 </td>
                                        <td className='text-center'>$ 50,000</td>
                                        <td className='text-center'>Pre-Seeding</td>
                                    </tr>
                                    <tr className='bg-white h-[40px]'>
                                        <td className='text-center'>$ 50,000 </td>
                                        <td className='text-center'>$ 50,000</td>
                                        <td className='text-center'>Pre-Seeding</td>
                                    </tr>
                                    <tr className='h-[40px] bg-[#EBEDF0]'>
                                        <td className='text-center'>$ 50,000 </td>
                                        <td className='text-center'>$ 50,000</td>
                                        <td className='text-center'>Pre-Seeding</td>
                                    </tr>
                                    <tr className='bg-white h-[40px]'>
                                        <td className='text-center'>$ 50,000 </td>
                                        <td className='text-center'>$ 50,000</td>
                                        <td className='text-center'>Pre-Seeding</td>
                                    </tr>
                                    <tr className='h-[40px] bg-[#EBEDF0]'>
                                        <td className='text-center'>$ 50,000 </td>
                                        <td className='text-center'>$ 50,000</td>
                                        <td className='text-center'>Pre-Seeding</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className=" p-8">
                        <div className=''>
                            <div>
                                <div className="w-full sm:w-1/2 mb-4">
                                    <label htmlFor="Grants" className="block text-sm font-medium text-gray-800">
                                        Grants
                                    </label>
                                    <input
                                        type="text"
                                        id="Grants"
                                        name="Grants"
                                        placeholder=""
                                        className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                                    />
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M56.1199 31.3801H53.2499V5.12012C53.2499 4.57012 52.7999 4.12012 52.2499 4.12012H11.7499C11.1999 4.12012 10.7499 4.57012 10.7499 5.12012V31.3801H7.87988C7.31988 31.3801 6.87988 31.8201 6.87988 32.3801V51.6201C6.87988 52.1801 7.31988 52.6201 7.87988 52.6201H10.7499V58.8801C10.7499 59.4301 11.1999 59.8801 11.7499 59.8801H52.2499C52.7999 59.8801 53.2499 59.4301 53.2499 58.8801V52.6201H56.1199C56.6799 52.6201 57.1199 52.1801 57.1199 51.6201V32.3801C57.1199 31.8201 56.6799 31.3801 56.1199 31.3801ZM51.2499 57.8801H12.7499V52.6201H51.2499V57.8801ZM17.8399 47.2501V36.5101C17.8399 36.3801 17.9499 36.2601 18.0899 36.2601H21.5699C22.9199 36.2601 23.7899 36.3211 24.2099 36.4301C24.8799 36.6111 25.4399 36.9911 25.8899 37.5711C26.3399 38.1511 26.5709 38.9111 26.5709 39.8211C26.5709 40.5101 26.4409 41.1111 26.1799 41.6001C25.9199 42.0801 25.5899 42.4601 25.1909 42.7411C24.7909 43.0201 24.3799 43.2011 23.9809 43.2911C23.4299 43.4011 22.6799 43.4511 21.6699 43.4511H20.5099V47.2511C20.5099 47.3911 20.4009 47.5011 20.2599 47.5011H18.0899C17.9499 47.5001 17.8399 47.3901 17.8399 47.2501ZM27.8399 47.2501V36.5101C27.8399 36.3801 27.9499 36.2601 28.0899 36.2601H32.0499C32.9809 36.2601 33.6699 36.3301 34.1699 36.4811C34.8399 36.6801 35.4199 37.0311 35.8899 37.5411C36.3699 38.0311 36.7309 38.6511 36.9699 39.3711C37.2199 40.0811 37.3399 40.9611 37.3399 41.9811C37.3399 42.8901 37.2199 43.6911 36.9999 44.3501C36.7199 45.1701 36.3099 45.8401 35.7899 46.3501C35.3799 46.7411 34.8399 47.0501 34.1599 47.2601C33.6599 47.4201 32.9899 47.5001 32.1699 47.5001H28.0899C27.9499 47.5001 27.8399 47.3901 27.8399 47.2501ZM45.5899 40.6201C45.7309 40.6201 45.8399 40.7301 45.8399 40.8701V42.6901C45.8399 42.8301 45.7309 42.9401 45.5899 42.9401H41.3599V47.2501C41.3599 47.3901 41.2499 47.5001 41.1099 47.5001H38.9399C38.8089 47.5001 38.6899 47.3901 38.6899 47.2501V36.5101C38.6899 36.3801 38.8089 36.2601 38.9399 36.2601H46.2999C46.4409 36.2601 46.5499 36.3801 46.5499 36.5101V38.3301C46.5499 38.4701 46.4409 38.5801 46.2999 38.5801H41.3599V40.6201H45.5899ZM51.2499 31.3801H12.7499V6.12012H51.2499V31.3801Z" fill="#CD4527" />
                                    <path d="M23.8298 39.8501C23.8298 40.1111 23.7598 40.3401 23.6298 40.5401C23.4998 40.7401 23.3098 40.8801 23.0698 40.9701C22.8888 41.0401 22.4688 41.1301 21.4498 41.1301H20.5098V38.5801H21.3098C22.0708 38.5801 22.5808 38.6001 22.8208 38.6501C23.1208 38.7001 23.3608 38.8301 23.5498 39.0491C23.7398 39.2501 23.8298 39.5201 23.8298 39.8501Z" fill="#CD4527" />
                                    <path d="M34.5998 41.89C34.5998 42.691 34.5308 43.33 34.3898 43.781C34.2598 44.22 34.0898 44.531 33.8898 44.711C33.6908 44.891 33.4408 45.021 33.1198 45.101C32.8798 45.162 32.4598 45.192 31.8798 45.192H30.5098V38.582H31.2308C32.0898 38.582 32.6698 38.612 32.9598 38.682C33.3198 38.752 33.6098 38.903 33.8398 39.122C34.0698 39.342 34.2598 39.652 34.3898 40.052C34.5298 40.47 34.5998 41.09 34.5998 41.89Z" fill="#CD4527" />
                                    <path d="M46.75 13.375H17.25C16.697 13.375 16.25 12.928 16.25 12.375C16.25 11.822 16.697 11.375 17.25 11.375H46.75C47.303 11.375 47.75 11.822 47.75 12.375C47.75 12.928 47.303 13.375 46.75 13.375Z" fill="#CD4527" />
                                    <path d="M46.75 20.375H17.25C16.697 20.375 16.25 19.928 16.25 19.375C16.25 18.822 16.697 18.375 17.25 18.375H46.75C47.303 18.375 47.75 18.822 47.75 19.375C47.75 19.928 47.303 20.375 46.75 20.375Z" fill="#CD4527" />
                                    <path d="M46.75 27.375H17.25C16.697 27.375 16.25 26.928 16.25 26.375C16.25 25.822 16.697 25.375 17.25 25.375H46.75C47.303 25.375 47.75 25.822 47.75 26.375C47.75 26.928 47.303 27.375 46.75 27.375Z" fill="#CD4527" />
                                </svg>
                                <div>multi_lateral_exclusive.mp3</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}



export default CommunicationDetail