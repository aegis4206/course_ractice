import { useState, useEffect, useRef } from 'react'

import Edit from './components/Edit'
import List from './components/List'
import './index.css'

import firebaseApp from '../../utils/firebase'
import { getFirestore, getDocs, collection, setDoc, doc, deleteDoc } from "firebase/firestore";

async function fetchData(setData) {
    // const res = await getDocs(collection(getFirestore(firebaseApp), "Note"));
    // console.log (res)
    // const data = await res.json();
    // setData(data)
    // const res = await fetch('網址')
    // const data = await res.json()
    let data = [];
    const querySnapshot = await getDocs(collection(getFirestore(firebaseApp), "Note"));
    querySnapshot.forEach((doc) => {
        // data = [{ 'id': doc.id, 'data': doc.data() }, ...data]
        data = [doc.data(), ...data]
    });
    data.sort((a, b) => b.date.localeCompare(a.date) ||  b.time.localeCompare(a.time)); 
    setData(data)
}

async function delData(currentDelData) {
    await deleteDoc(doc(getFirestore(firebaseApp), "Note", currentDelData));
}

async function updateData(currentData) {
    // await fetch('網址', {
    //     method: "PUT",//POST
    //     headers: {
    //         'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify({ Data })
    // })

    try {
        await setDoc(doc(getFirestore(firebaseApp), "Note", currentData.id), {
            id: currentData.id,
            note: currentData.note,
            date: currentData.date,
            time: currentData.time
        })
    }
    catch (e) {
        console.error("Error adding document: ", e);
    }
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

    // useEffect(() => {
    //     if (!sumbittingStatus.current) return;
    //     updateData(currentData).then(data => sumbittingStatus.current = false)
    // }, [data])
    //資料變動時將資料更新上API

    return (
        <div className='app'>

            <Edit add={setData} sumbittingStatus={sumbittingStatus} update={updateData} />
            <List listData={data} deleteData={setData} sumbittingStatus={sumbittingStatus} delData={delData} />
        </div>
    )

}
export default Home