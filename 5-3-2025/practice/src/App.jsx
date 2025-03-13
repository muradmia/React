import { useState } from 'react'
import './App.css'
import Context from './Components/Context/Context'

export const CountContext = React.createContext()

function App() {
   const [count, setCount] = useState(0)

  return (
    <div>
        <CountContext.Provider value = {count}>
          <Context></Context>
          <button onClick={() => setCount((count) => count+1)}> count is - {count}</button>
        </CountContext.Provider>
        {/* <Context></Context>
        <button onClick={() => setCount((count) => count+1)}> count is - {count}</button> */}
        <h1>Hello</h1>
    </div>
  )
}

export default App
