import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import DropdownMenu from '../other/DropdownMenu.jsx';

class MetricsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currMetric: 'kafka_server_brokertopicmetrics_bytesin_total',
      xData: [],
      yData: [],
      startTime: (Date.now() / 1000) - 3600,
      endTime: Date.now() / 1000,
      step: 20,
      fetchedLatest: false,
      queryString: '',
    }

    this.fetchGraph = this.fetchGraph.bind(this);
    this.onClickQuery = this.onClickQuery.bind(this);
  }

  onClickQuery(event){
    this.setState({
      currMetric: event.target.value,
      fetchedLatest: false,
    });
  }

  fetchGraph() {
    let fetchURL = 'http://' + `${this.props.prometheusAddress}` + '/api/v1/query_range?query=' + this.state.currMetric + '&start=' + `${this.state.startTime}` + '&end=' + `${this.state.endTime}` + '&step=' + `${this.state.step}`;

    try {
      fetch(fetchURL)
      .then(res => res.json())
      .then(res => res['data']['result'][0]['values'])
      .then(array => {
        let newX = [];
        let newY = [];

        let latestTimeInSec = array[array.length - 1][0]

        array.forEach(arr => {
          newX.push( (Number(arr[0]) - latestTimeInSec) / 3600);
          newY.push(Number(arr[1]));
        });

        this.setState({
          xData: newX,
          yData: newY,
        });
      })
      .catch(err => {
        console.log(err);
        console.log('Did you put in a proper URL for the Prometheus address?');
      });
    } catch (e) {
      console.log(e); 
    }
  }

  xBoundsIncrease() {
    let newStartTime = this.state.startTime - 3600;

    this.setState({
      startTime: newStartTime,
      fetchedLatest: false,
    });
  }

  componentDidMount() {
    if (!this.state.fetchedLatest) {
      this.fetchGraph();
      this.setState({
        fetchedLatest: true,
      });
    }
  }

  componentDidUpdate() {
    if (!this.state.fetchedLatest) {
      this.fetchGraph();
      this.setState({
        fetchedLatest: true,
      });
    }
  }

  render() {
    return (
      <div id="metrics-container">
        <DropdownMenu 
          prometheusAddress={this.props.prometheusAddress}
          onClickQuery={this.onClickQuery}
          />
        <Plot
          data ={[
            {
              x: this.state.xData,
              y: this.state.yData,
              type: 'bar',
            },
          ]}

          layout = {{
            width: 800,
            height: 600,
            title: this.state.currMetric,
          }}
        />

        <p>Prometheus address currently entered: {this.props.prometheusAddress}</p>

        <button className="button is-primary is-light" onClick={() => {this.xBoundsIncrease()}}>Back 1 hr</button>
      </div>
    );
  };
}

export default MetricsContainer;
