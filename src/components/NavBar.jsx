import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import ReactDOM from 'react-dom'
// import { path } from 'path';

class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="nav-bar">
        {/* <img src="https://cdn.discordapp.com/attachments/879428128282407013/885637964430999552/FlowKatIconLarge.png"
          height = '32'
          width = '32'
        /> */}
        <Link to="/" className="button is-primary">Main</Link>
        <Link to="/messages" className="button is-primary">Messages</Link>
        <Link to="/metrics" className="button is-primary">Metrics</Link>
        <Link to="/options" className="button is-primary">Options</Link>
        {/* <button className="button is-primary" onClick={() => {
          electron.notificationApi.sendNotification('HELLO MATT AND GEORGE!');
        }}
        >Notify</button> */}
      </div>
    );
  };
}

export default NavBar;