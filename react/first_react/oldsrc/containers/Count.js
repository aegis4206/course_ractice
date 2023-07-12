import React from 'react'
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../redux/actions/count_action'


function Count(props) {
    function add() {
        props.add(1)
    }
    function rem() {
        props.rem(1)
    }
    function asyn() {
        props.asyn(1, 500)
    }
    return (
        <div>
            <h2>當前求和為{props.sumAll}</h2>
            <button onClick={add}>點我加1</button>
            <button onClick={rem}>點我減1</button>
            <button onClick={asyn}>異步加1</button>
        </div>
    )
}

export default connect(state => { console.log(state); return ({ sumAll: state.sum }) }, {
    add: createIncrementAction ,
    rem: createDecrementAction,
    asyn: createIncrementAsyncAction,
})(Count)