import React, { Component } from "react";

class KafkaCluster extends Component {
  constructor(props) {
    super(props);
  };

  populateCluster() {
    if (!this.props.clusterInfo) return <p></p>;

    return (
      <div>
        <p>Cluster ID: {this.props.clusterInfo.clusterId}</p>
        <p>Brokers:</p>
        <ul>{this.formatBrokers(this.props.clusterInfo.brokers)}</ul>
        <p>Available topics:</p>
        <ul>{this.formatTopics(this.props.topics)}</ul>
      </div>
    );
  }

  formatBrokers(brokerArr) {
    const output = [];
    brokerArr.forEach(ele => {
      output.push(
        <li> - {ele.host}:{ele.port} (node ID: {ele.nodeId}{(ele.nodeId === this.props.clusterInfo.controller) ? ' - leader node' : ''})</li>
      );
    });
    return output;
  }

  formatTopics(topicArr) {
    const output = [];
    topicArr.forEach(ele => {
      output.push(
        <li> - {ele}</li>
      );
    });
    return output;
  }

  render() {
    return (
      <div>
        {this.populateCluster()}
      </div>
    );
  };
}

export default KafkaCluster;
