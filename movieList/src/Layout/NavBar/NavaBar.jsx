import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaSearch,FaHeart } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { movieContext } from '../../Components/MovieContexApi';

function NavaBar() {
    const {setSearchMovies,searchMovies}=movieContext()

    const handleSearchInputChange = (event) => {
        setSearchMovies(event.target.value);
    };
    const ActiveCheck=({isActive})=>(isActive?'text-red-600':'text-white hover:text-red-600 transition duration-300 ease-in')
  return (
    <>
    <div className='bg-slate-950 shadow-md sticky top-0 z-20'>
        <div className='container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between'>
            <div class='col-span-1 lg:block hidden'>
                <Link to="/">
                    <img src='./watchlist.png'
                    alt='logo'
                    className='w-full h-12 object-contain'/>
                </Link>
            </div>
            <div className='col-span-3 '>
                <form className='w-full text-sm bg-stone-300 rounded-lg flex flex-nowrap gap-14'>
                    <button type="submit" className='bg-red-800 w-12 flex-col h-12 rounded text-white flex justify-center items-center'>
                    <FaSearch />
                 </button> 
                 <input type='text' placeholder='Search Movie Name from here' className='font-medium placeholder:text-border outline-none text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black' value={searchMovies}
                  onChange={handleSearchInputChange}/>
                </form>
            </div>
            <div className='col-span-3 gap-14 font-medium text-sm hidden xl:gap-14 2xl:gap-20 flex justify-end lg:flex justify-end xl:flex justify-end items-center'>
                <NavLink to="/movies" className={ActiveCheck}>
                    Movies
                </NavLink>
                <NavLink to="/watchList" className={ActiveCheck}>
                    WatchList
                </NavLink>
                <NavLink to="/login" className={ActiveCheck}>
               < CiUser className='w-6 h-6'/>
                </NavLink>
            </div>
        </div>
    </div>
    </>
  )
}

export default NavaBar