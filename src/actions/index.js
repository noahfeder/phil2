export const LEFT = 'LEFT';
export const RIGHT = 'RIGHT';
export const STATIC = 'STATIC';

export function goingLeft(position) {
  return position !== 0 ? { type: LEFT, current: position-- } : { type: STATIC, current: 0 };
}

export function goingRight(position) {
  return position !== 6 ? { type: RIGHT, current: position++ } : { type: STATIC, current: 6 };
}

export function goLeft(position) {
  return function(dispatch) {
    dispatch(goingLeft(position));
  }
}

export function goRight(position) {
  return function(dispatch) {
    dispatch(goingRight(position));
  }
}
