import React, { use, useEffect ,useRef} from 'react'

const Form = () => {

    const inputRef = useRef(null);
    useEffect(() =>{
        //component did load
        inputRef.current.focus();
    }),[];
  return (
    <div>
        <p>
            <input ref={inputRef} type="text" placeholder='Enter something'/>
        </p>
    </div>
  )
}

export default Form;