import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../index';
import { imgLeft, imgRight } from '../actions/index';

class Look extends Component {

  goLeft(position) {
    return store.dispatch(imgLeft(position));
  }

  goRight(position) {
    return store.dispatch(imgRight(position));
  }

  images() {
    let arr = [];
    for (let i = 0; i < 12; i++) {
      let portrait = '';
      if (i === 7 || i === 11) {
        portrait = 'portrait';
      }
      arr.push(
        <div className="col s12 look" key={ i }>
          <img src={ `/img/phil${i}.jpg` } alt={ `phil ${i}`} className={ portrait } />
        </div>
        )
    }
    return arr;
  }
  render() {
    let leftClass = this.props.current === 0 ? 'hide' : '';
    let rightClass = this.props.current === 11 ? 'hide' : '';
    return (
      <div className="row imageWrapper">
        <div className="row imageRow" style={ {
          marginLeft: `${this.props.current * -100}%`
        } }>
          {this.images()}
        </div>
        <div onClick={ () => this.goLeft(this.props.current) } className={ `leftArrow controls ${leftClass}` }></div>
        <div onClick={ () => this.goRight(this.props.current) } className={ `rightArrow controls ${rightClass}` }></div>
      </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    current: state.imagePosition.current
  }
}

export default connect(mapStateToProps)(Look)
