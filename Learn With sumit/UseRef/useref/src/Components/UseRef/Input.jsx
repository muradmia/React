import React from 'react'
import Input from './Input'


const Input = ({type,placeholder},ref) => {
  return (
    <div>
        <input ref={ref} placeholder={placeholder} type={type} />
    </div>
  )
}

const forward = React.forwardRef(Input);

export default forward;