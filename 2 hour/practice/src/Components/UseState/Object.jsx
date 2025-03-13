import React, { useState } from 'react'

const Object = () => {
    const [movie,setMovie] = useState({
        title :"Fast 5",
        ratings : 7,
    })

    const [obj,Setobj] = useState([
        {id:1,title:"spider-man",rating:3},
        {id:2,title:"super-man",rating:5},
    ])

    const change = () =>{
        // const copyMovie={
        //     ...movie,
        //     ratings:5
        // }
        setMovie({...movie,ratings:5});
    }
    const Name = () =>{
        Setobj(obj.map(m => m.id == 2 ? {...obj,title:"john wick 1"} : m))
    }
  return (
    <div>
        <h1> Movie {movie.title}</h1>
        <p> Rating : {movie.ratings}</p>
        <button onClick={change}>Rating change</button>
        <hr />
        {
            obj.map(m=>(
                <h1>{m.title}</h1>
                // <h1>{m.title}</h1>
                // <h1>{m.ratings}</h1>
            ))
        }
    <button onClick={Name}>Change Name</button>
    </div>
  )
}

export default Object