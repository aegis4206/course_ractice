import React, { useState } from 'react'


import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import './App.css'

const App=()=> {
    let [data,setData] = useState([])

   
  return (
    <div className='list'>
        <Header input={setData} data={data}/>
        <List update={setData} data={data}/>
        <Footer update={setData} data={data}/>
    </div>
  )
}
export default App
