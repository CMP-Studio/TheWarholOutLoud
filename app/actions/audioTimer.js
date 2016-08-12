
import {
  screenReaderScreenChanged,
} from './accessibility';

// *** Action Types ***
export const STOP_TIMER = 'STOP_TIMER';
export const FIRE_TIMER = 'FIRE_TIMER';

// *** Action Creators ***
let timer;
export function startTimer(dispatch) {
  screenReaderScreenChanged('Playing next chapter in 7 seconds.');

  timer = setInterval(() => {
    dispatch({
      type: FIRE_TIMER,
    });
  }, 1000);
}

export function clearTimer() {
  clearInterval(timer);
}

export function stopTimer() {
  clearTimer();

  return {
    type: STOP_TIMER,
  };
}
