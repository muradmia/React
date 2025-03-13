import React from 'react'
import Invalid from './Invalid';

const Weather = (value) => {
    let temp  =12;
    if (temp < 15){
        return <Invalid></Invalid>
    }else if(temp >= 15 && temp <= 25){
        return <h1>Its nice outside</h1>
    }else if(temp > 25){
        return <h1>Its hot outside</h1>
    }
}

export default Weather