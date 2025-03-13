import React from 'react'

const Expression = () => {
    const name = 'Murad'
    const add = (a,b)=>{
        return a+b;
    }
    const odd = (a,b)=>{
        return a-b;
    }
    const mulitpy = (a,b)=>{
        return a*b;
    }
  return (
    <div>
        <h1>My name is {name}</h1>
        <h2>{add(2,3)}</h2>
        <h2>{odd(2,3)}</h2>
        <h2>{mulitpy(10,3)}</h2>
    </div>
  )
}

export default Expression