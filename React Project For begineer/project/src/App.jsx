import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter/Counter'
import Todo from './Components/Todo/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <h1>Hell world!</h1> */}
      {/* <Counter></Counter> */}
      <Todo></Todo>
    </div>
  )
}

export default App
