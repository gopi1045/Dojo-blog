import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
const Create = () => {
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const [author,setAuthor]=useState('gopi')
    const [isLoading,setIsLoading]=useState(false)
    const history=useHistory();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const blog={title,body,author}
        setIsLoading(true)
        const res=await fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(blog)
        })
        if(res.ok)
        {
            setIsLoading(false)
            console.log('Post successful')
            history.push("/");
        }
    }
    return (
    <div className='create'>
        <h2>Add New Blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <label>Blog body:</label>
            <textarea value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
            <label>Blog Author:</label>
            <select value={author} onChange={e=>setAuthor(e.target.value)}>
                <option value="gopi">Gopi</option>
                <option value="gova">Gova</option>
            </select>
            <button type="submit">{isLoading? "Loading ":"Add Blog"}</button>
            
            
        </form>
    </div>
  )
}

export default Create;