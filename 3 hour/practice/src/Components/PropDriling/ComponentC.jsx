import React from 'react'
import { Data, Data1 } from '../../App'
import { useContext } from 'react'
const ComponentC = () => {
    const username = useContext(Data)
    const age = useContext(Data1)

  return (
    <h1>My Name is { username } an I am { age } years old</h1>
  )
}

export default ComponentC