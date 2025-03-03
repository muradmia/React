import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import { BrowserRouter, Route,Routes } from 'react-router'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Nav from './Components/Navbar/Nav'
import Blog from './Components/Navbar/Blog'
import About from './Components/Navbar/About'
import Product from './Components/Navbar/Product'

const router = createBrowserRouter([
  {path :'/' ,element:<Home></Home>},
  {path :'/blog' ,element:<Blog></Blog>},
  {path :'/about' ,element:<About></About>},
  {path :'/product' ,element:<Product></Product>}

]);
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <BrowserRouter>
      <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/" element={<Home/>}/> */}
          {/* <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter> */}
   <RouterProvider router={router}/>
  </> 
  )
}

export default App
