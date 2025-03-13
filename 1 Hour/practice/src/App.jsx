import { useState } from 'react'
import './App.css'
import FirstHour from './Components/FirstHour/FirstHour'
import Header from './Components/FirstAssingment/Header'
import MainContent from './Components/FirstAssingment/MainContent'
import Footer from './Components/FirstAssingment/Footer'
import Assingment2 from './Components/Assingment2/Assingment2'
import Expression from './Components/Practice/Expression'
import Assingment3 from './Components/Assingment3/Assingment3'
import List from './Components/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer> */}
      {/* <Assingment2></Assingment2> */}
      {/* <Expression></Expression> */}
      {/* <Assingment3></Assingment3> */}
      <List></List>
    </div>
  )
}

export default App
