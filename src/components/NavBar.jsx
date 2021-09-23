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
        {/* <img className="icon2" src="https://cdn.discordapp.com/attachments/879428128282407013/890627536856416276/unknown.png"
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