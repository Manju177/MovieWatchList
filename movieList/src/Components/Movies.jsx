import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import {FaHeart} from 'react-icons/fa'

function Movies({movie}) {
  return (
    <div className='border border-border p-1 hover:scale-95 trasnstions relative rounded overflow-hidden '>
       <Link to={`./movie/${movie.Title}`} className='w-full'>
        <img src={movie.Poster} alt={movie.Title} className='w-full h-50 object-cover' />
       </Link>
       <div className='absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-stone-200  text-white px-4 py-3'>
        <h3 className='font-bold font-serif text-center text-neutral-950	'>{movie?.Title}</h3>
        <button className='h-9 w-full bg-red-900 text-sm item-center flex-colo transition hover:bg-red-600 border-2 rounded-md text-white'>
        Add to WatchList    
        </button> 
         </div>
    </div>
  )
}

export default Movies