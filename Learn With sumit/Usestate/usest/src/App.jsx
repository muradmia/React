import { useState } from 'react'
import './App.css'
import Input from './Components/Usestate/Input/Input';
import Counter from './Components/Practice/Counter';
import Todo from './Components/Practice/Todo';
import TodoList from './Components/Practice/Todo_list';

function App() {
  const [example, setExample] = useState('');
  const [warning, setWarning] = useState('');
  const [count,setCount] = useState(0);

  const handle = (e) =>{
    const value = e.target.value;
    const warning = value.includes('.js') ? 'you need to learn js' : null;

    setExample(value);
    setWarning(warning);
  }

  const handle1  = () =>{
    // setCount(count+1);
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      {/* <h1>Vite + React</h1> */}
      {/* <form action="">
        <input type="text" onChange={handle} value={example} />
        <h1>{example}</h1>
        <h1>{warning || 'Good job'}</h1>

        <h1>{count}</h1>
        <button onClick={handle1}>Add</button>
      </form> */}
      {/* <Input></Input> */}
      {/* <Counter></Counter> */}
      <Todo></Todo>
      {/* <TodoList></TodoList> */}
    </>
  )
}

export default App
