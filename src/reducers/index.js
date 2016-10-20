import { combineReducers } from 'redux';
import { LEFT, RIGHT,
  RESET, EXPAND, PLAY, PAUSE,
  IMG_LEFT, IMG_RIGHT } from '../actions/index';

function videoPosition(state = {
  current: 0,
  playing: false
}, action) {
  switch (action.type) {
    case LEFT: case RIGHT: {
      return Object.assign({}, state, {
        current: action.current
      })
    }
    case PLAY: {
      return Object.assign({}, state, {
        playing: true
      })
    }
    case PAUSE: {
      return Object.assign({}, state, {
        playing: false
      })
    }
    default:
      return state;
  }
}

function videoGrid(state = {
        reset: true,
        position0: false,
        position1: false,
        position2: false,
        position3: false,
        position4: false,
        position5: false,
        position6: false
      }, action) {
  switch(action.type) {
    case RESET: {
      return Object.assign({}, state, {
        reset: true,
        position0: false,
        position1: false,
        position2: false,
        position3: false,
        position4: false,
        position5: false,
        position6: false
      });
    }
    case EXPAND: {
      let obj = {
        reset: false,
        position0: false,
        position1: false,
        position2: false,
        position3: false,
        position4: false,
        position5: false,
        position6: false
      }
      obj[`position${action.num}`] = true;
      return Object.assign({}, state, obj);
    }
    default:
      return state;
  }
}

function imagePosition(state = {
  current: 5
}, action) {
  switch (action.type) {
    case IMG_LEFT: case IMG_RIGHT: {
      return Object.assign({}, state, {
        current: action.position
      })
    }
    default:
      return state;
  }
}
const RootReducer = combineReducers({
  videoPosition,
  videoGrid,
  imagePosition
});

export default RootReducer;
