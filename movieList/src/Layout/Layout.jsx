import React from 'react'
import NavaBar from './NavBar/NavaBar'
import Footer from './Footer/Footer'

function Layout({children,loginPage}) {
  return (
    <>
    <div className='bg-slate-950 text-white'>
        <NavaBar loginPage={loginPage}/>
        {children}
        <Footer/>
    </div>
    </>
  )
}

export default Layout