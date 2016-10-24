import React, { Component } from 'react';

export default class Bio extends Component {
  render() {
    return (
      <div className="row innerScroll">
        <div className="col s12 m8 offset-m2 read">
          <img alt="Philippe with guitar" className="responsive-img padded" src="img/phil2.jpg" />
          <p className="padded">
            Philippe Bronchtein is a songwriter, producer, and multi instrumentalist based in Portland, Oregon. Born in Montreal and raised in New Jersey, Bronchtein graduated from Middlebury College with a degree in music and choreography. As a side man for <a href="http://quietlifeband.com/" target="_blank">Quiet Life</a> & <a href="http://esmepatterson.com/" target="_blank">Esme Patterson</a>, Bronchtein has toured extensively in the United States. Performing his own songs under the moniker <a href="http://www.hiphatchet.com" target="_blank">Hip Hatchet</a>, he has released three full length albums and done several tours in the United States and the United Kingdom. When not on the road, Philippe teaches and plays with several local acts (<a href="https://www.facebook.com/Blind-J-Wakins-1110020139027880/" target="_blank">Blind J Wakins</a>, <a href="http://www.annahoone.com/" target="_blank">Anna Hoone</a>). A relatively recent foray into production has found him helping <a href="http://www.lenoresings.com/" target="_blank">Lenore</a> and <a href="http://www.baltoamerica.com/" target="_blank">Balto</a> realize their artistic visions.
          </p>
        </div>
      </div>
      )
  }
}
