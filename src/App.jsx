import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import ReactDOM from 'react-dom'

import NavBar from './components/NavBar.jsx';
import VisContainer from './components/visualization/VisContainer.jsx';
import MainContainer from './components/main/MainContainer.jsx';
import OptionsContainer from './components/options/OptionsContainer.jsx';
import DebuggingContainer from './components/debugging-/DebuggingContainer.jsx';

import '.././styles.scss';

class App extends Component {
  constructor(props) {
    super(props)
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
              <MainContainer/>
            </Router>
          </Switch>
        </div>
      </Router>
    );
  };
}

export default App;