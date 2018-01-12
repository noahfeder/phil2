import React, { Component } from 'react';
import YouTube from 'react-youtube';
export default class Listen extends Component {

  differentPlayers(obj) {
    switch(obj.type) {
      case 'soundcloud':
        return (
          <iframe
            scrolling="no"
            frameBorder="no"
            src={
              `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${obj.id}&amp;color=000000&amp;inverse=false&amp;auto_play=false&amp;show_user=true&amp;show_artwork=false&amp;show_comments=false`
            }
          />
        );
      case 'bandcamp':
        return (
          <iframe
            src={
              `https://bandcamp.com/EmbeddedPlayer/album=${obj.id}/size=small/bgcol=000000/transparent=true/`
            }
            seamless
            frameBorder="0"
          />
        );
      case 'spotify':
        return (
          <iframe
            src={`https://embed.spotify.com/?uri=spotify%3Atrack%3A${obj.id}`}
            frameBorder="0"
            allowTransparency="true"
          />
        );
      case 'youtube':
        return (
          <YouTube videoId={ obj.id } />
        );
      default:
       return '';
    }
  }

  embedRows() {

    const ids = [
      { id: '248449814', description: 'Producer', type: 'soundcloud' },
      { id: '248449820', description: 'Producer', type: 'soundcloud' },
      { id: '1762490030', description: 'Producer, Engineer, Guitar', type: 'bandcamp' },
      { id: '4HEQVUiWUEso99vH4jDChk', description: 'Keyboards', type: 'spotify' },
      { id: '238854917', description: 'Keyboards', type: 'soundcloud' },
      { id: '5jNykolgh8kaC2yqyzVM0E', description: 'Saxophone, Bass', type: 'spotify' },
      { id: '155015181', description: 'Piano', type: 'soundcloud' },
      { id: 'ykh0uvffMvI', description: 'B3 Organ', type: 'youtube' },
      { id: '154963835', description: 'Piano', type: 'soundcloud' },
      { id: '187185499', description: 'Guitar, Vocals, Producer', type: 'soundcloud' },
      { id: '187185511', description: 'Guitar, Vocals, Producer', type: 'soundcloud' },
      { id: '59398313', description: 'Piano', type: 'soundcloud' },
      { id: '773647966', description: 'Pedal Steel', type: 'bandcamp' },
      { id: '301271303', description: 'Producer, Guitar, Keys, Pedal Steel', type: 'soundcloud' },
    ];

    return ids.map( (el,ind) => {
      return (
        <div className="row" key={ el.id }>
          <div className="col s10 offset-s1 m6 soundPlayer">
            { this.differentPlayers(el) }
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
