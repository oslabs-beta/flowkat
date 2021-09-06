import React, { Component } from 'react';
// import ReactDOM from 'react-dom'

class VisContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('VisContainer Mounted');

    const producers_group = d3.select('#producers')
      .append('g')
      .attr('width', 500)
      .attr('height', 500)

      producers_group.selectAll('svg')
      .data(['Service 1', 'Service 2', 'Service 3'])
      .enter()
      .append('svg')
      // .attr('viewBox', '0 0 25 25')
      .attr('width', 100)
      .attr('height', 100)
      .append('circle')
      // .text(dta => dta)
      .attr('r', 30)
      .attr('cx', 50)
      .attr('cy', 50)
      .attr('fill', '#0cc440')
      .attr('stroke', 'black')
      .attr('stroke-width', 3)

      const brokers_group = d3.select('#brokers')
      .append('g')
      .attr('width', 500)
      .attr('height', 500)

      brokers_group.selectAll('svg')
      .data(['Broker 1', 'Broker 2'])
      .enter()
      .append('svg')
      // .attr('viewBox', '0 0 25 25')
      .attr('width', 150)
      .attr('height', 150)
      .append('rect')
      // .text(dta => dta)
      .attr('x', 50)
      .attr('y', 50)
      .attr('width', 50)
      .attr('height', 50)
      .attr('rx', 10)
      .attr('ry', 10)
      .attr('fill', '#b02068') //hibiscus!
      .attr('stroke', 'black')
      .attr('stroke-width', 3)

      const consumers_group = d3.select('#consumers')
      .append('g')
      .attr('width', 500)
      .attr('height', 500)

      consumers_group.selectAll('svg')
      .data(['Service 1', 'Service 2', 'Service 3'])
      .enter()
      .append('svg')
      // .attr('viewBox', '0 0 25 25')
      .attr('width', 100)
      .attr('height', 100)
      .append('circle')
      // .text(dta => dta)
      .attr('r', 30)
      .attr('cx', 50)
      .attr('cy', 50)
      .attr('fill', '#0cc440')
      .attr('stroke', 'black')
      .attr('stroke-width', 3)
  }

  render() {
    return (
      <div id="vis-container">
        <div id="producers"></div>
        <div id="brokers"></div>
        <div id="consumers"></div>
      </div>
    );
  };
}

export default VisContainer;