import React from 'react';
import { Polar, Radar } from 'react-chartjs-2';
const callbacks = {
  title(tooltipItem, data) {
    return data.labels[tooltipItem[0].index];
  },
  label(tooltipItem, data) {
    return ` ${data.datasets[0].data[tooltipItem.index]} %`;
  },
}
const style = {
  displayColors: true,
}
const Chart = ({ data, type, zoomLevel }) => {
  const scale = {
    ticks: {
      suggestedMin: 0,
      suggestedMax: zoomLevel,
      stepSize: 5
    },
    pointLabels: {
      display: false,
    }
  }
  const options = {
    maintainAspectRatio: true,
    responsive: true,
    aspectRatio: 1,
    layout: {
      padding: 10,
    },
    scale: scale,
    legend: { display: false },
    tooltips: {
      callbacks: callbacks
    },
    style
  }
  let height;
  let width;
  const screenWidth = window.innerWidth;
 
  if (screenWidth <= 545) {
    height = 500;
    width = 500;
  } else {
    height = 'auto';
    width = 'auto';
  }
 const chart = type==="Polar"?
              <Polar data={data} height={height} width={width} options={Object.assign({startAngle: -0.75*Math.PI},options)}/> : 
              <Radar data={data} height={height} width={width} options={options}/>;
  return (
    <div className="chart-wrapper">
      {data === undefined ? (
        <h2>Loading...</h2>
      ) : (
        chart
      )}
    </div>
  );
};

export default Chart;
