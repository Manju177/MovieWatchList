import React, { useEffect, useState } from 'react'
import Movies from './Movies'
import { FaLongArrowAltRight } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { movieContext } from './MovieContexApi';

function MoviesList() {

    const {HandleLoadingMore,page,loading,filteredMovies}=movieContext()
 
    
    return (
        <>
       { loading && <AiOutlineLoading3Quarters  className='w-10 h-10 animate-spin ' />}
        <div className='my-16'>
            <p className='text-lg font-medium my-6'>
                Total <span className='font-bold text-red-600 '>{filteredMovies?.length}</span> Items Found
            </p>
            <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
                {
                    filteredMovies?.slice(page*9-9,page*9).map((movie, index) => {
                        return (
                            <Movies key={index} movie={movie} />
                        )
                    })
                }
            </div>
            <div className='w-full flex items-center flex-col md:my-20 my-10'>
            {!loading&& 
                <button onClick={HandleLoadingMore} className='flex-rows flex items-center gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-red-600'>
                    View More <FaLongArrowAltRight  />
                </button>
            }
            </div>
        </div>
        </>
    )
}

export default MoviesList