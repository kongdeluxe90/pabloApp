import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Chart } from 'react-charts'
import MyChart from './MyChart.js'
import useChartConfig from './useChartConfig'

function App() {
  const { data, randomizeData } = useChartConfig({
    dataType: 'linear',
    series: 10,
    useR: true
  })
  const series = React.useMemo(
    () => ({
      type: 'bubble',
      showPoints: false
    }),
    []
  )

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Pablo is awesome.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div
          style={{
            width: '1000px',
            height: '900px'
          }}
        >
          <Chart data={data} axes={axes} grouping="single" series={series}/>
        </div>
      </header>

    </div>
  );
}

export default App;
