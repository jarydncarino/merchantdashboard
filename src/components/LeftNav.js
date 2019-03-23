import React, { Component } from 'react';
import logo from '../img/dashboard-logo.png';
import { Link, NavLink, withRouter } from 'react-router-dom';

class LeftNav extends Component {
  render() {
    return (
      <div className="leftNav">
          <button onClick={this.props.toggleClose} className="close-btn"><i className="material-icons">close</i></button>
          <div className="logo-wrap">
              <img src={logo} className="App-logo" alt="logo" />
          </div>
          <ul className="nav">
              <li><Link to="/"><i className="material-icons">dashboard</i> Dashboard</Link></li>
              <li><NavLink to="/page2"><i className="material-icons">assessment</i> Page 2</NavLink></li>
              <li><NavLink to="/page3"><i className="material-icons">assignment</i> Page 3</NavLink></li>
          </ul>
      </div>
    )
  }
}

export default withRouter(LeftNav);
