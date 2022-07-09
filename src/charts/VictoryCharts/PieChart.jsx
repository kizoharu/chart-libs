import React from 'react';
import { VictoryPie, VictoryTooltip } from 'victory';

const PieChart = () => {
  const data3= [
    { x: "chrome", y: 30 },
    { x: "safari", y: 180 },
    { x: "firefox", y: 200 },
    { x: "edge", y: 120 },
    { x: "others", y: 100 }
  ];

  // const [label, setLabel] = useState(false);

  // const handleClick = () => {
  //   const updated = [...data3];
  //   updated[0].y += 700;

  //   console.log(updated);

  //   setData3(updated);
  // };

  // const handleToggler = () => {
  //   setLabel((val) => !val);
  // };

  return (
    <VictoryPie
        animate={{
          duration: 2000
        }}
        width="800"
        tooltip={"dshv"}
        labelComponent={
          <VictoryTooltip dy={0} centerOffset={{ x: 25 }} /> 
        }
        colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
        data={data3}
      />
  );
};

export default PieChart;