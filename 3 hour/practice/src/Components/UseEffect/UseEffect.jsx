import React, { useEffect, useState } from 'react'
import ShowData from './ShowData'

const UseEffect = () => {

    const [value,setValue] = useState(1)
    const [data,setData] = useState([])

    const [something,setSomething] = useState(1)
        useEffect(()=>{
            console.log("call useEffect");
            document.title = 'Increment ${value}'
        },[])

    useEffect(()=>{
        async function Getdata(){
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();

            if(data && data.length) setData(data);
        }
        Getdata();
    },[])
    
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={()=>setValue(value+1)}>Change</button>
        {/* {console.log(data)} */}

        {
            data.map(data => <ShowData data={data}></ShowData>)
        }
    </div>
  )
}

export default UseEffect