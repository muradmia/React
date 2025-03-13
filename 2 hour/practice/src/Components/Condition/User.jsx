import React from 'react'

const User = ({logge,admin}) => {
    if(logge && admin){
        return <h1>wellcome admin</h1>
    }else{
        <h1>Hello</h1>
    }
};

export default User