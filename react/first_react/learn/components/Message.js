import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import Detail from './Detail'

export default function Message() {
    const msgObj=[
        {id:'01',tit:'消息1'},
        {id:'02',tit:'消息2'},
        {id:'03',tit:'消息3'}
    ]
  return (
    <div>
        {msgObj.map((i)=>{
            return (
                <Link key={i.id} to={`/home/message/detail/${i.id}/${i.tit}`}>{i.tit}</Link>
                //傳遞params路徑參數 /${i.id}/${i.tit}
                // <Link key={i.id} to={`/home/message/detail/?id=${i.id}&tit=${i.tit}`}>{i.tit}</Link>
                //傳遞search路徑參數 /?id=${i.id}&tit=${i.tit}
            )
        })
        
        }

        <Routes>
            <Route path='detail/:id/:tit' element={<Detail />}></Route>
            {/* :id/:tit接收路徑params參數並命名  search參數無需接收 正常註冊路由即可path='detail'*/}
            {/* <Route path='detail' element={<Detail />}></Route> */}

        </Routes>
    </div>
  )
}
