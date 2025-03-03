import React, { useEffect, useState } from 'react'
import Home from '../Home/Home'

const Api = () => {
    const [fakedata,SerFakedata] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => SerFakedata(data))
    },[])
  return (
    <div>
        <div className="card items-center mx-auto bg-gray-300 justify-between w-[60%]">
            {/* <h1>Fake api length {fakedata.length}</h1> */}
        {
        fakedata.map(singledata => <Home
            singledata={singledata}
            ></Home>)
        }
        </div>
    </div>
  )
}

export default Api