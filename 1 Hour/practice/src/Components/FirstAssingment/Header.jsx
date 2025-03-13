import React from 'react'

const Header = () => {
  return (
    <div>
        <div style ={{display :'flex', justify:'center',items:'center'}} className="header">
            <div className="logo"><h1>Welcome to my web site</h1></div>
            <div className="items">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Header