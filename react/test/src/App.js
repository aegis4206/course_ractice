import React, { useEffect, useState } from 'react';

import MyInformation from './components/MyInformation';
import MyLineChart from './components/MyLineChart'
import MyList from './components/MyList';

function App() {
  const [data, setData] = useState([]);
  const [fetchTime, setFetchTime] = useState(0);
  const [tableTime, setTableTime] = useState(0);
  const [chartTime, setChartTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  let flag = true;




  useEffect(() => {

    const startTime = performance.now();

    fetch("https://fka3fggsmgr0.fs-technology.com/data-1k.json")
      .then((response) => response.json())
      .then((json) => {
        if (flag) {
          const endTime = performance.now();
          const elapsedTime = (endTime - startTime).toFixed(0);
          setFetchTime(elapsedTime);
          flag = false;
        }
        setData(json);
        const TendTime = performance.now();
        const TelapsedTime = (TendTime - startTime).toFixed(0);
        setTotalTime(TelapsedTime)
      })
      .catch((error) => console.log(error));

  }, []);


  return (
    <div>
      <div className='container'>
        <MyInformation fetchTime={fetchTime} tableTime={tableTime} totalTime={totalTime} chartTime={chartTime}/>
        <MyList data={data} setData={setData} setTableTime={setTableTime}  />
        <MyLineChart data={data} setChartTime={setChartTime}  />
      </div>
    </div>

  );
}

export default App;
