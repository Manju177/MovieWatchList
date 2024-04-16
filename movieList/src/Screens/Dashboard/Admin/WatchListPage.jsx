import React from 'react';
import NavaBar from '../../../Layout/NavBar/NavaBar';
import { Link } from 'react-router-dom';
import { FaSearch,FaHeart } from "react-icons/fa";
import MoviesList from '../../../Components/MoviesList';

const WatchListPage = () => {
  return (
    <>
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="bg-slate-950 text-white w-64 flex-shrink-0">
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
                 <input type='text' placeholder='Search a Movie' className='font-medium placeholder:text-border outline-none text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black'/>
                </form>
            </div>
        </div>
        
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="p-4">
             <div className='flex flex-col gap-6'>
                <div className='flex-btn gap-2 flex justify-between '>
                    <h2 className='text-xl font-bold'>My List</h2>
                     <button className='bg-white border-red-900 font-medium transitions hover:bg-red-900 border border-red-950 text-black py-3 px-6 rounded'>Delete All</button>
                </div>
                <MoviesList/>

             </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default WatchListPage;
