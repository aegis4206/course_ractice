import React, { useState } from 'react'
import { Container, Header, Form, Image, Button } from 'semantic-ui-react'


function NewPost(props) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [topicName, settopicName] = useState('')
    const [file, setFile] = useState(null)

    const previewUrl = file ? URL.createObjectURL(file) : "https://react.semantic-ui.com/images/wireframe/image.png";

    return (
        <Container>
            <Header>發表貼文</Header>
            <Form>
                <Image src={previewUrl} size='medium'
                    floated='left'
                ></Image>
                <Button basic color='black' as='label' htmlFor='post-image'
                    
                >上傳貼文圖片</Button>
            {/* htmlFor='post-image' 需與下方id一致才能觸發下方input */}
            <Form.Input type='file' id='post-image' style={{ display: 'none' }}
                onChange={(e) => {
                    setFile(e.target.files[0])
                }}>
            </Form.Input>
            <Form.Input placeholder='輸入貼文標題'
                value={title}
                onChange={(e) => setTitle(e.target.value)}>
            </Form.Input>
            <Form.TextArea placeholder='輸入貼文內容'
                value={content}
                onChange={(e) => setContent(e.target.value)}>
            </Form.TextArea>
            <Form.Dropdown placeholder='選擇貼文主題'
                options={
                    props.topics.map((i) => {
                        return {
                            text: i.name,
                            value: i.name
                        }
                    })
                }
                selection
                value={topicName}
                onChange={(e, { value }) => {
                    settopicName(value)
                }}
            // selection滿版變寬
            >
            </Form.Dropdown>
            <Form.Button>送出</Form.Button>
        </Form>
        </Container >
    )
}
export default NewPost