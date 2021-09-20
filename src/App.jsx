import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import ReactDOM from 'react-dom'

import NavBar from './components/NavBar.jsx';
import VisContainer from './components/visualization/VisContainer.jsx';
import MainContainer from './components/main/MainContainer.jsx';
import OptionsContainer from './components/options/OptionsContainer.jsx';
import DebuggingContainer from './components/debugging-/DebuggingContainer.jsx';

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
    }

    this.updateBrokerAddress = this.updateBrokerAddress.bind(this);
    this.attemptConnect = this.attemptConnect.bind(this);
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

  render() {
    return (
      <Router>
        <div id="app-container">
          <NavBar/>

          <Switch>
            <Route exact path="/vis">
              <VisContainer/>
            </Route>
            <Route exact path="/debug">
              <DebuggingContainer/>
            </Route>
            <Router exact path="/options">
              <OptionsContainer/>
            </Router>
            <Router path="/">
              <MainContainer state={this.state} attemptConnect={this.attemptConnect} />
            </Router>
          </Switch>
        </div>
      </Router>
    );
  };
}

export default App;