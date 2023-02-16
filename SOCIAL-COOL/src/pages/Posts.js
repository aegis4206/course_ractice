import { Grid } from "semantic-ui-react";
import React from 'react'

import Topics from "../components/Topic";

function Posts(props) {
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={3}>
                    <Topics topics={props.topics}/>
                </Grid.Column>
                {/* 同boostrap Row>Colum切分畫面 BS為12等分 Semantic為16等分 */}
                <Grid.Column width={10}>貼文列表</Grid.Column>
                <Grid.Column width={3}>空白</Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Posts;