import { UserContext } from "./Assingment";
import { useContext,useState } from "react";

import React from 'react'

const UpdateUser = () => {

    const name = useContext(UserContext)
    const [newName,setName] = useState('')

    const Up = e=>{
        e.preventDefault()
        if(newName.trim()){
            name.updateUser(newName)
            setName('')
        }
    }
  return (
    <div>
        <h2>Update user</h2>
        <form onSubmit={Up}>
            <input type="text" value={newName} onChange={e =>setName(e.target.value)}/>
            <button type="submit">Update</button>
        </form>
    </div>
  )
}

export default UpdateUser