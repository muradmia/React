import React, { useEffect, useState } from 'react'

const Assingment1 = () => {

    const [data,setData] = useState([])

    useEffect(() =>{
        const GetData = async () =>{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const da = await response.json()
            setData(da)
        }
        GetData();
    },[])
    console.log(data);
  return (
    <div>
        <h1>data :{data.length}</h1>

        {
            data.map(data => (
                <div key={data.id}>
                    <li>Title : {data.title}</li>
                    <li>Id :{data.id}</li>
                    <li>Body :{data.body}</li>
                </div>
            ))
        }
    </div>
  )
}

export default Assingment1