import React, { useRef } from 'react'
import axios from 'axios'


export default function Search(props) {
    const input = useRef('');

    const getApi = () => {
        const keyWord = input.current.value
        props.setFirst(false)
        props.setIsLoading(true)
        props.setErr('')

        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            response => {
                props.setIsLoading(false)
                props.getData(response.data.items)
            },
            error => { 
                props.setIsLoading(false);
                props.setErr(error.message) ;
            }
        )
    }
    return (
        <div className='card'>
            <div className='card-body'>
                <p>搜尋Github用戶</p>
                <input ref={input} type='text' placeholder='輸入用戶帳號'></input>
                <button onClick={getApi}>搜尋</button>
            </div>
        </div>
    )
}
