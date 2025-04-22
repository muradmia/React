import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0); // State for count
  const [name, setName] = useState(''); // State for name
  const [isVisible, setIsVisible] = useState(true); // State for visibility toggle

  const incrementCount = () => {
    setCount(count + 1);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <h1>useState Practice</h1>

      {/* Counter Example */}
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>

      {/* Input Example */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Your Name: {name}</p>

      {/* Toggle Visibility Example */}
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Message
      </button>
      {isVisible && <p>This is a toggleable message!</p>}
    </>
  );
}

export default App;