import { combineReducers } from 'redux';
import { LEFT, RIGHT, RESET, EXPAND } from '../actions/index';

function videoPosition(state = {
  current: 0
}, action) {
  switch (action.type) {
    case LEFT: case RIGHT: {
      return Object.assign({}, state, {
        current: action.current
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

const RootReducer = combineReducers({
  videoPosition,
  videoGrid
});

export default RootReducer;
