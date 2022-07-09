import React from 'react';
import Table from '../components/UI/Table/Table';

const VisxCharts = ({data, loadTable}) => {
  const width = 600;
  const height = 350;

  return (
    <div className='content'>
      <div className="charts">
        <div className="component">
          {/* <BarChart chartData={userDataInit(data)} width={width} height={height}/> */}
        </div>
        <div className="component">
          {/* <LineChart chartData={userDataInit(data)} width={width} height={height}/> */}
        </div>
        <div className="component">
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

export default VisxCharts;