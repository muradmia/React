import React from 'react'
import ValidPass from './ValidPass'
import Invalid from './Invalid'

const Condition = () => {
    let isValid = true
        return isValid ? <ValidPass></ValidPass> : <Invalid></Invalid>;
}

export default Condition