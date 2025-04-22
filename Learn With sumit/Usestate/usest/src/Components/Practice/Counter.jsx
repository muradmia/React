import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
    const handle = (e) =>{
        setCount(count+1)
    }
  return (
    <div>
        <h1 className='text-6xl text-blue-700'>Counter : {count}</h1>
        <button className='mt-10 p-2 w-10 mr-4 bg-amber-500 text-2xl align-center' onClick={handle}>+</button>
        <button className='p-2 text-white w-10 bg-red-600 text-2xl' onClick={(e) => setCount(count-1)}>-</button>
    </div>
  )
}

export default Counter