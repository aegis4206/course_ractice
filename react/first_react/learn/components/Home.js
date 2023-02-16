import React from 'react'
import { NavLink, Routes, Route ,Navigate } from 'react-router-dom'
import Message from './Message'
import News from './News'

export default function Home() {
  return (
    <div>
      <div className='list-group'>
        <NavLink className='list-group-item' to='/home/message'>Message</NavLink>
        <NavLink className='list-group-item' to='/home/news'>News</NavLink>
      </div>
      <Routes >
        <Route path='message/*' element={<Message/>}></Route>
        <Route path="news" element={<News/>}></Route>
        <Route path='*' element={<Navigate to='/home/message'/>}></Route>
      </Routes>
    </div>

  )
}
