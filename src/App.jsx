import React, { useState, useCallback } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from './components/NavBar.jsx';
import MessagesContainer from './components/messages/MessagesContainer.jsx';
import MainContainer from './components/main/MainContainer.jsx';
import OptionsContainer from './components/options/OptionsContainer.jsx';
import MetricsContainer from './components/metrics/MetricsContainer.jsx';

import firstConnect from './kafka/firstConnect.js';

import '../styles.scss';

export default function App() {
  const [kafka, setKafka] = useState({
    brokerAddress: '',
    connectStatus: 'none',
    clusterInfo: null,
    topics: [],
  });
  const [maxMessagesToRender, setMaxMessagesToRender] = useState(100);
  const [messagesToRender, setMessagesToRender] = useState([]);
  const [prometheusAddress, setPrometheusAddress] = useState('');

  // Attempt to connect to Kafka on user submission
  const attemptConnect = useCallback(async function attemptConnect(address) {
    // Update broker address to be used, display a message that flowkat is trying to connect
    setKafka(kafka => ({
      ...kafka,
      brokerAddress: address,
      connectStatus: 'wait'
    }));

    // Make the KafkaJS call. If it succeeds, update state to success and display more info. If it fails, setState to failure and log the error
    try {
      const kafkaResults = await firstConnect(address);

      setKafka(kafka => ({
        ...kafka,
        connectStatus: 'success',
        clusterInfo: kafkaResults[0],
        topics: kafkaResults[1],
        //topics: ['pancake'],
      }));
    } catch (err) {
      setKafka(kafka => ({
        ...kafka,
        connectStatus: 'failure'
      }));
      console.error(err);
    }
  }, []);

  return (
    <BrowserRouter>
      <div id="app-container">
        <NavBar />

        <Switch>
          <Route path="/messages">
            <MessagesContainer
              kafka={kafka}
              messagesToRender={messagesToRender}
              setMessagesToRender={setMessagesToRender}
              maxMessagesToRender={maxMessagesToRender}
            />
          </Route>
          <Route path="/metrics">
            <MetricsContainer prometheusAddress={prometheusAddress} />
          </Route>
          <Route path="/options">
            <OptionsContainer
              maxMessagesToRender={maxMessagesToRender}
              setMaxMessagesToRender={setMaxMessagesToRender}
            />
          </Route>
          <Route path="/">
            <MainContainer
              kafka={kafka}
              prometheusAddress={prometheusAddress}
              attemptConnect={attemptConnect}
              setPrometheusAddress={setPrometheusAddress}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
