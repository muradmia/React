import React, { useEffect, useState } from 'react'


const Useeffect = () => {

const [count,setCount] = useState(0);

useEffect(()=>{
        alert('hello')
},[])

useEffect(()=>{
    alert('Change')
},[count  ])
const updateCounter = () =>{
   newCounter = setCount(count+1);
   setCount = newCounter;
}
  return (
    <div>
        <h1>Steps :{count}</h1>
        <button onClick={updateCounter}>Counter</button>
    </div>
  )
}

export default Useeffect