/*
*  Actions for carousel YouTube display
*/

export const LEFT = 'LEFT';
export const RIGHT = 'RIGHT';
export const STATIC = 'STATIC';

export function goingLeft(position) {
  let current = (position !== 0) ? position - 1 : 0;
  return position !== 0 ? { type: LEFT, current: current } : { type: STATIC, current: current };
}

export function goingRight(position) {
  let current = (position !== 6) ? position + 1 : 6;
  return position !== 6 ? { type: RIGHT, current: current } : { type: STATIC, current: current };
}

export function goLeft(position) {
  return function(dispatch) {
    return dispatch(goingLeft(position));
  }
}

export function goRight(position) {
  return function(dispatch) {
    return dispatch(goingRight(position));
  }
}

/*
* Actions for grid display
*/

export const RESET = 'RESET';
export const EXPAND = 'EXPAND';

export function resetting() {
  return {
    type: EXPAND
  }
}

export function reset() {
  return function(dispatch) {
    return dispatch(resetting());
  };
}

export function expanding(num) {
  return {
    type: EXPAND,
    num: num
  };
}

export function expand(num) {
  return function(dispatch) {
    dispatch(reset());
    return dispatch(expanding(num));
  }
}