import React,{useEffect} from 'react'
import Movies from './Movies'
import { AllMovies } from './allMovies'

function MoviesList() {
    const [movies,setMovies] = React.useState([])

  
    useEffect(() => {
        async function moviesList(){
            const data=await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=371aafbf`)
            const jsonData=await data.json()
            setMovies([jsonData,...AllMovies]);
            //added few movies because api conations only one movie object
            console.log(jsonData)
        }
        moviesList();
    }, [])
    console.log(movies)
  return (
    <div className='my-16'>
        <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
       {
          movies.slice(0,8).map((movie,index)=>{
            return(
                <Movies key={index} movie={movie}/>
            )
          })
       }
        </div>
    </div>
  )
}

export default MoviesList