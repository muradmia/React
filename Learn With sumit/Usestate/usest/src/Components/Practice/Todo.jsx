import React, { useState } from 'react'

const Todo = () => {
    const [todo,setTodo] = useState([]);
    const [input,setInput] = useState('');

    const add = () =>{
        if(input == ''){
            alert('please enter a todo')
        }else{
            const newTodo={
                id: Date.now(),
                text : input
            };
            setTodo([...todo,newTodo]);
            setInput('');
        }
    }


    const remove = (id)=>{
        setTodo(todo.filter(item => item.id !== id));
    }
  return (
    <div>
        <h1>write some for Add todo.</h1>
        <input className='bg-gray-100 rounded-xl mt-4' type='text' value={input} onChange={(e) => setInput(e.target.value)}/><div class="d-none d-sm-block">
            
        </div>
        <button onClick = {add}>Add Todos</button>
    
        <div className="show_todo">
            {todo.map((item) =>(
                <div key={item.id}>
                    {/* <h1>Here is my Todo</h1> */}
                    <span key={item.id}>{item.text}  Date : {item.id}</span>
                    <button onClick={()=>remove(item.id)}>Delete</button>
                </div>
            ))};
        </div>
    </div>
  )
}

export default Todo