import { useState, useEffect, useRef } from 'react'

import Edit from './components/Edit'
import List from './components/List'
import './index.css'

async function fetchData(setData) {
    const res = await fetch('網址')
    const data = await res.json()
    setData(data)
}

async function updateData(Data) {
    await fetch('網址', {
        method: "PUT",//POST
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ Data })
    })
}

const Home = () => {
    const [data, setData] = useState([]);
    //data為備忘錄清單 setData(值)更新畫面
    const sumbittingStatus = useRef(false);

    useEffect(() => {
        // fetch('網址')
        // .then(res => res.json())
        // fetch完成後將結果轉成json
        // .then(data=>{
        //     console.log(data)
        //     資料處理
        // })
        fetchData(setData)
        //功能與asyns function 相同
    }, [])
    //初始化會自動執行一次 當例如[data]發生變化時執行該功能 空格為不指定僅初始化執行

    useEffect(() => {
        if(!sumbittingStatus.current) return;
        updateData(data).then(data=> sumbittingStatus.current=false)
    }, [data])
    //資料變動時將資料更新上API

    return (
        <div className='app'>

            <Edit add={setData} sumbittingStatus={sumbittingStatus}/>
            <List listData={data} deleteData={setData} sumbittingStatus={sumbittingStatus}/>
        </div>
    )

}
export default Home