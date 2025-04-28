import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usereduce from './Components/Usrd'
import Counter from './Components/Counter'
import Complex from './Components/Complex'
import GetPost from './Components/Post/GetPost'
import GetPost2 from './Components/Post/GetPost2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Hello world</h1> */}
      {/* <Counter></Counter> */}
      {/* <Complex></Complex> */}
      {/* <GetPost></GetPost> */}
      <GetPost2></GetPost2>
    </>
  )
}

export default App
