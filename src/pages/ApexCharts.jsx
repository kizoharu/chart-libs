import React from 'react';
import AreaChart from '../charts/ApexCharts/AreaChart';
import BarChart from '../charts/ApexCharts/BarChart';
import LineChart from '../charts/ApexCharts/LineChart';
import PieChart from '../charts/ApexCharts/PieChart';
import Table from '../components/UI/Table/Table';
import { userDataInit } from '../data/userInitData';

const ApexCharts = ({data, loadTable}) => {
  const width = 600;
  const height = 350;

  return (
    <div className='content'>
      <div className="charts">
        <div className="component">
          <BarChart chartData={userDataInit(data)} width={width} height={height}/>
        </div>
        <div className="component">
          <LineChart chartData={userDataInit(data)} width={width} height={height}/>
        </div>
        <div className="component">
          <PieChart chartData={userDataInit(data)} width={width} height={height}/>
        </div>
        <div className="component">
          <AreaChart chartData={userDataInit(data)} width={width} height={height}/>
        </div>
      </div>
    
      {loadTable ? <Table data={data}/> : null}
    </div>
  );
};

export default ApexCharts;