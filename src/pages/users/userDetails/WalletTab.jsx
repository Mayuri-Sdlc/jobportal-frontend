import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import moment from 'moment'
const WalletTab = ({ wallet, investor, cards, accounts, transactions }) => {
    return (
        <>
            <div className=' w-full'>
                <div>
                    <div className='font-bold text-xl mb-4'>Wallet Information </div>
                    <div className='grid  sm:grid-cols-2 gap-5 md:gap-9 '>
                        <div className="bg-[#FAFBFB] border border-[#DFE2E6] rounded-2xl px-6 py-4 pb-7">
                            <div className="flex justify-between">
                                <div className="text-xl font-bold">
                                    Wallet
                                </div>

                                <div className="text-[#6B788E] items-center flex text-[20px]">
                                    <BsThreeDotsVertical />
                                </div>
                            </div>
                            <div>
                                {
                                    wallet ?
                                        <div>
                                                    <div>
                                                        <div className="flex mt-3">
                                                            <div className="w-5/12 font-semibold text-txt">
                                                                Wallet ID
                                                            </div>
                                                            <div className="w-7/12 text-txt">{wallet?.Id ? wallet.id : '--'}</div>
                                                        </div>
                                                        <hr className="mt-2 border mr-3 border-[#DFE2E6]"></hr>
                                                        <div className="flex mt-3">
                                                            <div className="w-5/12 font-semibold text-txt">
                                                                Full Name
                                                            </div>
                                                            <div className="w-7/12 text-txt flex gap-2 capitalize">
                                                                {/* Mr. {investor ? investor?.firstName + " " + investor?.lastName : '--'} */}
                                                                {investor ? investor?.firstName + " " + investor?.lastName : '--'}
                                                            </div>
                                                        </div>
                                                        <hr className="mt-2 border mr-3 border-[#DFE2E6]"></hr>
                                                        <div className="flex mt-3">
                                                            <div className="w-5/12 font-semibold text-txt">
                                                                Balance
                                                            </div>
                                                            <div className="w-7/12 text-txt flex gap-2">
                                                                <div>{wallet?.Balance?.Amount ? wallet?.Balance?.Amount : '--'}</div>
                                                                <div>{wallet?.Balance?.Currency}</div>
                                                            </div>
                                                        </div>
                                                        <hr className="mt-2 border mr-3 border-[#DFE2E6]"></hr>
                                                    </div>
                                        </div> :
                                        <div className='flex justify-center mt-8 font-bold text-lg'>
                                            <div>No Wallet Data Found</div>
                                        </div>
                                }
                            </div>

                        </div>

                        {/* Show cards */}

                        <div className="bg-[#FAFBFB] border border-[#DFE2E6] rounded-2xl px-6 py-4 pb-7">
                            <div className="flex justify-between">
                                <div className="text-xl font-bold">
                                    Credit/Debit Card
                                </div>

                                <div className="text-[#6B788E] items-center flex text-[20px]">
                                    <BsThreeDotsVertical />
                                </div>
                            </div>
                            <div>
                                {cards?.length > 0 ?
                                    <div>
                                        {cards?.length && cards.map((item) => {
                                            return (
                                                <div>
                                                    <div className="flex mt-3">
                                                        <div className="w-5/12 font-semibold text-txt">
                                                            Card #
                                                        </div>
                                                        <div className="w-7/12 text-txt">{item?.cardNumber}</div>
                                                    </div>
                                                    <hr className="mt-2 border mr-3 border-[#DFE2E6]"></hr>
                                                    <div className="flex mt-3">
                                                        <div className="w-5/12 font-semibold text-txt">
                                                            Expiry Date
                                                        </div>
                                                        <div className="w-7/12 text-txt flex gap-2">
                                                            {item?.expirationDate}
                                                        </div>
                                                    </div>
                                                    <hr className="mt-2 border mr-3 border-[#DFE2E6]"></hr>
                                                    <div className="flex mt-3">
                                                        <div className="w-5/12 font-semibold text-txt">
                                                            Bank
                                                        </div>
                                                        <div className="w-7/12 text-txt flex gap-2">
                                                            {item?.bankName}
                                                        </div>
                                                    </div>
                                                    <hr className="mt-2 border mr-3 border-[#DFE2E6]"></hr>
                                                </div>
                                            )
                                        })}
                                    </div> :
                                    <div className='flex justify-center mt-8 font-bold text-lg'>
                                        <div>No Cards Data Found</div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bank details */}
                <div>
                    <div className='font-bold text-xl mt-4'>Bank Details </div>
                    <div className='grid sm:grid-cols-2 gap-5 md:gap-9 mt-4 '>
                        <div>
                            {
                                accounts?.length ?
                                    <div>
                                        {
                                            accounts?.length && accounts.map((item) => {
                                                return (
                                                    <div className='  bg-[#FAFBFB] rounded-lg p-6'>
                                                        <div className='font-bold text-lg mr-2 whitespace-nowrap'> International Bank Account</div>

                                                        <div className='flex flex-col gap-3 mt-3'>
                                                            <div className="w-full sm:w-1/2 mb-4">
                                                                <label htmlFor="email" className="block text-sm font-medium text-gray-800" >
                                                                    Bank Name
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name='bankName'
                                                                    value={item.name ? item.name : ""}
                                                                    disabled

                                                                    placeholder=""
                                                                    className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                                                                />
                                                            </div>
                                                            <div className="w-full sm:w-1/2 mb-4">
                                                                <label htmlFor="email" className="block text-sm font-medium text-gray-800" >
                                                                    BIC/SWIFT
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name='bic'
                                                                    value={item.bankCode ? item.bankCode : ""}
                                                                    disabled

                                                                    placeholder=""
                                                                    className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='flex flex-col gap-3 mt-3'>
                                                            <div className="w-full sm:w-1/2 mb-4">
                                                                <label htmlFor="email" className="block text-sm font-medium text-gray-800" >
                                                                    Holder Country ( ISO 2 Code)
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name='holderCountry'
                                                                    value={item.holderCountry ? item.holderCountry : ""}
                                                                    disabled
                                                                    placeholder=""
                                                                    className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                                                                />
                                                            </div>
                                                            <div className="w-full sm:w-1/2 mb-4">
                                                                <label htmlFor="email" className="block text-sm font-medium text-gray-800" >
                                                                    Sort/IFSC Code
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name='ifscCode'
                                                                    value={item.ifscCode ? item.ifscCode : ""}
                                                                    disabled
                                                                    placeholder=""
                                                                    className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div> :
                                    <div className="bg-[#FAFBFB] border flex justify-center text-lg font-bold border-[#DFE2E6] rounded-2xl px-6 py-4 pb-7">
                                        <div>No Bank Details Found</div>
                                    </div>
                            }
                        </div>

                        {/* bank2 */}

                        <div>
                            {
                                accounts?.length > 0 ?
                                    <div>
                                        {
                                            accounts?.length && accounts.map((item) => {
                                                return (
                                                    <div className='  bg-[#FAFBFB] rounded-lg p-6'>
                                                        <div className='font-bold text-lg mr-2 whitespace-nowrap'> UK Bank Account</div>

                                                        <div className='flex flex-col gap-3 mt-3'>
                                                            <div className="w-full sm:w-1/2 mb-4">
                                                                <label htmlFor="email" className="block text-sm font-medium text-gray-800" >
                                                                    Account Number
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name='accountNumber'
                                                                    value={item?.accountNumber ? item?.accountNumber : ""}
                                                                    disabled

                                                                    placeholder="Enter Account Number"
                                                                    className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                                                                />
                                                            </div>
                                                            <div className="w-full sm:w-1/2 mb-4">
                                                                <label htmlFor="email" className="block text-sm font-medium text-gray-800" >
                                                                    Bank Branch
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name='bankBranch'
                                                                    value={item?.bankBranch ? item?.bankBranch : ""}
                                                                    disabled

                                                                    placeholder="Enter Address Manually"
                                                                    className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='flex flex-col gap-3 mt-3'>
                                                            <div className="w-full sm:w-1/2 mb-4">
                                                                <label htmlFor="email" className="block text-sm font-medium text-gray-800" >
                                                                    Bank Country ( ISO 2 Code)
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name='bankCountry'
                                                                    value={item?.bankCountry ? item?.bankCountry : ""}
                                                                    disabled
                                                                    placeholder="Enter Address Manually"
                                                                    className="block w-full px-2 py-2 text-sm font-normal text-[#111827] bg-white border rounded focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-400 border-gray-400"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div> :
                                    <div className="bg-[#FAFBFB] border flex justify-center text-lg font-bold border-[#DFE2E6] rounded-2xl px-6 py-4 pb-7">
                                        <div>No Bank Details Found</div>
                                    </div>
                            }
                        </div>

                    </div>
                </div>
                <div>
                    <div className='mt-4 grid  sm:grid-cols-2 gap-5 md:gap-9 '>
                        <div className="bg-[#FAFBFB] border border-[#DFE2E6] rounded-2xl px-6 py-4 pb-7">
                            <div className="flex justify-between">
                                <div className="text-xl font-bold">
                                    Recent Transactions
                                </div>

                                <div className="text-[#6B788E] items-center flex text-[20px]">
                                    <BsThreeDotsVertical />
                                </div>
                            </div>
                            <div>
                                {
                                    transactions?.length > 0 ?
                                        <div>
                                            {
                                                transactions?.length && transactions.map((item) => {
                                                    return (
                                                        <div>
                                                            <div className="flex mt-3">
                                                                <div className="w-5/12 font-semibold text-txt">
                                                                    Date
                                                                </div>
                                                                <div className="w-7/12 text-txt">{moment(item?.updatedAt).format("DD/MM/YYYY")}</div>
                                                            </div>
                                                            <hr className="mt-2 border mr-3 border-[#DFE2E6]"></hr>
                                                            <div className="flex mt-3">
                                                                <div className="w-5/12 font-semibold text-txt">
                                                                    Status
                                                                </div>
                                                                {
                                                                    item.status === "PAYIN_NORMAL_SUCCEEDED" ?
                                                                        <div className=" px-2 text-sm text-[#539F56] bg-[#EAF6ED] border rounded-md border-[#AAD8B6]">
                                                                            <div className='flex items-center gap-2'>
                                                                                <div className='w-2 h-2 rounded-full bg-[#539F56]'></div>
                                                                                <div>Approved</div>
                                                                            </div>
                                                                        </div> : ""
                                                                }
                                                                {
                                                                    item?.status === "FAILED" ?
                                                                        <div className=" px-2 text-sm text-red-600 bg-[#EAF6ED] border rounded-md border-red-600">
                                                                            <div className='flex items-center gap-2'>
                                                                                <div className='w-2 h-2 rounded-full bg-red-600'></div>
                                                                                <div>Failed</div>
                                                                            </div>
                                                                        </div> : ""
                                                                }
                                                            </div>
                                                            <hr className="mt-2 border mr-3 border-[#DFE2E6]"></hr>
                                                            <div className="flex mt-3">
                                                                <div className="w-5/12 font-semibold text-txt">
                                                                    Debit
                                                                </div>
                                                                <div className="w-7/12 text-txt flex gap-2">
                                                                    {item?.amount} EUR
                                                                </div>
                                                            </div>
                                                            <hr className="mt-2 border mr-3 border-[#DFE2E6]"></hr>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        :
                                        <div className="bg-[#FAFBFB]  flex justify-center text-lg font-bold  rounded-2xl px-6 py-4 pb-7">
                                            <div>No Transaction Details Found</div>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WalletTab