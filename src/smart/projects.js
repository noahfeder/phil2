import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../index';
import { goLeft, goRight } from '../actions/index';


//TODO add thumbnail version too
//TODO add Listen with SC links and scrips

class Watch extends Component {
  goLeft(current) {
    return store.dispatch(goLeft(current));
  }

  goRight(current) {
    return store.dispatch(goRight(current));
  }

  click() {
    //change state via click and rotate classes using https://facebook.github.io/react/docs/animation.html
    //need 7 classes in an array, one per video
    //checks for if at ind[0] or [6]
  }

  videos() {

    const youtubeUrls = [
      'c_TEnlMRcCc',
      'h_iCJ_HBF9M',
      'UWg-YoBv-do',
      'tS6yCTIaIyw',
      'PplH_ogfrZU',
      'TFKyEyoCL54',
      '0hdV1ITazOY'
    ];

    let youtubes = youtubeUrls.map( el => {
      return (
        <div key={ el } className="video col s12">
          <span id={ el } className="yt" />
        </div>
      )
    });

    return youtubes;
  }

  _pause(e) {
    e.target.pauseVideo();
  }

  render() {
    return (
      <div className="row videoWrapper">
        <div className={ `row videoRow position${this.props.current}` }>
          {this.videos()}
        </div>
        <div onClick={ () => this.goLeft(this.props.current) } className="leftArrow controls"></div>
        <div onClick={ () => this.goRight(this.props.current) } className="rightArrow controls"></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    current: state.videoPosition.current
  }
}

export default connect(mapStateToProps)(Watch)
