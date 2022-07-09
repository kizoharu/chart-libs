import React from 'react';
import Chart from 'react-apexcharts'

const AreaChart = ({chartData, width, height}) => {
  return (
    <Chart 
      options={chartData.apexCharts.options} 
      series={chartData.apexCharts.series} 
      type="area" 
      width={width}
      height={height} 
    />
  );
};

export default AreaChart;