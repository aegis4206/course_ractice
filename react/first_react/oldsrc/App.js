import React from 'react'
import Count from './containers/Count'
import Person from './containers/Person'

export default function App() {
    return (
        <div>
            {/* <Count store={store}/> */}
            {/* index.js裡的provider提供store */}
            <Count/>
            <Person/>
        </div>
    )
}
