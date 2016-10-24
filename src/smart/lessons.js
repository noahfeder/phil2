import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="row innerScroll">
        <div className="col s12 m8 offset-m2 read">
          <img alt="Philippe on guitar" className="responsive-img padded" src="img/phil4.jpg" />
          <p className="padded">
            Philippe has been teaching for almost a decade, beginning as a TA for his college's electronic music class. Upon relocating to Portland, OR, he worked at Portland's School of Rock, teaching guitar, bass, keys, music theory, & Ableton Live.
            <br/><br/>
            Email <a href="mailto:hiphatchet@gmail.com">hiphatchet@gmail.com</a> for rates and more information
          </p>
        </div>
      </div>
      )
  }
}
