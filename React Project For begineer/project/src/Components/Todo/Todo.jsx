import React, { useState } from 'react'
import './Todo.css'
const Todo = () => {
    const [todo,setTodo] = useState([])
    const [input,setInput] = useState('')


    const handleSubmit  = () => {

         setTodo((todo) =>{
            return todo.concat({
                text:input,
                id:Math.floor(Math.random()*10)
            })
        });
        setInput("");
    };
  return (
    <div>
        <div className="container">
            <input type="text" placeholder='new todo' value={input} onChange={e => setInput(e.target.value)}/>
            {/* <input type="text" placeholder='new todo' value={input} onChange={e => setInput(e.target.value)}/> */}

            <button onClick={handleSubmit } type='submit'>Submit</button>

            <ul>
                {
                    todo.map(({text,id}) =>(
                        <li className="todo" key={id}>
                            <span>{text} {id}</span>
                            <button className='close' onClick={() => setTodo(todo.filter((todo) => todo.id !== id))}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Todo