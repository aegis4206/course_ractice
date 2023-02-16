import React from 'react'

import Item from './Item'

const List=({update,data})=> {
  return (
    <>
        {data.map((i)=>{
            return (
                <Item update={update} item={i} data={data} />
            )
        })}
        
    </>
  )
}
export default List