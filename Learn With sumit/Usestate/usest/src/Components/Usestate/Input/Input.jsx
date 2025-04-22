import React, { useState } from 'react'

const Input = () => {
    const [example,setExample] = useState('')
    const [warning,setWarning] = useState(false)

  return (
    <div>
        <h1>Input example</h1>
        <input type="text" value={example} onChange={(e)=>setExample(e.target.value)} />

        <h1>{example}</h1>
        {warning ? (<h1>you need to learn more</h1>) : (<h1>good luck</h1>)}
        <button onClick={()=>setWarning(!warning)}>{warning ? 'Login' : 'Logout'}</button>
        
        <button onClick={()=>setWarning(!warning)}>Toggle</button>
    </div>
  )
}
export default Input