import React, { Component } from 'react';
import YouTube from 'react-youtube';



const youtubeUrls = [
  'c_TEnlMRcCc',
  'h_iCJ_HBF9M',
  'UWg-YoBv-do',
  'tS6yCTIaIyw',
  'PplH_ogfrZU',
  'TFKyEyoCL54',
  '0hdV1ITazOY'
];
//TODO change name to Watch
//TODO add Listen with SC links and scrips
//TODO add animation/rotation on click of left and right arrows
export default class Projects extends Component {
  componentDidMount() {
    //set initial state of array of classnames and currentIndex = 0
    //active states for left and right, w filter classes
  }
  click() {
    //change state via click and rotate classes using https://facebook.github.io/react/docs/animation.html
    //need 7 classes in an array, one per video
    //checks for if at ind[0] or [6]
  }
  videos() {
    return youtubeUrls.map( el => {
      return (
        <div key={ el } className="video col s12">
          <YouTube videoId={ el } className=""/>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="row videoRow">
        {this.videos()}
        <div className="leftArrow controls"></div>
        <div className="rightArrow controls"></div>
      </div>
    )
  }
}

