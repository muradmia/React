import React, { useState } from 'react'

const Assingment1 = () => {
    const [count,setCount] = useState(0)
    const Increment =()=>{
        setCount(count+1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={Increment}>Increment</button>
    </div>
  )
}

export default Assingment1