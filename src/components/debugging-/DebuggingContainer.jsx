import React, { Component } from 'react';
import Plot from 'react-plotly.js';
// import ReactDOM from 'react-dom'
import DebugCard from './DebuggingCard.jsx';
import DropdownMenu from '../other/DropdownMenu.jsx';

class DebuggingContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      xData: [],
      queryString: '',
    }
    this.onClickQuery = this.onClickQuery.bind(this);
  }

  onClickQuery(event){
    console.log(event.target.value)
    this.setState({queryString: event.target.value})
  }

  componentDidMount() {
    try {
      fetch(queryString)
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div id="debug-container">
        <DropdownMenu 
          prometheusAddress={this.props.prometheusAddress}
          onClickQuery={this.onClickQuery}
          />
        <Plot
          data ={[
            {
              x: [1, 2, 3],
              y: [1, 8, 27],
              type: 'bar',
            },
          ]}

          layout = {{
            width: 800,
            height: 600,
            title: 'x^3',
          }}
        />

        <p>Prometheus address currently entered: {this.props.prometheusAddress}</p>
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