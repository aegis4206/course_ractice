import React, { useEffect, useRef, useState } from 'react'

export default function MyList(props) {
    const mounted = useRef();
    const { data, setData, setTableTime } = props
    const [input, setInput] = useState('')
    const [res, setRes] = useState()


    function delHandler(id) {
        const newArr = data.filter((item) => {
            return item.IDX !== id
        })
        setData(newArr)
    }


    function tableHandler() {
        if (input) {
            const table = res.map((item) => (
                <tr key={item.IDX}>
                    <td>{item.IDX}</td>
                    <td>{item.CONTEXID}</td>
                    <td>{item.PIECEID}</td>
                    <td>{item.TIMETAG}</td>
                    <td>{item.UCL}</td>
                    <td>{item.LCL}</td>
                    <td>{item.VALUE}</td>
                    <td onClick={() => delHandler(item.IDX)} className='btn btn-outline-dark'>刪除</td>
                </tr>
            ))
            return table
        }

        const table = data.map((item) => (
            <tr key={item.IDX}>
                <td>{item.IDX}</td>
                <td>{item.CONTEXID}</td>
                <td>{item.PIECEID}</td>
                <td>{item.TIMETAG}</td>
                <td>{item.UCL}</td>
                <td>{item.LCL}</td>
                <td>{item.VALUE}</td>
                <td onClick={() => delHandler(item.IDX)} className='btn btn-outline-dark'>刪除</td>
            </tr>
        ))
        return table




    }

    let startTime = performance.now();
    useEffect(() => {
        if (mounted.current === false) {
            mounted.current = true;
            /*componentDidMount */
        }
        else {
            const endTime = performance.now();
            const elapsedTime = (endTime - startTime).toFixed(0);
            setTableTime(elapsedTime)
            /* componentDidUpdate */

        }
    }, [props.data])


    useEffect(() => {
        const res = data.filter(item => {
            return item.CONTEXID===input || item.PIECEID===input
        })
        setRes(res)
    }, [input])

    return (
        <div>
            <h2>Indicator Data</h2>
            <p>搜尋<input type='txt' placeholder='ContextID或PieceID' onChange={e => setInput(e.target.value)}></input></p>
            <div className='overflow-y-auto' style={{ height: '600px' }}>
                <table className='table table-hover table-striped' >
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>ContextID</th>
                            <th>PieceID</th>
                            <th>TimeTag</th>
                            <th>UCL</th>
                            <th>LCL</th>
                            <th>Value</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='table-group-divider '>
                        {tableHandler(res)}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
