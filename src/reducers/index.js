import { combineReducers } from 'redux';
import { LEFT, RIGHT, STATIC } from '../actions/index';
function videoPosition(state = {
  current: 0
}, action) {
  switch (action.type) {
    case LEFT: case RIGHT: case STATIC: {
      Object.assign({}, state, {
        current: action.current
      })
      };
      break;
    default:
      return state;
  }
}

const RootReducer = combineReducers({
  videoPosition
});

export default RootReducer;
