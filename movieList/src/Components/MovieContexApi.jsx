import React, { createContext, useContext, useState, useEffect } from 'react';
import { AllMovies } from './allMovies';
import {apikey} from '../../apiKey'
const movieCon = createContext();

function MovieContexApi({ children }) {
    // const apiKey = process.env.REACT_APP_API_KEY;  // Accessing environment variable correctly
    const [searchMovies, setSearchMovies] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [watchListMovies, setWatchListMovies] = useState([]);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const maxPage = 1;
    const [page, setPage] = useState(maxPage);

    const HandleLoadingMore = () => {
        if (page * 9 >= movies.length) {
            setPage(1);
            setLoading(false);
            return;
        }
        setPage(page + maxPage);
        setLoading(false);
    };

    useEffect(() => {
        async function moviesList() {
            const data = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${apikey}`);
            const jsonData = await data.json();
            setMovies([...AllMovies, jsonData]);
            setLoading(false);
        }
        moviesList();
    }, []);

    const filteredMovies = searchMovies
        ? movies.filter(movie => {
              return (
                  movie.Title.toLowerCase().includes(searchMovies.toLowerCase()) ||
                  movie.Year == searchMovies ||
                  movie.Genre.toLowerCase().includes(searchMovies.toLowerCase())
              );
          })
        : movies;

    return (
        <movieCon.Provider
            value={{
                setSearchMovies,
                searchMovies,
                HandleLoadingMore,
                page,
                setPage,
                setLoading,
                loading,
                setMovies,
                movies,
                filteredMovies,
                userLoggedIn,
                setUserLoggedIn,
                setWatchListMovies,
                watchListMovies,
            }}
        >
            {children}
        </movieCon.Provider>
    );
}

export const movieContext = () => {
    return useContext(movieCon);
};

export default MovieContexApi;
