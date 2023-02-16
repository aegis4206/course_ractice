import React from 'react'
import { List } from "semantic-ui-react";


function Topics(props) {

    return (
        <List animated selection>
            {props.topics.map((data)=>{
                return (
                    <List.Item key={data.name}>
                        {data.name}
                    </List.Item>
                )

            })}
        </List>
    )
}
export default Topics
