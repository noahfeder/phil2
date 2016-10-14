import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s6">
          <div className="row padded">
            <img className="circle" alt="kitten" src="http://placekitten.com/400/400" />
          </div>
        </div>
        <div className="col s6">
          <div className="row padded">
            <p className="right-align home">The south will rise again that dog’ll hunt Budweiser ask not what your country can do for you, ask what you can do for your country. M*A*S*H George Bush does not care about black people I wanna be like Mike. Tippecanoe and Tyler too Washington deep-dish Forrest Gump childhood diabetes. American justice day that will live in infamy live free or die hard. Trail of tears y’all come back now, hear KFC Double Down nothing to fear but fear itself. If the glove don’t fit you must acquit love it or leave it I am not a crook.</p>
          </div>
          <div className="row padded">
            <iframe width="100%" height="100" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/187185499&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
          </div>
        </div>
      </div>
    )
  }
}
