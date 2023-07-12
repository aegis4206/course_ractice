import React, { useState } from 'react'

import store from '../redux/store'

export default function Count() {
// const [count,setCount] = useState(0)
const [num,setNum] = useState(1)



  return (
    <div>
        <p>點擊次數{store.getState()}</p>
        <select onChange={e=>setNum(e.target.value)}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
        </select>
        <button onClick={()=>store.dispatch({type:'in',data:num*1})}>+</button>
        <button onClick={()=>store.dispatch({type:'de',data:num*1})}>-</button>
    </div>
  )
}
