import { combineReducers } from 'redux';
import { LEFT, RIGHT } from '../actions/index';
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

const RootReducer = combineReducers({
  videoPosition
});

export default RootReducer;
