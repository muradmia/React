import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './Components/Data/Data'
import Useeffect from './Components/UseEffect/Useeffect'

function App() {
  // const arrays =['murad','Tanvir','jadu','modu']
  // const arr = [
  //   { name : 'nokia',price:1200},
  //   { name : 'Samsung',price:1200},
  //   { name : 'Itel',price:1200},
  // ];
  // const [price, setPrice] = useState(15);
  // const increasehandle = () =>{
  //     newPrice = setPrice(price+1)
  //     setPrice(newPrice)
  // }
  // const decreasehandle = () =>{
  //   newPrice = setPrice(price-1)
  //   setPrice(newPrice)
  // }
  return (
  <>
      {/* {
  //     arr.map(product => <Data 
  //       product = {product}
  //     >
  //     </Data>)
  //    } */}
  {/* //   <h1>price : {price}</h1>
  //   <button onClick={increasehandle}>Count</button> &nbsp; &nbsp; &nbsp;
  //   <button onClick={decreasehandle}>Minus</button> 

  //   <h2>price : {price}</h2>
  //   <h3>price : {price}</h3>
  //   <h4>price : {price}</h4> */}
  <Useeffect></Useeffect>
    </>
  )
}

export default App
