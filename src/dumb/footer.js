import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

import { socialLinks } from '../data';

export default class Footer extends Component {

  icons() {
    return socialLinks.map( el => {
      return <SocialIcon url={el} color="black" style={{width: 30, height: 30, margin: 8}} />
    });
  }

  render() {
    return (
      <div className="footer container">
        { this.icons() }
      </div>
    )
  }
}
