import React from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {
    const {data:blogs,isLoading,error}=useFetch("http://localhost:8000/blogs")

  return (
    <div className="home">
        {error && <h2>Oops! Couldn't fetch data from the resources</h2>}
        {isLoading && <h2>Loading...</h2>}
        {blogs&&<BlogList blogs={blogs} title="All Blogs" />}
    </div>
  )
}

export default Home