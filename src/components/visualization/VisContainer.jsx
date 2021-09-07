import React, { Component } from 'react';
import visFuncs from './visFuncs.js';
// import ReactDOM from 'react-dom'

class VisContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      producers: {
        producer1: { cx: 450, cy: 50, connections: true },
        producer2: { cx: 650, cy: 50, connections: false },
        producer3: {cx: 850, cy: 50, connections: true },
      },
      brokers: {
        broker1: { x: 525, y: 290, connections: true},
        broker2: { x: 725, y: 290, connections: true},
      },
      consumers: {
        consumer1: { cx: 450, cy: 600, connections: true},
        consumer2: { cx: 650, cy: 600, connections: true},
        consumer3: { cx: 850, cy: 600, connections: true},
      },
      pipes: {
        producer1: ['broker1', 'broker2'],
        producer2: ['broker1'],
        broker1: ['consumer1', 'consumer']
      }
    }
  }

  componentDidMount() {
    console.log('VisContainer Mounted');

    visFuncs.renderProsCons(this.state.producers);
    visFuncs.renderBrokers(this.state.brokers);
    visFuncs.renderProsCons(this.state.consumers);
  }

  render() {
    return (
      <div id="vis-container">
        <svg id="svg-container" width="100%" height="100%"></svg>
        {/* <div id="prod-broke-pipes"></div> */}
        {/* <svg id="brokers"></svg> */}
        {/* <div id="broke-con-pipes"></div>
        <div id="consumers"></div> */}
      </div>
    );
  };
}

export default VisContainer;

/*
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

      const prodBrokePipes_group = d3.select('#prod-broke-pipes')
      .append('g')

      prodBrokePipes_group.selectAll('svg')
      .data(['service1ToBroker1'])
      .enter()
      .append('svg')
      .attr('width', 300)
      .attr('height', 300)
      // .attr('viewBox', '0 0 25 25')
      .append('line')
      .attr('x1', 10)
      .attr('y1', 0)
      .attr('x2', 150)
      .attr('y2', 30)
      // .text(dta => dta)
      .attr('stroke', 'red')
      .attr('stroke-width', 15)
      .attr('opacity', 0.8)

!!! HTML FOR MAKING NODES !!!

NOTE: IN ORDER FOR ELEMENTS TO PROPERLY OVERLAP, *ALL* SVGs ELEMENTS *MUST* BE IN THE SAVE SVG TAG

<div id="vis-container">
  <div id="producers">
    <svg width="300" height="500" id="we1">
        <circle r="20" cx="50" cy="50" fill="#0cc440" stroke="black" stroke-width="3"></circle>
        <circle r="20" cx="100" cy="50" fill="#0cc440" stroke="black" stroke-width="3"></circle>
        <circle r="20" cx="150" cy="50" fill="#0cc440" stroke="black" stroke-width="3"></circle>
        <line x1="50" y1="70" x2="80" y2="250" stroke="red" stroke-width="8" opacity="0.7"></line>
      </svg>
  </div>
  <div id="prod-broke-pipes">
    <svg width="300" height="300">
        <line x1="50" y1="50" x2="" y2="" stroke="red" stroke-width="15" opacity="0.8"></line>
      </svg>
  </div>
  <div id="brokers">
    <svg width="150" height="150">
        <rect x="50" y="50" width="50" height="50" rx="10" ry="10" fill="#b02068" stroke="black" stroke-width="3"></rect>
      </svg><svg width="150" height="150">
        <rect x="50" y="50" width="50" height="50" rx="10" ry="10" fill="#b02068" stroke="black" stroke-width="3"></rect>
      </svg>
  </div>
  <div id="broke-con-pipes"></div>
  <div id="consumers">
    <svg width="100" height="100">
        <circle r="30" cx="50" cy="50" fill="#0cc440" stroke="black" stroke-width="3"></circle>
      </svg><svg width="100" height="100">
        <circle r="30" cx="50" cy="50" fill="#0cc440" stroke="black" stroke-width="3"></circle>
      </svg><svg width="100" height="100">
        <circle r="30" cx="50" cy="50" fill="#0cc440" stroke="black" stroke-width="3"></circle>
      </svg>
  </div>
</div>
*/