import React from 'react'
import { useParams,useLocation } from 'react-router-dom';

// import qs from 'querystring' 路徑search參數使用

const data = [
    { id: '01', content: '你好' },
    { id: '02', content: '我很好' },
    { id: '03', content: '謝謝' },
]

export default function Detail() {
    const { id, tit } = useParams();
    //useParams()為取用路徑Params參數
    // const { search } = useLocation();
    //useLocation()為取用路徑Search參數
    // console.log(qs.stringify(search))
    //qs.stringify()將?id='id'&tit='tit'轉成 ?id:id,tit:tit 
    //需直接用qs.parse(search.slice(1))截掉問號後將上述轉成物件陣列

    const a= data.find((i)=>{
        return i.id===id
    })
    return (
        <div>
            <div>ID:{id}</div>
            <div>tit:{tit}</div>
            <div>{a.content}</div>
        </div>
    )
}


