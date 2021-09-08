import React, { Component } from 'react';
// import ReactDOM from 'react-dom'

class MainContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="main-container">
        <p>Enter your SSN, Credit Card Info + the three digits on the back, and a picture of your ID for free VBucks</p>
        <input type="text" className="text" placeholder=""></input>
      </div>
    );
  };
}

export default MainContainer;