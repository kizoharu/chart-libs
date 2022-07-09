import React from 'react';
import Chart from 'react-apexcharts'

const LineChart = ({chartData, width, height}) => {

  return (
    <Chart 
      options={chartData.apexCharts.options} 
      series={chartData.apexCharts.series} 
      type="line" 
      width={width}
      height={height} 
    />
  );
};

export default LineChart;