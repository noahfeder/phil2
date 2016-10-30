import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swipeable from 'react-swipeable';
import store from '../index';
import { imgLeft, imgRight } from '../actions/index';

class Look extends Component {

  goLeft(position) {
    return store.dispatch(imgLeft(position));
  }

  goRight(position) {
    return store.dispatch(imgRight(position));
  }

  logTouch(e) {
    console.log(this.props)
  }

  images() {
    let arr = [];
    let imgOrNot = false;
    for (let i = 0; i < 12; i++) {
      imgOrNot = (
        (i >= this.props.image.current - 1
        &&
        i <= this.props.image.current + 1)
        ||
        this.props.image[`position${i}`]);
      arr.push(
        <div className="col s12 look" key={ i }>
          <img src={ imgOrNot ? `img/phil${i}.jpg` : '' } alt={ `phil ${i}`} />
        </div>
        )
    }
    return arr;
  }
  render() {
    let leftClass = this.props.image.current === 0 ? 'hide' : '';
    let rightClass = this.props.image.current === 11 ? 'hide' : '';
    return (
      <div className="row imageWrapper innerScroll">
        <Swipeable
          onSwipedRight={ () => this.goLeft(this.props.image.current) }
          onSwipedLeft={ () => this.goRight(this.props.image.current) }
          className="row imageRow"
          style={ {
            marginLeft: `${this.props.image.current * -100}%`
          } }>
          {this.images()}
        </Swipeable>
        <div onClick={ () => this.goLeft(this.props.image.current) } className={ `leftArrow controls ${leftClass}` }></div>
        <div onClick={ () => this.goRight(this.props.image.current) } className={ `rightArrow controls ${rightClass}` }></div>
      </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    image: state.imagePosition
  }
}

export default connect(mapStateToProps)(Look)
