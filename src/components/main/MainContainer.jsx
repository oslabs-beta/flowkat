import React, { Component } from 'react';
import KafkaConnect from './kafkaConnect.jsx';
import KafkaCluster from './kafkaCluster.jsx';

// Initial view to display; prompt user to connect to the Kafka cluster. If connected successfully, show cluster info and topics in child comp
class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    let address = '';
    return (
      <div id="main-container">
        <p>Enter the address and port of your Kafka broker in the format <i>address</i>:<i>port</i></p>
        <input type="text" className="text" placeholder="Ex: localhost:9092" onChange={(e) => address = e.target.value}></input>
        <button onClick={() => this.props.attemptConnect(address)}>Submit</button>
        <p>Kafka broker address: {this.props.state.brokerAddress}</p>
        <KafkaConnect connectStatus={this.props.state.connectStatus} />
        <KafkaCluster clusterInfo={this.props.state.clusterInfo} topics={this.props.state.topics}/>
      </div>
    );
  };
}

export default MainContainer;
