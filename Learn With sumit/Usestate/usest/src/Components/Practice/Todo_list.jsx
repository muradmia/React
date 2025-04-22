import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h1>My Todo List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo, index) => (
          <li 
            key={index} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              margin: '8px 0',
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#888' : '#000'
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(index)}
              style={{ marginRight: '10px' }}
            />
            {todo.text}
            <button 
              onClick={() => deleteTodo(index)}
              style={{ marginLeft: 'auto', color: 'red' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;