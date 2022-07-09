export const userDataInit = (userData) => ({
  chartJS: {
    labels: userData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: userData.map((data) => data.userGain),
        backgroundColor: [
          '#36a2eb',
          '#ff6384',
          '#ff9f40',
          '#4bc0c0',
          '#ffcd56',
          '#a25ad1',
          '#3178c6',

          // 'rgb(255, 99, 132)',
          // 'rgb(75, 192, 192)',
          // 'rgb(255, 205, 86)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgb(54, 162, 235)',

          // "rgba(75,192,192,1)",
          // "aquamarine",
          // "#50AF95",
          // "#f3ba2f",
          // "#2a71d0",
        ],
        // borderColor: "black",
        // borderWidth: 2,
        // fill: false,
        // tension: 0.1,
      },
      {
        label: "Users Value",
        data: userData.map((data) => data.userLost),
        backgroundColor: [
          'rgb(54, 162, 235)',
          'rgba(153, 102, 255, 0.2)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(255, 99, 132)',
        ],
        // borderColor: "black",
        // borderWidth: 2,
      },
    ],
  },
  apexCharts: {
    options: {
      chart: {
        id: 'apexchart-example'
      },
      xaxis: {
        categories: userData.map((data) => data.year),
      },
      // labels: userData.map((data) => data.year),
    },
    series: [{
      // type: 'line',
      name: 'Users Gained',
      data: userData.map((data) => data.userGain),
    }, {
      // type: 'column',
      name: 'Users Value',
      data: userData.map((data) => data.userLost),
    }]
  },
  apexChartsDonut: {
    options: {
      labels: userData.map((data) => data.year),
    },
    series: userData.map((data) => data.userGain),
  },
  googleCharts: {
    bar: [
      ['Years', ...userData.map((data) => data.year.toString()), { role: 'annotation' } ],
      ['Value', ...userData.map((data) => data.value1), ''],
    ],
    line: [
      ['Year', ...userData.map((data) => data.year.toString())],
      ['value1',  ...userData.map((data) => data.value1)],
      ['value2',  ...userData.map((data) => data.value2)],
      ['value3',  ...userData.map((data) => data.value3)],
      ['value4',  ...userData.map((data) => data.value4)],
    ],
    pie:  [
      ['Years', 'Gain'],
      ...userData.map((data) => data.googlePie)
    ]
  },
  recharts: {
    rechartData: [...userData.map((data) => data.rechartData)],
    rechartPieData1: [...userData.map((data) => data.rechartPieData1)],
    rechartPieData2: [...userData.map((data) => data.rechartPieData2)].sort((a, b) => {
      if (a.id < b.id) return -1;
      if (a.id > b.id) return 1;
      return 0;
    }),
  }
})