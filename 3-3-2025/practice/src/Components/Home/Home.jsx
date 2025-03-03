import React from 'react'

const Home = ({singledata}) => {
  return (
    <div>
        <div className="card bg-gray-800 w-30 h-50 text-white">
        <h1>Name : {singledata.name}</h1>
        {/* <img src={singledata.image} alt=""/> */}
        {/* <h1>Age : {singledata.age}</h1> */}
            {/* <h1>Age : {singledata.profession}</h1> */}
            <h1>Age : {singledata.email}</h1>
            <h1>Phone : {singledata.phone}</h1>
        </div>
   
    </div>
  )
}

export default Home