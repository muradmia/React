import React, { useEffect, useState } from 'react'
import App from '../../App'
import Show_fakeData from './Show_fakeData'

const Fake = () => {

    const [fakedata,SetfakeData] = useState([])

    useEffect( () => {
        fetch('fakeData.json')
        .then( res => res.json())
        .then(data => SetfakeData(data))
    },[])

    console.log(fakedata);
  return (
    <div>
        <div className="card flex  mt-4">
            {/* <h1>Fake data length : {fakedata.length}</h1> */}
        {
            fakedata.map(singledata => <Show_fakeData
                singledata = {singledata}
            
            ></Show_fakeData>)
        }
        </div>
    </div>
  )
}

export default Fake