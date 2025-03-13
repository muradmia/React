import React from 'react'

const Button = () => {
    const handleClick= () =>{
        console.log(Math.round(Math.random() * 10));
    }
    const copy = () => {
        console.log('Dont copy my content')
        alert('dont do this')
    }
    const mouse = ()=>{
        alert('dont move')
        console.log('This is how its work');
    }
    return(
    <div>
        <button onClick={handleClick}>Click</button>
        <p onCopy={copy}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed alias aut quod omnis nam soluta excepturi eum illo harum doloremque.</p>
        <p onMouseMove={mouse}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nam doloribus quas commodi a molestiae, facilis voluptatem fugiat vel illo.</p>
    </div>
    )
};

export default Button