import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav/Nav'
import From from './Components/Nav/From/From'


function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <From></From>
      <h1>Hello</h1>
    </div>
  )
}

export default App
