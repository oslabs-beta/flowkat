import React, { Component } from 'react';
import DropdownMenu from '../other/DropdownMenu.jsx';
// import ReactDOM from 'react-dom'
import DebugCard from './DebuggingCard.jsx';

class DebuggingContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
    }
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
        {cardsToRender}
      </div>
    );
  };
}

export default DebuggingContainer;