import React from 'react'

const Item=({update,data,item})=> {
    function remove(){
        update(data.filter((i)=>{
            return i.id!==item.id
        }))
        
    }

  return (
    <div>
        <input type='checkbox' defaultChecked={item.done}></input>
        {item.note}
        {console.log(item)}
        <button onClick={remove}> 刪除</button>
    </div>
  )
}

export default Item