import React from 'react';
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory';

// const qtd = [1000, 800, 400, 200, 50];
// const orç = [800, 800, 600, 400, 0];
// const tipo = ["PMI", "PME", "MIS", "GRA", "OXT", "ARP"];

const data = [
  { x: "PMI", y: 1000 },
  { x: "PME", y: 800 },
  { x: "MIS", y: 400 },
  { x: "GRA", y: 400 },
  { x: "OXT", y: 200 },
  { x: "ARP", y: 50 }
];

const BarChatr = () => {
  return (
    <VictoryChart>
      <VictoryAxis
        style={{
          axis: { strokeWidth: 0 },
          tickLabels: { fontSize: 15, padding: 10, stroke: "#" }
        }}
      />
      <VictoryBar
        barRatio={0.7}
        cornerRadius={5}
        style={{
          data: {
            fill: (d) => (d.y >= 800 ? "#006100" : "#8b0000")
          },
          labels: {
            fontSize: 15,
            fill: (d) => (d.y >= 800 ? "#006100" : "#8b0000")
          }
        }}
        data={data}
        x="x"
        y="y"
        labels={(d) => `${d.y}t`}
      />
    </VictoryChart>
  );
};

export default BarChatr;