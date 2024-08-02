import React from 'react'
import { useState } from "react";

function BlockUserModal(prop) {

    const {
        setShowBlockModal,
        closeModal,
    } = prop;

    const [loading, setLoading] = useState(false)


    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative ">
                    <div
                        className="border-0 rounded-xl scrollbar-hide shadow-lg p-7 relative flex flex-col w-full bg-modal outline-none focus:outline-none bg-white"
                        style={{ backdropFilter: "blur(39px)", width: "450px" }}
                    >
                        <div className="flex items-start justify-between border-slate-200 rounded-t mb-2">
                            <div className="text-2xl font-bold text-center">Block the User</div>

                            <button
                                className="cursor-pointer p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={()=>closeModal()}
                            >
                                <span className="bg-transparent text-[#111827] h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        <div className="bg-white rounded mb-1">
                            <>
                                <div className="w-full text-start mt-3">
                                    <div className="flex flex-col mb-2">
                                        <label className='text-base'>Reason for blocking</label>
                                        <select name="name" id="name" className='border-2 rounded-md p-3 text-[#A6AEBB] text-base font-normal'>
                                            <option>Select Reason for blocking</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col mb-2">
                                        <label className='text-base'>Remarks</label>
                                        <textarea
                                            rows={5}
                                            name="name"
                                            id="name"
                                            placeholder="Enter your remarks here..."
                                            className='border-2 rounded-md p-2 placeholder:text-[#A6AEBB] placeholder:text-base placeholder:font-normal'
                                        />
                                    </div>
                                </div>
                                <div className="modal-action justify-start">
                                    <div onClick={()=>closeModal()} className="cursor-pointer flex bg-white border border-[#6B788E] text-[#6B788E] items-center gap-3 rounded-lg py-[10px] px-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10 14L12 12M12 12L14 10M12 12L10 10M12 12L14 14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#6B788E" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                        Cancel
                                    </div>
                                    <div className="cursor-pointer flex text-white items-center gap-3 rounded-lg py-[10px] px-4" style={{ background: "linear-gradient(93.58deg, #2626F4 0%, #171795 100%)" }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                        Block User
                                    </div>
                                </div>
                            </>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}

export default BlockUserModal