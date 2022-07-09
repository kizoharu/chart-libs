import React from 'react';
import { Chart } from "react-google-charts";

const MapChart = ({chartData, width, height}) => {
  let data = [
    ['Country', 'Popularity'],
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700]
  ]

  return (
    <Chart
      chartType="GeoChart"
      data={data}
      // width="100%"
      // height="100%"
      width={width}
      height={height}
      legendToggle
    />
  );
};

export default MapChart;