import React, { Component } from 'react';
import { Link } from 'react-router';

class MenuLinks extends Component {
  hideMenu() {
    $('.button-collapse').sideNav('hide');
  }

  render() {
    return (
      <ul id={ this.props.id } className={ this.props.className } >
        <li><Link onClick={this.hideMenu} to="projects">Projects</Link></li>
        <li><Link onClick={this.hideMenu} to="bio">Bio</Link></li>
        <li><Link onClick={this.hideMenu} to="lessons">Lessons</Link></li>
        <li><Link onClick={this.hideMenu} to="contact">Contact</Link></li>
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
