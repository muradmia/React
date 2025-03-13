import React, { useContext } from 'react'
import { CountContext } from '../../App'

const context_api = (count) => {
  const countState = useContext(CountContext)
  return (
    <div>context_api - {countState}</div>
  )
}

export default context_api