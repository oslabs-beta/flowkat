import React, { Component } from 'react';
// import ReactDOM from 'react-dom'

class VisContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="vis-container">
        <h1>Producers</h1>
        <span><h1>Brokers + Zookeeper</h1></span>
        <h1>Consumers</h1>
      </div>
    );
  };
}

export default VisContainer;