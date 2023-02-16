import React, { useState } from 'react'

import Search from './components/Search'
import List from './components/List'

const App = () => {
    const [data, setData] = useState(['']);
    const [first,setFirst] = useState(true);
    const [isLoading,setIsLoading] = useState(false);
    const [err,setErr] = useState('');

    return (
        <>
            <div className='container'>
                <Search getData={setData} setFirst={setFirst} setIsLoading={setIsLoading} setErr={setErr}/>
                <List data={data} first={first} isLoading={isLoading} err={err}/>
            </div>
        </>

    )
}
export default App