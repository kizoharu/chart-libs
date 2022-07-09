import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";


const BarChart = ({chartData}) => {

  return (
    <Bar
      data={chartData.chartJS}
      // height={200}
      // width={600}
      // options={optionsDirY}
    />
  );
};

export default BarChart;