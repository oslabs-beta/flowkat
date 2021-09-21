import React, { Component } from 'react';
import DropdownMenu from '../other/DropdownMenu.jsx';
// import ReactDOM from 'react-dom'
import DebugCard from './DebuggingCard.jsx';

class DebuggingContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
    }
  }

componentDidMount() {
  //call fetch request to populate cardsToRender arr
  fetch("http://localhost:9090/api/v1/query?query=kafka_cluster_partition_underreplicated")
  .then((data) => data.json())
  .then((res) => res.data.result)
  .then((arr) => {
    console.log(arr);
    // arr.forEach((obj) => {
    //   // console.log(obj);
    //   console.log(obj['value']['1']);
    //   this.cardsToRender.push(<div>{'Hi'/*obj['value']['0']*/}</div>);
      
    // });
    let newData = [];
    arr.forEach(obj => {
      newData.push(
        <p>{obj['value']['0']}</p>
      );
    })
    this.setState({
      data: newData,
    });
  })
}

render() {
  return (
    <div id="debug-container">
      <DropdownMenu></DropdownMenu>
      {this.state.data}
      {/* <p>{`${data1}`}</p> */}
    </div>
  );
};
}

export default DebuggingContainer;