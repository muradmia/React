import React from 'react'
// import './Api.css'
const Api = (props) => {
  return (
    <div>
        <div className="card text-green-200 bg-gray-300 " style = {{width :'300px',height:'300px',border:'2px solid black'}}>
            <p className="text-">Name : {props.singledata.name}</p>
            <p>Id : {props.singledata.id}</p>
            <p>Email : {props.singledata.email}</p>

        </div>
        
    </div>
  )
}

export default Api