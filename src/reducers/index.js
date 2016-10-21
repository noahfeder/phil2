import { combineReducers } from 'redux';

import { LEFT, RIGHT,
  RESET, EXPAND, PLAY, PAUSE,
  IMG_LEFT, IMG_RIGHT } from '../actions/index';

import { VIDEOS_MAX } from '../smart/watch';

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

function videoGrid(state = { reset: true }, action) {
  let newState = {};
  console.log(VIDEOS_MAX)
  for (let i = 0; i < VIDEOS_MAX; i++) {
    newState[`position${i}`] = false;
  }
  switch(action.type) {
    case RESET:
      newState.reset = true
      return Object.assign({}, state, newState);
    case EXPAND:
      newState[`position${action.num}`] = true;
      newState.reset = false;
      return Object.assign({}, state, newState);
    default:
      return state;
  }
}

function imagePosition(state = {
  current: 0
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
