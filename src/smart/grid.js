import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../index';
import { reset, expand } from '../actions/index';

import YouTube from 'react-youtube';

class Grid extends Component {
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

    const youtubeUrls = [
      'c_TEnlMRcCc',
      'h_iCJ_HBF9M',
      'UWg-YoBv-do',
      'tS6yCTIaIyw',
      'PplH_ogfrZU',
      'TFKyEyoCL54',
      '0hdV1ITazOY'
    ];

    return youtubeUrls.map( (videoId, index) => {
      let active = this.props.grid[`position${index}`];
      let videoOrPlaceholder = ( active ) ?
        <YouTube
          id={ videoId }
          videoId={ videoId }
          opts={ { playerVars: {autoplay: 1} } }
          className="placeholder"
        /> :
        <img
          className="placeholder"
          src={ `http://img.youtube.com/vi/${videoId}/0.jpg` }
          alt="placeholder"
          onClick={ () => this.expand(index) }
        />;
      let button = active ?
        <div className='x' onClick={ this.reset }>
          X
        </div> :
        <div className="playButton" onClick={ () => this.expand(index) }>
        </div>;
      return (
        <div key={ videoId } className={ `col s12 m4 gridItem ${ active ? 'active' : '' }` }>
          { videoOrPlaceholder }
          { button }
        </div>
      )
    });
  }

  render() {
    return (
        <div className='row videoGrid'>
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

export default connect(mapStateToProps)(Grid)
