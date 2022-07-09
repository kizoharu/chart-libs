import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { scaleOrdinal } from 'd3-scale';
// import { schemeCategory10 ,schemePaired } from 'd3-scale-chromatic';

const colorsArr = [
  "#1f77b4",
  "#ff7f0e",
  "#2ca02c",
  "#d62728",
  "#9467bd",
  "#8c564b",
  "#e377c2",
  "#7f7f7f",
  "#bcbd22",
  "#17becf",
  "#82ca9d",
  "#8884d8",
  "#ed5565",
  "#1f77b4",
  "#ff7f0e",
  "#2ca02c",
  "#d62728",
  "#9467bd",
  "#8c564b",
  "#e377c2",
  "#7f7f7f",
  "#bcbd22",
  "#17becf",
  "#82ca9d",
  "#8884d8",
  "#ed5565",
]
const colors = scaleOrdinal(colorsArr).range();

const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
          Z`;

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  // console.log(fill);
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

const BarRechart = ({chartData, width, height, margin}) => {
  // console.log(schemePaired);

  return (
    <BarChart
      width={width}
      height={height}
      data={chartData.recharts.rechartData}
      margin={margin}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="pv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chartData.recharts.rechartData.map((entry, index) => 
          {
            // console.log('color', colors[index % 20])
            // console.log('? --- ', index % 20)
            return <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          }
        )}
      </Bar>
    </BarChart>
  );
};

export default BarRechart;