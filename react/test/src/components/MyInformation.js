import React from 'react'

export default function MyInformation(props) {
    return (
        <div>
            <h2>Information</h2>

            <table className='table table-hover table-striped' >
                <thead>
                    <tr>
                        <th>JSON Data Read Time</th>
                        <th>Table Build Time</th>
                        <th>Chart Draw Time</th>
                        <th>Page Complete Read Time</th>
                    </tr>
                </thead>
                <tbody className='table-group-divider '>
                    <tr>
                        <td>{props.fetchTime}</td>
                        <td>{props.tableTime}</td>
                        <td>{props.chartTime}</td>
                        <td>{props.totalTime}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
