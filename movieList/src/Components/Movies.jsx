import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { movieContext } from './MovieContexApi';

function Movies({ movie, watchList }) {
  const { filteredMovies,setWatchListMovies } = movieContext();
  
  const handleWatchList = (favMovie) => {
    // Retrieve user email from localStorage
    const userEmail = localStorage.getItem('loggedInUser');
  
    if (userEmail) {
     
      const storedWatchListJson = localStorage.getItem(`watchList_${userEmail}`);
      const storedWatchList = storedWatchListJson ? JSON.parse(storedWatchListJson) : [];
      const movieToAddOrRemove = filteredMovies.find((item) => item.Title === favMovie);
  
      if (movieToAddOrRemove) {
        const isMovieInWatchList = storedWatchList.some((item) => item.Title === favMovie);

        const updatedWatchList = isMovieInWatchList
          ? storedWatchList.filter((item) => item.Title !== favMovie)
          : [...storedWatchList, movieToAddOrRemove];
  
        // Update watchlist data in localStorage for the current user
        localStorage.setItem(`watchList_${userEmail}`, JSON.stringify(updatedWatchList));
        setWatchListMovies(updatedWatchList)
    
      }
    } else {
      console.error('User email not found in localStorage');
    }
  };
  

  return (
    <>
    <div className='border border-border p-1 hover:scale-95 trasnstions relative rounded overflow-hidden '>
      <Link to={`./movie/${movie.Title}`} className='w-full'>
        <img src={movie.Poster} alt={movie.Title} className='w-full h-50 object-cover' />
      </Link>
      <div className='absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-stone-200  text-white px-4 py-3'>
        <h4 className='text-sm text-red-700 font-serif text-right text-neutral-950'>Rating: {movie?.imdbRating}</h4>
        <h3 className='font-bold font-serif text-center text-neutral-950'>{movie?.Title} ({movie?.Year})</h3>
        <button
          className='h-9 w-full bg-red-900 text-sm item-center flex-colo transition hover:bg-red-600 border-2 rounded-md text-white'
          onClick={() => handleWatchList(movie?.Title)} 
        >
          {watchList ? 'Remove from WatchList' : 'Add to WatchList'}
        </button>
      </div>
    </div>
    
    </>
  );
}

export default Movies;
