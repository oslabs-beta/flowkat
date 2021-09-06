import React, { Component } from 'react';
// import ReactDOM from 'react-dom'

class DebuggingContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="debug-card">
        <h1>This is the Debugging tab.</h1>
      </div>
    );
  };
}

export default DebuggingContainer;