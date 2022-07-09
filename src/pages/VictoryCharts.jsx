import React from 'react';
import BarChatr from '../charts/VictoryCharts/BarChatr';
import LineChart from '../charts/VictoryCharts/LineChart';
import PieChart from '../charts/VictoryCharts/PieChart';
import Table from '../components/UI/Table/Table';

const VictoryCharts = ({data, loadTable}) => {
  const width = 600;
  const height = 350;

  return (
    <div className='content'>
      <div className="charts">
        <div className="component">
          <BarChatr/>
          {/* <BarChart chartData={userDataInit(data)} width={width} height={height}/> */}
        </div>
        <div className="component">
          <LineChart/>
          {/* <LineChart chartData={userDataInit(data)} width={width} height={height}/> */}
        </div>
        <div className="component">
          <PieChart/>
          {/* <PieChart chartData={userDataInit(data)} width={width} height={height}/> */}
        </div>
        <div className="component">
          {/* <MapChart chartData={userDataInit(data)} width={width} height={height}/> */}
        </div>
      </div>
    
      {loadTable ? <Table data={data}/> : null}
    </div>
  );
};

export default VictoryCharts;