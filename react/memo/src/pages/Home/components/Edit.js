import { useState } from "react"
import { v4 } from 'uuid'



const Edit = ({ add, sumbittingStatus ,update }) => {

    let [note, setNote] = useState('')

    function noteChange(e) {
        setNote(e.target.value)
    }

    let [date, setDate] = useState('')

    function dateChange(e) {
        setDate(e.target.value)
    }

    let [time, setTime] = useState('')

    function timeChange(e) {
        setTime(e.target.value)
    }

    function addItem() {
        sumbittingStatus.current = true
        let Today = new Date();
        let idv = v4()
        date = date===''? `${Today.getFullYear()}-${(Today.getMonth()+ 1)<10?'0'+(Today.getMonth()+ 1):(Today.getMonth()+ 1)}-${Today.getDate()<10?'0'+Today.getDate():Today.getDate()}` : date;
        time = time===''? `${Today.getHours()<10?'0'+Today.getHours():Today.getHours()}:${Today.getMinutes()<10?'0'+Today.getMinutes():Today.getMinutes()}` : time;
        let currentData = {
            'id': idv, 
            'note':note,
            "date": date, 
            "time": time}
        update(currentData).then(()=> sumbittingStatus.current = false)
        add(function (prevData) {
            return [{ id: idv, note, date, time }, ...prevData].sort((a, b) => b.date.localeCompare(a.date) ||  b.time.localeCompare(a.time))
        })
    }

    return <div>
        <h1>留言板</h1>
        <p>記事 : </p>
        <input type='text' value={note} onChange={noteChange}></input>
        <p>日期 : </p>
        <input type='date' value={date} onChange={dateChange}></input>
        <p>時間 : </p>
        <input type='time' value={time} onChange={timeChange}></input>
        <button onClick={addItem} className="add">新增</button>
    </div>
}
export default Edit