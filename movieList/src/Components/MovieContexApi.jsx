import React, { createContext } from 'react'
import { useContext,useState,useEffect  } from 'react'
import { AllMovies } from './allMovies'


const movieCon=createContext();

function MovieContexApi({children}) {
    const [searchMovies,setSearchMovies]=useState('')
    const [movies, setMovies] = useState([])
    const [loading,setLoading] = useState(true)
    const [watchListMovies,setWatchListMovies] = useState([])
    const [userLoggedIn,setUserLoggedIn] = useState(false)
    // const [userEmail, setUserEmail] = useState('');
    // // useEffect(() => {
    // //     const userData = localStorage.getItem('loggedInUser');
    // //     if (userData) {
    // //       setUserEmail(userData);
    // //     }
    // //   }, []);
    const maxPage=1;
    const[page,setPage]=useState(maxPage)
    const HandleLoadingMore=()=>{
        if(page*9>=movies.length){
            setPage(1)
            setLoading(false)
            return
        }
        setPage(page+maxPage)
        setLoading(false)
    }
    useEffect(() => {
        async function moviesList() {
           const data = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=371aafbf`)
           const jsonData = await data.json()
           setMovies([ ...AllMovies,jsonData]);
           setLoading(false)
           //added few movies because api conations only one movie object
       }
       moviesList();
   }, [])

   const filteredMovies = searchMovies 
   ? movies.filter(movie =>{
    return(
       movie.Title.toLowerCase().includes(searchMovies.toLowerCase()) || movie.Year==searchMovies || movie.Genre.toLowerCase().includes(searchMovies.toLowerCase())
    )
   }
   )
   : movies;
    

  return (
   <movieCon.Provider value={{setSearchMovies,searchMovies,HandleLoadingMore,page,setPage,setLoading,loading,setMovies,movies,filteredMovies,userLoggedIn,setUserLoggedIn,setWatchListMovies,watchListMovies}} >
    {children}
   </movieCon.Provider>
  )
}

export const movieContext = () => {
  return useContext(movieCon)
}


export default MovieContexApi;