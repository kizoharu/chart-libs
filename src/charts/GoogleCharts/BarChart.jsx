import React from 'react';
// import { render } from "react-dom";
import { Chart } from "react-google-charts";

const BarChart = ({chartData, width, height}) => {
  // let data = [
  //   ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General', 'Western', 'Literature', { role: 'annotation' } ],
  //   ['2010', 10, 24, 20, 32, 18, 5, ''],
  //   ['2020', 16, 22, 23, 30, 16, 9, ''],
  //   ['2030', 28, 19, 29, 30, 12, 13, '']
  // ]

  // console.log(chartData.googleCharts.bar);
  return (
    <Chart
      chartType="BarChart"
      // data={data}
      data={chartData.googleCharts.bar}
      // width="100%"
      // height="100%"
      width={width}
      height={height}
      legendToggle
    />
  );
};

export default BarChart;