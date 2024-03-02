import React, { useEffect, useState } from 'react'
import { useContext
 } from 'react';
import { ContextProvider } from '../App';

function Home() {
    const {user} = useContext(ContextProvider);

    
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = async () => {
        // Simulating Fetching data
        await new Promise((res:any) => setTimeout(res, 3000))
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    },[])

    return (
    <React.Fragment>
    <div>Home, Greetings {user.name}</div><br/>
    <div>{loading ? "loading..." : "Data set!"}</div>
    &nbsp;
    <button onClick={() => {
        
        }}>Click</button>
         
    </React.Fragment>
  )
}

export default Home