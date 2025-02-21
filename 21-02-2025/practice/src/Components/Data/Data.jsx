import React from 'react'

const Data = (props) => {
    console.log(props);
    const alear = ()=>{
        alert('hey');
    }
  return (
    <div>
        {/* <div className="show">
            <h1>Show the length of the product {props.arr.length}</h1>
            <h1>Name : {props.arr[0].name}</h1>
            <h1>price : {props.arr[0].price}</h1>
        </div> */}
        <h1>Name : {props.product.name}</h1>
        <h1>Name : {props.product.price}</h1>
        <button onClick={alear}>Alert</button>
    </div>
  )
}

export default Data