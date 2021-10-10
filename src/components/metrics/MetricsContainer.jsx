import React, { useEffect, useState, useCallback } from 'react';
import Plot from 'react-plotly.js';
import DropdownMenu from './DropdownMenu.jsx';

export default function MetricsContainer({
  prometheusAddress,
}) {
  const [state, setState] = useState({
    currMetric: 'kafka_server_brokertopicmetrics_bytesin_total',
    fetchedLatest: false,
    xData: [],
    yData: [],
    startTime: (Date.now() / 1000) - 3600,
    endTime: Date.now() / 1000,
    step: 20,
    queryString: '',
  });

  const onClickQuery = useCallback(function onClickQuery(currMetric) {
    setState(state => ({
      ...state,
      currMetric,
      fetchedLatest: false,
    }));
  }, []);

  const fetchGraph = useCallback(function fetchGraph() {
    const fetchURL = `http://${prometheusAddress}/api/v1/query_range?query=${state.currMetric}&start=${state.startTime}&end=${state.endTime}&step=${state.step}`;

    fetch(fetchURL)
      .then(res => res.json())
      .then(res => {
        const array = res['data']['result'][0]['values'];
        const latestTimeInSec = array[array.length - 1][0];

        const newX = [], newY = [];
        array.forEach(arr => {
          newX.push((Number(arr[0]) - latestTimeInSec) / 3600);
          newY.push(Number(arr[1]));
        });

        setState(state => ({
          ...state,
          fetchedLatest: true,
          xData: newX,
          yData: newY,
        }));
      })
      .catch(err => {
        console.error(err);
        console.log('Did you put in a proper URL for the Prometheus address?');
      });
  }, [prometheusAddress, state.currMetric, state.endTime, state.startTime, state.step]);

  const xBoundsIncrease = useCallback(function xBoundsIncrease() {
    const newStartTime = state.startTime - 3600;

    this.setState(state => ({
      ...state,
      startTime: newStartTime,
      fetchedLatest: false,
    }));
  }, [state.startTime]);

  useEffect(() => {
    if (!state.fetchedLatest) {
      fetchGraph();
    }
  }, [fetchGraph, state.fetchedLatest]);

  return (
    <div id="metrics-container">
      <DropdownMenu
        prometheusAddress={prometheusAddress}
        onClickQuery={onClickQuery}
      />
      <Plot
        data={[
          {
            x: state.xData,
            y: state.yData,
            type: 'bar',
          },
        ]}

        layout={{
          width: 800,
          height: 600,
          title: state.currMetric,
          plot_bgcolor: "#fffaeb",
          paper_bgcolor: "#fffaeb",
        }}
      />

      <p>Prometheus address currently entered: {prometheusAddress}</p>

      <button className="button is-primary is-light" onClick={xBoundsIncrease}>Back 1 hr</button>
    </div>
  );
}
