import React from 'react'
import './Home.css'
const Home = (props) => {
    
  return (
    <div style = {{backgroundColor:'blue', border:'2px solid gray',padding:'30px',color:'white',margin:'20px',width:'400px',height:'500px'}}>
        <h1 className="title">Hello this is Home</h1>
        <h3>Name : {props.name}</h3>
        <h3>Age : {props.age}</h3>
        <h3>Sub : {props.sub}</h3>
    </div>
  )
}

export default Home