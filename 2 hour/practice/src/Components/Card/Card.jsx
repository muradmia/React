import React from 'react'

const Card = () => {
    const items =['apple','bananna','grap','mango']
  return (
    <div>
        <h1>Card</h1>
        {items.length > 0 && <h2>You have {items.length} in your card</h2>}

        {
        items.map((item) =>(
            <h1>{item}</h1>
        ))
        }
    </div>
  )
}

export default Card