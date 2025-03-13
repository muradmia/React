import React, { useState } from 'react'

const UseState = () => {
    const [count,setCount] = useState(0)
    const [array,setArray] = useState(['apple','banna','orange','mango'])
    // setCount = 10;
    console.log(count);
    const increment = () => setCount(count+1)
    const deccrement = () => setCount(count-1)
    const add =() => setArray([...array,"murad"])
    const remove = () =>{
        setArray(array.filter((f) => f != "apple"));
    }
    const update = () =>{
        setArray(array.map(f => f == 'apple' ? 'Ap' : f));
    }
    
   return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={deccrement}>-</button>
<br />
        {
            array.map((f) =>(
                <a href="">{f}</a>
            ))
        }

        <button onClick={add}>Add new friend</button>
        <button onClick={remove}>Remove</button>
        <button onClick={update}>Update</button>

    </div>
  )
}

export default UseState