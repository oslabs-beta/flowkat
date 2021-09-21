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

componentDidMount() {
  //call fetch request to populate cardsToRender arr
  fetch("http://localhost:9090/api/v1/query?query=kafka_cluster_partition_underreplicated")
  .then((data) => data.json())
  .then((res) => res.data.result)
  .then((arr) => {
    console.log(arr);
    // arr.forEach((obj) => {
    //   // console.log(obj);
    //   console.log(obj['value']['1']);
    //   this.cardsToRender.push(<div>{'Hi'/*obj['value']['0']*/}</div>);
      
    // });

    
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