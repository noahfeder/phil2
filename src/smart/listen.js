import React, { Component } from 'react';
import { SoundCloud, Spotify, BandCamp } from '../dumb/players';
import YouTube from 'react-youtube';

import { listenData } from '../data';

export default class Listen extends Component {

  playerPicker(obj) {
    switch(obj.type) {
      case 'soundcloud':
        return <SoundCloud playerId={ obj.id } />;
      case 'bandcamp':
        return <BandCamp playerId={ obj.id } />;
      case 'spotify':
        return <Spotify playerId={ obj.id } />;
      case 'youtube':
        return <YouTube videoId={ obj.id } />;
      default:
       return '';
    }
  }

  embedRows() {

    return listenData.map( (el,ind) => {
      return (
        <div className="row" key={ el.id }>
          <div className="col s10 offset-s1 m6 soundPlayer">
            { this.playerPicker(el) }
          </div>
          <div className="col s12 m6 soundDescription">
              { el.description }
          </div>
        </div>
        )
    })


  }

  render() {
    return (
      <div className="row listen innerScroll">
        <div className="col s12">
          { this.embedRows() }
        </div>
      </div>
      )
  }
}
