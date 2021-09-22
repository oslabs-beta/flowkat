import React, { Component } from 'react';

class TableRows extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('TableRows Mounted!');
  }

  render() {
    return (
      <tr>
        <td>{this.props.timeStamp}</td>
        <td>{this.props.topicName}</td>
        <td>{this.props.partition}</td>
        <td>{this.props.messageContent}</td>
      </tr>
    );
  };
}

export default TableRows;


{/* <tr>
  <td>henry</td>
  <td>this time</td>
  <td>cats</td>
</tr>
<tr>
  <td>Cell 1</td>
  <td>Cell 2</td>
  <td>Cell 3</td>
</tr> */}