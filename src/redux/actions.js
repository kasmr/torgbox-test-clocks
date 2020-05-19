import { CHANGE_TIMEZONE } from './types';

export const changeTimezone = (difference) => {
  return { type: CHANGE_TIMEZONE, payload: difference };
};
