import {
  CHANGE_TIMEZONE_FOR_CLOCK_1,
  CHANGE_TIMEZONE_FOR_CLOCK_2,
} from './types';

const initialState = {
  hours1: 0,
  hours2: 0,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TIMEZONE_FOR_CLOCK_1:
      return {
        ...state,
        hours1: action.payload,
      };
    case CHANGE_TIMEZONE_FOR_CLOCK_2:
      return {
        ...state,
        hours2: action.payload,
      };

    default:
      return state;
  }
};
