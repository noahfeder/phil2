import React, { Component } from 'react';

export class SoundCloud extends Component {
  render() {
    return (
      <iframe
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${this.props.playerId}&amp;color=000000&amp;inverse=false&amp;auto_play=false&amp;show_user=true&amp;show_artwork=false&amp;show_comments=false`}
        scrolling="no"
        frameBorder="no"
      />
    );
  }
}

export class BandCamp extends Component {
  render() {
    return (
      <iframe
        src={`https://bandcamp.com/EmbeddedPlayer/album=${this.props.playerId}/size=small/bgcol=000000/transparent=true/`}
        seamless
        frameBorder="0"
      />
    );
  }
}

export class Spotify extends Component {
  render() {
    return (
      <iframe
        src={`https://embed.spotify.com/?uri=spotify%3Atrack%3A${this.props.playerId}`}
        frameBorder="0"
        allowTransparency="true"
      />
    );
  }
}
