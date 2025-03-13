import React from 'react'
const UseRef = () => {
    const inp = React.useRef(null)
    // console.log(inp);
    const focusInput=()=>{
        inp.current.focus();
        inp.current.value = "murad";
    }
  return (
    <div>
        <input type="text" ref={inp}/>
        <button onClick={() => focusInput()}>focus</button>
    </div>
  )
}

export default UseRef