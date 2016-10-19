import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../index';
import { goLeft, goRight } from '../actions/index';

import YouTube from 'react-youtube';

//TODO add thumbnail version too
//TODO add Listen with SC links and scrips

class Watch extends Component {
  goLeft(current) {
    return store.dispatch(goLeft(current));
  }

  goRight(current) {
    return store.dispatch(goRight(current));
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

    return youtubeUrls.map( (videoId,index) => {
      let videoOrPlaceholder = ( index === this.props.current ) ?
        <YouTube
          id={ videoId }
          videoId={ videoId }
        /> :
        <img
          className="placeholder"
          src={ `http://img.youtube.com/vi/${videoId}/0.jpg` }
          alt="placeholder"
        />;
      return (
        <div key={ videoId } className="video col s12">
          { videoOrPlaceholder }
        </div>
      )
    });
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
