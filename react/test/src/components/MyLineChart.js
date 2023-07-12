import React, { useEffect, useRef } from 'react';

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const MyLineChart = (props) => {
  const mounted = useRef();
  const data = props.data; // 從props中取得數據





  let startTime = performance.now();
  useEffect(() => {
    if (mounted.current === false) {
      mounted.current = true;
      /*componentDidMount */
    }
    else {
      const endTime = performance.now();
      const elapsedTime = (endTime - startTime).toFixed(0);
      props.setChartTime(elapsedTime)
      /* componentDidUpdate */

    }
  }, [data])

  return (
    <>
      <h2>Indicator</h2>
      <div style={{ width: "100%", height: "500px" }}>
        <ResponsiveContainer>
          <LineChart
            width={100} // 圖表寬度
            height={400} // 圖表高度
            data={data} // 數據
            margin={{ top: 5, right: 0, left: 0, bottom: 5 }} // 圖表邊距
          >
            <CartesianGrid />
            <XAxis dataKey="PIECEID" />
            {/* <XAxis dataKey="TIMETAG" /> */}
            <YAxis domain={[52, 57]} tickCount={100} tickFormatter={tick => tick.toFixed(2)} />
            {/* 設置Y軸上下限 tickCount設置間距 */}
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="VALUE" stroke="#8884d8" name='值' />
            <Line type="monotone" dataKey="UCL" stroke="#ff4a00" name='上限' />
            <Line type="monotone" dataKey="LCL" stroke="#ff4a00" name='下限' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default MyLineChart;