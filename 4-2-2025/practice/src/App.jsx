import { useState } from 'react'
import Nav from './components/Nav/Nav'
import Header from './components/Header-Secion/Header'
import Main from './components/Main-section/Main'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Nav></Nav>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
