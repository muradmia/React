import './App.css'
import Props from './Components/Props/Props'
import Product from './Components/Props/Product'
import Condition from './Components/Condition/Condition'
import Card from './Components/Card/Card'
import Weather from './Components/Condition/Weather'
import User from './Components/Condition/User'
import Greet from './Components/Condition/Greet'
import Icon from './Components/Icon/Icon'
import Button from './Components/Button/Button'
import UseState from './Components/UseState/UseState'
import Object from './Components/UseState/Object'
import Assingment1 from './Components/UseState/UseStateAssingment/Assingment1'
import Assingment3 from './Components/UseState/UseStateAssingment/Assingment3'
import Assingment2 from './Components/UseState/UseStateAssingment/Assingment2'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      {/* <h1>Person details</h1> */}
      {/* <Props name='Murad' age = {12}></Props>
      <br />
      <hr />
      <h1>Product Details</h1>
      <Product name = "Samsung" price={1200}></Product> */}
      {/* <Condition></Condition> */}
      {/* <Password isValid={true}/> */}
      {/* <Condition></Condition> */}
      {/* <Card></Card> */}
      {/* <Weather></Weather> */}
      {/* <User logge = {true} admin ={false}></User> */}
      {/* <Greet time ="morning"></Greet>
      <Icon size={30}></Icon>
      <Button></Button> */}
      {/* <UseState></UseState> */}
      {/* <Object></Object> */}
      <Assingment1></Assingment1>
      <hr />
      <Assingment2></Assingment2>
      <hr />
      <Assingment3></Assingment3>
      <hr />
    </div>
  )
}

export default App
