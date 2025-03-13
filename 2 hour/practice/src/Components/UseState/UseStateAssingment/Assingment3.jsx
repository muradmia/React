import React, { useState } from 'react'

const Assingment3 = () => {
    const [profile,setProfile] = useState(
        {
            name:'Murad',
            age : 20,
        }
    )

    const Name =()=>{
        setProfile({...profile,name:"sadia"})
    }

    const Age =()=>{
        setProfile({...profile,age:19})
    }
  return (
    <div>
        <h1>Name : {profile.name}</h1>
        <button onClick={Name}>Update Name</button>
        <h1>Name : {profile.age}</h1>
        <button onClick={Age}>Update Age</button>
    </div>
  )
}

export default Assingment3