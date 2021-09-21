import React, { Component } from 'react';
import Plot from 'react-plotly.js';
// import ReactDOM from 'react-dom'
import DebugCard from './DebuggingCard.jsx';

class DebuggingContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let cardsToRender = [
      <DebugCard
        errortype = {'Producer could not communicate with broker!'}
        nodesinvolved = {['Service 1', 'Broker 1']}
        key = {`debugcard${1}`}
      />,
      <DebugCard
        errortype = {'Broker could not communicate with consumer!'}
        nodesinvolved = {['Broker 2', 'Service 3']}
        key = {`debugcard${2}`}
      />,
    ];

    return (
      <div id="debug-container">
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
      </div>
    );
  };
}

export default DebuggingContainer;