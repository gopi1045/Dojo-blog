import {useEffect, useState} from 'react'

const useFetch=(url)=>{

    const [data, setData] = useState(null)
    const [isLoading,setIsLoading]=useState(true)
    const [error,setError]=useState(null)
    useEffect(()=>{
        const abortController=new AbortController()
      setTimeout(()=>{
          const fetchData=async()=>{
            try{
            const res=await fetch(url,{signal:abortController.signal})
            if(!res.ok)
            {
              throw Error("Couldn't fetch data from the resource")
            }
            const resdata=await res.json()
            setData(resdata)
            setIsLoading(false)
            }
            catch(e)
            {
                if(e.name==='AbortError')
                { 
                    console.log(e.message)
                }
                else
                {
                    setError(e.message)
                    isLoading(false) 
                }
            }
          }
          fetchData()
        },1000)

        return ()=>abortController.abort()
    },[url])

    return {data,isLoading,error}
}

export default useFetch