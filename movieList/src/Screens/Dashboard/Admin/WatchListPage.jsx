import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import MoviesWatchList from './MoviesWatchList';
import { movieContext } from '../../../Components/MovieContexApi';

const WatchListPage = () => {
  const [userEmail, setUserEmail] = useState('');
  const {setSearchMovies,watchListMovies}=movieContext()
  
  
  useEffect(() => {
    // Retrieve user data from localStorage
    const userData = localStorage.getItem('loggedInUser');
    if (userData) {
      setUserEmail(userData);
    }
  }, []);
  const handleSearchInputChange = (event) => {
    setSearchMovies(event.target.value);
};

  return (
    <>
    <div  className="flex min-h-full md:min-h-full sm:min-h-full">
      <div className="bg-slate-950 text-white w-64 flex-shrink-0 relative">
        <div className="p-4">
          <h1 className="text-xl font-bold"> <Link to="/">
                    <img src='./watchlist.png'
                    alt='logo'
                    className='w-auto h-10 object-contain'/>
                </Link></h1>
                <br/>
                <div className='col-span-3 '>
                <form className='w-full text-sm bg-stone-300 rounded-lg flex flex-nowrap gap-14'>
                    <button type="submit" className='bg-red-800 w-12 flex-col h-12 rounded text-white flex justify-center items-center'>
                    <FaSearch />
                 </button> 
                 <input type='text' onChange={handleSearchInputChange} placeholder='Search a Movie' className='font-medium placeholder:text-border outline-none text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black'/>
                </form>
            </div>
        </div>
      </div>
      <div className="flex-1 min-h-screen">
        <div className="p-4">
             <div className='flex flex-col gap-6'>
                <div className='flex-btn gap-2 flex justify-between '>
                    <h2 className='text-xl font-bold whitespace-nowrap'>My List 
                    </h2>
                    <marquee width="50%" direction="left">Lights, Camera, Action! Let the Show Begin</marquee>
                     <button className='bg-slate-950 text-white border-red-900 font-medium transitions hover:bg-red-900 border border-red-950 text-white py-3 px-6 rounded flex justify-between gap-2 items-center'><FaCircleUser /> <span>{userEmail}</span></button>
                     
                </div>
                <MoviesWatchList/>
             </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default WatchListPage;
