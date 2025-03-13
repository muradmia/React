import React from 'react'

const List = () => {
    const numbers =[1,2,3,4,5,6,7]
  return (
    <div>
        {numbers.map(number =>(
            <ul key={numbers}>
                <li>{number}</li>
            </ul>
        ))}
    </div>
  )
}

export default List