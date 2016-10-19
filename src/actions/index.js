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
