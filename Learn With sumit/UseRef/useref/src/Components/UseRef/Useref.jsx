import React from 'react'

const Useref = () => {
    const inputRef = React.useRef(null);
    const handlefocus = () => {
        inputRef.current.focus();
    }
  return (
    <div>
        <h1>Hello UseRef </h1>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handlefocus}>Focus Input</button>
    </div>
  )
}

export default Useref