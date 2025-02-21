import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div>
        <div className="card" style={{width:'200px', height:'250px',border:'2px solid gray',margin:'0 0 0 20px'}}>
            <h1>Well come to my card</h1>
            <h2>Name : {props.name}</h2>
            <h3>Age : {}</h3>
            <h4>Profession : {}</h4>
        </div>
    </div>
  )
}

export default Card