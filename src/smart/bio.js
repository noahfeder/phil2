import React, { Component } from 'react';

export default class Bio extends Component {
  render() {
    return (
      <div className="row innerScroll">
        <div className="col s12 m8 offset-m2 read">
          <img alt="Philippe with guitar" className="responsive-img padded" src="img/phil2.jpg" />
          <p className="padded">
            Philippe Bronchtein is a songwriter, producer, and multi instrumentalist based in Nashville, TN. Born in Montreal and raised in New Jersey, Bronchtein graduated from Middlebury College with a degree in music and choreography. As a side man for <a href="http://quietlifeband.com/" target="_blank">Quiet Life</a>, <a href="http://esmepatterson.com/" target="_blank">Esme Patterson</a>, &amp; <a href="https://www.thewarandtreaty.com/" target="_blank">The War and Treaty</a>, Bronchtein has toured extensively in the United States. Performing his own songs under the moniker <a href="http://www.hiphatchet.com" target="_blank">Hip Hatchet</a>, he has released three full length albums and done several tours in North America and the United Kingdom. Notably, he has opened for such artists as Shawn Colvin, Sarah Jarosz, Joe Pug, Anais Mitchell, William Tyler, American Aquarium, and Willy Mason. <a href="https://consequenceofsound.net/2015/04/hip-hatchet-shares-new-single-davids-wolves-listen/" target="_blank">Consequence of Sound</a> describes Bronchtein as "a master in quiet-loud moments...[with] expertly plucked strings"
          </p>
        </div>
      </div>
      )
  }
}
