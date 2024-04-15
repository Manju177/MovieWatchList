import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

function Movies({movie}) {
  return (
    <div className='border border-border p-1 hover:scale-95 trasnstions relative rounded overflow-hidden '>
       <Link to={`./movie/${movie.Title}`} className='w-full'>
        <img src={movie.Poster} alt={movie.Title} className='w-full h-50 object-cover' />
       </Link>
    </div>
  )
}

export default Movies