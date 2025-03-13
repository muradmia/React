import React from 'react'

const Assingment3 = () => {
    const greet = "hello"
    const product = {
        name : "Computer",
        price :1500,
        availability :"In Stock",
    }
  return (
    <div>
        <h1>{greet}</h1>
        <h1>Name : {product.name}</h1>
        <h1>Price : ${product.price}</h1>
        <h1>availability : {product.availability}</h1>
    </div>
    // <h1>hello world</h1>
  )
}

export default Assingment3