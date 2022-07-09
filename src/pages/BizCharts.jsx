// import { Table } from 'antd';
import React, { memo } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
// import {Chart, Axis, Tooltip, Geom} from "bizcharts";
import Arearangeline from '../charts/BizCharts/Arearangeline';
import Charts from '../charts/BizCharts/Charts';
import Donutrose from '../charts/BizCharts/Donutrose';
import Stacked from '../charts/BizCharts/Stacked';

// import { userDataInit } from '../data/userInitData';
// import { Chart, Line, Point, Tooltip } from "bizcharts";
import Table from '../components/UI/Table/Table';

// 

const BizCharts =  ({data, loadTable}) => {
  const width = 600;
  const height = 350;

  return (

    <div className='content'>
      <div className="charts">
        <div className="component">
          {/* {element} */}
          <Charts />
          {/* <Charts chartData={userDataInit(data)} width={width} height={height}/> */}
        </div>
        <div className="component">
          <Arearangeline />
          {/* <LineChart chartData={userDataInit(data)} width={width} height={height}/> */}
        </div>
        <div className="component">
          <Donutrose />
          {/* <PieChart chartData={userDataInit(data)} width={width} height={height}/> */}
        </div>
        <div className="component">
          <Stacked />
          {/* <MapChart chartData={userDataInit(data)} width={width} height={height}/> */}
        </div>
      </div>
  
      {loadTable ? <Table data={data}/> : null}
    </div>
  );
};

export default BizCharts;