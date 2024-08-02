import React from "react";

const Table = ({ columns, visibleColumns, data }) => {
    
    const filteredColumns = columns?.filter((column) =>
    visibleColumns.includes(column))

    console.log('filtered columns:::', filteredColumns);
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-y-hidden border-b">
                        <table className="min-w-full divide-y border-secondary-light">
                            <thead className="border-secondary-light border-b">
                                <tr>
                                    <th scope="col" className="py-3 pl-4">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="checkbox-all"
                                                type="checkbox"
                                                className="text-secondary border-secondary-light rounded focus:ring-blue-500"
                                            />
                                            <label
                                                htmlFor="checkbox"
                                                className="sr-only"
                                            >
                                                Checkbox
                                            </label>
                                        </div>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-secondary capitalize "
                                    >
                                        <span className="inline-flex items-center justify between">
                                            Name
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} > <path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12" /> </svg>
                                        </span>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-secondary capitalize "
                                    >
                                        <span className="inline-flex items-center justify between">
                                            Email Address
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} > <path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" /> </svg>
                                        </span>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-secondary capitalize "
                                    >
                                        User Type
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-secondary capitalize "
                                    >
                                        Registered Date
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-secondary capitalize "
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y border-secondary-light">
                                <tr>
                                    <td className="py-3 pl-4">
                                        <div className="flex items-center h-5">
                                            <input
                                                type="checkbox"
                                                className="text-secondary border-secondary rounded focus:ring-blue-500"
                                            />
                                            <label htmlFor="checkbox" className="sr-only" >
                                                Checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        <div className='flex gap-3 items-center'>
                                            <img className='rounded-3xl w-10 h-10' src="data:image/jpeg;base64,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" alt="" />
                                            <div>
                                                <h1 className='font-normal text-lg text-[#091E42] mr-2 whitespace-nowrap'>John Doe</h1>
                                                <p className='text-sm font-normal text-[#6B788E]'>Harman Group</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        jonne62@gmail.com
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        Investor
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        Mon Mar 14 2011 11:20:27 GMT+0530
                                    </td>
                                    <td className="flex gap-6 px-6 py-4 text-sm font-medium text-right whitespace-nowrap items-center">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z" stroke="#444444" strokeWidth="1.5"/> <path d="M15 13.327C14.0153 13.1068 13.009 12.9971 12 13C7.582 13 4 15.015 4 17.5C4 19.985 4 22 12 22C17.687 22 19.331 20.982 19.807 19.5" stroke="#444444" strokeWidth="1.5"/> <path d="M20.8281 13.171C21.5783 13.9212 21.9997 14.9386 21.9997 15.9995C21.9997 17.0604 21.5783 18.0778 20.8281 18.828C20.0779 19.5782 19.0605 19.9996 17.9996 19.9996C16.9387 19.9996 15.9213 19.5782 15.1711 18.828L20.8281 13.172M15.1721 18.828C14.4219 18.0778 14.0005 17.0604 14.0005 15.9995C14.0005 14.9386 14.4219 13.9212 15.1721 13.171C15.9223 12.4208 16.9397 11.9994 18.0006 11.9994C19.0615 11.9994 20.0789 12.4208 20.8291 13.171" stroke="#444444" strokeWidth="1.5" strokeLinejoin="round"/> </svg>
                                        <div className="dropdown dropdown-end">
                                            <label tabIndex={0} className="m-1 cursor-pointer">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.99295 7.80488C11.1834 7.80488 12.1358 8.78049 12.1358 10C12.1358 11.2195 11.1834 12.1951 9.99295 12.1951C8.80248 12.1951 7.8501 11.2195 7.8501 10C7.8501 8.78049 8.80248 7.80488 9.99295 7.80488ZM7.8501 2.19512C7.8501 3.41463 8.80248 4.39024 9.99295 4.39024C11.1834 4.39024 12.1358 3.41463 12.1358 2.19512C12.1358 0.97561 11.1834 0 9.99295 0C8.80248 0 7.8501 0.97561 7.8501 2.19512ZM7.8501 17.8049C7.8501 19.0244 8.80248 20 9.99295 20C11.1834 20 12.1358 19.0244 12.1358 17.8049C12.1358 16.5854 11.1834 15.6098 9.99295 15.6098C8.80248 15.6098 7.8501 16.5854 7.8501 17.8049Z" fill="#8B83BA"/> </svg>
                                            </label>
                                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 border">
                                                <li><a>Item 1</a></li>
                                                <li><a>Item 2</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-3 pl-4">
                                        <div className="flex items-center h-5">
                                            <input
                                                type="checkbox"
                                                className="text-secondary border-secondary-light rounded focus:ring-blue-500"
                                            />
                                            <label
                                                htmlFor="checkbox"
                                                className="sr-only"
                                            >
                                                Checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    <div className='flex gap-3 items-center'>
                                            <img className='rounded-3xl w-10 h-10' src="data:image/jpeg;base64,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" alt="" />
                                            <div>
                                                <h1 className='font-normal text-lg text-[#091E42] mr-2 whitespace-nowrap'>Alison Wilderman</h1>
                                                <p className='text-sm font-normal text-[#6B788E]'>Orc Inc</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        alison12@gmail.com
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        Founder
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        Mon Mar 14 2011 11:20:27 GMT+0530
                                    </td>
                                    <td className="flex gap-6 px-6 py-4 text-sm font-medium text-right items-center whitespace-nowrap">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z" stroke="#444444" strokeWidth="1.5"/> <path d="M15 13.327C14.0153 13.1068 13.009 12.9971 12 13C7.582 13 4 15.015 4 17.5C4 19.985 4 22 12 22C17.687 22 19.331 20.982 19.807 19.5" stroke="#444444" strokeWidth="1.5"/> <path d="M20.8281 13.171C21.5783 13.9212 21.9997 14.9386 21.9997 15.9995C21.9997 17.0604 21.5783 18.0778 20.8281 18.828C20.0779 19.5782 19.0605 19.9996 17.9996 19.9996C16.9387 19.9996 15.9213 19.5782 15.1711 18.828L20.8281 13.172M15.1721 18.828C14.4219 18.0778 14.0005 17.0604 14.0005 15.9995C14.0005 14.9386 14.4219 13.9212 15.1721 13.171C15.9223 12.4208 16.9397 11.9994 18.0006 11.9994C19.0615 11.9994 20.0789 12.4208 20.8291 13.171" stroke="#444444" strokeWidth="1.5" strokeLinejoin="round"/> </svg>
                                        <div className="dropdown dropdown-end">
                                            <label tabIndex={0} className="m-1 cursor-pointer">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.99295 7.80488C11.1834 7.80488 12.1358 8.78049 12.1358 10C12.1358 11.2195 11.1834 12.1951 9.99295 12.1951C8.80248 12.1951 7.8501 11.2195 7.8501 10C7.8501 8.78049 8.80248 7.80488 9.99295 7.80488ZM7.8501 2.19512C7.8501 3.41463 8.80248 4.39024 9.99295 4.39024C11.1834 4.39024 12.1358 3.41463 12.1358 2.19512C12.1358 0.97561 11.1834 0 9.99295 0C8.80248 0 7.8501 0.97561 7.8501 2.19512ZM7.8501 17.8049C7.8501 19.0244 8.80248 20 9.99295 20C11.1834 20 12.1358 19.0244 12.1358 17.8049C12.1358 16.5854 11.1834 15.6098 9.99295 15.6098C8.80248 15.6098 7.8501 16.5854 7.8501 17.8049Z" fill="#8B83BA"/> </svg>
                                            </label>
                                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 border z-10">
                                                <li><a>Item 1</a></li>
                                                <li><a>Item 2</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table