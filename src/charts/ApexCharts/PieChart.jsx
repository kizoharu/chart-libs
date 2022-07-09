import React from 'react';
import Chart from 'react-apexcharts'

const PieChart = ({chartData, width, height}) => {
  return (
    <Chart 
      options={chartData.apexChartsDonut.options} 
      series={chartData.apexChartsDonut.series} 
      type="donut" 
      width={width}
      height={height} 
    />
  );
};

export default PieChart;