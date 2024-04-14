import React from 'react'
import NavaBar from './NavBar/NavaBar'
import Footer from './Footer/Footer'

function Layout({children}) {
  return (
    <>
    <div className='bg-slate-950 text-white'>
        <NavaBar/>
        {children}
        <Footer/>
    </div>
    </>
  )
}

export default Layout