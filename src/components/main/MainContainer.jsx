import React from 'react';

import useTextField from './../../hooks/useTextField';
import KafkaConnect from './KafkaConnect.jsx';
import KafkaCluster from './KafkaCluster.jsx';

// Initial view to display; prompt user to connect to the Kafka cluster. If connected successfully, show cluster info and topics in child comp
export default function MainContainer({
  kafka,
  prometheusAddress,
  attemptConnect,
  setPrometheusAddress,
}) {
  // Store the text field values for when the user clicks submit
  const [kafkaAddress, onKafkaAddressChange] = useTextField('localhost:9092');
  const [promAddress, onPromAddress] = useTextField('localhost:9090');

  return (
    <div id="main-container">
      <img className="Logo" src="https://cdn.discordapp.com/attachments/879428128282407013/890635351956262942/FlowKatTransparent.png"
      />

      <p>Enter the address and port of your Kafka broker in the format <i>address</i>:<i>port</i></p>
      <input
        type="text"
        className="input is-secondary"
        placeholder="Ex: localhost:9092"
        value={kafkaAddress}
        onChange={onKafkaAddressChange}
      ></input>
      <button
        className="button is-primary is-light"
        onClick={() => attemptConnect(kafkaAddress)}
      >Submit</button>

      <p>Kafka broker address: {kafka.brokerAddress}</p>
      <KafkaConnect connectStatus={kafka.connectStatus} />
      <KafkaCluster clusterInfo={kafka.clusterInfo} topics={kafka.topics} />

      <hr></hr>

      <p>Enter the address and port of your Prometheus instance in the format <i>address:port</i></p>
      <input
        type="text"
        className="input is-secondary"
        placeholder="Ex: localhost:9090"
        value={promAddress}
        onChange={onPromAddress}
      ></input>
      <button
        className="button is-primary is-light"
        onClick={() => setPrometheusAddress(promAddress)}
      >Submit</button>
      <p>Prometheus address: {prometheusAddress}</p>
    </div>
  );
}
