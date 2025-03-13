import React from 'react'

const Condition = () => {
    const [isspecial,setIsSpecial] = React.useState(false);
    const togglebutton = () => {
        setIsSpecial(!isspecial);
    }

  return (
    <div>
        <button onClick={togglebutton} className="p-3 m-10 rounded-md border hover:border-red-300 cursor-pointer">
            {isspecial ? 'Make is special' : 'make it normal'}
        
        </button>
        <div className="p-4 border-2 w-50">This is a {isspecial ? 'special' : 'normal'} style...</div>
        {/* <h1>{isspecial ? 'special' : 'normal'}</h1> */}
    </div>
  )
}

export default Condition