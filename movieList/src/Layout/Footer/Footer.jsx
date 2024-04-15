import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Footer() {

    const Links=[
        {
            title:'Company',
            links:[
                {
                    name:'Home',
                    link:'/'
                },
                {
                    name:'Movies',
                    link:'/movies'
                },
            ]
        },
        {
            title:'Categories',
            links:[
                {
                    name:'Action',
                    link:'#'
                },
                {
                    name:'Romantic',
                    link:'#'
                },
                {
                    name:'Drama',
                    link:'#'
                },
                {
                    name:'Historical',
                    link:'#'
                },

            ]
        },
        {
            title:'My Account',
            links:[
                {
                    name:'Dashboard',
                    link:'/dashboard'
                },
                {
                    name:'WatchList',
                    link:'/watchList'
                },
                {
                    name:'Profile',
                    link:'/profile'
                },


            ]
        }
    ]
  return (
    <div className='bg-dry py-4 bprder=t-2 border-black'>
        <div className='container mx-auto px-2'>
            <div className='grid grid-cols-3 md:grid-cols-12 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between'>
                {Links.map((link,index)=>(
                 <div key={index} className='col-span-3 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0'>
                    <h3 className='text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5'>{link.title}</h3>
                     <ul className='text-sm flex flex-col space-y-3'>
                        {
                            link.links.map((item,index)=>(
                                <li key={index} className='flex items-baseline'>
                                    <Link to={item.link} className='text-gray-500 hover:text-red-600'>{item.name}</Link>
                                </li>
                            ))
                        }
                     </ul>
                 </div>
                ))}
                
                <div className='pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg :col-span-3'>
                    <Link to="/">
                        <img src='/watchlist.png' alt='watchlist' className='w-2/4 object-contain h-12'/>
                    </Link>
                    <p className=' text-gray-600 leading-7 text-sm text-border mt-3'>
                        You can go out in a good movie and look bad aswell
                    </p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer