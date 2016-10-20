import React, { Component } from 'react';

export default class Listen extends Component {

  embedRows() {

    const ids = [
      { id: '141217511', description: "one" },
      { id: '187185499', description: "two" },
      { id: '187185514', description: "four" },
      { id: '187185511', description: "three" },
      { id: '187185508', description: "three" }
    ];

    return ids.map( (el,ind) => {
      return (
        <div className="row" key={ el.id }>
          <div className="col s12 m6">
            <iframe
              width="100%"
              height="60"
              scrolling="no"
              frameBorder="no"
              src={
                `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${ el.id }&amp;color=ff5500&amp;inverse=true&amp;auto_play=false&amp;show_user=true`
              }
            />
          </div>
          <div className="col s12 m6">
            <p>
              { el.description }
            </p>
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
