import React, { useEffect, useState } from 'react'
import Movies from './Movies'
import { AllMovies } from './allMovies'
import { FaLongArrowAltRight } from "react-icons/fa";

function MoviesList() {
    const [movies, setMovies] = React.useState([])
    const maxPage=1;
    const[page,setPage]=useState(maxPage)
    const HandleLoadingMore=()=>{
        if(page*9>=movies.length){
            setPage(1)
            return
        }
        setPage(page+maxPage)
    }


    useEffect(() => {
         async function moviesList() {
            const data = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=371aafbf`)
            const jsonData = await data.json()
            setMovies([jsonData, ...AllMovies]);
            //added few movies because api conations only one movie object
            console.log(jsonData)
        }
        moviesList();
    }, [])
    
    return (
        <div className='my-16'>
            <p className='text-lg font-medium my-6'>
                Total <span className='font-bold text-red-600 '>{movies?.length}</span> Items Found
            </p>
            <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
                {
                    movies.slice(page*9-9,page*9).map((movie, index) => {
                        return (
                            <Movies key={index} movie={movie} />
                        )
                    })
                }
            </div>
            <div className='w-full flex items-center flex-col md:my-20 my-10'>
                <button onClick={HandleLoadingMore} className='flex-rows flex items-center gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-red-600'>
                    View More <FaLongArrowAltRight  />
                </button>

            </div>
        </div>
    )
}

export default MoviesList