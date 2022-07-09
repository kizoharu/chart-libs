import React from 'react';
import AreaRechart from '../charts/Recharts/AreaRechart';
import BarRechart from '../charts/Recharts/BarRechart';
import LineRechart from '../charts/Recharts/LineRechart';
import PieRechart from '../charts/Recharts/PieRechart';
import Table from '../components/UI/Table/Table';
import { userDataInit } from '../data/userInitData';

const Recharts = ({data, loadTable}) => {
  const width = 600;
  const height = 350;
  const innerRadius = 90;
  const outerRadius = 120;
  const margin={
    top: 20,
    right: 30,
    left: 0,
    bottom: 10,
  }

  return (
    <div className='content'>
      <div className="charts">
        <div className="component">
          <BarRechart 
            chartData={userDataInit(data)} 
            width={width} 
            height={height}
            margin={margin}
          />
        </div>
        <div className="component">
          <LineRechart 
            chartData={userDataInit(data)} 
            width={width} 
            height={height}
            margin={margin}
          />
        </div>
        <div className="component">
          <PieRechart 
            chartData={userDataInit(data)} 
            width={width} 
            height={height} 
            innerRadius={innerRadius} 
            outerRadius={outerRadius}
          />
        </div>
        <div className="component">
          <AreaRechart 
            chartData={userDataInit(data)} 
            width={width} 
            height={height}
            margin={margin}
          />
        </div>
      </div>
    
      {loadTable ? <Table data={data}/> : null}
    </div>
  );
};

export default Recharts;