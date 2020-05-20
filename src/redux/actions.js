import {
  CHANGE_TIMEZONE_FOR_CLOCK_1,
  CHANGE_TIMEZONE_FOR_CLOCK_2,
} from './types';

export const changeTimezone = (difference, clockNumber) => {
  if (clockNumber === 1) {
    return { type: CHANGE_TIMEZONE_FOR_CLOCK_1, payload: difference };
  }
  return { type: CHANGE_TIMEZONE_FOR_CLOCK_2, payload: difference };
};
