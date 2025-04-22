import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Effect from './Components/Effect/Effect'
import FetchDataExample from './Components/Effect/Fetch'
import WindowResizeExample from './Components/Effect/Window'
import ConditionalEffectExample from './Components/Effect/Condition'

function App() {
  const [show, setShow] = useState(true)

  return (
    <>
      {/* <h1>Hello World</h1>
      <h2>Hello baby I am back</h2> */}
      {/* <div>
        {show && <Effect></Effect>}
      </div>
      <p>
        <button type ='button' onClick={()=>setShow((prevShow)=> !prevShow)}>{show ? 'Hide Post' : 'Show post'}</button>
      </p> */}
      {/* <FetchDataExample></FetchDataExample> */}
      {/* <WindowResizeExample></WindowResizeExample> */}
      <ConditionalEffectExample></ConditionalEffectExample>
      
    </>
  )
}

export default App
