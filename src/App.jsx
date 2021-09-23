import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import ReactDOM from 'react-dom'

import NavBar from './components/NavBar.jsx';
import MessagesContainer from './components/messages/MessagesContainer.jsx';
import MainContainer from './components/main/MainContainer.jsx';
import OptionsContainer from './components/options/OptionsContainer.jsx';
import MetricsContainer from './components/metrics/MetricsContainer.jsx';
import TableRows from './components/messages/TableRows.jsx';

import firstConnect from './kafka/firstConnect.js';

import '.././styles.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brokerAddress: '',
      connectStatus: 'none',
      clusterInfo: null,
      topics: null,

      prometheusAddress: '',

      messageRowsToRender: [
        <TableRows 
          timestamp={`${Date.now().toLocaleString()}`}
          topicName=''
          partition=''
          messageContent='Waiting for messages...'
        />,
      ],

      messageCache: {},
    }

    this.updateBrokerAddress = this.updateBrokerAddress.bind(this);
    this.attemptConnect = this.attemptConnect.bind(this);
    this.updatePrometheusAddress = this.updatePrometheusAddress.bind(this);

    this.updateMessageRowsToRender = this.updateMessageRowsToRender.bind(this);
    this.updateMessageCache = this.updateMessageCache.bind(this);
  }

  // Attempt to connect to Kafka on user submission
  async attemptConnect(address) {
    // Update broker address to be used, display a message that flowkat is trying to connect
    this.updateBrokerAddress(address);
    this.setState({ connectStatus: 'wait' });

    // Make the KafkaJS call. If it succeeds, update state to success and display more info. If it fails, setState to failure and log the error
    try {
      const kafkaResults = await firstConnect(address);
      this.setState({
        connectStatus: 'success',
        clusterInfo: kafkaResults[0],
        topics: kafkaResults[1],
      });
    } catch(err) {
      this.setState({ connectStatus: 'failure' });
      console.log(err);
    }
  }

  updateBrokerAddress(address) {
    this.setState({ brokerAddress: address });
  }

  updatePrometheusAddress(address) {
    this.setState({ prometheusAddress: address });
  }

  async updateMessageRowsToRender(rowsArray) {
    await this.setState({
      messageRowsToRender: rowsArray,
    });
  }

  async updateMessageCache (cache) {
    await this.setState({
      messageCache: cache,
    });
  }

  render() {
    return (
      <Router>
        <div id="app-container">
          <NavBar/>

          <Switch>
            <Route exact path="/messages">
              <MessagesContainer state={this.state} updateMessageRowsToRender={this.updateMessageRowsToRender} updateMessageCache={this.updateMessageCache}/>
            </Route>
            <Route exact path="/metrics">
              <MetricsContainer prometheusAddress={this.state.prometheusAddress}/>
            </Route>
            <Router exact path="/options">
              <OptionsContainer/>
            </Router>
            <Router path="/">
              <MainContainer state={this.state} attemptConnect={this.attemptConnect} updatePrometheus={this.updatePrometheusAddress}/>
            </Router>
          </Switch>
        </div>
      </Router>
    );
  };
}

export default App;