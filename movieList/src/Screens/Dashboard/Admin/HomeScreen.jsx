import React from 'react'
import Layout from '../../../Layout/Layout'
import MoviesList from '../../../Components/MoviesList'

function HomeScreen({children}) {
  return (
    <Layout>
          <div className='container mx-auto min-h-screen px-2 mb-6'>
           <MoviesList/>
          </div>
    </Layout>
  )
}

export default HomeScreen