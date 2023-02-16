import React from 'react'
import { nanoid } from 'nanoid'

const Header = ({ input, data }) => {
    const inputValue = (e) => {
        if(e.keyCode!==13) return;
        input([{'id':nanoid(),'note': e.target.value, "done": false },...data])

    }


    return (
        <input onKeyUp={inputValue} type='text' placeholder='請輸入事項'></input>
    )
}

export default Header