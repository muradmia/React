import React, { useReducer } from 'react'

const initialState ={
    counter:0,
    counter2:0,
};
const reducer = (state,action)=>{
    switch(action.type){
        case 'increment':
            return {counter : state.counter+action.value};
        case 'decrement':
            return {counter : state.counter-action.value};
        default:
            return state;
    }
}


const Complex = () => {
    const [count,dispatch]= useReducer(reducer,initialState);
  return (
    <div>
        <h1>count : {count.counter}</h1>
        <button type='button' onClick={()=>dispatch({type:'increment',value:1,})}>Increment by 1</button>
        <button type='button' onClick={()=>dispatch({type : 'decrement',value:1,})}>Increment</button>
    </div>
  )
}

export default Complex