import React from 'react';
import { Chart } from "react-google-charts";

const LineChart = ({chartData, width, height}) => {
  // let data =[
  //   ['Year', 'Sales', 'Expenses'],
  //   ['2004',  1000,      400],
  //   ['2005',  1170,      460],
  //   ['2006',  660,       1120],
  //   ['2007',  1030,      540]
  // ]

  return (
    <Chart
      chartType="LineChart"
      // data={data}
      data={chartData.googleCharts.line}
      // width="100%"
      // height="100%"
      width={width}
      height={height}
      legendToggle
    />
  );
};

export default LineChart;