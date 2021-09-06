import React, { Component } from 'react';
// import ReactDOM from 'react-dom'

class DebugCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="debug-card">
        <p key="errortype">Error: {this.props.errortype}</p>
        <p key="nodesinvolved">Nodes Involved: {this.props.nodesinvolved}</p>
      </div>
    );
  };
}

export default DebugCard;