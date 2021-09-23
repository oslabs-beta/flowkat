import React, { Component } from "react";

// Render a different message depending on the result of the request to the Kafka cluster
// Options are: 'none' - no connection attempt made
// 'wait' - waiting for a response
// 'success' - got data back from Kafka
// 'failure' - issue attempting to connect
class KafkaConnect extends Component {
  constructor(props) {
    super(props);
  }

  message() {
    if (this.props.connectStatus === 'none') {
      return <p></p>;
    } else if (this.props.connectStatus === 'wait') {
      return <p>Attempting to contact the Kafka cluster...</p>
    } else if (this.props.connectStatus === 'success') {
      return <p>Data received from Kafka:</p>
    } else if (this.props.connectStatus === 'failure') {
      return <p>There was an error contacting the Kafka cluster:</p>
    } else {
      return <p>Something unexpected happened!</p>
    }
  }
  
  render() {
    return (
      <div>
        {this.message()}
      </div>
    );
  };
}

export default KafkaConnect;
