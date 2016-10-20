import React, { Component } from 'react';
import { Link } from 'react-router';

class MenuLinks extends Component {

  render() {
    return (
      <ul id={ this.props.id } className={ this.props.className } >
        <li><Link className="hideMenu" to="watch">Watch(A)</Link></li>
        <li><Link className="hideMenu" to="grid">Watch(B)</Link></li>
        <li><Link className="hideMenu" to="bio">Bio</Link></li>
        <li><Link className="hideMenu" to="lessons">Lessons</Link></li>
        <li><Link className="hideMenu" to="contact">Contact</Link></li>
      </ul>
      )
  }
}

export default class Header extends Component {

  render() {
    return (
      <div className="row">
        <nav className="col s12">
          <div className="nav-wrapper">
            <Link className="brand-logo right" to="/">
              <h4>Philippe Bronchtein</h4>
            </Link>
            <MenuLinks id="nav-mobile" className="left hide-on-med-and-down" />
            <a href="#" data-activates="menu-mobile" className="left button-collapse">
              <i className="material-icons">menu</i>
            </a>
            <MenuLinks id="menu-mobile" className="side-nav" />
          </div>
        </nav>
      </div>
    )
  }
}
