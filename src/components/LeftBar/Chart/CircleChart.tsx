'use client';

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const CircleChart = ({ chartdata, datacnt }: any) => {
  const titles = Object.keys(chartdata);
  const values = titles.map((title) => chartdata[title]);
  const colors =
    datacnt === 5
      ? ['#1479C9', '#5BAE1B', '#FEC900', '#EE6F17', '#C2352B']
      : ['#EE5396', '#F7A9CB', '#24A148', '#92D0A4', '#A56EFF', '#D2B7FF', '#33B1FF', '#99D8FF'];

  const datalabel = datacnt === 5 ? '등급' : '개수';
  const options = {
    plugins: {
      legend: {
        position: 'right' as const
      }
    }
  };

  const data = {
    labels: titles,
    datasets: [
      {
        label: datalabel,
        data: values,
        backgroundColor: colors,
        borderColor: colors
      }
    ]
  };

  return (
    <>
      <Doughnut className="" data={data} options={options} />
    </>
  );
};

export default CircleChart;
