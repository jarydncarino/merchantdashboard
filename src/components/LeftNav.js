import React from 'react';
import logo from '../img/dashboard-logo.png';
import { Link, NavLink, withRouter } from 'react-router-dom';

const LeftNav = (props) => {
  return (
    <div className="leftNav">
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

export default withRouter(LeftNav);
