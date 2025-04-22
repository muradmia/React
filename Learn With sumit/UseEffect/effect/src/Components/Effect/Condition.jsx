import React, { useState, useEffect } from 'react';

const ConditionalEffectExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 5) {
      console.log('Count is greater than 5!');
      alert('Count is greater than 5!');
    }
  }, [count]); // Runs whenever `count` changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ConditionalEffectExample;