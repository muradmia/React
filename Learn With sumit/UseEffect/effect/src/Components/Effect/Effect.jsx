import React, { useEffect } from 'react'

const Effect = () => {
    const [count, setCount] = React.useState(0)
    const [date, setDate] = React.useState(new Date())

    useEffect(()=>{
        document.title = `Clicked ${count} times`;
    },[count]);

    useEffect(()=>{
        const int = setInterval(tick, 1000);
        return () => {
            clearInterval(int);
        }
    },[]);

    const addClick = ()=>{
        setCount(count + 1);
    }

    const tick = () => {
        setDate(new Date());
    }


  return (
    <div>
        <h1>Count : {count}</h1>
        <h1>Time : {date.toLocaleTimeString()}</h1>
        <p>
            <button type='button' onClick={addClick}>Click</button>
        </p>
    </div>
  )
}

export default Effect