import React from 'react'

const Greet = (props) => {
    return props.time == "morning" ? (<h1>Hello Morning</h1>) : (<h1>Hello baby how are you</h1>);
}

export default Greet