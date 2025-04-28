import React, { useEffect, useReducer } from 'react'

const initialState = {
    loading:true,
    posts:[],
    error:null,
}

const reducer =(state,action)=>{
    switch(action.type){
        case 'Success':
            return{
                loading:false,
                posts:action.result,
                error:null,
            }
        case 'Error':
            return{
                loading:false,
                posts:[],
                error:'There is an error',
            }
        default:
            return state;
    }
}
const GetPost2 = () => {
    const [state,dispatch] = useReducer(reducer,initialState);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => res.json())
        .then(data => {
            dispatch({type:'Success',result:data})
        })
        .catch(() =>{
            dispatch({type:'Error'})
        })
    })
  return (
    <div>
        {state.loading ? 'loading...' : state.posts.title}
        {state.error || null}
    </div>
  )
}

export default GetPost2