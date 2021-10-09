import React from 'react'
import { connect } from 'react-redux'
import { decrementCounter, incrementCounter } from '../../Redux/counter/counterActions'

const Button = (props) => {
    return (
        <div>
            <button onClick = {props.incrementCounter}> + </button>
            <button onClick = {props.decrementCounter}> - </button>
        </div>
    )
}
var actions = {
    incrementCounter,
    decrementCounter
}
export default connect(null,actions)(Button)
