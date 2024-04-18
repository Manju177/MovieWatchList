import React, { useEffect, useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Movies from '../../../Components/Movies';
import { movieContext } from '../../../Components/MovieContexApi';


function MoviesWatchList() {

    const { HandleLoadingMore, page, loading, searchMovies } = movieContext()
    const userEmail = localStorage.getItem('loggedInUser');
    const storedWatchListJson = localStorage.getItem(`watchList_${userEmail}`);

    const filteredWatchListMovies = searchMovies
        ? JSON.parse(storedWatchListJson).filter(movie => {
            return (
                movie.Title.toLowerCase().includes(searchMovies.toLowerCase()) || movie.Year == searchMovies || movie.Genre.toLowerCase().includes(searchMovies.toLowerCase())
            )
        }
        )
        : JSON.parse(storedWatchListJson);

    return (
        <>
            {loading && <AiOutlineLoading3Quarters className='w-10 h-10 animate-spin ' />}
            <div className='my-16'>
                    <p className='text-lg font-medium my-6'>
                    Total <span className='font-bold text-red-600 '>{filteredWatchListMovies?filteredWatchListMovies.length:0}</span> Items Found
                    </p>
                    {!filteredWatchListMovies&&<img src='/noItems.jpg' alt='NO ITEMS FOUND' style={{ width: "-webkit-fill-available" }} />}
                    <p className='text-lg font-medium my-6'>
                    {
                        filteredWatchListMovies?.length <= 0 && <img src='/noItems.jpg' alt='NO ITEMS FOUND' style={{ width: "-webkit-fill-available" }} />
                    }
                    </p>
                <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
                    {
                        filteredWatchListMovies?.slice(page * 9 - 9, page * 9).map((movie, index) => {
                            return (
                                <Movies key={index} movie={movie} watchList={true} />
                            )
                        })
                    }
                </div>
                <div className='w-full flex items-center flex-col md:my-20 my-10'>
                    {!loading && filteredWatchListMovies?.length > 0 &&
                        <button onClick={HandleLoadingMore} className='flex-rows flex items-center gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-red-600 '>
                            ( <span className='text-slate-900'>View More</span> <FaLongArrowAltRight className='text-slate-900' />)
                        </button>
                    }
                </div>
            </div>
        </>
    )
}

export default MoviesWatchList