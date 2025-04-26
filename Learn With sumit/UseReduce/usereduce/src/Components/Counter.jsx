import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state,action)=>{
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        default:
            return state;
    }
}
const Counter = () => {
    const [count,dispatch]  = useReducer(reducer,initialState);
  return (
    <div>
        <h2>Count: {count}</h2>
        <button type="button" onClick={()=>dispatch('increment')}>Increment</button>
        <button type = "button" onClick={()=>dispatch('decrement')}>Decrement</button>
        <button>Reset</button>
        
    </div>
  )
}

export default Counter