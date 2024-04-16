import React from 'react'
import Layout from '../../../Layout/Layout'
import { Link } from 'react-router-dom'
import { CiLogin } from "react-icons/ci";

function Login() {
  return (
    <Layout>
        <div className='container flex items-center mx-auto px-2 my-24 flex-col'>
          <div className='w-full flex flex-col gap-2 align-center 2xl:w-2/5 flex-col p-14 md:w-3/4 bg-blue-950 rounded-lg border-border'>
              <img src="./watchlist.png" className="w-full h-12 object-contain" alt='logo'/>
              <div className='text-sm w-full'>
                <label className='text-border font-semibold'>Email</label>
                <input
                  required
                  type={'Email'}
                  placeholder='Enter your email address'
                  className='w-full text-sm mt-2 p-4 border border-border rounded text bg-blue-950'/>
              </div>
              <Link to="/dashboard"
               className='bg-red-900 flex items-center w-32 transistions hover:bg-blue-950 flex-rows gap-2 text-white p-3 rounded-lg '
               >
                <CiLogin/> <span >Login</span>
              </Link>
          </div>
        </div>
    </Layout>
  )
}

export default Login