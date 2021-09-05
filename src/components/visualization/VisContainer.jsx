import React, { Component } from 'react';
// import ReactDOM from 'react-dom'

class VisContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('VisContainer Mounted');

    // d3.select('#d3-test')
    //   .selectAll('p')
    //   .data([1, 2, 3, 4])
    //   .enter()
    //   .append('p')
    //   .text(dta => `My value is: ${dta}`);

    d3.select('#producers')
      .append('g')
      .attr('width', 100)
      .attr('height', 100)
      .selectAll('svg')
      .data(['Service 1', 'Service 2', 'Service 3'])
      .enter()
      .append('svg')
      .text(dta => dta)
      .attr('width', 25)
      .attr('height', 25)
      .attr('fill', '#40F99B')
  }

  render() {
    return (
      <div id="vis-container">
        <div id="d3-test">D3 TESTING:</div>
        <div id="producers">PRODUCERS HERE</div>
        <p><span id="brokers">BROKERS HERE</span>   <span id="zookeeper">ZOOKEEPER HERE</span></p>
        <div id="consumers">CONSUMERS HERE</div>
      </div>
    );
  };
}

export default VisContainer;