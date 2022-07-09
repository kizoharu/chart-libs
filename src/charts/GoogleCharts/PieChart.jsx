import React from 'react';
import { Chart } from "react-google-charts";

const PieChart = ({chartData, width, height}) => {
  // let data = [
  //   ['Task', 'Hours per Day'],
  //   ['Work',     11],
  //   ['Eat',      2],
  //   ['Commute',  2],
  //   ['Watch TV', 2],
  //   ['Sleep',    7]
  // ]

  let options = {
    title: "My Daily Activities",
    is3D: true,
  };

  return (
    <Chart
      chartType="PieChart"
      // data={data}
      data={chartData.googleCharts.pie}
      options={options}
      // width="100%"
      // height="100%"
      width={width}
      height={height}
      // legendToggle
    />
  );
};

export default PieChart;