import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import { Link, useParams } from 'react-router-dom'
import { AllMovies } from '../../Components/allMovies'
import { FaPlay } from 'react-icons/fa'
import { FaArrowLeftLong } from "react-icons/fa6";

function WatchMovie() {
 const [play,setPlay]=useState(false)
  const {id} =useParams()
  const movie=AllMovies.find((movie)=>movie.Title===id)
    return (
    <Layout>
         <div className='container mx-auto bg-dry py-0 px-2 mb-12'>
            <div className='flex-rows flex items-center gap-3 text-white py-3 px-8 rounded font-semibold  bg-red-900 '>
              <Link to={'/'} className='flex items-center gap-2'><FaArrowLeftLong /><span>{movie?.Title}</span></Link>
            </div>
          {
            play?<video controls className='w-full h-full rounded'>
              <source src='https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' type="video/mp4" title={movie?.Title}/>
            </video>:(
              <div className='w-full h-screen rounded-lg outline-pink-900 overflow-hidden relative'>
                <div className='absolute flex justify-center items-center top-0 left-0 bottom-0 right-0 bg-slate-900 bg-opacity-30 flex flex-col'>
                  <button onClick={()=>setPlay(true)} className='bg-white text-red-900 flex justify-center items-center flex-col border border-red-900 rounded-full w-20 h-20 font-medium text-xl'>
                    <FaPlay/>
                  </button>
                </div>
                <img src={movie?.Poster} alt={movie?.Title} className='w-full h-full flex items-stretch  rounded-lg'/>
              </div>
            )
          }
         </div>
    </Layout>
  )
}

export default WatchMovie