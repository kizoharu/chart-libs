import React from 'react';
import { ResponsiveLine } from '@nivo/line'

const data = [
  {
    "id": "japan",
    "color": "hsl(189, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 41
      },
      {
        "x": "helicopter",
        "y": 227
      },
      {
        "x": "boat",
        "y": 162
      },
      {
        "x": "train",
        "y": 52
      },
      {
        "x": "subway",
        "y": 183
      },
      {
        "x": "bus",
        "y": 261
      },
      {
        "x": "car",
        "y": 169
      },
      {
        "x": "moto",
        "y": 290
      },
      {
        "x": "bicycle",
        "y": 178
      },
      {
        "x": "horse",
        "y": 47
      },
      {
        "x": "skateboard",
        "y": 141
      },
      {
        "x": "others",
        "y": 181
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(302, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 34
      },
      {
        "x": "helicopter",
        "y": 128
      },
      {
        "x": "boat",
        "y": 82
      },
      {
        "x": "train",
        "y": 152
      },
      {
        "x": "subway",
        "y": 284
      },
      {
        "x": "bus",
        "y": 116
      },
      {
        "x": "car",
        "y": 106
      },
      {
        "x": "moto",
        "y": 175
      },
      {
        "x": "bicycle",
        "y": 70
      },
      {
        "x": "horse",
        "y": 22
      },
      {
        "x": "skateboard",
        "y": 89
      },
      {
        "x": "others",
        "y": 22
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(191, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 9
      },
      {
        "x": "helicopter",
        "y": 293
      },
      {
        "x": "boat",
        "y": 268
      },
      {
        "x": "train",
        "y": 191
      },
      {
        "x": "subway",
        "y": 175
      },
      {
        "x": "bus",
        "y": 202
      },
      {
        "x": "car",
        "y": 288
      },
      {
        "x": "moto",
        "y": 107
      },
      {
        "x": "bicycle",
        "y": 153
      },
      {
        "x": "horse",
        "y": 291
      },
      {
        "x": "skateboard",
        "y": 250
      },
      {
        "x": "others",
        "y": 181
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(158, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 128
      },
      {
        "x": "helicopter",
        "y": 76
      },
      {
        "x": "boat",
        "y": 85
      },
      {
        "x": "train",
        "y": 2
      },
      {
        "x": "subway",
        "y": 11
      },
      {
        "x": "bus",
        "y": 63
      },
      {
        "x": "car",
        "y": 71
      },
      {
        "x": "moto",
        "y": 11
      },
      {
        "x": "bicycle",
        "y": 61
      },
      {
        "x": "horse",
        "y": 2
      },
      {
        "x": "skateboard",
        "y": 162
      },
      {
        "x": "others",
        "y": 43
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(323, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 232
      },
      {
        "x": "helicopter",
        "y": 272
      },
      {
        "x": "boat",
        "y": 144
      },
      {
        "x": "train",
        "y": 33
      },
      {
        "x": "subway",
        "y": 65
      },
      {
        "x": "bus",
        "y": 208
      },
      {
        "x": "car",
        "y": 12
      },
      {
        "x": "moto",
        "y": 62
      },
      {
        "x": "bicycle",
        "y": 67
      },
      {
        "x": "horse",
        "y": 215
      },
      {
        "x": "skateboard",
        "y": 12
      },
      {
        "x": "others",
        "y": 209
      }
    ]
  }
]

const LineRechart = () => {
  return (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
  );
};

export default LineRechart;