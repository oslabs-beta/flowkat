import React, { Component } from 'react';

// Container for selecting number of messages to display from a topic
class OptionsContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="options-container">
        <div>
          <p>Maximum Messages Displayed</p>
          <div className="select is-primary">
            <select>
              <option>100</option>
              <option>250</option>
              <option>500</option>
            </select>
          </div>
        </div>
      </div>
    );
  };
}

export default OptionsContainer;
