import React from 'react'

const Pagination = ({ totalPages, currentPage, handlePageNumber }) => {
    const handlePageChange = (e) => {
        handlePageNumber(Number(e.target.value));
    }
    
    const handleNextPage = (e) => {
        if (currentPage == totalPages) alert('You are on last page');
        handlePageNumber(currentPage + 1);
    }
    
    const handlePreviousPage = (e) => {
        if (currentPage == 1) alert('You are on first page');
        handlePageNumber(currentPage - 1);
    }
    return (
        <div className="flex items-center justify-center px-4 py-3 sm:px-6">
            <div className="flex flex-1 items-center justify-center gap-x-1">
                <button className={`rounded px-2 py-2 mr-4 text-secondary hover:${currentPage !== 1 ? 'bg-secondary-extra-light' : ''} focus:z-20 focus:outline-offset-0 disabled:opacity-60`} disabled={currentPage == 1 ? true : false} onClick={handlePreviousPage}>Previous</button>
                {totalPages > 0 ?
                            // Array.from({ length: totalPages }, (_, index) => (
                            //     index < 3 ?
                            //         <button value={index + 1} onClick={e => handlePageChange(e)} className={`relative z-10 inline-flex items-center ${index + 1 == currentPage ? 'bg-primary text-white' : 'bg-white text-secondary hover:bg-primary hover:text-white'}  px-4 py-2 ml-2 first:ml-0 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}>{index + 1}</button>
                            //         : null
                            // )) 
                            <>
                            <button value={currentPage} onClick={e => handlePageChange(e)} className={`relative z-10 inline-flex items-center bg-primary text-white px-4 py-2 ml-2 first:ml-0 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}>{currentPage}</button>
                            {
                            currentPage != totalPages ? 
                            <button value={currentPage + 1} onClick={e => handlePageChange(e)} className={`relative z-10 inline-flex items-center bg-white text-secondary hover:bg-primary hover:text-white px-4 py-2 ml-2 first:ml-0 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}>{currentPage + 1}</button>
                            : null
                            }
                            {
                            currentPage != totalPages - 1 && currentPage != totalPages ? 
                            <button value={currentPage + 2} onClick={e => handlePageChange(e)} className={`relative z-10 inline-flex items-center bg-white text-secondary hover:bg-primary hover:text-white px-4 py-2 ml-2 first:ml-0 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}>{currentPage + 2}</button>
                            : null
                            }
                            </>
                            : null
                        }
                        {
                            totalPages > 3 && currentPage != totalPages ? 
                            <>
                            
                            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700  focus:outline-offset-0">...</span>
                            <button value={totalPages} onClick={e => handlePageChange(e)} className={`relative z-10 inline-flex items-center ${totalPages == currentPage ? 'bg-primary text-white' : 'bg-white text-secondary hover:bg-primary hover:text-white'}  px-4 py-2 ml-2 first:ml-0 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}>{totalPages}</button>
                            </>
                            : null
                        }
                        <button className={`rounded px-2 py-2 mr-4 text-secondary hover:${currentPage !== totalPages ? 'bg-secondary-extra-light' : ''} focus:z-20 focus:outline-offset-0 disabled:opacity-60`} disabled={currentPage == totalPages ? true : false} onClick={handleNextPage}>Next</button>
            </div>
        </div>
    )
}

export default Pagination