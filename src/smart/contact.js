import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="row innerScroll">
        <div className="col s12 m8 offset-m2 read">
          <img alt="Philippe on guitar" className="responsive-img padded" src="img/phil10.jpg" />
          <p className="padded">
              Please get in touch! I'm always interested to discuss potential collaborations, touring opportunities and recording projects. Drop me a line at <a href="mailto:hiphatchet@gmail.com">hiphatchet@gmail.com</a>.
          </p>
        </div>
      </div>
      )
  }
}
