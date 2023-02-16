import React from 'react'
import { useState } from 'react';
import { nanoid } from 'nanoid'
import './List.css'

const List = () => {
  let [input, setInput] = useState('');
  let [item, setItem] = useState([]);
  let [flag,setFlag] = useState('');
  let [done,setDone] = useState(0)

  let inputValue = (e) => {
    console.log(e.target.value)
    setInput(e.target.value)
  }

  let add = () => {
    // setItem([input, ...item])
    setItem([{'id':nanoid(),'todo':input,'done':false},...item])
    console.log(item)
  }

  let rem = (e) => {
    // setItem(item.filter((a)=>{
    //   return a!==e.target.name;
    // }))
    // console.log(item)
    setItem(item.filter((a) => {
      return a.id !== e.target.parentNode.id;
    }))
    console.log(e.target.parentNode.id)

  }

  let focusHandler= (e)=>{
    setFlag(e.target.id)
    
    console.log(e.target.id)
  }

  let chkHandler = (e)=>{
    console.log(e.target.parentNode.parentNode.id)

    setItem(item.map((i)=>{
      if(i.id===e.target.parentNode.parentNode.id)
      if(i.done) {
        i.done=false
        setDone(done-1)
      }
      else if(!i.done) {
        i.done=true
        setDone(done+1)
      }
      return i
      
    }))
    
    
  }
  let remove = ()=>{
    console.log(item)
    setItem(item.filter((a) => {
      return a.done !== true;
    }))
  }

  return (
    <div className='list'>
      <input type='text' onChange={inputValue}></input>
      <button onClick={add}>新增</button>

      {item.map((i) => {
        return (
          <div style={{backgroundColor:flag===i.id? '#ddd':'white'}} key={i.id} id={i.id}  onMouseEnter={focusHandler} onMouseLeave={()=>setFlag('')}>
            <span>
              <input type='checkbox' onChange={chkHandler} defaultChecked={i.done}></input>
              {i.todo}
            </span>
            {flag===i.id? <button onClick={rem} >刪除</button>:''}
          </div>
        )
      })}
      {/* <span>
          <input type='checkbox' id='box'></input>
          <label htmlFor='box'>123</label>
        </span> */}

      <div>
        <span>
          <span>已完成{done}/</span>全部{item.length}
        </span>
        <button onClick={remove}>刪除已完成</button>
      </div>
    </div>
  )
}


export default List