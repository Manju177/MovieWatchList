import React, { createContext } from 'react'
import { useContext,useState,useEffect  } from 'react'


const movieCon=createContext();

function MovieContexApi({children}) {
    const [searchMovies,setSearchMovies]=useState('')
    

  return (
   <movieCon.Provider value={{setSearchMovies,searchMovies}} >
    {children}
   </movieCon.Provider>
  )
}

export const movieContext = () => {
  return useContext(movieCon)
}


export default MovieContexApi;