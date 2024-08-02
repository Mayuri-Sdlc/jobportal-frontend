import React from 'react'
import { useState } from "react";
import btnLoader from '../../components/Loader/BtnLoader';

function ConfirmationModal(prop) {

    const {
        confirmationType="",
        handleConfirm,
        closeModal,
        loading
    } = prop;


    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative ">
                    <div
                        className="border-0 rounded-xl scrollbar-hide shadow-lg p-7 relative flex flex-col w-full bg-modal outline-none focus:outline-none bg-white"
                        style={{ backdropFilter: "blur(39px)", width: "450px" }}
                    >
                        <div className="flex items-start justify-between border-slate-200 rounded-t mb-2">
                            <div className='flex flex-col items-start'>
                                <div className="text-xl font-bold text-center capitalize">{confirmationType.type} Campaign</div>
                                <p>Do you want to {confirmationType.type} this campaign?</p>
                            </div>

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
                                    
                                </div>
                                <div className="modal-action justify-start">
                                    <button onClick={()=>closeModal()} className="flex bg-white border border-[#6B788E] text-[#6B788E] items-center gap-3 rounded-lg py-[10px] px-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10 14L12 12M12 12L14 10M12 12L10 10M12 12L14 14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#6B788E" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                        Cancel
                                    </button>
                                    <button onClick={()=>handleConfirm(confirmationType.type)} disabled={loading} className="capitalize flex text-white items-center gap-3 rounded-lg py-[10px] px-4" style={{ background: "linear-gradient(93.58deg, #2626F4 0%, #171795 100%)" }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                        {loading ? btnLoader(confirmationType.type) : `${confirmationType.type}`}
                                    </button>
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

export default ConfirmationModal