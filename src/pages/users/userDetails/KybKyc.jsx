import React, { useState } from 'react'
import docBack from '../../../assets/docBack.svg'
import docFront from '../../../assets/docFront.svg'
import pendingIcon from '../../../assets/pendingIcon.svg'

const KybKyc = () => {
    const [show,setShow] = useState(false)
    return (
        <>
            <div className=' w-full'>
                <div>
                    <div className='font-bold text-xl'>KYC</div>
                    <div className='mt-4 flex flex-col gap-5'>
                        <div className='flex text-lg font-semibold'>
                            <div>1.</div>
                            <div className='ml-4'>
                                <div className='flex items-center  gap-2'>
                                    <div>Address Proof</div>
                                    <div className='px-2 text-sm text-[#539F56] bg-[#EAF6ED] border rounded-md border-[#AAD8B6]'>
                                        <div className='flex items-center gap-2'>
                                            <div>
                                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="8" height="8" rx="4" fill="#539F56"/> </svg>
                                            </div>
                                            <div>Approved</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <img className='rounded-lg' src={docFront} />
                                </div>
                            </div>
                        </div>
                        <div className='flex text-lg font-semibold'>
                            <div>2.</div>
                            <div className='ml-4'>
                                <div className='flex items-center gap-2'>
                                    <div>Identity Proof</div>
                                    <div className='  px-2 text-sm text-[#F2C046] bg-[#FFF9E8] border rounded-md border-[#FEE4A0]'>
                                        <div className='flex items-center gap-2'>
                                            <div><img src={pendingIcon} /></div>
                                            <div>pending</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <img className='rounded-lg' src={docBack} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        show ?
                        <div>
                    <div><div className='font-bold text-xl'>KYC</div>
                        <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className='flex text-lg font-semibold'>
                                <div>1.</div>
                                <div className='ml-4'>
                                    <div className='flex items-center  gap-2'>
                                        <div>Address Proof</div>
                                        <div className='px-2 text-sm text-[#539F56] bg-[#EAF6ED] border rounded-md border-[#AAD8B6]'>
                                            <div className='flex items-center gap-2'>
                                                <div><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="8" height="8" rx="4" fill="#539F56"/> </svg> </div>
                                                <div>Approved</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <img className='rounded-lg' src={docFront} />
                                    </div>
                                </div>
                            </div>
                            <div className='flex text-lg font-semibold'>
                                <div>2.</div>
                                <div className='ml-4'>
                                    <div className='flex items-center gap-2'>
                                        <div>Identity Proof</div>
                                        <div className='  px-2 text-sm text-[#F2C046] bg-[#FFF9E8] border rounded-md border-[#FEE4A0]'>
                                            <div className='flex items-center gap-2'>
                                                <div><img src={pendingIcon} /></div>
                                                <div>pending</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <img className='rounded-lg' src={docBack} />
                                    </div>
                                </div>
                            </div>
                        </div></div>
                    <div><div className='font-bold text-xl'>KYB</div>
                        <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className='flex text-lg font-semibold'>
                                <div>1.</div>
                                <div className='ml-4'>
                                    <div className='flex items-center  gap-2'>
                                        <div>Address Proof</div>
                                        <div className='px-2 text-sm text-[#539F56] bg-[#EAF6ED] border rounded-md border-[#AAD8B6]'>
                                            <div className='flex items-center gap-2'>
                                                <div><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="8" height="8" rx="4" fill="#539F56"/> </svg> </div>
                                                <div>Approved</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <img className='rounded-lg' src={docFront} />
                                    </div>
                                </div>
                            </div>
                            <div className='flex text-lg font-semibold'>
                                <div>2.</div>
                                <div className='ml-4'>
                                    <div className='flex items-center gap-2'>
                                        <div>Identity Proof</div>
                                        <div className='  px-2 text-sm text-[#F2C046] bg-[#FFF9E8] border rounded-md border-[#FEE4A0]'>
                                            <div className='flex items-center gap-2'>
                                                <div><img src={pendingIcon} /></div>
                                                <div>pending</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <img className='rounded-lg' src={docBack} />
                                    </div>
                                </div>
                            </div>
                        </div></div>
                    </div>:""
                    }
                </div>

            </div>
        </>
    )
}

export default KybKyc