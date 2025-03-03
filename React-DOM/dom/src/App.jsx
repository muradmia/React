import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import {createBrowserRouter,RouterProvider} from 'react-router'
import {createBrowserRouter,RouterProvider} from 'react-router'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Blog from './Components/Blog/Blog'
import Product from './Components/Product/Product'
import Navbar from './Components/Navbar/Navbar'

const router = createBrowserRouter([
  {path : '/', element :<Home></Home>},
  {path : '/about', element :<About></About>},
  {path : '/blog',element:<Blog></Blog>},
  {path : '/product',element:<Product></Product>},
]);
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      {/* <h1>Hello world!</h1> */}
      <Navbar></Navbar>
      <RouterProvider router={router}/>
     
    </>
  )
}

export default App
