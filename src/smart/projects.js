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
      {id: 'c_TEnlMRcCc', position: 0},
      {id: 'h_iCJ_HBF9M', position: 1},
      {id: 'UWg-YoBv-do', position: 2},
      {id: 'tS6yCTIaIyw', position: 3},
      {id: 'PplH_ogfrZU', position: 4},
      {id: 'TFKyEyoCL54', position: 5},
      {id: '0hdV1ITazOY', position: 6}
    ];

    let n = -1;

    let youtubes = youtubeUrls.map( el => {
      n++;
      let YTGuts = ( n === this.props.current ) ? <YouTube id={ el.id } videoId={ el.id } /> : '';
        return (
          <div key={ el.id } className="video col s12">
            { YTGuts }
          </div>
        )
    });

    return youtubes;
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
