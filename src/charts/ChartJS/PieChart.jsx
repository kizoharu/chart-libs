import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";
import styles from './PieChart.module.scss'

const PieChart = ({chartData, width, height}) => {
  return (
    <Doughnut
      className={styles.doughnut}
      data={chartData.chartJS}
      height={100}
      width={100}
      // boxHeight={10}
    />
  );
};

export default PieChart;