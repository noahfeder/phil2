import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../index';
import { reset, expand } from '../actions/index';

import YouTube from 'react-youtube';

const youtubeUrls = [
  'c_TEnlMRcCc',
  'h_iCJ_HBF9M',
  'UWg-YoBv-do',
  'tS6yCTIaIyw',
  'PplH_ogfrZU',
  'TFKyEyoCL54',
  '0hdV1ITazOY',
  '2Z5MJpw4gvE'
];

export const VIDEOS_MAX = youtubeUrls.length;

class Watch extends Component {
  componentWillMount() {
    this.reset()
  }

  componentDidMount() {
    document.onkeydown = (e) => this.escaped(e);
  }

  componentWillUnmount() {
    document.onkeydown = null;
  }

  escaped(event) {
    if (event.keyCode === 27) {
      this.reset()
    }
  }

  reset() {
    store.dispatch(reset());
  }

  expand(num) {
    store.dispatch(expand(num));
  }

  videos() {

    return youtubeUrls.map( (videoId, index) => {
      let active = this.props.grid[`position${index}`];
      let videoOrPlaceholder = ( active ) ?
        <YouTube
          id={ videoId }
          videoId={ videoId }
          opts={ { playerVars: {autoplay: 1} } }
        /> :
        <span>
          <img
            className="placeholder"
            src={ `http://img.youtube.com/vi/${videoId}/mqdefault.jpg` }
            alt="placeholder"
            onClick={ () => this.expand(index) }
          />
        </span>;
      let button = active ?
        <div onClick={ this.reset } className="x">
          <i className="small material-icons">highlight_off</i>
        </div> :
        <div className="playButton" onClick={ () => this.expand(index) }>
        </div>;
      return (
        <div key={ videoId } className={ `gridItem ${ active ? 'active' : '' }` }>
          { videoOrPlaceholder }
          { button }
        </div>
      )
    });
  }

  render() {
    return (
        <div className='videoGrid innerScroll'>
          {this.videos()}
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    grid: state.videoGrid
  }
}

export default connect(mapStateToProps)(Watch)
