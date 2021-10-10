import React from "react";

// Render a different message depending on the result of the request to the Kafka cluster
// Options are: 'none' - no connection attempt made
// 'wait' - waiting for a response
// 'success' - got data back from Kafka
// 'failure' - issue attempting to connect
export default function KafkaConnect({
  connectStatus,
}) {
  function message() {
    if (connectStatus === 'none') {
      return <p></p>;
    } else if (connectStatus === 'wait') {
      return <p>Attempting to contact the Kafka cluster...</p>;
    } else if (connectStatus === 'success') {
      return <p>Data received from Kafka:</p>;
    } else if (connectStatus === 'failure') {
      return <p>There was an error contacting the Kafka cluster:</p>;
    } else {
      return <p>Something unexpected happened!</p>;
    }
  }

  return (
    <div>
      {message()}
    </div>
  );
}
