import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffect from './Components/UseEffect/UseEffect'
import ShowData from './Components/UseEffect/ShowData'
import Assingment1 from './Components/Assingment/Assingment1'
import ComponentA from './Components/PropDriling/ComponentA'
import { createContext } from 'react'
import UserProfile from './Components/UseContextAssingment/UserProfile'
import { UserProvider } from './Components/UseContextAssingment/Assingment'
import UpdateUser from './Components/UseContextAssingment/UpdateUser'
import UseRef from './Components/UseRef/UseRef'
import Timer from './Components/UseRef/Timer'

export const Data = createContext();
export const Data1 = createContext();
function App() {
  const [count, setCount] = useState(0)
   const name="Murad";
   const age = 22;
  return (
    <div>
      {/* <UseEffect></UseEffect> */}
      {/* <ShowData></ShowData> */}
      {/* <Assingment1></Assingment1> */}

      {/* <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA></ComponentA>
        </Data1.Provider>
      </Data.Provider>
      

      <UserProvider>
        <UserProfile></UserProfile>
        <UpdateUser></UpdateUser>
      </UserProvider> */}


      <UseRef></UseRef>
      <Timer></Timer>
     
      
    </div>
  )
}

export default App
