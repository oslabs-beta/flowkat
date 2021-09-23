import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// NavBar anchored to left of app, for changing to different views using react router
class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="nav-bar">
        <Link to="/" className="button is-primary">Main</Link>
        <Link to="/messages" className="button is-primary">Messages</Link>
        <Link to="/metrics" className="button is-primary">Metrics</Link>
        <Link to="/options" className="button is-primary">Options</Link>
      </div>
    );
  };
}

export default NavBar;
