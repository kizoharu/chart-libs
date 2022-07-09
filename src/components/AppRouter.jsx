import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Error from '../pages/Error';
import { publicRoutes } from '../router';
import styles from './AppRouter.module.scss'


const AppRouter = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    regenerateData();
  }, []);

  function regenerateData() {
    const chartData = [];
    const abc = ['A', 'B', 'C', 'D', 'E', 'F']
    const rechartPieData1 = [
      { id: 'A', name: 'Group A', value: 0 },
      { id: 'B', name: 'Group B', value: 0 },
      { id: 'C', name: 'Group C', value: 0 },
      { id: 'D', name: 'Group D', value: 0 },
      { id: 'E', name: 'Group E', value: 0 },
      { id: 'F', name: 'Group F', value: 0 },
    ];

    for (let i = 10; i < 23; i++) {
      const value1 = Math.floor(Math.random() * (i + 3));
      const value2 = Math.floor(Math.random() * (i + 5));
      const value3 = Math.floor(Math.random() * (i + 7));
      const value4 = Math.floor(Math.random() * (i + 10));
      const userGain = Math.floor(Math.random() * (i*900) );
      const userLost = Math.floor(Math.random() * (i*500) );
      const userFit = Math.floor(Math.random() * (i*300) );
      const rechartData = {
        name: `${2000 + i}`,
        uv: userGain,
        pv: userLost,
        amt: userFit,
      };
      
      const tempRendABC = abc[randomInteger(0,5)];
      const rechartPieData2 = { id: `${tempRendABC}`, name: `${tempRendABC} ${i}`, value: userGain };


      rechartPieData1.map(item => {
        if(item.id === tempRendABC) return item.value += userGain
      })
      

      chartData.push({
        label: i,
        value1,
        value2,
        value3,
        value4,
        year: 2000 + i,
        userGain,
        userLost,
        googlePie: [(2000 + i).toString(), userGain],
        rechartData,
        rechartPieData1: [
          { id: 'A', name: 'Group A', value: 0 },
          { id: 'B', name: 'Group B', value: 0 },
          { id: 'C', name: 'Group C', value: 0 },
          { id: 'D', name: 'Group D', value: 0 },
          { id: 'E', name: 'Group E', value: 0 },
          { id: 'F', name: 'Group F', value: 0 },
        ],
        rechartPieData2,
      });
    }

    chartData[chartData.length-1].rechartPieData1 = rechartPieData1

    setData(chartData);
  }

  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  // console.log('data', data);

  return (
    <>
      <button onClick={regenerateData} className={[styles.reloadButton, 'material-icons'].join(' ')}>refresh</button>
      <Routes>
        {publicRoutes.map(route => 
          <Route 
            key={route.path}
            element={<route.element data={data} loadTable={true}/>} 
            path={route.path} 
          />
        )}

        <Route
          path="*"
          element={<Error />}
          // element={
          //   <main style={{ padding: "1rem" }}>
          //     <p>There's nothing here!</p>
          //   </main>
          // }
          // element={<Navigate to="/" replace />}
        />
      </Routes>
    </>
  );
};

export default AppRouter;
