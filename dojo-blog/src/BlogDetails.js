import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useFetch from './useFetch';

const BlogDetails = () => {
    const {id}=useParams();
    const history=useHistory();

    const {data:blog,isLoading,error}=useFetch("http://localhost:8000/blogs/"+id)
    const handleDelete=async()=>{
        const res=await fetch("http://localhost:8000/blogs/"+id,
        {
          method:'DELETE'
        })
        if(res.ok)
        {
            console.log("Deleted "+id)
            history.push("/")
        }
      }
  return (
    <div className='blog-details'>
        {error && <h2>Oops! Couldn't fetch data from the resources</h2>}
        {isLoading && <h2>Loading...</h2>}
        {blog && 
        <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>
                {blog.body}
            </div>
            <button onClick={handleDelete}>Delete</button>
        </article>
        }
    </div>
  )
}

export default BlogDetails