import React, { Component } from 'react';

// Formatter for rows of messages
class TableRows extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.timestamp}</td>
        <td>{this.props.topicName}</td>
        <td>{this.props.partition}</td>
        <td>{this.props.messageContent}</td>
      </tr>
    );
  };
}

export default TableRows;
