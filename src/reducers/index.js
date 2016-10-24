import { combineReducers } from 'redux';

import {
  LEFT,
  RIGHT,
  RESET,
  EXPAND,
  PLAY,
  PAUSE,
  IMG_LEFT,
  IMG_RIGHT
} from '../actions/index';

import { VIDEOS_MAX } from '../smart/watch';

function videoPosition(state = {
  current: 0,
  playing: false
}, action) {
  switch (action.type) {
    case LEFT: case RIGHT:
      return { ...state, current: action.current };
    case PLAY:
      return { ...state, playing: true };
    case PAUSE:
      return { ...state, playing: false };
    default:
      return state;
  }
}

function videoGrid(state = { reset: true }, action) {
  const newState = {};
  for (let i = 0; i < VIDEOS_MAX; i++) {
    newState[`position${i}`] = false;
  }
  switch(action.type) {
    case RESET:
      newState.reset = true
      return { ...state, ...newState };
    case EXPAND:
      newState[`position${action.num}`] = true;
      newState.reset = false;
      return { ...state, ...newState };
    default:
      return state;
  }
}

function imagePosition(state = {
  current: 0
}, action) {
  switch (action.type) {
    case IMG_LEFT: case IMG_RIGHT:
      return { ...state,  current: action.position };
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
