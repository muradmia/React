import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{display: 'flex',width:'100%'}}>
      <Home name='Murad' age='21' sub='Programming'></Home>
      <Home name='Tanvir' age='22' sub='Math'></Home>
      <Home name='Piyash' age='21' sub='Accounting'></Home>
      <Home name='Parvej' age='23' sub='Math'></Home>
    </div>
    </>
  )
}

export default App
