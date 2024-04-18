import React, { useState } from 'react'
import Layout from '../../../Layout/Layout'
import { useNavigate } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { movieContext } from '../../../Components/MovieContexApi';

function Login() {
  const [email,setEmail]=useState("")
  const [error,setError]=useState(false);
  const{setUserLoggedIn}=movieContext()
  const navigate=useNavigate()
  const handleChange = (e) => {
    setEmail(e.target.value)
  }
  const handleLogin = (user) => {
    if(user){
    localStorage.setItem('loggedInUser', user);
    setUserLoggedIn(true)
    navigate('/movies')
    const storedWatchlist = localStorage.getItem(`watchlist_${user}`);
    if (storedWatchlist) {
      setWatchlist(JSON.parse(storedWatchlist));
    }
  }else{
    localStorage.removeItem('loggedInUser');
    navigate('/login')
    toast.error(' Enter your email address', {
      position: "top-center",
      autoClose: 5000,

      });
    setError(true)
  }
};
  return (
    <Layout loginPage={true}>
      <ToastContainer /> 
        <div className='container flex items-center mx-auto px-2 my-24 flex-col'>
          <div className='w-full flex flex-col gap-2 align-center 2xl:w-2/5 flex-col p-14 md:w-3/4 bg-blue-950 rounded-lg border-border'>
              <img src="./watchlist.png" className="w-full h-12 object-contain" alt='logo'/>
              <div className='text-sm w-full'>
                <label className='text-border font-semibold'>Email</label>
                <input
                  required
                  type={'Email'}
                  placeholder='Enter your email address'
                  className='w-full text-sm mt-2 p-4 border border-border rounded text bg-blue-950'
                  onChange={handleChange}
                  />
              </div>
              <div
               className='bg-red-900 flex items-center w-32 transistions hover:bg-blue-950 flex-rows gap-2 text-white p-3 rounded-lg '
               >
                <CiLogin/> <button onClick={() => handleLogin(email)} >Login</button>
 
              </div>
          </div>
        </div>
    </Layout>
  )
}

export default Login