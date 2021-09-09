import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import ReactDOM from 'react-dom'

class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="nav-bar">
        {/* <img src={path.resolve(__dirname, '../static/FlowKatIconLarge.png')}/> */}
        <Link to="/" className="button is-primary">Main</Link>
        <Link to="/vis" className="button is-primary">Visualization</Link>
        <Link to="/debug" className="button is-primary">Debugging</Link>
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