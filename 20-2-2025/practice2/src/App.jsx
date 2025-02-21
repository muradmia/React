import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import Card from './components/Card/Card'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div style={{display:'flex'}}>
      {/* <h1>hello</h1> */}
      {/* <Home></Home> */}
      <Card name="murad"></Card>
      <Card name="Sadia"></Card>
    </div>
  )
}

export default App
