import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

export default class Footer extends Component {
  render() {
    var urls = [
      'https://twitter.com/hiphatchet',
      'https://www.instagram.com/hiphatchet',
      'http://www.facebook.com/hiphatchet'
    ];

    return (
      <div className="footer container">
        <SocialIcon url={urls[0]} color="black" style={{width: 30, height: 30, margin: 8}} />
        <SocialIcon url={urls[1]} color="black" style={{width: 30, height: 30, margin: 8}} />
        <SocialIcon url={urls[2]} color="black" style={{width: 30, height: 30, margin: 8}} />
      </div>
    )
  }
}
