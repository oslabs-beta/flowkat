import React, { Component } from 'react';
// import ReactDOM from 'react-dom'

class OptionsContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="options-container">
        <div>
          <p>Kafka Logs Lifetime</p>
          <div className="select is-primary">
            <select>
              <option>1 week</option>
              <option>72 hours</option>
              <option>24 hours</option>
            </select>
          </div>
        </div>
        <div>
          <p>Free VBucks</p>
          <div className="select is-primary">
            <select>
              <option>Yes</option>
              <option>No</option>
              <option>What?</option>
            </select>
          </div>
        </div>
      </div>
    );
  };
}

export default OptionsContainer;