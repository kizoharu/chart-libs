import React from 'react';
import BarChart from '../charts/ChartJS/BarChart';
import BubbleChart from '../charts/ChartJS/BubbleChart';
import LineChart from '../charts/ChartJS/LineChart';
import PieChart from '../charts/ChartJS/PieChart';
import Table from '../components/UI/Table/Table';
import { userDataInit } from '../data/userInitData';

const ChartJS = ({data, loadTable}) => {
  const width = 600;
  const height = 350;

  return (
    <div className='content'>
      <div className="charts">
        <div className="component">
          <BarChart chartData={userDataInit(data)} />
        </div>
        <div className="component">
          <LineChart chartData={userDataInit(data)} />
        </div>
        <div className="component pie">
          <PieChart chartData={userDataInit(data)} width={width} height={height}/>
        </div>
        <div className="component">
          <BubbleChart chartData={userDataInit(data)} width={width} height={height}/>
        </div>
      </div>
      
      {loadTable ? <Table data={data}/> : null}
    </div>
  );
};

export default ChartJS;