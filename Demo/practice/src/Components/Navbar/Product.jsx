import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router'

const Product = () => {
  return (
    <div>
        <Nav></Nav>
        Product
        <Link to="/">go</Link>
    </div>
  )
}

export default Product