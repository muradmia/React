import React, { useEffect, useState } from 'react'
import Api from './Api'

const Fetch = () => {
    const [alldata,setAllData] = useState([])
    // console.log(alldata);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setAllData(data))
    },[])
  return (
    <div>
        <div className="show text-gray-300">
            <h1>Length : {alldata.length}</h1>
        {
            alldata.map(singledata => <Api singledata = {singledata}></Api>)
        }
        </div>
    </div>
  )
}

export default Fetch