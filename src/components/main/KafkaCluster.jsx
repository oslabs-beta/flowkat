import React from "react";

// After a successful connection to the Kafka cluster, display some metrics on it
export default function KafkaCluster({
  clusterInfo,
  topics,
}) {
  return (
    <div>
      {!clusterInfo && <p></p>}
      {clusterInfo &&
        <div>
          <p>Cluster ID: {clusterInfo.clusterId}</p>
          <p>Brokers:</p>
          <ul>{
            clusterInfo.brokers.map(broker =>
              <li key={broker.port}> - {broker.host}:{broker.port} (node ID: {broker.nodeId}{(broker.nodeId === clusterInfo.controller) ? ' - leader node' : ''})</li>
            )
          }</ul>
          <p>Available topics:</p>
          <ul>{
            topics.map(topic => <li key={topic}> - {topic}</li>)
          }</ul>
        </div>
      }
    </div>
  );
}
