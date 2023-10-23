import React from 'react'
import axios from 'axios';

export default function test(req, res) {

    // axios.get('https://openapi.twse.com.tw/v1/opendata/t187ap14_L')
    //     .then(response => {
    //         // 处理返回的数据
    //         // console.log(response.data);
    //         res.status(200).json(result.json())
    //     })
    //     .catch(error => {
    //         // 处理错误
    //         console.error(error);
    //     });

    fetch('https://openapi.twse.com.tw/v1/opendata/t187ap14_L')
        .then(response => {
            // 检查请求是否成功
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // 解析返回的JSON数据
            return response.json();
        })
        .then(data => {
            // 处理返回的数据
            console.log(data);
            res.status(200).json(data)
        })
        .catch(error => {
            // 处理错误
            console.error('Fetch error:', error.message);
        });


}
