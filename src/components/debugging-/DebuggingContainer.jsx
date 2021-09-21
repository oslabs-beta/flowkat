import React, { Component } from 'react';
import Plot from 'react-plotly.js';
// import ReactDOM from 'react-dom'
import DebugCard from './DebuggingCard.jsx';
import DropdownMenu from '../other/DropdownMenu.jsx';

class DebuggingContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currMetric: 'kafka_server_brokertopicmetrics_bytesin_total', //kafka_controller_kafkacontroller_globaltopiccount
      xData: [],
      yData: [],
      startTime: (Date.now() / 1000) - 3600,
      endTime: Date.now() / 1000,
      step: 25,
      fetchedLatest: false,
    }

    this.fetchGraph = this.fetchGraph.bind(this);
  }

  fetchGraph() {
    try {
      // fetch('http://' + `${this.props.prometheusAddress}` + '/api/v1/query_range?query=kafka_controller_kafkacontroller_globaltopiccount&start=1632244155.671&end=1632251355.671&step=28')
      fetch(
        'http://' + `${this.props.prometheusAddress}` + 
        '/api/v1/query_range?query=' + this.state.currMetric + 
        '&start=' + `${this.state.startTime}` + 
        '&end=' + `${this.state.endTime}` + 
        '&step=' + `${this.state.step}`
      )
      .then(res => res.json())
      .then(res => res['data']['result'][0]['values'])
      .then(array => {
        console.log(array);

        let newX = [];
        let newY = [];

        array.forEach(arr => {
          newX.push(Number(arr[0]))
          newY.push(Number(arr[1]))
        });

        console.log(newX);
        console.log(newY);

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
    console.log('executing xBoundsIncrease');

    let newStartTime = this.state.startTime - 3600;

    console.log(newStartTime);

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
    console.log('We updated!');
    if (!this.state.fetchedLatest) {
      this.fetchGraph();
      this.setState({
        fetchedLatest: true,
      });
    }
  }

  render() {
    return (
      <div id="debug-container">
        <DropdownMenu/>
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

export default DebuggingContainer;

/* FETCHING DATA FROM PROMETHEUS
    //call fetch request to populate cardsToRender arr
    // fetch("http://localhost:9090/api/v1/query?query=kafka_cluster_partition_underreplicated")
    // .then((data) => data.json())
    // .then((res) => res.data.result)
    // .then((arr) => {
    //   console.log(arr);
    //   let newData = [];
    //   arr.forEach(obj => {
    //     newData.push(
    //       obj['value']['0']
    //     );
    //   })

    //   this.setState({
    //     data: newData,
    //   });
    // });
*/