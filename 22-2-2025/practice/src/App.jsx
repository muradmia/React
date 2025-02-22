import { useState } from 'react'
import './App.css'
import Show_fakeData from './components/FakeData/Show_fakeData'
import Fake from './components/FakeData/Fake'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Fake></Fake>
    {/* <Show_fakeData></Show_fakeData> */}
    </>
  )
}

export default App
