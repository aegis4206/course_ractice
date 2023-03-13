import React, { Component } from 'react'

import store from '../redux/store'
import { createIncrementAsyncAction, createIncrementAction, createDecrementAction } from '../redux/count_action'

export default class Count extends Component {

    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
            //利用setState更新空值調用render
        })
    }

    increment = () => {
        const { value } = this.selectNumber
        // const {count} = this.state
        // this.setState({count:count+value*1})
        store.dispatch(createIncrementAction(value * 1))
    }
    decrement = () => {
        const { value } = this.selectNumber
        // const {count} = this.state
        // this.setState({count:count-value*1})
        store.dispatch(createDecrementAction(value * 1))
    }
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        // const {count} = this.state
        // if(count%2 !==0){
        //     this.setState({count:count+value*1})
        // }
        const count = store.getState()
        if (count % 2 !== 0) {
            store.dispatch(createIncrementAction(value * 1))
        }
    }
    incrementAsync = () => {
        const { value } = this.selectNumber
        // const { count } = this.state
        // setTimeout(() => { this.setState({ count: count + value * 1 }) }, 500)
        // setTimeout(() => { store.dispatch(createIncrementAction(value*1)) }, 500)
        store.dispatch(createIncrementAsyncAction(value * 1,500))
    }
    render() {
        return (
            <div>
                <h1>當前求和為: {store.getState()}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>當前求和為奇數在加</button>&nbsp;
                <button onClick={this.incrementAsync}>異步加</button>
            </div>
        )
    }
}
