import React, { useState } from 'react'
import { LuAArrowDown } from 'react-icons/lu';

const Assingment2 = () => {
  const [todos,setTodos] = useState([]);
  const [inputValue,setInputValue] = useState('');

  const Handle = e =>{
      e.preventDefault()

      if(inputValue.trim()){
        setTodos([...todos,inputValue])
        setInputValue('')
      }
  };

  const change =(e)=>{
    setInputValue(e.target.value)
  }
return (
    <div>
        <h1>Todo list</h1>
        <form onSubmit={Handle}>
          <input type="text" value={inputValue} onChange={change} placeholder='Add a new todos'/>
          <button type='submit'>Add Todo</button>
        </form>

      <ul>
        {
          todos.map((todo,index) =>(
            <li key ={index}>{todo}</li>
          ))
        }
      </ul>
      <h1>lengtn of todes {todos.length}</h1>
    </div>
  )
}
export default Assingment2