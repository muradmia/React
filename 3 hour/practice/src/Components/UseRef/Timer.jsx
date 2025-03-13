import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
    const [count,setCount]= useState(0)
    const interval = useRef(null)

    useEffect(()=>{
        interval.current = setInterval(()=>{
            setCount(prevCount => prevCount+1)
        },1000)

        return () =>{
            clearInterval(interval.current);
        };
    },[])

  return (
    <div>
        <h1>Timer : {count} Second</h1>
        <button onClick={()=>clearInterval(interval.current)}>Stop  Time</button>
    </div>
  )
}

export default Timer