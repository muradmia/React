import React, { useRef } from 'react'

const Focus = () => {
    const inp = useRef(null)
    const focus=()=>{
        if(inp.current){
            inp.current.focus();
        }
    }
  return (
    <div>
        <input type="text" ref={inp} />
        <button onClick={()=>focus()}>Focus</button>
    </div>
  )
}

export default Focus