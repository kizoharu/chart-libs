import React from 'react';
import Chart from 'react-apexcharts'

const BarChart = ({chartData, width, height}) => {
  return (
    <Chart 
      options={chartData.apexCharts.options} 
      series={chartData.apexCharts.series} 
      type="bar" 
      width={width}
      height={height} 
    />
  );
};

export default BarChart;