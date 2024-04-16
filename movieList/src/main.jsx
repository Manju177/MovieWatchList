import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import  "aos";
import "aos/dist/aos.css";
import {BrowserRouter} from 'react-router-dom'
import MovieContexApi from './Components/MovieContexApi.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <MovieContexApi>
    <App />
    </MovieContexApi>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
)
