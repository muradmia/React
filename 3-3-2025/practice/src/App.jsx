import { useState } from 'react'
import './App.css'
import Api from './Components/Fake_Api/Api'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Api></Api>
    </>
  )
}

export default App
