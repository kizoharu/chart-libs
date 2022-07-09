import React from 'react';
// import * as V from 'victory';
import {  VictoryChart, VictoryClipContainer, VictoryLine } from 'victory';

const LineChart = () => {
  const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];

  
  return (
    <VictoryChart>
      <VictoryLine
          data={data}
          groupComponent={<VictoryClipContainer clipPadding={{ top: 5, right: 10 }}/>}
          style={{ data: { stroke: "#c43a31", strokeWidth: 15, strokeLinecap: "round" } }}
        />
    </VictoryChart>
  );
};

export default LineChart;