import React from 'react'
import { Link } from 'react-router'
const Nav = () => {
  return (
    <div>
      <navbar>
        <div className="nav-wrapper flex items-center text-center  bg-gray-400 w-[100%]  h-10">
          <div className="left-side w-[100%]">
            <a href="/">Home</a>
            <a href="about" to="/about">About</a>
            <a href="blog">Blog</a>
            <a href="Product">Product</a>
          </div>
        </div>
      </navbar>
    </div>
  )
}

export default Nav