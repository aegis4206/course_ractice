import React, { useRef } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../redux/actions/person'

function Person(props) {
  const a = useRef()
  const b = useRef()

  function addPerson() {
    const name = a.current.value
    const age = b.current.value
    console.log(name)
    console.log(age)
    const personObj = { id: nanoid(), name, age }
    console.log(personObj)
    props.add(personObj)
  }
  //試試看()=>

  return (
    <div>
      <hr></hr>
      <h2>我是Person組件，上面總和為{props.sumAll}</h2>
      <input ref={a} type='text' placeholder='輸入名字'></input>
      <input ref={b} type='text' placeholder='輸入年齡'></input>
      <button onClick={addPerson}>添加</button>
      <ul>
        {
          props.peopleArr.map(i => {
            return <li key={i.id}>姓名{i.name}--年齡{i.age}</li>
          })
        }
      </ul>

    </div>
  )
}
export default connect(
  state => ({ peopleArr: state.people ,sumAll:state.sum}),
  {
    add:createAddPersonAction
  }
)(Person)