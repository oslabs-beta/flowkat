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
        <Link to="/"><button>Main</button></Link>
        <Link to="/vis"><button>Visualization</button></Link>
        <Link to="/debug"><button>Debugging</button></Link>
        <Link to="/options"><button>Options</button></Link>
        <button onClick={() => {
          electron.notificationApi.sendNotification('HELLO MATT AND GEORGE!');
        }}
        >Notify</button>
      </div>
    );
  };
}

export default NavBar;