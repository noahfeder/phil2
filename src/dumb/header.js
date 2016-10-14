import React, { Component } from 'react';
import { Link } from 'react-router';
export default class Header extends Component {
  render() {
    return (
      <div className="row">
        <nav className="col s12">
          <div className="nav-wrapper">
            <Link className="brand-logo right" to="/">
              <h4>Philippe Bronchtein</h4>
            </Link>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><Link to="projects">Projects</Link></li>
              <li><a>Bio</a></li>
              <li><a>Lessons</a></li>
              <li><a>Contact</a></li>
            </ul>
            <a href="#" data-activates="menu-mobile" className="left button-collapse">
              <i className="material-icons">menu</i>
            </a>
            <ul id="menu-mobile" className="side-nav">
              <li><Link to="projects">Projects</Link></li>
              <li><a>Bio</a></li>
              <li><a>Lessons</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
