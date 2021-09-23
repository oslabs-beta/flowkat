import React, { Component } from 'react';
import KafkaConnect from './kafkaConnect.jsx';
import KafkaCluster from './kafkaCluster.jsx';

// Initial view to display; prompt user to connect to the Kafka cluster. If connected successfully, show cluster info and topics in child comp
class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    // Store the text field values for when the user clicks submit
    let address = '';
    let promAddress = '';

    return (
      <div id="main-container">
        <img className="Logo" src="https://cdn.discordapp.com/attachments/879428128282407013/890635351956262942/FlowKatTransparent.png"
        /> 
        <p>Enter the address and port of your Kafka broker in the format <i>address</i>:<i>port</i></p>
        <input type="text" className="input is-secondary" placeholder="Ex: localhost:9092" onChange={(e) => address = e.target.value}></input>
        <button className="button is-primary is-light" onClick={() => this.props.attemptConnect(address)}>Submit</button>
        <p>Kafka broker address: {this.props.state.brokerAddress}</p>
        <KafkaConnect connectStatus={this.props.state.connectStatus} />
        <KafkaCluster clusterInfo={this.props.state.clusterInfo} topics={this.props.state.topics}/>
        
        <hr></hr>

        <p>Enter the address and port of your Prometheus instance in the format <i>address:port</i></p>
        <input type="text" className="input is-secondary" placeholder="Ex: localhost:9090" onChange={(e) => promAddress = e.target.value}></input>
        <button className="button is-primary is-light" onClick={() => this.props.updatePrometheus(promAddress)}>Submit</button>
        <p>Prometheus address: {this.props.state.prometheusAddress}</p>
      </div>
    );
  };
}

export default MainContainer;
